import { ITask, IResult, IBlackboardEvent } from '../types';
import { BaseBurro } from './BaseBurro';

export class CoderBurro extends BaseBurro {
  constructor(id: string) {
    super(id, 'coder', ['typescript', 'nextjs', 'css'], []);
  }

  async execute(task: ITask): Promise<IResult> {
    console.log(`[Coder ${this.id}] Executing task: ${task.description}`);
    
    // Logic for task execution would go here.
    // For now, we simulate success.
    try {
      return {
        success: true,
        output: `Code generated for: ${task.description}`,
      };
    } catch (error) {
      return {
        success: false,
        output: null,
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }

  protected handleEvent(event: IBlackboardEvent): void {
    if (event.type === 'blackboard_updated' && event.data.milestones) {
      const pendingCoders = event.data.milestones.filter(
        (m: any) => m.status === 'pending' && m.owner === this.id
      );
      if (pendingCoders.length > 0) {
        console.log(`[Coder ${this.id}] Found pending work on blackboard.`);
      }
    }
  }
}
