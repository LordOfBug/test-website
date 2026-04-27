"use client";

import React from 'react';

const PulseDot = ({ state }: { state: 'idle' | 'thinking' | 'executing' }) => {
  const colors = {
    idle: 'bg-zinc-dimmed',
    thinking: 'bg-safety-orange',
    executing: 'bg-electric-blue',
  };
  
  return (
    <div className={`relative flex h-3 w-3`}>
      {state !== 'idle' && (
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colors[state]} opacity-75`}></span>
      )}
      <span className={`relative inline-flex rounded-full h-3 w-3 ${colors[state]}`}></span>
    </div>
  );
};

const ProgressBar = ({ progress, color = 'bg-electric-blue' }: { progress: number; color?: string }) => {
  const segments = 10;
  const activeSegments = Math.floor((progress / 100) * segments);
  
  return (
    <div className="flex gap-1 h-1.5 w-full">
      {Array.from({ length: segments }).map((_, i) => (
        <div 
          key={i} 
          className={`h-full flex-1 transition-colors duration-300 ${
            i < activeSegments ? color : 'bg-slate-gray'
          }`}
        />
      ))}
    </div>
  );
};

interface AgentProps {
  id: string;
  name: string;
  status: 'idle' | 'thinking' | 'executing';
  progress: number;
  cpu: string;
  tokens: string;
}

const AgentCard = ({ id, name, status, progress, cpu, tokens }: AgentProps) => {
  return (
    <div className="corral-card group cursor-pointer overflow-hidden min-h-[220px] flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
        <div className="min-w-0">
          <p className="text-[10px] text-zinc-dimmed font-mono mb-1 truncate">{id}</p>
          <h3 className="text-lg font-bold tracking-tight text-muted-silver truncate">{name}</h3>
        </div>
        <PulseDot state={status} />
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-[11px] font-mono text-zinc-dimmed mb-1.5">
            <span>TASK PROGRESS</span>
            <span>{progress}%</span>
          </div>
          <ProgressBar progress={progress} color={status === 'executing' ? 'bg-electric-blue' : status === 'thinking' ? 'bg-safety-orange' : 'bg-zinc-dimmed'} />
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-gray">
          <div className="min-w-0">
            <p className="text-[10px] text-zinc-dimmed font-mono uppercase">CPU Usage</p>
            <p className="text-xs font-mono text-muted-silver truncate">{cpu}</p>
          </div>
          <div className="min-w-0">
            <p className="text-[10px] text-zinc-dimmed font-mono uppercase">Tokens/Sec</p>
            <p className="text-xs font-mono text-muted-silver truncate">{tokens}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
