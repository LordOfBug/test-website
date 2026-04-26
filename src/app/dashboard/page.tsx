import React from 'react';
import AgentCard from '@/components/dashboard/AgentCard';
import HoofbeatsLog from '@/components/dashboard/HoofbeatsLog';
import Blackboard from '@/components/dashboard/Blackboard';

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#1A1C1E] text-[#F8FAFC] overflow-hidden">
      {/* Column 1: Playbook Progress (Left) */}
      <div className="w-64 border-r border-[#3A3F45] flex flex-col bg-[#25282c]">
        <div className="p-6 border-b border-[#3A3F45]">
          <h1 className="text-xl font-bold tracking-tighter mb-1">CORRAL_01</h1>
          <p className="text-[10px] font-mono text-[#A0AEC0]">ORCHESTRATION LAYER V1.0</p>
        </div>
        
        <div className="flex-1 p-6 space-y-8">
          <div>
            <h2 className="text-xs font-bold text-[#A0AEC0] mb-4 tracking-widest uppercase">Playbook Stages</h2>
            <div className="space-y-4">
              {[
                { name: 'Environment Discovery', status: 'completed' },
                { name: 'Constraint Extraction', status: 'active' },
                { name: 'Agent Specialization', status: 'pending' },
                { name: 'Parallel Execution', status: 'pending' },
              ].map((stage, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    stage.status === 'completed' ? 'bg-[#2ECC71]' : 
                    stage.status === 'active' ? 'bg-[#0066FF] animate-pulse' : 'bg-[#3A3F45]'
                  }`} />
                  <span className={`text-sm ${stage.status === 'pending' ? 'text-[#A0AEC0]' : 'text-white'}`}>
                    {stage.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-[#3A3F45]">
            <div className="bg-[#1A1C1E] p-4 rounded border border-[#3A3F45]">
              <p className="text-[10px] font-mono text-[#0066FF] mb-2 uppercase">System Message</p>
              <p className="text-xs leading-relaxed text-[#A0AEC0]">
                All burros initialized. Monitoring for HITL interrupts on port 4432.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Column 2: Agent Card Grid & Blackboard (Center) */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <main className="p-8 space-y-8">
          <section>
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Active Burros</h2>
              <span className="text-xs font-mono text-[#A0AEC0]">3 AGENTS CONNECTED</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <div className="w-80 h-full">
        <HoofbeatsLog />
      </div>
    </div>
  );
}
