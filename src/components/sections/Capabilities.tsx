import React from 'react';
import { UserCheck, Cpu, Box, Lock, Terminal } from 'lucide-react';

interface Capability {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

const CAPABILITIES: Capability[] = [
  {
    title: 'Plain-Language Tasks',
    description: 'Instruct your agents using natural language. No complex DSLs or brittle scripts required.',
    icon: MessageSquareIcon,
  },
  {
    title: 'Docker-First Deployment',
    description: 'Deploy a Burro Runner to any environment with a single command. Scales horizontally with ease.',
    icon: Box,
  },
  {
    title: 'Human-in-the-Loop',
    description: 'Build trust with mandatory approval gates for sensitive actions like database writes or deployments.',
    icon: UserCheck,
  },
  {
    title: 'LLM Agnostic',
    description: 'Switch between OpenAI, Anthropic, Gemini, or local models without changing your task definitions.',
    icon: Cpu,
  },
  {
    title: 'Secure Execution',
    description: 'Sensitive data never leaves your infrastructure. The runner executes locally and only reports progress.',
    icon: Lock,
  },
  {
    title: 'MCP-Native Skills',
    description: 'Extend your agents with the Model Context Protocol (MCP). Connect to Git, Slack, AWS, and more.',
    icon: Terminal,
  }
];

function MessageSquareIcon({ className, size }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 border-y border-steel-grey/10 bg-industrial-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-ghost-white mb-6 uppercase tracking-tight">Core Capabilities</h2>
          <p className="text-steel-grey max-w-2xl mx-auto text-lg">
            Everything you need to orchestrate a production-ready AI agent fleet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAPABILITIES.map((cap, i) => (
            <div key={i} className="corral-card group">
              <div className="w-12 h-12 rounded-sm bg-logic-blue/10 flex items-center justify-center mb-6 group-hover:bg-logic-blue/20 transition-colors">
                <cap.icon className="text-logic-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold text-ghost-white mb-4">{cap.title}</h3>
              <p className="text-steel-grey text-sm leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
