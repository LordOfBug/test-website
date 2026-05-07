import { describe, it, expect, vi } from 'vitest';
import { GraphEngine, Blueprint } from '../src/lib/orchestration/GraphEngine';
import { Burro } from '../src/lib/core/Burro';
import { EphemeralBlackboard } from '../src/lib/blackboard/Blackboard';

describe('GraphEngine', () => {
  it('should execute a DAG of tasks', async () => {
    const blackboard = new EphemeralBlackboard();
    const burro1 = new Burro({ id: '1', role: 'Architect', name: 'Archie', capabilities: [] });
    const burro2 = new Burro({ id: '2', role: 'Coder', name: 'Cody', capabilities: [] });

    // Mock performTask to track call order
    const callOrder: string[] = [];
    burro1.performTask = vi.fn().mockImplementation(async (task) => {
      callOrder.push(task);
      return { status: 'ok' };
    });
    burro2.performTask = vi.fn().mockImplementation(async (task) => {
      callOrder.push(task);
      return { status: 'ok' };
    });

    const engine = new GraphEngine([burro1, burro2], blackboard);

    const blueprint: Blueprint = {
      id: 'b1',
      name: 'Test DAG',
      nodes: [
        { id: 'n1', burroRole: 'Architect', taskName: 'design' },
        { id: 'n2', burroRole: 'Coder', taskName: 'code1', dependsOn: ['n1'] },
        { id: 'n3', burroRole: 'Coder', taskName: 'code2', dependsOn: ['n1'] },
        { id: 'n4', burroRole: 'Architect', taskName: 'review', dependsOn: ['n2', 'n3'] },
      ]
    };

    await engine.execute(blueprint);

    expect(callOrder[0]).toBe('design');
    expect(new Set([callOrder[1], callOrder[2]])).toEqual(new Set(['code1', 'code2']));
    expect(callOrder[3]).toBe('review');
  });

  it('should handle errors in nodes', async () => {
    const blackboard = new EphemeralBlackboard();
    const burro = new Burro({ id: '1', role: 'Architect', name: 'Archie', capabilities: [] });
    burro.performTask = vi.fn().mockRejectedValue(new Error('Failed!'));

    const engine = new GraphEngine([burro], blackboard);
    const blueprint: Blueprint = {
      id: 'b1',
      name: 'Error DAG',
      nodes: [{ id: 'n1', burroRole: 'Architect', taskName: 'fail' }]
    };

    await expect(engine.execute(blueprint)).rejects.toThrow('Failed!');
  });
});
