import { ITask, IResult, ICorral, IBurro } from './types';
import { Corral } from './core/Corral';
import { IBlackboardStorage } from './core/BlackboardStorage';

export class Wrangler {
  private corrals: Map<string, ICorral> = new Map();
  private storage?: IBlackboardStorage;

  constructor(storage?: IBlackboardStorage) {
    this.storage = storage;
  }

  async createCorral(projectId: string): Promise<ICorral> {
    const id = crypto.randomUUID();
    const corral = new Corral(id, projectId, this.storage);
    this.corrals.set(id, corral);
    return corral;
  }

  getCorral(id: string): ICorral | undefined {
    return this.corrals.get(id);
  }

  async assignTask(corralId: string, burroId: string, task: ITask): Promise<IResult> {
    const corral = this.getCorral(corralId);
    if (!corral) throw new Error('Corral not found');

    const burro = corral.participants.find(b => b.id === burroId);
    if (!burro) throw new Error('Burro not found in corral');

    task.status = 'in-progress';
    await corral.updateBlackboard({
      tasks: [task]
    }, 'wrangler');

    try {
      const result = await burro.execute(task);
      task.status = result.success ? 'completed' : 'failed';
      task.result = result;

      await corral.updateBlackboard({
        tasks: [task]
      }, 'wrangler');

      return result;
    } catch (error) {
      task.status = 'failed';
      const failedResult = { success: false, output: null, error: String(error) };
      task.result = failedResult;
      
      await corral.updateBlackboard({
        tasks: [task]
      }, 'wrangler');
      
      return failedResult;
    }
  }
}
