'use client';

import { BlueprintDesigner } from '@/components/BlueprintDesigner';
import { CorralCard } from '@/components/CorralCard';
import { MachinedButton } from '@/components/MachinedButton';
import { Activity, Shield, Terminal, Zap } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="h-full flex flex-col p-8 gap-8">
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Active Burros', value: '12', icon: Activity, color: 'text-electric-blue' },
          { label: 'Blueprints', value: '08', icon: Zap, color: 'text-safety-orange' },
          { label: 'Security Level', value: 'MAX', icon: Shield, color: 'text-green-500' },
          { label: 'Uptime', value: '99.9%', icon: Terminal, color: 'text-muted-silver' },
        ].map((stat) => (
          <CorralCard key={stat.label} className="py-4 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase text-zinc-dimmed font-mono">{stat.label}</span>
              <stat.icon size={14} className={stat.color} />
            </div>
            <div className="text-2xl font-display font-extrabold tracking-tight">{stat.value}</div>
          </CorralCard>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-0">
        {/* Designer Viewport */}
        <div className="lg:col-span-2 flex flex-col border border-slate-gray bg-slate-dark/20 relative">
          <div className="p-4 border-b border-slate-gray flex justify-between items-center bg-slate-dark/50">
            <h2 className="text-xs font-mono flex items-center gap-2">
              <span className="w-2 h-2 bg-electric-blue animate-pulse rounded-full" />
              Blueprint Designer
            </h2>
            <div className="flex gap-2">
              <MachinedButton className="py-1 px-3 text-[10px]">Deploy</MachinedButton>
              <MachinedButton variant="secondary" className="py-1 px-3 text-[10px]">Export</MachinedButton>
            </div>
          </div>
          <div className="flex-1">
            <BlueprintDesigner />
          </div>
        </div>

        {/* Sidebar Panel */}
        <div className="flex flex-col gap-6">
          <section className="flex flex-col gap-4">
            <h3 className="text-xs font-mono text-zinc-dimmed px-1">Corral Activity</h3>
            <div className="space-y-3">
              {[
                { time: '12:45:01', msg: 'Burro BR-001 connected to Corral', status: 'success' },
                { time: '12:45:12', msg: 'Blueprint "Data_Ingest" validated', status: 'success' },
                { time: '12:46:05', msg: 'Task #4512 assigned to BR-001', status: 'info' },
                { time: '12:47:30', msg: 'High memory usage on Node-X', status: 'warning' },
              ].map((log, i) => (
                <div key={i} className="flex gap-4 text-[11px] font-mono border-l border-slate-gray pl-4 py-1">
                  <span className="text-zinc-dimmed shrink-0">{log.time}</span>
                  <span className={log.status === 'warning' ? 'text-safety-orange' : 'text-muted-silver'}>
                    {log.msg}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-4 flex-1">
            <h3 className="text-xs font-mono text-zinc-dimmed px-1">Machined Controls</h3>
            <CorralCard className="bg-obsidian/40 border-dashed space-y-4">
              <div className="text-xs text-zinc-dimmed">System override is available. Proceed with caution.</div>
              <div className="grid grid-cols-2 gap-2">
                <MachinedButton className="text-[10px]">Initialize</MachinedButton>
                <MachinedButton variant="danger" className="text-[10px]">Kill All</MachinedButton>
              </div>
            </CorralCard>
          </section>
        </div>
      </div>
    </div>
  );
}
