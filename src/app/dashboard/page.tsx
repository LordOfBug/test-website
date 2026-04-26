"use client";

import React, { useState } from 'react';
import { IDashboardState, ICorralView } from '@/engine/types/ui';

export default function Dashboard() {
  const [state] = useState<IDashboardState>(() => {
    const mockCorrals: ICorralView[] = [
      {
        id: 'corral-1',
        blueprintName: 'Web Scraper API',
        startTime: new Date().toISOString(),
        status: 'active',
        burros: [
          {
            id: 'burro-1',
            name: 'Architect-Alpha',
            role: 'architect',
            state: 'working',
            currentTask: 'Designing API Schema',
            performanceMetrics: { cpuUsage: 12, memoryUsage: 256, uptime: 3600 }
          },
          {
            id: 'burro-2',
            name: 'Coder-Beta',
            role: 'coder',
            state: 'idle',
            performanceMetrics: { cpuUsage: 2, memoryUsage: 128, uptime: 3600 }
          }
        ],
        latestEvent: {
          id: 'evt-1',
          timestamp: new Date().toISOString(),
          senderId: 'burro-1',
          type: 'log',
          payload: { message: 'Refining task dependencies' }
        }
      }
    ];

    return {
      globalStatus: 'healthy',
      activeCorralsCount: mockCorrals.length,
      totalTasksProcessed: 0,
      corrals: mockCorrals
    };
  });

  return (
    <div className="min-h-screen bg-background p-8">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter text-foreground mb-2">WRANGLER DASHBOARD</h1>
          <p className="text-muted-foreground font-mono uppercase text-sm">System Status: 
            <span className={state.globalStatus === 'healthy' ? 'text-status-success ml-2' : 'text-status-error ml-2'}>
              ● {state.globalStatus}
            </span>
          </p>
        </div>
        <div className="flex gap-8 text-right">
          <div>
            <div className="text-2xl font-mono">{state.activeCorralsCount}</div>
            <div className="text-xs text-muted-foreground uppercase">Active Corrals</div>
          </div>
          <div>
            <div className="text-2xl font-mono">{state.totalTasksProcessed}</div>
            <div className="text-xs text-muted-foreground uppercase">Tasks Processed</div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {state.corrals.map(corral => (
          <CorralCard key={corral.id} corral={corral} />
        ))}
      </div>
    </div>
  );
}

function CorralCard({ corral }: { corral: ICorralView }) {
  return (
    <div className="corral-card group hover:border-primary/50">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg leading-tight">{corral.blueprintName}</h3>
          <p className="text-xs font-mono text-muted-foreground">{corral.id}</p>
        </div>
        <span className={`burro-status-badge ${
          corral.status === 'active' ? 'bg-status-working/20 text-status-working' : 'bg-status-success/20 text-status-success'
        }`}>
          {corral.status}
        </span>
      </div>

      <div className="space-y-3">
        <h4 className="text-xs font-mono uppercase text-muted-foreground border-b border-border pb-1">Participants</h4>
        <div className="flex flex-wrap gap-2">
          {corral.burros.map(burro => (
            <div key={burro.id} className="flex items-center gap-2 bg-secondary/50 p-2 rounded border border-border/50 w-full">
              <div className={`w-2 h-2 rounded-full animate-pulse ${
                burro.state === 'working' ? 'bg-status-working' : 'bg-status-idle'
              }`} />
              <div className="flex-1">
                <div className="text-sm font-medium">{burro.name}</div>
                <div className="text-[10px] text-muted-foreground uppercase font-mono">{burro.role}</div>
              </div>
              {burro.state === 'working' && (
                <div className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded border border-primary/20">
                  {burro.currentTask}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-xs font-mono uppercase text-muted-foreground border-b border-border pb-1 mb-2">Latest Signal</h4>
        <div className="blackboard-entry">
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-primary">{corral.latestEvent.senderId}</span>
            <span>{new Date(corral.latestEvent.timestamp).toLocaleTimeString()}</span>
          </div>
          <div className="truncate">{corral.latestEvent.payload.message}</div>
        </div>
      </div>
    </div>
  );
}
