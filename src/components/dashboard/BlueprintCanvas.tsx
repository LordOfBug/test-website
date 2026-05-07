'use client';

import React from 'react';

const BlueprintCanvas = () => {
  return (
    <div className="corral-card relative overflow-hidden group">
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--color-slate-gray) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="flex justify-between items-center mb-6 relative z-10">
        <h3 className="text-muted-silver text-sm font-mono tracking-blueprint">
          Blueprint Editor // Canvas
        </h3>
        <div className="flex space-x-2">
          <div className="blueprint-node active"></div>
          <div className="blueprint-node"></div>
          <div className="blueprint-node"></div>
        </div>
      </div>

      <div className="h-64 flex items-center justify-center border-2 border-dashed border-slate-gray relative z-10">
        <div className="text-center">
          <p className="text-zinc-dimmed font-mono text-xs uppercase mb-4">Drag and drop blueprint nodes</p>
          <div className="flex space-x-4 justify-center">
            <div className="p-4 border border-electric-blue bg-obsidian text-electric-blue font-mono text-xs cursor-pointer hover:bg-electric-blue hover:text-white transition-colors">
              SOURCE_NODE
            </div>
            <div className="p-4 border border-safety-orange bg-obsidian text-safety-orange font-mono text-xs cursor-pointer hover:bg-safety-orange hover:text-white transition-colors">
              LOGIC_GATE
            </div>
          </div>
        </div>
      </div>

      <div className="industrial-divider"></div>
      
      <div className="flex justify-between items-center relative z-10">
        <span className="text-zinc-dimmed text-[10px] font-mono">COORD: 0.0, 0.0</span>
        <button className="btn-precision text-[10px] px-3 py-1">DEPLOY_BLUEPRINT</button>
      </div>
    </div>
  );
};

export default BlueprintCanvas;
