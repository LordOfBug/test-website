import { Cpu, Shield, Zap, Layout, MessageSquare, Terminal } from 'lucide-react';
import { Corral, Burro } from '../Corral';

const RE_ACT_STEPS = [
  {
    title: 'Thought',
    icon: MessageSquare,
    description: 'The Burro analyzes the task, breaks it down into sub-goals, and reasons about the next best step.',
    code: 'THOUGHT: I need to check the dependencies...',
  },
  {
    title: 'Action',
    icon: Terminal,
    description: 'Based on its thought, the agent selects and executes a tool or command.',
    code: 'ACTION: bash_run("npm audit --json")',
  },
  {
    title: 'Observation',
    icon: Layout,
    description: 'The agent reads the output of the action, integrating the new data.',
    code: 'OBSERVATION: Found 3 vulnerabilities.',
  },
  {
    title: 'Completion',
    icon: Zap,
    description: 'The loop repeats until the goal is achieved or human approval is required.',
    code: 'THOUGHT: I will generate a fix report.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-obsidian">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">The Ecosystem</h2>
          <p className="text-iron-grey max-w-2xl mx-auto text-lg md:text-xl">
            Burros.AI orchestrates agentic flows using specialist agents and secure environments.
          </p>
        </div>

        {/* Concept Visualization using Corral and Burro components */}
        <div className="mb-32">
          <Corral title="Engineering Operations" className="shadow-2xl">
            <Burro name="Architect" role="System Design & Planning" status="idle" />
            <Burro name="Coder" role="TypeScript & Python Specialist" status="active" />
            <Burro name="Auditor" role="Security & Compliance" status="idle" />
            <Burro name="Ops" role="Deployment & Monitoring" status="idle" />
            <Burro name="Doc" role="Technical Documentation" status="idle" />
            <Burro name="Tester" role="QA & Integration" status="idle" />
          </Corral>
        </div>

        {/* Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="border border-iron-grey bg-slate-muted p-8">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="text-cyber-blue" size={28} />
              <h3 className="text-2xl font-bold text-white">Burros</h3>
            </div>
            <p className="text-iron-grey mb-8 leading-relaxed text-sm">
              Specialist agents designed for specific tasks. From code generation to market analysis, Burros are the workhorses of your orchestration.
            </p>
          </div>

          <div className="border border-iron-grey bg-slate-muted p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-cyber-blue" size={28} />
              <h3 className="text-2xl font-bold text-white">Corrals</h3>
            </div>
            <p className="text-iron-grey mb-8 leading-relaxed text-sm">
              Secure, collaborative environments where Burros execute flows. Corrals ensure that your data and tools remain under your control.
            </p>
          </div>

          <div className="border border-iron-grey bg-slate-muted p-8">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="text-cyber-blue" size={28} />
              <h3 className="text-2xl font-bold text-white">Playbooks</h3>
            </div>
            <p className="text-iron-grey mb-8 leading-relaxed text-sm">
              The blueprints that guide agentic orchestration. Playbooks define the sequence, tools, and logic required to solve complex problems.
            </p>
          </div>
        </div>

        {/* ReAct Loop Visualization */}
        <div className="relative">
          <div className="text-center mb-16">
            <span className="text-cyber-blue font-bold text-sm uppercase tracking-widest mb-4 block">The Reasoning Loop</span>
            <h3 className="text-3xl font-bold text-white uppercase">The ReAct Process</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {RE_ACT_STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col border border-iron-grey bg-slate-muted p-6">
                <div className="flex items-center justify-between mb-4">
                  <step.icon className="text-cyber-blue" size={24} />
                  <span className="text-xs font-mono text-iron-grey">0{idx + 1}</span>
                </div>
                <h4 className="text-white font-bold mb-3 uppercase tracking-tighter">{step.title}</h4>
                <p className="text-iron-grey text-xs mb-6 leading-relaxed">
                  {step.description}
                </p>
                <div className="mt-auto bg-obsidian p-3 border border-iron-grey">
                  <code className="text-[10px] font-mono text-cyber-blue leading-tight block">
                    {step.code}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
