import { IBlackboard, IBlackboardEvent } from '../types';
import * as fs from 'fs/promises';
import * as path from 'path';

export interface IBlackboardStorage {
  save(blackboard: IBlackboard): Promise<void>;
  load(corralId: string): Promise<IBlackboard | null>;
  appendEvent(corralId: string, event: IBlackboardEvent): Promise<void>;
  getEvents(corralId: string): Promise<IBlackboardEvent[]>;
}

export class MemoryBlackboardStorage implements IBlackboardStorage {
  private blackboards: Map<string, IBlackboard> = new Map();
  private events: Map<string, IBlackboardEvent[]> = new Map();

  async save(blackboard: IBlackboard): Promise<void> {
    this.blackboards.set(blackboard.corral_id, { ...blackboard });
  }

  async load(corralId: string): Promise<IBlackboard | null> {
    const bb = this.blackboards.get(corralId);
    return bb ? { ...bb } : null;
  }

  async appendEvent(corralId: string, event: IBlackboardEvent): Promise<void> {
    if (!this.events.has(corralId)) {
      this.events.set(corralId, []);
    }
    this.events.get(corralId)!.push(event);
  }

  async getEvents(corralId: string): Promise<IBlackboardEvent[]> {
    return this.events.get(corralId) || [];
  }
}

export class FileBlackboardStorage implements IBlackboardStorage {
  private baseDir: string;

  constructor(baseDir: string = './.burro/storage') {
    this.baseDir = baseDir;
  }

  private async ensureDir(dir: string) {
    await fs.mkdir(dir, { recursive: true });
  }

  async save(blackboard: IBlackboard): Promise<void> {
    const corralDir = path.join(this.baseDir, blackboard.corral_id);
    await this.ensureDir(corralDir);
    await fs.writeFile(
      path.join(corralDir, 'blackboard.json'),
      JSON.stringify(blackboard, null, 2)
    );
  }

  async load(corralId: string): Promise<IBlackboard | null> {
    try {
      const content = await fs.readFile(
        path.join(this.baseDir, corralId, 'blackboard.json'),
        'utf-8'
      );
      return JSON.parse(content);
    } catch {
      return null;
    }
  }

  async appendEvent(corralId: string, event: IBlackboardEvent): Promise<void> {
    const corralDir = path.join(this.baseDir, corralId);
    await this.ensureDir(corralDir);
    const eventsPath = path.join(corralDir, 'events.jsonl');
    await fs.appendFile(eventsPath, JSON.stringify(event) + '\n');
  }

  async getEvents(corralId: string): Promise<IBlackboardEvent[]> {
    try {
      const content = await fs.readFile(
        path.join(this.baseDir, corralId, 'events.jsonl'),
        'utf-8'
      );
      return content
        .trim()
        .split('\n')
        .filter(Boolean)
        .map((line) => JSON.parse(line));
    } catch {
      return [];
    }
  }
}
