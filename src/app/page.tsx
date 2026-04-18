import { ArrowRight, Bot, Cpu, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Orchestrate the Future of <span className="text-indigo-500">Agentic Work.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Burros.AI is the platform for coordinating specialist agents in Corrals. Execute complex task Blueprints with autonomous precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg flex items-center gap-2 transition-all">
                Launch your Corral <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all">
                View Documentation
              </button>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full" />
      </section>

      {/* Concept Section */}
      <section id="features" className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50">
          <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-6">
            <Layers className="text-indigo-400" />
          </div>
          <h3 className="text-xl font-bold mb-4">The Corral</h3>
          <p className="text-slate-400">
            A collaborative environment where specialized agents (Burros) aggregate their intelligence to solve complex problems.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50">
          <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-6">
            <Bot className="text-indigo-400" />
          </div>
          <h3 className="text-xl font-bold mb-4">Specialist Burros</h3>
          <p className="text-slate-400">
            Purpose-built agents trained for specific domains, from coding and design to data analysis and strategic planning.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50">
          <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-6">
            <Cpu className="text-indigo-400" />
          </div>
          <h3 className="text-xl font-bold mb-4">Blueprints</h3>
          <p className="text-slate-400">
            Standardized playbooks that define the sequence and cooperation required to execute high-value workflows.
          </p>
        </div>
      </section>
    </div>
  );
}
