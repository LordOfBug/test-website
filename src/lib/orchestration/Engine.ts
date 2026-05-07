import { Burro } from '../core/Burro';
import { IBlackboard } from '../blackboard/Blackboard';
import { GraphEngine, Blueprint as GraphBlueprint } from './GraphEngine';

export interface BlueprintStep {
  id: string;
  burroRole: string;
  taskName: string;
  params?: any;
}

export interface Blueprint {
  id: string;
  name: string;
  steps: BlueprintStep[];
}

export class SequentialEngine {
  private burros: Burro[];
  private blackboard: IBlackboard;

  constructor(burros: Burro[], blackboard: IBlackboard) {
    this.burros = burros;
    this.blackboard = blackboard;
  }

  async execute(blueprint: Blueprint): Promise<void> {
    console.log(`[Engine] Legacy SequentialEngine used. Converting to GraphEngine...`);
    const graphBlueprint: GraphBlueprint = {
      id: blueprint.id,
      name: blueprint.name,
      nodes: blueprint.steps.map((step, index) => ({
        ...step,
        dependsOn: index > 0 ? [blueprint.steps[index - 1].id] : []
      }))
    };

    const engine = new GraphEngine(this.burros, this.blackboard);
    return engine.execute(graphBlueprint);
  }
}
