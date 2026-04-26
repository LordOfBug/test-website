import { ITool, IResult } from '../types';
import * as fs from 'fs/promises';
import * as path from 'path';

export class ReadFileTool implements ITool {
  name = 'read_file';
  description = 'Read the contents of a file';
  parameters = {
    path: { type: 'string', description: 'Path to the file' }
  };

  async call(params: { path: string }): Promise<IResult> {
    try {
      const content = await fs.readFile(params.path, 'utf-8');
      return { success: true, output: content };
    } catch (error) {
      return { success: false, output: null, error: String(error) };
    }
  }
}

export class WriteFileTool implements ITool {
  name = 'write_file';
  description = 'Write content to a file';
  parameters = {
    path: { type: 'string', description: 'Path to the file' },
    content: { type: 'string', description: 'Content to write' }
  };

  async call(params: { path: string, content: string }): Promise<IResult> {
    try {
      await fs.mkdir(path.dirname(params.path), { recursive: true });
      await fs.writeFile(params.path, params.content, 'utf-8');
      return { success: true, output: `File written to ${params.path}` };
    } catch (error) {
      return { success: false, output: null, error: String(error) };
    }
  }
}
