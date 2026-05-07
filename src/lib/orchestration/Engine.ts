import { Burro } from '../core/Burro';
import { IBlackboard } from '../blackboard/Blackboard';

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
    console.log(`[Engine] Starting execution of blueprint: ${blueprint.name}`);
    
    for (const step of blueprint.steps) {
      const burro = this.burros.find(b => b.role === step.burroRole);
      
      if (!burro) {
        throw new Error(`No burro found with role: ${step.burroRole}`);
      }

      console.log(`[Engine] Executing step ${step.id} using ${burro.name}`);
      await burro.performTask(step.taskName, step.params);
      
      await this.blackboard.set('current_step', step.id);
    }

    console.log(`[Engine] Blueprint ${blueprint.name} completed successfully.`);
  }
}
