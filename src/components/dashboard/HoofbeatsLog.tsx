"use client";

import React from 'react';

interface LogEntry {
  id: string;
  timestamp: string;
  level: 'INFO' | 'ACTION' | 'SUCCESS' | 'HITL';
  message: string;
}

const HoofbeatsLog = () => {
  const logs: LogEntry[] = [
    { id: '1', timestamp: '14:20:01', level: 'INFO', message: 'Initializing Corral Protocol...' },
    { id: '2', timestamp: '14:20:05', level: 'ACTION', message: 'Burro-Alpha spawning in workspace.' },
  ];

  const getLevelColor = (level: LogEntry['level']) => {
    switch (level) {
      case 'INFO': return 'text-steel-grey';
      case 'ACTION': return 'text-logic-blue';
      case 'SUCCESS': return 'text-circuit-green';
      case 'HITL': return 'text-caution-amber animate-pulse';
      default: return 'text-ghost-white';
    }
  };

  return (
    <div className="flex flex-col h-full bg-industrial-black border-l border-steel-grey/30">
      <div className="p-4 border-b border-steel-grey/30 bg-[#25282c]">
        <h2 className="text-sm font-bold tracking-widest uppercase text-ghost-white">Hoofbeats Feed</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-2 font-mono text-[12px]">
        {logs.map((log) => (
          <div key={log.id} className="flex gap-3 leading-relaxed">
            <span className="text-[#3A3F45] shrink-0">[{log.timestamp}]</span>
            <span className={`${getLevelColor(log.level)} font-bold shrink-0 w-16`}>{log.level}</span>
            <span className="text-ghost-white">{log.message}</span>
          </div>
        ))}
        <div className="pt-2">
          <span className="inline-block w-2 h-4 bg-logic-blue animate-pulse align-middle ml-1"></span>
        </div>
      </div>
    </div>
  );
};

export default HoofbeatsLog;
