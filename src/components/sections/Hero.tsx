import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-surface border border-secondary/20 px-4 py-1.5 rounded-full mb-8">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Now in Public Beta</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
          The Orchestration Layer for <br />
          <span className="text-primary">Autonomous Agent Fleets</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
          Deploy, manage, and scale production-grade AI agents with a decoupled SaaS control plane and secure self-hosted workers.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a href="https://app.burros.ai/signup" className="btn-primary px-8 py-4 text-lg flex items-center gap-2">
            Get Started <ChevronRight size={20} />
          </a>
          <button className="btn-secondary px-8 py-4 text-lg flex items-center gap-2">
            <Play size={18} /> Watch Demo
          </button>
        </div>

        <div className="mt-20 relative max-w-5xl mx-auto">
          <div className="aspect-video bg-black rounded-sm border border-secondary/20 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center bg-surface/50 group-hover:bg-surface/30 transition-colors cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform">
                <Play fill="currentColor" size={32} className="ml-1" />
              </div>
            </div>
            {/* Mock Dashboard UI */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-secondary/10 border-b border-secondary/20 flex items-center px-4 gap-2">
               <div className="w-2 h-2 rounded-full bg-red-500/50" />
               <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
               <div className="w-2 h-2 rounded-full bg-green-500/50" />
               <div className="ml-4 text-[10px] text-secondary font-mono tracking-wider">corral.burros.ai/fleet/primary</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
