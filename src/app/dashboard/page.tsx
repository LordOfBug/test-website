import React from 'react';
import Image from 'next/image';
import { BlackboardComponent } from '@/components/dashboard/BlackboardTerminal';
import BlueprintCanvas from '@/components/dashboard/BlueprintCanvas';

export default function Dashboard() {
  return (
    <div className="min-h-screen p-8 lg:p-12 space-y-12 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center space-x-4">
          <div className="relative w-16 h-16 border-2 border-electric-blue p-1">
            <Image 
              src="/burros.png" 
              alt="Burros Logo" 
              width={64} 
              height={64}
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl tracking-tighter text-muted-silver">
              CORRAL_01
            </h1>
            <p className="font-mono text-zinc-dimmed text-xs uppercase tracking-widest">
              Industrial Tech Agentic Environment // Active
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="p-4 border border-slate-gray bg-slate-dark flex flex-col items-end">
            <span className="text-[10px] text-zinc-dimmed font-mono">SYSTEM_UPTIME</span>
            <span className="text-electric-blue font-mono font-bold">99.98%</span>
          </div>
          <div className="p-4 border border-slate-gray bg-slate-dark flex flex-col items-end">
            <span className="text-[10px] text-zinc-dimmed font-mono">BURROS_ACTIVE</span>
            <span className="text-safety-orange font-mono font-bold">12</span>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Agents & Stats */}
        <div className="lg:col-span-1 space-y-8">
          <section>
            <h2 className="text-lg mb-4 flex items-center">
              <span className="w-2 h-2 bg-electric-blue mr-2"></span>
              Specialist Burros
            </h2>
            <div className="space-y-4">
              {['Architect', 'Developer', 'Designer', 'QA'].map((role) => (
                <div key={role} className="corral-card py-4 flex justify-between items-center group">
                  <span className="font-mono text-sm group-hover:text-electric-blue transition-colors">{role.toUpperCase()}_BURRO</span>
                  <span className="px-2 py-1 bg-zinc-dimmed/10 text-[10px] font-mono text-zinc-dimmed border border-zinc-dimmed/20">READY</span>
                </div>
              ))}
            </div>
          </section>

          <section className="p-6 bg-safety-orange/5 border border-safety-orange/20">
            <h2 className="text-safety-orange text-sm font-mono mb-2 uppercase tracking-blueprint">Warning Alert</h2>
            <p className="text-xs text-muted-silver/80 font-mono">Corral capacity at 85%. Blueprint optimization recommended for efficiency gain.</p>
          </section>
        </div>

        {/* Middle & Right Column: Interactive components */}
        <div className="lg:col-span-2 space-y-8">
          <BlueprintCanvas />
          <BlackboardComponent />
        </div>
      </main>

      {/* Footer Industrial Details */}
      <footer className="pt-12 border-t border-slate-gray flex justify-between items-center text-[10px] font-mono text-zinc-dimmed uppercase">
        <div>Burros.AI // Build: v0.1.0-alpha</div>
        <div className="flex space-x-6">
          <span>LATENCY: 12ms</span>
          <span>THROUGHPUT: 1.2k/s</span>
          <span className="text-electric-blue">Protocol: AgentMesh-v4</span>
        </div>
      </footer>
    </div>
  );
}
