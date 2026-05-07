'use client';

import React, { useEffect, useState } from 'react';
import { blackboardInstance, BlackboardState } from '@/lib/blackboard';

export const BlackboardComponent = () => {
  const [state, setState] = useState<BlackboardState>(blackboardInstance.getState());

  useEffect(() => {
    const unsubscribe = blackboardInstance.subscribe((newState) => {
      setState({ ...newState });
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="corral-card border-t-4 border-t-electric-blue flex flex-col h-[400px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-electric-blue text-sm font-mono tracking-blueprint">
          Shared Blackboard // Corral: {state.metadata.corralId}
        </h3>
        <span className="text-zinc-dimmed text-xs font-mono">
          Last Updated: {new Date(state.metadata.lastUpdated).toLocaleTimeString()}
        </span>
      </div>
      
      <div className="flex-1 overflow-y-auto bg-obsidian p-4 font-mono text-xs border border-slate-gray">
        {state.history.length === 0 ? (
          <div className="text-zinc-dimmed animate-pulse">Waiting for agent activity...</div>
        ) : (
          <div className="space-y-2">
            {state.history.slice().reverse().map((entry, i) => (
              <div key={i} className="border-l-2 border-slate-gray pl-3 py-1">
                <div className="text-zinc-dimmed flex justify-between">
                  <span>[{new Date(entry.timestamp).toLocaleTimeString()}] Agent: {entry.agentId}</span>
                </div>
                <div className="text-muted-silver">
                  <span className="text-safety-orange">{entry.action}</span> {entry.key} → {JSON.stringify(entry.value)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-gray grid grid-cols-2 gap-2">
        <button 
          onClick={() => blackboardInstance.set('SystemBurro', 'status', 'STABLE')}
          className="btn-precision text-xs py-2"
        >
          Ping Status
        </button>
        <button 
          onClick={() => blackboardInstance.set('ArchitectBurro', 'blueprint_v', Math.random().toFixed(2))}
          className="btn-precision text-xs py-2 bg-slate-gray"
        >
          Update Blueprint
        </button>
      </div>
    </div>
  );
};
