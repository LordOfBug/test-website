'use client';

import React, { useState, useEffect } from 'react';
import { BurroStatusCard, BurroStatus } from '@/components/dashboard/BurroStatusCard';
import { CorralActivityFeed, ActivityEvent } from '@/components/dashboard/CorralActivityFeed';
import { BlueprintVisualizer, BlueprintNode, BlueprintEdge } from '@/components/dashboard/BlueprintVisualizer';
import { LayoutDashboard, Users, Zap, Settings, Terminal, Activity } from 'lucide-react';

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mockBurros: any[] = [
    { id: 'b1', name: 'ARCHI-01', role: 'ARCHITECT', status: 'PROCESSING', currentTask: 'Decomposing PRD v2', load: 85 },
    { id: 'b2', name: 'DEV-01', role: 'DEVELOPER', status: 'WAITING', currentTask: 'Awaiting Architecture Schema', load: 12 },
    { id: 'b3', name: 'DEV-02', role: 'DEVELOPER', status: 'IDLE', load: 0 },
    { id: 'b4', name: 'RES-01', role: 'RESEARCHER', status: 'PROCESSING', currentTask: 'Crawling API Documentation', load: 64 },
  ];

  const mockEvents: ActivityEvent[] = [
    { id: 'e1', timestamp: '14:20:05', burroId: 'SYSTEM', burroType: 'SYSTEM', event: 'INIT', message: 'Corral alpha-zulu initialized.', severity: 'INFO' },
    { id: 'e2', timestamp: '14:20:08', burroId: 'ARCHI-01', burroType: 'ARCHITECT', event: 'TASK_START', message: 'Starting blueprint decomposition...', severity: 'SUCCESS' },
    { id: 'e3', timestamp: '14:21:12', burroId: 'RES-01', burroType: 'RESEARCHER', event: 'TOOL_USE', message: 'Executing search_web { query: "Next.js 16 metadata API" }', severity: 'INFO' },
    { id: 'e4', timestamp: '14:22:01', burroId: 'DEV-01', burroType: 'DEVELOPER', event: 'WAIT', message: 'Blocked by dependency: ARCHI-01', severity: 'WARNING' },
  ];

  const mockNodes: BlueprintNode[] = [
    { id: 'n1', label: 'Requirement Analysis', role: 'ARCHITECT', status: 'COMPLETED', position: { x: 40, y: 100 } },
    { id: 'n2', label: 'System Decomposition', role: 'ARCHITECT', status: 'PROCESSING', position: { x: 240, y: 100 } },
    { id: 'n3', label: 'API Research', role: 'RESEARCHER', status: 'PROCESSING', position: { x: 240, y: 220 } },
    { id: 'n4', label: 'Backend Scaffolding', role: 'DEVELOPER', status: 'QUEUED', position: { x: 440, y: 100 } },
  ];

  const mockEdges: BlueprintEdge[] = [
    { id: 'l1', source: 'n1', target: 'n2' },
    { id: 'l2', source: 'n1', target: 'n3' },
    { id: 'l3', source: 'n2', target: 'n4' },
  ];

  if (!mounted) return <div className="bg-carbon min-h-screen" />;

  return (
    <div className="flex h-screen bg-carbon text-stark-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-16 border-r border-steel flex flex-col items-center py-6 gap-8 bg-graphite">
        <div className="w-10 h-10 border-2 border-stark-white flex items-center justify-center p-1 font-bold text-xs select-none">
          B.AI
        </div>
        <nav className="flex flex-col gap-6">
          <button className="text-stark-white hover:text-terminal-green transition-colors"><LayoutDashboard size={20} /></button>
          <button className="text-muted-foreground hover:text-stark-white transition-colors"><Zap size={20} /></button>
          <button className="text-muted-foreground hover:text-stark-white transition-colors"><Users size={20} /></button>
          <button className="text-muted-foreground hover:text-stark-white transition-colors"><Activity size={20} /></button>
        </nav>
        <button className="mt-auto text-muted-foreground hover:text-stark-white transition-colors"><Settings size={20} /></button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-14 border-b border-steel flex items-center justify-between px-6 bg-graphite/50 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <h1 className="text-xs font-bold uppercase tracking-[0.2em]">Corral: Alpha-Zulu</h1>
            <span className="bg-terminal-green/10 text-terminal-green text-[10px] px-2 py-0.5 border border-terminal-green/30 font-mono">
              STATUS: NOMINAL
            </span>
          </div>
          <div className="flex items-center gap-6 font-mono text-[10px] text-muted-foreground">
            <div className="flex gap-2">
              <span className="uppercase">Uptime:</span>
              <span className="text-stark-white">12:44:02</span>
            </div>
            <div className="flex gap-2">
              <span className="uppercase">Active Burros:</span>
              <span className="text-stark-white">4/4</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-steel flex items-center justify-center text-stark-white">
              <Terminal size={14} />
            </div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="flex-1 p-6 grid grid-cols-12 grid-rows-6 gap-6 overflow-hidden">
          
          {/* Top Row: Burro Status Cards */}
          <div className="col-span-12 row-span-1 flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
            {mockBurros.map(burro => (
              <BurroStatusCard key={burro.id} {...burro} />
            ))}
          </div>

          {/* Middle: Blueprint Visualizer */}
          <div className="col-span-8 row-span-5 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Blueprint Visualizer</h2>
              <div className="flex gap-2">
                <button className="btn-secondary py-1 px-4 text-[9px]">Zoom Out</button>
                <button className="btn-secondary py-1 px-4 text-[9px]">Zoom In</button>
                <button className="btn-primary py-1 px-4 text-[9px]">Reset View</button>
              </div>
            </div>
            <div className="flex-1 min-h-0">
              <BlueprintVisualizer nodes={mockNodes} edges={mockEdges} />
            </div>
          </div>

          {/* Right/Bottom: Activity Feed */}
          <div className="col-span-4 row-span-5">
            <CorralActivityFeed events={mockEvents} />
          </div>
        </div>
      </main>
    </div>
  );
}
