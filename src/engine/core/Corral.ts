import { IBurro, ICorral, IBlackboard, IBlackboardEvent, ITask, IResult } from '../types';

export class Corral implements ICorral {
  id: string;
  projectId: string;
  blackboard: IBlackboard;
  participants: IBurro[] = [];
  status: 'active' | 'paused' | 'concluded' = 'active';

  constructor(id: string, projectId: string) {
    this.id = id;
    this.projectId = projectId;
    this.blackboard = {
      corral_id: id,
      version: 0,
      shared_context: {},
      milestones: [],
      artifacts: {},
      messages: [],
    };
  }

  addBurro(burro: IBurro): void {
    if (!this.participants.find(b => b.id === burro.id)) {
      this.participants.push(burro);
      this.broadcast({
        id: crypto.randomUUID(),
        type: 'burro_joined',
        timestamp: new Date().toISOString(),
        senderId: 'corral',
        data: { burroId: burro.id, role: burro.role }
      });
    }
  }

  removeBurro(burroId: string): void {
    const index = this.participants.findIndex(b => b.id === burroId);
    if (index !== -1) {
      this.participants.splice(index, 1);
      this.broadcast({
        id: crypto.randomUUID(),
        type: 'burro_left',
        timestamp: new Date().toISOString(),
        senderId: 'corral',
        data: { burroId }
      });
    }
  }

  broadcast(event: IBlackboardEvent): void {
    this.blackboard.version++;
    // In a real implementation, this might persist to a DB or push to a message queue
    this.participants.forEach(burro => {
      burro.onBlackboardUpdate(event);
    });
  }

  async updateBlackboard(update: Partial<IBlackboard>, senderId: string): Promise<void> {
    this.blackboard = {
      ...this.blackboard,
      ...update,
      version: this.blackboard.version + 1,
    };
    
    this.broadcast({
      id: crypto.randomUUID(),
      type: 'blackboard_updated',
      timestamp: new Date().toISOString(),
      senderId,
      data: update
    });
  }
}
