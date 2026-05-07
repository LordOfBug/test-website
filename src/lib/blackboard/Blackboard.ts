import { PrismaClient } from '@prisma/client';

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

export class PersistentBlackboard implements IBlackboard {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async get(key: string): Promise<BlackboardValue> {
    const record = await this.prisma.blackboardState.findUnique({
      where: { key }
    });
    return record?.value as BlackboardValue;
  }

  async set(key: string, value: BlackboardValue): Promise<void> {
    await this.prisma.blackboardState.upsert({
      where: { key },
      update: { value: value as any },
      create: { key, value: value as any }
    });
  }

  async delete(key: string): Promise<void> {
    await this.prisma.blackboardState.delete({
      where: { key }
    });
  }

  async list(): Promise<Record<string, BlackboardValue>> {
    const records = await this.prisma.blackboardState.findMany();
    const result: Record<string, BlackboardValue> = {};
    for (const record of records) {
      result[record.key] = record.value as BlackboardValue;
    }
    return result;
  }
}
