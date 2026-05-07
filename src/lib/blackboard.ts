
import React from 'react';

/**
 * Blackboard Pattern implementation for Burros.AI
 * Provides a shared memory space for agents (Burros) within a Corral.
 */

export interface BlackboardState {
  metadata: {
    corralId: string;
    lastUpdated: number;
    activeAgents: string[];
  };
  data: Record<string, any>;
  history: Array<{
    timestamp: number;
    agentId: string;
    action: string;
    key: string;
    value: any;
  }>;
}

class Blackboard {
  private state: BlackboardState;
  private listeners: Set<(state: BlackboardState) => void> = new Set();

  constructor(corralId: string) {
    this.state = {
      metadata: {
        corralId,
        lastUpdated: Date.now(),
        activeAgents: [],
      },
      data: {},
      history: [],
    };
  }

  public get(key: string): any {
    return this.state.data[key];
  }

  public set(agentId: string, key: string, value: any) {
    this.state.data[key] = value;
    this.state.history.push({
      timestamp: Date.now(),
      agentId,
      action: 'SET',
      key,
      value,
    });
    this.state.metadata.lastUpdated = Date.now();
    this.notify();
  }

  public subscribe(listener: (state: BlackboardState) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((listener) => listener(this.state));
  }

  public getState(): BlackboardState {
    return { ...this.state };
  }
}

export const blackboardInstance = new Blackboard('main-corral');
