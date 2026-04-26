import { ITask, IResult, IBlackboardEvent } from '../types';
import { BaseBurro } from './BaseBurro';
import { ReadFileTool, WriteFileTool } from '../tools/FileTools';
import { BashTool } from '../tools/BashTool';

export class CoderBurro extends BaseBurro {
  constructor(id: string) {
    super(id, 'coder', ['typescript', 'nextjs', 'css'], [
      new ReadFileTool(),
      new WriteFileTool(),
      new BashTool()
    ]);
  }

  async execute(task: ITask): Promise<IResult> {
    console.log(`[Coder ${this.id}] Executing task: ${task.description}`);
    
    // Check for specific tool usage instructions in context
    if (task.context?.tool === 'write_file' && task.context?.path && task.context?.content) {
      return await this.executeTool('write_file', { 
        path: task.context.path, 
        content: task.context.content 
      });
    }

    if (task.context?.tool === 'bash' && task.context?.command) {
      return await this.executeTool('bash', { 
        command: task.context.command 
      });
    }

    // Default simulation for other coder tasks
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

  protected async handleEvent(event: IBlackboardEvent): Promise<void> {
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
