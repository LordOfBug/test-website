"use client";

import React, { useState, useEffect } from 'react';

interface KVEntry {
  key: string;
  value: any;
  modifiedBy: string;
  isFlashing?: boolean;
}

const Blackboard = () => {
  const [data, setData] = useState<KVEntry[]>([
    { key: 'task/id', value: '42-X-9', modifiedBy: 'SYSTEM' },
    { key: 'task/metadata/status', value: 'in_progress', modifiedBy: 'Burro-Alpha' },
    { key: 'agent/discovery/count', value: '12', modifiedBy: 'Burro-Beta' },
  ]);

  return (
    <div className="bg-[#1A1C1E] border border-[#3A3F45] rounded-[var(--radius-sm)] overflow-hidden shadow-[var(--shadow-hard)]">
      <div className="px-4 py-3 bg-[#25282c] border-b border-[#3A3F45] flex justify-between items-center">
        <h2 className="text-xs font-bold tracking-widest uppercase">Shared Blackboard (KV Store)</h2>
        <span className="text-[10px] font-mono text-[#0066FF]">LIVE_SYNC: ACTIVE</span>
      </div>
      <table className="w-full text-left border-collapse font-mono text-[13px]">
        <thead>
          <tr className="border-b border-[#3A3F45] text-[#A0AEC0]">
            <th className="px-4 py-2 font-medium">KEY</th>
            <th className="px-4 py-2 font-medium">VALUE</th>
            <th className="px-4 py-2 font-medium text-right">MODIFIED BY</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, idx) => (
            <tr 
              key={entry.key} 
              className={`border-b border-[#25282c] hover:bg-[#25282c] transition-colors duration-500 ${entry.isFlashing ? 'bg-[#0066FF]/20' : ''}`}
            >
              <td className="px-4 py-3 text-[#0066FF]">{entry.key}</td>
              <td className="px-4 py-3 text-[#F8FAFC]">
                {typeof entry.value === 'string' ? `"${entry.value}"` : entry.value}
              </td>
              <td className="px-4 py-3 text-[#A0AEC0] text-right">{entry.modifiedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Blackboard;
