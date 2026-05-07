import React from 'react';
import Header from '@/components/layout/Header';
import { LayoutDashboard, FileText, Activity, Settings, Plus } from 'lucide-react';
import CorralCard from '@/components/CorralCard';

export default function DashboardPage() {
  const corrals = [
    {
      id: 'CORRAL-772-BETA',
      status: 'OK',
      burros: [
        { name: 'Architect-01', status: 'Busy', progress: 80 },
        { name: 'Coder-09', status: 'Idle', progress: 0 },
        { name: 'Researcher-2', status: 'Active', progress: 40 },
      ],
      updates: [
        'research_summary.md uploaded'
      ]
    },
    {
      id: 'CORRAL-901-ALPHA',
      status: 'RUNNING',
      burros: [
        { name: 'Reviewer-X', status: 'Idle', progress: 0 },
      ],
      updates: [
        'Blackboard key "v0.1.2-alpha" registered'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian text-muted-silver">
      <Header />
      
      <div className="flex h-[calc(100-64px)]">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-gray bg-slate-dark p-6 flex flex-col gap-6">
          <nav className="flex flex-col gap-2">
            <button className="flex items-center gap-3 text-electric-blue bg-obsidian/50 p-2 border-l-2 border-electric-blue">
              <LayoutDashboard size={20} />
              <span className="font-mono text-sm uppercase font-bold">Corrals</span>
            </button>
            <button className="flex items-center gap-3 text-zinc-dimmed hover:text-muted-silver p-2 transition-colors">
              <FileText size={20} />
              <span className="font-mono text-sm uppercase font-bold">Blueprints</span>
            </button>
            <button className="flex items-center gap-3 text-zinc-dimmed hover:text-muted-silver p-2 transition-colors">
              <Activity size={20} />
              <span className="font-mono text-sm uppercase font-bold">Logs</span>
            </button>
          </nav>
          
          <div className="mt-auto">
            <button className="flex items-center gap-3 text-zinc-dimmed hover:text-muted-silver p-2 transition-colors">
              <Settings size={20} />
              <span className="font-mono text-sm uppercase font-bold">Settings</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <header className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-3xl font-black mb-1">Corral Dashboard</h1>
              <p className="text-zinc-dimmed font-mono text-sm uppercase tracking-wider">
                System Status: <span className="text-safety-orange">Nominal</span>
              </p>
            </div>
            <button className="btn-precision flex items-center gap-2">
              <Plus size={18} />
              New Corral
            </button>
          </header>

          <section className="mb-12">
            <h2 className="text-xs font-mono uppercase tracking-blueprint mb-6">Active Corrals ({corrals.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {corrals.map(corral => (
                <CorralCard key={corral.id} {...corral} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-mono uppercase tracking-blueprint mb-6">Global Event Stream</h2>
            <div className="bg-slate-dark border border-slate-gray p-6 font-mono text-sm">
              <div className="flex flex-col gap-2">
                <p className="text-zinc-dimmed">
                  <span className="text-electric-blue">[14:10:02]</span> <span className="text-muted-silver font-bold">[SYS:CORRAL]</span> ACTIVE-772-BETA: Burro-Architect started task "Schema Design"
                </p>
                <p className="text-zinc-dimmed">
                  <span className="text-electric-blue">[14:11:15]</span> <span className="text-muted-silver font-bold">[SYS:BLACKBOARD]</span> UPDATE: key "v0.1.2-alpha" registered in CORRAL-901-ALPHA
                </p>
                <div className="industrial-divider !my-4" />
                <p className="animate-pulse flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-electric-blue rounded-full" />
                  Listening for pulses...
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
