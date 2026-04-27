import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-obsidian px-4 py-24 text-center md:px-6">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(46,121,255,0.08)_0%,transparent_100%)]" />
      
      <div className="container relative z-10 flex flex-col items-center gap-8">
        <div className="inline-flex items-center gap-2 bg-slate-dark border border-slate-gray px-4 py-1.5 rounded-sm mb-4">
          <span className="flex h-2 w-2 rounded-full bg-electric-blue animate-pulse shadow-[0_0_8px_var(--color-electric-blue)]" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-dimmed">System Status: Optimal</span>
        </div>

        <h1 className="max-w-5xl text-5xl font-extrabold tracking-tighter text-muted-silver md:text-7xl lg:text-8xl leading-[0.9] uppercase">
          Industrial Precision <br/>
          <span className="text-electric-blue">Orchestration</span>
        </h1>
        
        <p className="max-w-2xl text-lg text-zinc-dimmed md:text-xl leading-relaxed font-mono">
          DEPLOY SPECIALIST BURROS IN SECURE CORRALS. <br/>
          EXECUTE COMPLEX BLUEPRINTS WITH ZERO DRIFT.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row mt-4">
          <a href="/dashboard" className="btn-precision text-lg px-10">
            Initialize Corral
          </a>
          <a href="#how-it-works" className="btn-precision bg-slate-gray text-lg px-10">
            Audit Blueprints
          </a>
        </div>

        <div className="mt-16 w-full max-w-5xl mx-auto border border-slate-gray p-1 bg-slate-dark/50">
          <div className="aspect-video relative overflow-hidden group bg-obsidian border border-slate-gray">
            <div className="absolute inset-0 flex items-center justify-center bg-obsidian/40 group-hover:bg-obsidian/20 transition-colors cursor-pointer z-20">
              <div className="w-20 h-20 bg-electric-blue flex items-center justify-center text-white shadow-glow-blue transform group-hover:scale-105 transition-transform clip-path-notch">
                <Play fill="currentColor" size={32} className="ml-1" />
              </div>
            </div>
            {/* Mock Dashboard UI */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-slate-dark border-b border-slate-gray flex items-center px-4 gap-2 z-30">
               <div className="w-2 h-2 bg-slate-gray" />
               <div className="w-2 h-2 bg-slate-gray" />
               <div className="w-2 h-2 bg-slate-gray" />
               <div className="ml-4 text-[10px] text-zinc-dimmed font-mono tracking-widest uppercase">CORRAL://FLEET_ALPHA/MONITOR</div>
            </div>
            <div className="p-12 text-left font-mono text-xs text-zinc-dimmed/40 flex flex-col gap-2">
              <div>> INITIALIZING BURRO_ARCHITECT...</div>
              <div>> LOADING BLUEPRINT: DATA_REFINERY_V4</div>
              <div>> ESTABLISHING SECURE CORRAL ENVELOPE...</div>
              <div className="text-electric-blue">> CONNECTION ESTABLISHED</div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .clip-path-notch {
          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%);
        }
      `}</style>
    </section>
  );
}
