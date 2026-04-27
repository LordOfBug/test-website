'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface BlueprintNode {
  id: string;
  label: string;
  role: string;
  status: 'QUEUED' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
  position: { x: number; y: number };
}

export interface BlueprintEdge {
  id: string;
  source: string;
  target: string;
}

interface BlueprintVisualizerProps {
  nodes: BlueprintNode[];
  edges: BlueprintEdge[];
}

export const BlueprintVisualizer: React.FC<BlueprintVisualizerProps> = ({ nodes, edges }) => {
  const getStatusColor = (status: BlueprintNode['status']) => {
    switch (status) {
      case 'PROCESSING': return '#10B981';
      case 'COMPLETED': return '#10B981';
      case 'FAILED': return '#ef4444';
      default: return '#2d2d30';
    }
  };

  return (
    <div className="relative w-full h-full bg-carbon border border-steel overflow-hidden group">
      {/* Schematic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2d2d30_1px,transparent_1px),linear-gradient(to_bottom,#2d2d30_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
      
      <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.5))' }}>
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#2d2d30" />
          </marker>
        </defs>

        {/* Edges */}
        {edges.map((edge) => {
          const source = nodes.find(n => n.id === edge.source);
          const target = nodes.find(n => n.id === edge.target);
          if (!source || !target) return null;

          // Simple orthogonal-ish path calculation
          const d = `M ${source.position.x + 80} ${source.position.y + 40} 
                     L ${source.position.x + 100} ${source.position.y + 40}
                     L ${source.position.x + 100} ${target.position.y + 40}
                     L ${target.position.x} ${target.position.y + 40}`;

          return (
            <g key={edge.id}>
              <path
                d={d}
                stroke="#2d2d30"
                strokeWidth="1.5"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              {source.status === 'PROCESSING' && (
                <motion.circle
                  r="2"
                  fill="#10B981"
                  initial={{ offset: 0 }}
                  animate={{ 
                    cx: [source.position.x + 80, target.position.x],
                    cy: [source.position.y + 40, target.position.y + 40] 
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={node.id} transform={`translate(${node.position.x}, ${node.position.y})`}>
            <rect
              width="160"
              height="80"
              rx="2"
              className="fill-graphite stroke-steel"
              style={{ 
                stroke: getStatusColor(node.status),
                strokeWidth: node.status === 'PROCESSING' ? 2 : 1
              }}
            />
            {/* Header */}
            <rect width="160" height="24" rx="1" className="fill-steel/30" />
            <text x="8" y="16" className="fill-muted-foreground font-mono text-[9px] font-bold uppercase tracking-widest">
              {node.role}
            </text>
            
            {/* Body */}
            <text x="8" y="44" className="fill-stark-white font-sans text-xs font-bold uppercase">
              {node.label}
            </text>
            <text x="8" y="60" className={`font-mono text-[9px] font-bold ${node.status === 'PROCESSING' ? 'fill-terminal-green' : 'fill-muted-foreground'}`}>
              {node.status}
            </text>

            {/* Status Icon Placeholder */}
            {node.status === 'COMPLETED' && (
              <circle cx="144" cy="52" r="6" className="fill-terminal-green/20 stroke-terminal-green" />
            )}
          </g>
        ))}
      </svg>

      <div className="absolute top-4 left-4 flex flex-col gap-1">
        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest bg-carbon/80 px-2 py-0.5 border border-steel">
          Blueprint: MAIN_TASK_FLOW_V1
        </span>
        <span className="font-mono text-[9px] text-terminal-green/70 uppercase">
          ● REAL-TIME SYNCHRONIZED
        </span>
      </div>
    </div>
  );
};
