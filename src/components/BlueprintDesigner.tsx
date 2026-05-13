'use client';

import React, { useMemo } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  Handle,
  Position,
  NodeProps,
  Edge,
  Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

/**
 * Custom Burro Node for the Blueprint Designer.
 * High-utility industrial aesthetic.
 */
const BurroNode = ({ data }: NodeProps<{ label: string; id: string; status: string }>) => {
  return (
    <div className="react-flow__node-burro min-w-[150px]">
      <Handle type="target" position={Position.Top} className="!bg-slate-gray !w-2 !h-2 !border-none" />
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center border-b border-slate-gray pb-1 mb-1">
          <span className="text-[10px] uppercase text-zinc-dimmed">Agent</span>
          <div className={`w-1.5 h-1.5 rounded-full ${data.status === 'active' ? 'bg-electric-blue shadow-[0_0_5px_#2E79FF]' : 'bg-slate-gray'}`} />
        </div>
        <div className="font-bold text-muted-silver">{data.label}</div>
        <div className="text-[8px] text-zinc-dimmed font-mono tracking-tighter">ID: {data.id}</div>
      </div>
      <Handle type="source" position={Position.Bottom} className="!bg-electric-blue !w-2 !h-2 !border-none" />
    </div>
  );
};

const nodeTypes = {
  burro: BurroNode,
};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'burro',
    position: { x: 250, y: 50 },
    data: { label: 'Scraper Burro', id: 'BR-001', status: 'active' },
  },
  {
    id: '2',
    type: 'burro',
    position: { x: 100, y: 200 },
    data: { label: 'Analysis Burro', id: 'BR-002', status: 'idle' },
  },
  {
    id: '3',
    type: 'burro',
    position: { x: 400, y: 200 },
    data: { label: 'Reporter Burro', id: 'BR-003', status: 'idle' },
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#27272A' } },
  { id: 'e1-3', source: '1', target: '3', style: { stroke: '#27272A' } },
];

export const BlueprintDesigner = () => {
  return (
    <div className="w-full h-full bg-obsidian relative">
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <div className="bg-slate-dark/80 backdrop-blur border border-slate-gray px-3 py-1 text-xs font-mono text-zinc-dimmed">
          MODE: <span className="text-electric-blue">DESIGNER</span>
        </div>
      </div>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        fitView
        colorMode="dark"
      >
        <Background color="#27272A" gap={20} variant="dots" />
        <Controls className="!bg-slate-dark !border-slate-gray !fill-muted-silver" />
      </ReactFlow>
    </div>
  );
};
