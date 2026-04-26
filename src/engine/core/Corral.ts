import { IBurro, ICorral, IBlackboard, IBlackboardEvent, ITask, IResult } from '../types';
import { IBlackboardStorage } from './BlackboardStorage';

export class Corral implements ICorral {
  id: string;
  projectId: string;
  blackboard: IBlackboard;
  participants: IBurro[] = [];
  status: 'active' | 'paused' | 'concluded' = 'active';
  private storage?: IBlackboardStorage;

  constructor(id: string, projectId: string, storage?: IBlackboardStorage) {
    this.id = id;
    this.projectId = projectId;
    this.storage = storage;
    this.blackboard = {
      corral_id: id,
      version: 0,
      shared_context: {},
      milestones: [],
      artifacts: {},
      messages: [],
      tasks: [],
      dependencies: {},
    };
  }

  async addBurro(burro: IBurro): Promise<void> {
    if (!this.participants.find(b => b.id === burro.id)) {
      this.participants.push(burro);
      await this.broadcast({
        id: crypto.randomUUID(),
        type: 'burro_joined',
        timestamp: new Date().toISOString(),
        senderId: 'corral',
        data: { burroId: burro.id, role: burro.role }
      });
    }
  }

  async removeBurro(burroId: string): Promise<void> {
    const index = this.participants.findIndex(b => b.id === burroId);
    if (index !== -1) {
      this.participants.splice(index, 1);
      await this.broadcast({
        id: crypto.randomUUID(),
        type: 'burro_left',
        timestamp: new Date().toISOString(),
        senderId: 'corral',
        data: { burroId }
      });
    }
  }

  private updateQueue: Array<{ update: Partial<IBlackboard>, senderId: string, resolve: () => void }> = [];
  private isUpdating = false;

  async updateBlackboard(update: Partial<IBlackboard>, senderId: string): Promise<void> {
    return new Promise((resolve) => {
      this.updateQueue.push({ update, senderId, resolve });
      this.processQueue();
    });
  }

  private async processQueue() {
    if (this.isUpdating || this.updateQueue.length === 0) return;
    this.isUpdating = true;

    while (this.updateQueue.length > 0) {
      const { update, senderId, resolve } = this.updateQueue.shift()!;
      
      const updatedMessages = update.messages 
        ? [...(this.blackboard.messages || []), ...update.messages]
        : this.blackboard.messages;

      const updatedTasks = update.tasks
        ? update.tasks.map(t => {
            const existing = this.blackboard.tasks.find(et => et.id === t.id);
            return existing ? { ...existing, ...t } : t;
          })
        : this.blackboard.tasks;

      // Handle new tasks that weren't in the update but are in the blackboard
      if (update.tasks) {
        this.blackboard.tasks.forEach(et => {
          if (!update.tasks!.find(t => t.id === et.id)) {
            updatedTasks.push(et);
          }
        });
      }

      this.blackboard = {
        ...this.blackboard,
        ...update,
        messages: updatedMessages,
        tasks: updatedTasks,
        version: this.blackboard.version + 1,
      };

      await this.broadcast({
        id: crypto.randomUUID(),
        type: 'blackboard_updated',
        timestamp: new Date().toISOString(),
        senderId,
        data: update
      });

      resolve();
    }

    this.isUpdating = false;
  }

  async broadcast(event: IBlackboardEvent): Promise<void> {
    if (this.storage) {
      await this.storage.appendEvent(this.id, event);
      await this.storage.save(this.blackboard);
    }

    const updates = this.participants.map(burro => 
      Promise.resolve(burro.onBlackboardUpdate(event))
    );
    await Promise.all(updates);
  }
}
