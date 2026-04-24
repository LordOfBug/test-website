export type BurroRole = 'architect' | 'coder' | 'reviewer' | 'researcher';

export interface ITool {
  name: string;
  description: string;
  parameters: Record<string, any>;
}

export interface ITask {
  id: string;
  description: string;
  assignedTo?: string;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  context?: Record<string, any>;
  result?: IResult;
}

export interface IResult {
  success: boolean;
  output: any;
  error?: string;
}

export interface IBlackboardEvent {
  id: string;
  type: string;
  timestamp: string;
  senderId: string;
  data: any;
}

export interface IBlackboard {
  corral_id: string;
  version: number;
  shared_context: Record<string, any>;
  milestones: Array<{ id: string; status: string; owner: string }>;
  artifacts: Record<string, string>;
  messages: Array<{ from: string; to: string; content: string; timestamp: string }>;
}

export interface IBurro {
  id: string;
  role: BurroRole;
  capabilities: string[];
  tools: ITool[];
  execute(task: ITask): Promise<IResult>;
  onBlackboardUpdate(event: IBlackboardEvent): void;
}

export interface ICorral {
  id: string;
  projectId: string;
  blackboard: IBlackboard;
  participants: IBurro[];
  status: 'active' | 'paused' | 'concluded';
  
  addBurro(burro: IBurro): void;
  removeBurro(burroId: string): void;
  broadcast(event: IBlackboardEvent): void;
}
