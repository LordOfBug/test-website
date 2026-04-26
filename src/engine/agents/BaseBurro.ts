import { IBurro, BurroRole, ITool, ITask, IResult, IBlackboardEvent } from '../types';

export abstract class BaseBurro implements IBurro {
  id: string;
  role: BurroRole;
  capabilities: string[];
  tools: ITool[];

  constructor(id: string, role: BurroRole, capabilities: string[] = [], tools: ITool[] = []) {
    this.id = id;
    this.role = role;
    this.capabilities = capabilities;
    this.tools = tools;
  }

  abstract execute(task: ITask): Promise<IResult>;

  async onBlackboardUpdate(event: IBlackboardEvent): Promise<void> {
    console.log(`[Burro ${this.id} (${this.role})] Received event: ${event.type}`);
    await this.handleEvent(event);
  }

  protected async handleEvent(event: IBlackboardEvent): Promise<void> {
    // Override in subclasses to react to specific events
  }

  protected async executeTool(name: string, params: Record<string, any>): Promise<IResult> {
    const tool = this.tools.find(t => t.name === name);
    if (!tool) {
      return { success: false, output: null, error: `Tool ${name} not found` };
    }
    try {
      return await tool.call(params);
    } catch (error) {
      return { success: false, output: null, error: String(error) };
    }
  }
}
