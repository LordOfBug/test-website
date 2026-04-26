import React from 'react';
import AgentCard from '@/components/dashboard/AgentCard';
import HoofbeatsLog from '@/components/dashboard/HoofbeatsLog';
import Blackboard from '@/components/dashboard/Blackboard';

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-[260px_1fr_320px] h-screen bg-industrial-black text-ghost-white overflow-hidden">
      {/* Column 1: Playbook Progress (Left) */}
      <div className="border-r border-steel-grey/20 flex flex-col bg-[#25282c]">
        <div className="p-6 border-b border-steel-grey/20">
          <h1 className="text-xl font-bold tracking-tighter mb-1 text-ghost-white">CORRAL_01</h1>
          <p className="text-[10px] font-mono text-steel-grey">ORCHESTRATION LAYER V1.0</p>
        </div>
        
        <div className="flex-1 p-6 space-y-8">
          <div>
            <h2 className="text-xs font-bold text-steel-grey mb-4 tracking-widest uppercase">Playbook Stages</h2>
            <div className="space-y-4">
              {[
                { name: 'Environment Discovery', status: 'completed' },
                { name: 'Constraint Extraction', status: 'active' },
                { name: 'Agent Specialization', status: 'pending' },
                { name: 'Parallel Execution', status: 'pending' },
              ].map((stage, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    stage.status === 'completed' ? 'bg-circuit-green' : 
                    stage.status === 'active' ? 'bg-logic-blue animate-pulse' : 'bg-steel-grey/30'
                  }`} />
                  <span className={`text-sm ${stage.status === 'pending' ? 'text-steel-grey' : 'text-ghost-white'}`}>
                    {stage.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-steel-grey/20">
            <div className="bg-industrial-black p-4 rounded-[var(--radius-brand)] border border-steel-grey/20">
              <p className="text-[10px] font-mono text-logic-blue mb-2 uppercase">System Message</p>
              <p className="text-xs leading-relaxed text-steel-grey">
                All burros initialized. Monitoring for HITL interrupts on port 4432.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Column 2: Agent Card Grid & Blackboard (Center) */}
      <div className="flex flex-col overflow-y-auto">
        <main className="p-8 space-y-8">
          <section>
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-ghost-white uppercase">Active Burros</h2>
              <span className="text-xs font-mono text-steel-grey">3 AGENTS CONNECTED</span>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
              <AgentCard 
                id="B-001" 
                name="Burro-Alpha" 
                status="thinking" 
                progress={65} 
                cpu="12.4%" 
                tokens="42/s" 
              />
              <AgentCard 
                id="B-002" 
                name="Burro-Beta" 
                status="executing" 
                progress={30} 
                cpu="45.1%" 
                tokens="88/s" 
              />
              <AgentCard 
                id="B-003" 
                name="Burro-Gamma" 
                status="idle" 
                progress={100} 
                cpu="0.8%" 
                tokens="0/s" 
              />
            </div>
          </section>

          <section>
            <Blackboard />
          </section>
        </main>
      </div>

      {/* Column 3: Hoofbeats Event Log (Right) */}
      <div className="h-full overflow-hidden">
        <HoofbeatsLog />
      </div>
    </div>
  );
}
