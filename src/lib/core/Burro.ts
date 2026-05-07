import { IBlackboard, EphemeralBlackboard } from '../blackboard/Blackboard';

export interface BurroMetadata {
  id: string;
  name: string;
  role: string;
  capabilities: string[];
}

export type BurroStatus = 'idle' | 'busy' | 'error';

export class Burro {
  public readonly id: string;
  public readonly name: string;
  public readonly role: string;
  private status: BurroStatus = 'idle';
  private blackboard: IBlackboard;

  constructor(metadata: BurroMetadata, blackboard?: IBlackboard) {
    this.id = metadata.id;
    this.name = metadata.name;
    this.role = metadata.role;
    this.blackboard = blackboard || new EphemeralBlackboard();
  }

  getStatus(): BurroStatus {
    return this.status;
  }

  async performTask(taskName: string, params: any): Promise<any> {
    this.status = 'busy';
    console.log(`[Burro:${this.id}] Starting task: ${taskName}`);
    
    // Simulate task execution
    try {
      // In a real implementation, this would involve tool-calling / LLM logic
      const result = {
        task: taskName,
        completedAt: new Date().toISOString(),
        output: `Processed ${taskName} with params ${JSON.stringify(params)}`
      };
      
      await this.blackboard.set(`last_task_result:${this.id}`, result);
      this.status = 'idle';
      return result;
    } catch (error) {
      this.status = 'error';
      throw error;
    }
  }
}
