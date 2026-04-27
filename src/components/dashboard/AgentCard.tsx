"use client";

import React from 'react';

const PulseDot = ({ state }: { state: 'idle' | 'thinking' | 'executing' }) => {
  const colors = {
    idle: 'bg-circuit-green',
    thinking: 'bg-agentic-violet',
    executing: 'bg-logic-blue',
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

const ProgressBar = ({ progress }: { progress: number }) => {
  const segments = 10;
  const activeSegments = Math.floor((progress / 100) * segments);
  
  return (
    <div className="flex gap-1 h-1.5 w-full">
      {Array.from({ length: segments }).map((_, i) => (
        <div 
          key={i} 
          className={`h-full flex-1 transition-colors duration-300 ${
            i < activeSegments ? 'bg-logic-blue' : 'bg-[#3A3F45]'
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
    <div className="agent-card group hover:border-logic-blue cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-[10px] text-steel-grey font-mono mb-1">{id}</p>
          <h3 className="text-lg font-bold tracking-tight text-ghost-white">{name}</h3>
        </div>
        <PulseDot state={status} />
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-[11px] font-mono text-steel-grey mb-1.5">
            <span>TASK PROGRESS</span>
            <span>{progress}%</span>
          </div>
          <ProgressBar progress={progress} />
        </div>
        
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-steel-grey/20">
          <div>
            <p className="text-[10px] text-steel-grey font-mono uppercase">CPU Usage</p>
            <p className="text-xs font-mono text-ghost-white">{cpu}</p>
          </div>
          <div>
            <p className="text-[10px] text-steel-grey font-mono uppercase">Tokens/Sec</p>
            <p className="text-xs font-mono text-ghost-white">{tokens}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
