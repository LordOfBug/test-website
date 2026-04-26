"use client";

import React from 'react';

interface KVEntry {
  key: string;
  value: string | number | boolean | null;
  modifiedBy: string;
  isFlashing?: boolean;
}

const Blackboard = () => {
  const data: KVEntry[] = [
    { key: 'task/id', value: '42-X-9', modifiedBy: 'SYSTEM' },
    { key: 'task/metadata/status', value: 'in_progress', modifiedBy: 'Burro-Alpha' },
    { key: 'agent/discovery/count', value: 12, modifiedBy: 'Burro-Beta' },
  ];

  return (
    <div className="bg-industrial-black border border-steel-grey/30 rounded-[var(--radius-brand)] overflow-hidden">
      <div className="px-4 py-3 bg-[#25282c] border-b border-[#3A3F45] flex justify-between items-center">
        <h2 className="text-xs font-bold tracking-widest uppercase text-ghost-white">Shared Blackboard (KV Store)</h2>
        <span className="text-[10px] font-mono text-logic-blue">LIVE_SYNC: ACTIVE</span>
      </div>
      <table className="w-full text-left border-collapse font-mono text-[13px]">
        <thead>
          <tr className="border-b border-[#3A3F45] text-steel-grey">
            <th className="px-4 py-2 font-medium">KEY</th>
            <th className="px-4 py-2 font-medium">VALUE</th>
            <th className="px-4 py-2 font-medium text-right">MODIFIED BY</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr 
              key={entry.key} 
              className={`border-b border-[#25282c] hover:bg-[#25282c] transition-colors duration-500 ${entry.isFlashing ? 'bg-logic-blue/20' : ''}`}
            >
              <td className="px-4 py-3 text-logic-blue">{entry.key}</td>
              <td className="px-4 py-3 text-ghost-white">
                {typeof entry.value === 'string' ? `"${entry.value}"` : String(entry.value)}
              </td>
              <td className="px-4 py-3 text-steel-grey text-right">{entry.modifiedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Blackboard;
