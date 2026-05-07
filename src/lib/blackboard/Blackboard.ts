export type BlackboardValue = string | number | boolean | object | null;

export interface IBlackboard {
  get(key: string): Promise<BlackboardValue>;
  set(key: string, value: BlackboardValue): Promise<void>;
  delete(key: string): Promise<void>;
  list(): Promise<Record<string, BlackboardValue>>;
}

export class EphemeralBlackboard implements IBlackboard {
  private storage: Map<string, BlackboardValue> = new Map();

  async get(key: string): Promise<BlackboardValue> {
    return this.storage.get(key) ?? null;
  }

  async set(key: string, value: BlackboardValue): Promise<void> {
    this.storage.set(key, value);
  }

  async delete(key: string): Promise<void> {
    this.storage.delete(key);
  }

  async list(): Promise<Record<string, BlackboardValue>> {
    return Object.fromEntries(this.storage.entries());
  }
}
