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

  onBlackboardUpdate(event: IBlackboardEvent): void {
    console.log(`[Burro ${this.id} (${this.role})] Received event: ${event.type}`);
    // Base implementation can be extended by specific burros
    this.handleEvent(event);
  }

  protected handleEvent(event: IBlackboardEvent): void {
    // Override in subclasses to react to specific events
  }

  protected async reportTaskResult(taskId: string, result: IResult): Promise<void> {
    // This would typically interface with the Wrangler or update the Blackboard
    console.log(`[Burro ${this.id}] Task ${taskId} ${result.success ? 'succeeded' : 'failed'}`);
  }
}
