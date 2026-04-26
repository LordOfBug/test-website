import { Corral } from '../src/engine/core/Corral';
import { MemoryBlackboardStorage } from '../src/engine/core/BlackboardStorage';
import { BaseBurro } from '../src/engine/agents/BaseBurro';
import { ITask, IResult, IBlackboardEvent } from '../src/engine/types';

class TestBurro extends BaseBurro {
  lastEvent: IBlackboardEvent | null = null;
  async execute(task: ITask): Promise<IResult> {
    return { success: true, output: 'done' };
  }
  protected async handleEvent(event: IBlackboardEvent): Promise<void> {
    this.lastEvent = event;
  }
}

describe('Corral & Blackboard Communication', () => {
  it('should broadcast joining events to participants', async () => {
    const storage = new MemoryBlackboardStorage();
    const corral = new Corral('test-corral', 'test-project', storage);
    const burro = new TestBurro('burro-1', 'coder');

    corral.addBurro(burro);
    
    expect(burro.lastEvent).toBeDefined();
    expect(burro.lastEvent?.type).toBe('burro_joined');
  });

  it('should persist blackboard updates to storage', async () => {
    const storage = new MemoryBlackboardStorage();
    const corral = new Corral('test-corral', 'test-project', storage);
    
    await corral.updateBlackboard({ shared_context: { key: 'value' } }, 'system');
    
    const persisted = await storage.load('test-corral');
    expect(persisted?.shared_context.key).toBe('value');
    expect(persisted?.version).toBe(1);
  });

  it('should accumulate messages on the blackboard', async () => {
    const corral = new Corral('test-corral', 'test-project');
    
    const msg = { 
      id: '1', 
      timestamp: new Date().toISOString(), 
      senderId: 'b1', 
      type: 'log' as const, 
      payload: { text: 'hello' } 
    };

    await corral.updateBlackboard({ messages: [msg] }, 'b1');
    await corral.updateBlackboard({ messages: [msg] }, 'b1');

    expect(corral.blackboard.messages.length).toBe(2);
  });
});
