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
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How it Works</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Burros.AI uses a decoupled architecture to provide both SaaS-level ease of use and local-level security.
          </p>
        </div>

        {/* Architecture Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div className="card-glass relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Layout size={120} />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/20 rounded-sm">
                <Layout className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Corral (Control Plane)</h3>
            </div>
            <p className="text-secondary mb-8 leading-relaxed">
              Our hosted SaaS platform acts as the brain. Define complex tasks in plain language, monitor real-time reasoning loops, and handle Human-in-the-Loop approvals from a central dashboard.
            </p>
            <ul className="space-y-4">
              {['Plain-language task definition', 'Real-time observability', 'HITL approval gates', 'Task history & audit logs'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-glass relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Server size={120} />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-secondary/20 rounded-sm">
                <Server className="text-secondary" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Burro Runner (Worker)</h3>
            </div>
            <p className="text-secondary mb-8 leading-relaxed">
              A lightweight, secure worker that runs in your infrastructure. It connects to Corral to receive tasks but executes them locally, maintaining access to your files, tools, and private APIs.
            </p>
            <ul className="space-y-4">
              {['Deploy anywhere via Docker', 'Local tool execution', 'MCP Skill integration', 'Sandboxed & secure'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ReAct Loop Visualization */}
        <div className="relative">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm uppercase tracking-widest mb-4 block">The Reasoning Loop</span>
            <h3 className="text-3xl font-bold text-white">The ReAct Process</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-secondary/10 -z-10" />
            
            {RE_ACT_STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-sm bg-surface border border-secondary/20 flex items-center justify-center mb-6 relative group-hover:border-primary/50 transition-colors bg-background">
                  <step.icon className="text-primary" size={32} />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background border border-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="text-white font-bold mb-3">{step.title}</h4>
                <p className="text-secondary text-sm text-center mb-6 leading-relaxed">
                  {step.description}
                </p>
                <div className="w-full bg-black rounded-sm p-3 border border-secondary/10">
                  <code className="text-[10px] font-mono text-primary leading-tight block">
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
