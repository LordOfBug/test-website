import { ITask, IResult, IBlackboardEvent } from '../types';
import { BaseBurro } from './BaseBurro';
import { WriteFileTool } from '../tools/FileTools';

export class ArchitectBurro extends BaseBurro {
  constructor(id: string) {
    super(id, 'architect', ['planning', 'documentation'], [
      new WriteFileTool()
    ]);
  }

  async execute(task: ITask): Promise<IResult> {
    console.log(`[Architect ${this.id}] Planning: ${task.description}`);
    
    // Simulate planning logic
    const plan = `# Plan for ${task.description}\n\n1. Define requirements\n2. Implementation\n3. Verification`;
    
    if (task.context?.filePath) {
      return await this.executeTool('write_file', {
        path: task.context.filePath,
        content: plan
      });
    }

    return {
      success: true,
      output: plan,
    };
  }

  protected async handleEvent(event: IBlackboardEvent): Promise<void> {
    if (event.type === 'burro_joined') {
      console.log(`[Architect ${this.id}] Welcoming new burro: ${event.data.role}`);
    }
  }
}
