import { IBlackboardMessage } from "../types";

export interface IDashboardState {
  globalStatus: 'healthy' | 'warning' | 'degraded';
  activeCorralsCount: number;
  totalTasksProcessed: number;
  corrals: ICorralView[];
}

export interface ICorralView {
  id: string;
  blueprintName: string;
  startTime: string; // ISO String
  status: 'active' | 'paused' | 'completed' | 'failed';
  burros: IBurroStatus[];
  latestEvent: IBlackboardMessage;
}

export interface IBurroStatus {
  id: string;
  name: string;
  role: 'coder' | 'architect' | 'reviewer' | 'wrangler';
  state: 'idle' | 'working' | 'waiting' | 'error';
  currentTask?: string;
  performanceMetrics: {
    cpuUsage: number; // 0-100
    memoryUsage: number; // MB
    uptime: number; // seconds
  };
}
