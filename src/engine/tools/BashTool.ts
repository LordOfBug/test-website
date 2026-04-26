import { ITool, IResult } from '../types';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export class BashTool implements ITool {
  name = 'bash';
  description = 'Execute a bash command';
  parameters = {
    command: { type: 'string', description: 'The command to execute' }
  };

  async call(params: { command: string }): Promise<IResult> {
    try {
      const { stdout, stderr } = await execAsync(params.command);
      return { 
        success: true, 
        output: { stdout, stderr } 
      };
    } catch (error: any) {
      return { 
        success: false, 
        output: { stdout: error.stdout, stderr: error.stderr }, 
        error: error.message 
      };
    }
  }
}
