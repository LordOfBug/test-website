import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-white px-4 py-24 text-center md:px-6">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(37,99,235,0.08)_0%,transparent_100%)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-50 -z-10" />
      
      <div className="container relative z-10 flex flex-col items-center gap-8">
        <div className="inline-flex items-center gap-2 bg-surface border border-border px-4 py-1.5 rounded-full mb-4">
          <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary/60">Now in Public Beta</span>
        </div>

        <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-primary md:text-7xl lg:text-8xl leading-[1.1]">
          Orchestrate Agentic Flows with <span className="text-accent">Precision</span>
        </h1>
        
        <p className="max-w-2xl text-lg text-foreground/60 md:text-2xl leading-relaxed">
          The orchestration layer for autonomous agent fleets. Deploy specialist Burros in secure Corrals and execute complex Playbooks.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row mt-4">
          <a href="#contact" className="btn-primary text-lg px-8 py-4">
            Launch a Corral
          </a>
          <a href="#how-it-works" className="btn-secondary text-lg px-8 py-4">
            View Playbooks
          </a>
        </div>

        <div className="mt-16 w-full max-w-5xl mx-auto">
          <div className="card-glass aspect-video relative overflow-hidden group shadow-2xl border-border">
            <div className="absolute inset-0 flex items-center justify-center bg-surface/30 group-hover:bg-surface/10 transition-colors cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform">
                <Play fill="currentColor" size={32} className="ml-1" />
              </div>
            </div>
            {/* Mock Dashboard UI */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-surface/80 backdrop-blur-md border-b border-border flex items-center px-4 gap-2">
               <div className="w-3 h-3 rounded-full bg-red-400" />
               <div className="w-3 h-3 rounded-full bg-yellow-400" />
               <div className="w-3 h-3 rounded-full bg-green-400" />
               <div className="ml-4 text-xs text-primary/40 font-mono">corral.burros.ai/fleet/primary</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
