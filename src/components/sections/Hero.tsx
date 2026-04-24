import { Play } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-obsidian px-4 py-24 text-center md:px-6">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(37,99,235,0.15)_0%,transparent_100%)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-burro-blue/10 rounded-full blur-3xl opacity-50 -z-10" />
      
      <div className="container relative z-10 flex flex-col items-center gap-8">
        <div className="inline-flex items-center gap-2 bg-slate-muted border border-iron-grey px-4 py-1.5 mb-4">
          <span className="flex h-2 w-2 rounded-full bg-cyber-blue animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-cyber-blue">Now in Public Beta</span>
        </div>

        <div className="flex flex-col items-center mb-4">
          <Image 
            src="/images/burros.png" 
            alt="Burros.AI Logo" 
            width={180} 
            height={60} 
            className="mb-8 invert"
            priority
          />
          <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl leading-[1.1]">
            Agentic Flow <span className="text-burro-blue">Orchestration</span>
          </h1>
        </div>
        
        <p className="max-w-2xl text-lg text-iron-grey md:text-2xl leading-relaxed">
          The orchestration layer for autonomous agent fleets. Deploy specialist <span className="text-white">Burros</span> in secure <span className="text-white">Corrals</span> and execute complex <span className="text-white">Playbooks</span>.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row mt-4">
          <a href="#contact" className="bg-burro-blue hover:bg-cyber-blue text-white font-bold py-4 px-8 transition-colors">
            Launch a Corral
          </a>
          <a href="#how-it-works" className="border border-iron-grey hover:border-white text-white font-bold py-4 px-8 transition-colors">
            View Playbooks
          </a>
        </div>

        <div className="mt-16 w-full max-w-5xl mx-auto">
          <div className="border border-iron-grey aspect-video relative overflow-hidden group shadow-2xl bg-slate-muted">
            <div className="absolute inset-0 flex items-center justify-center bg-obsidian/40 group-hover:bg-obsidian/20 transition-colors cursor-pointer">
              <div className="w-20 h-20 bg-burro-blue flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform">
                <Play fill="currentColor" size={32} className="ml-1" />
              </div>
            </div>
            {/* Mock Dashboard UI */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-slate-muted/80 backdrop-blur-md border-b border-iron-grey flex items-center px-4 gap-2">
               <div className="w-3 h-3 bg-red-500/50" />
               <div className="w-3 h-3 bg-yellow-500/50" />
               <div className="w-3 h-3 bg-green-500/50" />
               <div className="ml-4 text-xs text-iron-grey font-mono">corral.burros.ai/fleet/primary</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
