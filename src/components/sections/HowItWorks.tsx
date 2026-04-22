import { Cpu, Shield, UserCheck, Zap, Server, Layout, MessageSquare, Terminal } from 'lucide-react';

const RE_ACT_STEPS = [
  {
    title: 'Thought',
    icon: MessageSquare,
    description: 'The Burro analyzes the task, breaks it down into sub-goals, and reasons about the next best step.',
    code: 'THOUGHT: I need to check the dependencies in the root directory for known security vulnerabilities.',
  },
  {
    title: 'Action',
    icon: Terminal,
    description: 'Based on its thought, the agent selects and executes a tool or command from its MCP skills.',
    code: 'ACTION: bash_run("npm audit --json")',
  },
  {
    title: 'Observation',
    icon: Layout,
    description: 'The agent reads the output of the action, integrating the new data into its world model.',
    code: 'OBSERVATION: Found 3 high-severity vulnerabilities in "lodash" and "debug".',
  },
  {
    title: 'Completion',
    icon: Zap,
    description: 'The loop repeats until the goal is achieved or a Human-in-the-Loop approval is required.',
    code: 'THOUGHT: I found the vulnerabilities. Now I will generate a fix report and propose updates.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">The Concept</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg md:text-xl">
            Burros.AI orchestrates agentic flows using a robust architecture of specialist agents, secure environments, and predefined blueprints.
          </p>
        </div>

        {/* Concept Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="card-glass p-8 relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/10 rounded-sm">
                <Cpu className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary">Burros</h3>
            </div>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Specialist agents designed for specific tasks. From code generation to market analysis, Burros are the workhorses of your orchestration.
            </p>
            <ul className="space-y-3">
              {['Task-specific skills', 'Autonomous reasoning', 'Tool & API integration'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground/60 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-glass p-8 relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/10 rounded-sm">
                <Shield className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary">Corrals</h3>
            </div>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Secure, collaborative environments where Burros execute flows. Corrals ensure that your data and tools remain under your control.
            </p>
            <ul className="space-y-3">
              {['Secure execution', 'Collaborative spaces', 'Human-in-the-Loop gates'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground/60 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-glass p-8 relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/10 rounded-sm">
                <Zap className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary">Playbooks</h3>
            </div>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              The blueprints that guide agentic orchestration. Playbooks define the sequence, tools, and logic required to solve complex problems.
            </p>
            <ul className="space-y-3">
              {['Defined sequences', 'Dynamic logic', 'Versioned blueprints'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground/60 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Architecture Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center">
          <div>
            <span className="text-accent font-bold text-sm uppercase tracking-widest mb-4 block">Deployment Architecture</span>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Secure, Decoupled Orchestration</h3>
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
              We separate the control plane from the execution environment. This ensures you get SaaS-level convenience while maintaining absolute security over your infrastructure.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white border border-border rounded-sm flex items-center justify-center">
                   <Layout className="text-accent" size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-primary">Control Plane (SaaS)</h4>
                   <p className="text-foreground/60 text-sm">Define tasks, monitor reasoning, and manage HITL approvals from our dashboard.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white border border-border rounded-sm flex items-center justify-center">
                   <Server className="text-accent" size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-primary">Burro Runner (Self-Hosted)</h4>
                   <p className="text-foreground/60 text-sm">A lightweight worker that executes tasks locally in your secure environment.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 border border-border rounded-xl shadow-sm">
             <div className="aspect-square bg-surface rounded-lg border border-dashed border-border flex items-center justify-center">
                <p className="text-foreground/40 font-mono text-sm">[Architecture Diagram Placeholder]</p>
             </div>
          </div>
        </div>

        {/* ReAct Loop Visualization */}
        <div className="relative">
          <div className="text-center mb-16">
            <span className="text-accent font-bold text-sm uppercase tracking-widest mb-4 block">The Reasoning Loop</span>
            <h3 className="text-3xl font-bold text-primary">The ReAct Process</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-border -z-10" />
            
            {RE_ACT_STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-sm bg-white border border-border flex items-center justify-center mb-6 relative hover:border-accent transition-colors">
                  <step.icon className="text-accent" size={32} />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="text-primary font-bold mb-3">{step.title}</h4>
                <p className="text-foreground/60 text-sm text-center mb-6 leading-relaxed">
                  {step.description}
                </p>
                <div className="w-full bg-primary rounded-sm p-3 border border-primary">
                  <code className="text-[10px] font-mono text-white/90 leading-tight block">
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
