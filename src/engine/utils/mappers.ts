import { IBurroStatus, ICorralView, IDashboardState } from "@/engine/types/ui";
import { IBlackboard, IBlackboardEvent, ICorral, IBurro } from "@/engine/types";

export function mapCorralToView(corral: ICorral): ICorralView {
  return {
    id: corral.id,
    blueprintName: corral.projectId, // Assuming projectId maps to blueprint for now
    startTime: new Date().toISOString(), // In a real app, this would be tracked
    status: corral.status === 'active' ? 'active' : corral.status === 'concluded' ? 'completed' : 'paused',
    burros: corral.participants.map(mapBurroToStatus),
    latestEvent: {
      id: 'internal',
      timestamp: new Date().toISOString(),
      senderId: 'system',
      type: 'log',
      payload: { message: 'Corral view mapped' }
    }
  };
}

export function mapBurroToStatus(burro: IBurro): IBurroStatus {
  return {
    id: burro.id,
    name: burro.id,
    role: burro.role as any,
    state: 'idle', // This would need to be tracked in the Burro instance
    performanceMetrics: {
      cpuUsage: 0,
      memoryUsage: 0,
      uptime: 0
    }
  };
}
