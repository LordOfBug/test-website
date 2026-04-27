"use client";

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { CorralCard } from '@/components/CorralCard';
import { LayoutGrid, Users, Zap, Shield, Workflow, Terminal } from 'lucide-react';

const BlueprintVisualizer = dynamic(() => import('@/components/BlueprintVisualizer').then(m => m.BlueprintVisualizer), { ssr: false });

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-industrial-black selection:bg-logic-blue/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-logic-blue/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="section-container relative z-10 text-center">
          <div className="mb-8 inline-block">
            <Image 
              src="/burros.png" 
              alt="Burros.AI Logo" 
              width={180} 
              height={180} 
              priority
              className="mx-auto drop-shadow-[0_0_30px_rgba(0,102,255,0.3)]"
            />
          </div>
          
          <h1 className="heading-hero text-ghost-white">
            Unleash <span className="text-logic-blue">The Herd</span>
          </h1>
          
          <p className="subheading text-steel-grey max-w-3xl mx-auto mb-12">
            The first industrial-grade agentic orchestration platform. 
            Deploy specialized &quot;Burros&quot; into managed &quot;Corrals&quot; to automate 
            complex workflows with rugged reliability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="btn-primary w-full sm:w-auto">
              Deploy Your Corral
            </button>
            <button className="btn-outline w-full sm:w-auto">
              View Blueprint Docs
            </button>
          </div>
        </div>
      </section>

      {/* Blueprint Section */}
      <section className="bg-black/20 border-y border-white/5 py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black uppercase mb-6 text-ghost-white">The Blueprint Logic</h2>
              <p className="text-steel-grey text-lg mb-8">
                Don&apos;t just prompt—orchestrate. Burros.AI uses high-fidelity blueprints to 
                define task dependencies, quality gates, and agentic handoffs.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Workflow, text: "Multi-agent handoff protocols" },
                  { icon: Terminal, text: "Deterministic task execution" },
                  { icon: Shield, text: "Human-in-the-loop validation" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-ghost-white/80">
                    <item.icon className="w-5 h-5 text-logic-blue" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <BlueprintVisualizer />
          </div>
        </div>
      </section>

      {/* Corrals Grid */}
      <section className="py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase mb-4 text-ghost-white">Specialized Corrals</h2>
            <p className="text-steel-grey">Pre-configured environments for every domain.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <CorralCard 
              icon={LayoutGrid}
              title="The Dev Corral"
              description="Automate CI/CD pipelines, code reviews, and technical documentation with specialized coding burros."
            />
            <CorralCard 
              icon={Users}
              title="Content Corral"
              description="From SEO research to final copy editing. A herd of creative agents working in perfect sync."
            />
            <CorralCard 
              icon={Zap}
              title="Ops Corral"
              description="Real-time monitoring, incident response, and agentic workflow optimization for high-scale systems."
            />
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="border-t border-white/5 py-12">
        <div className="section-container text-center">
          <p className="text-steel-grey text-sm uppercase tracking-widest">
            © 2024 Burros.AI — Rugged Orchestration for the Agentic Era.
          </p>
        </div>
      </footer>
    </main>
  );
}
