import { Burro } from '../core/Burro';
import { IBlackboard } from '../blackboard/Blackboard';
import { Graph } from 'graphlib';
import pLimit from 'p-limit';
import { PrismaClient } from '@prisma/client';

export interface BlueprintNode {
  id: string;
  burroRole: string;
  taskName: string;
  params?: any;
  dependsOn?: string[];
}

export interface Blueprint {
  id: string;
  name: string;
  nodes: BlueprintNode[];
}

export class GraphEngine {
  private burros: Burro[];
  private blackboard: IBlackboard;
  private prisma?: PrismaClient;
  private taskId?: string;

  constructor(burros: Burro[], blackboard: IBlackboard, prisma?: PrismaClient, taskId?: string) {
    this.burros = burros;
    this.blackboard = blackboard;
    this.prisma = prisma;
    this.taskId = taskId;
  }

  async execute(blueprint: Blueprint): Promise<void> {
    console.log(`[GraphEngine] Starting execution of blueprint: ${blueprint.name}`);
    
    const g = new Graph();
    const nodeMap = new Map<string, BlueprintNode>();

    for (const node of blueprint.nodes) {
      g.setNode(node.id);
      nodeMap.set(node.id, node);
      if (node.dependsOn) {
        for (const dep of node.dependsOn) {
          g.setEdge(dep, node.id);
        }
      }
    }

    const completedNodes = new Set<string>();
    const inProgressNodes = new Set<string>();
    const limit = pLimit(5); // Default concurrency limit

    const executeNode = async (nodeId: string) => {
      const node = nodeMap.get(nodeId)!;
      const burro = this.burros.find(b => b.role === node.burroRole);
      
      if (!burro) {
        throw new Error(`No burro found with role: ${node.burroRole}`);
      }

      console.log(`[GraphEngine] Executing node ${node.id} using ${burro.name}`);
      
      let taskNodeId: string | undefined;
      if (this.prisma && this.taskId) {
        const tn = await this.prisma.taskNode.create({
          data: {
            taskId: this.taskId,
            blueprintNodeId: node.id,
            burroId: burro.id,
            status: 'IN_PROGRESS',
            input: node.params,
          }
        });
        taskNodeId = tn.id;

        await this.prisma.auditLog.create({
          data: {
            taskId: this.taskId,
            burroId: burro.id,
            action: 'NODE_START',
            payload: { nodeId: node.id, taskName: node.taskName }
          }
        });
      }

      try {
        const result = await burro.performTask(node.taskName, node.params);
        
        if (this.prisma && taskNodeId) {
          await this.prisma.taskNode.update({
            where: { id: taskNodeId },
            data: { status: 'SUCCESS', output: result as any, completedAt: new Date() }
          });
        }
      } catch (error: any) {
        if (this.prisma && taskNodeId) {
          await this.prisma.taskNode.update({
            where: { id: taskNodeId },
            data: { status: 'FAILED', output: { error: error.message } as any, completedAt: new Date() }
          });
        }
        throw error;
      }

      completedNodes.add(nodeId);
      inProgressNodes.delete(nodeId);
      
      // Trigger next nodes
      const successors = g.successors(nodeId) as string[] || [];
      await Promise.all(successors.map(async (succ) => {
        const predecessors = g.predecessors(succ) as string[];
        if (predecessors.every(p => completedNodes.has(p)) && !inProgressNodes.has(succ)) {
          inProgressNodes.add(succ);
          await limit(() => executeNode(succ));
        }
      }));
    };

    // Start roots
    const roots = g.nodes().filter(n => (g.predecessors(n) || []).length === 0);
    await Promise.all(roots.map(root => {
        inProgressNodes.add(root);
        return limit(() => executeNode(root));
    }));

    console.log(`[GraphEngine] Blueprint ${blueprint.name} completed successfully.`);
  }
}
