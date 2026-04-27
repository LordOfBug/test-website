"use client";

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { CorralCard } from '@/components/CorralCard';
import { LayoutGrid, Users, Zap, Shield, Workflow, Terminal, Cpu, Code, Search } from 'lucide-react';

const BlueprintVisualizer = dynamic(() => import('@/components/BlueprintVisualizer').then(m => m.BlueprintVisualizer), { ssr: false });

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-obsidian selection:bg-electric-blue/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 hero-gradient">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="section-container relative z-10 text-center">
          <div className="mb-10 inline-block">
            <Image 
              src="/burros.png" 
              alt="Burros.AI Logo" 
              width={160} 
              height={160} 
              priority
              className="mx-auto drop-shadow-[0_0_30px_rgba(46,121,255,0.3)]"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6 text-white">
            Industrial <span className="text-electric-blue">Precision</span> Orchestration
          </h1>
          
          <p className="text-muted-silver text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Burros.AI is the high-performance framework for agentic workforce orchestration. 
            Deploy specialized <span className="text-white font-mono">Burros</span> into collaborative 
            <span className="text-white font-mono"> Corrals</span> and execute with 
            <span className="text-white font-mono"> Blueprints</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="btn-primary w-full sm:w-auto electric-glow">
              Initialize Corral
            </button>
            <button className="btn-secondary w-full sm:w-auto">
              Read Blueprints
            </button>
          </div>
        </div>
      </section>

      {/* The Corral Section */}
      <section className="py-24 bg-obsidian border-y border-white/5">
        <div className="section-container">
          <div className="text-left mb-16 border-l-4 border-electric-blue pl-6">
            <h2 className="text-4xl font-black uppercase mb-4 text-white">The Corral</h2>
            <p className="text-muted-silver text-lg">A 3-column deployment of specialized agentic specialists.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <CorralCard 
              icon={Cpu}
              title="Architect Burro"
              description="Structural design and system orchestration. Manages high-level blueprint decomposition."
            />
            <CorralCard 
              icon={Code}
              title="Developer Burro"
              description="Autonomous implementation and code review. Optimized for low-latency technical execution."
            />
            <CorralCard 
              icon={Search}
              title="Researcher Burro"
              description="Deep context retrieval and validation. Ensures every action is backed by verified data."
            />
          </div>
        </div>
      </section>

      {/* Blueprint Showcase */}
      <section className="py-24 bg-slate-gray/20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black uppercase mb-6 text-white">Execution Blueprints</h2>
              <p className="text-muted-silver text-lg mb-8 leading-relaxed">
                Move beyond simple prompts. Blueprints define deterministic task flows, 
                multi-agent handoffs, and industrial-grade quality gates.
              </p>
              <div className="space-y-4">
                <div className="blueprint-node">
                  <span className="text-electric-blue mr-2">STEP_01:</span> DECOMPOSE_OBJECTIVE
                </div>
                <div className="blueprint-node">
                  <span className="text-electric-blue mr-2">STEP_02:</span> ALLOCATE_SPECIALISTS
                </div>
                <div className="blueprint-node">
                  <span className="text-electric-blue mr-2">STEP_03:</span> EXECUTE_TASK_GRAPH
                </div>
              </div>
            </div>
            <div className="p-1 bg-white/5 rounded-lg">
              <BlueprintVisualizer />
            </div>
          </div>
        </div>
      </section>

      {/* Developer CTA */}
      <section className="py-32 bg-obsidian">
        <div className="section-container">
          <div className="bg-slate-gray/50 border border-white/10 rounded-lg p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent" />
            
            <h2 className="text-3xl font-black uppercase mb-8 text-white">Ready for Deployment?</h2>
            
            <div className="max-w-xl mx-auto mb-10 font-mono text-sm bg-black p-6 rounded border border-white/5 text-left">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-cyan-spark">
                $ npm install -g @burros/cli
              </div>
              <div className="text-muted-silver mt-2">
                $ burro login
              </div>
              <div className="text-muted-silver">
                $ burro deploy ./blueprints/main.yaml
              </div>
            </div>

            <button className="btn-primary electric-glow">
              Get Started with CLI
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-obsidian">
        <div className="section-container flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <Image src="/burros.png" alt="Burros Logo" width={32} height={32} />
            <span className="font-black uppercase tracking-tighter text-xl">Burros.AI</span>
          </div>
          <p className="text-muted-silver text-sm uppercase tracking-widest">
            © 2024 Burros.AI — Industrial-Tech Agentics.
          </p>
        </div>
      </footer>
    </main>
  );
}
