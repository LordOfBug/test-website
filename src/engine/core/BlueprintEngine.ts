import { ITask } from '../types';

export interface IBlueprint {
  id: string;
  goal: string;
  tasks: ITask[];
  dependencies: Record<string, string[]>; // taskId -> parentTaskIds[]
}

export class BlueprintEngine {
  generateBlueprint(goal: string): IBlueprint {
    // In a real implementation, this might use an LLM to decompose the goal
    const blueprintId = crypto.randomUUID();
    
    // Simple static decomposition for demonstration
    const task1: ITask = {
      id: 'task-1',
      description: `Create architecture for: ${goal}`,
      status: 'pending',
      context: { role: 'architect', filePath: 'docs/architecture.md' }
    };

    const task2: ITask = {
      id: 'task-2',
      description: `Implement core logic for: ${goal}`,
      status: 'pending',
      context: { role: 'coder' }
    };

    return {
      id: blueprintId,
      goal,
      tasks: [task1, task2],
      dependencies: {
        'task-2': ['task-1']
      }
    };
  }

  getReadyTasks(tasks: ITask[], dependencies: Record<string, string[]>): ITask[] {
    return tasks.filter(task => {
      if (task.status !== 'pending') return false;
      const deps = dependencies[task.id] || [];
      return deps.every(depId => {
        const depTask = tasks.find(t => t.id === depId);
        return depTask?.status === 'completed';
      });
    });
  }
}
