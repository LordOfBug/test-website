import { ChevronRight, Terminal, UserPlus, Zap } from 'lucide-react';

const STEPS = [
  {
    title: 'Create a Corral Account',
    description: 'Sign up to get your organization ID and API Key.',
    cta: 'Sign up for Free',
    link: 'https://app.burros.ai/signup',
    icon: UserPlus,
  },
  {
    title: 'Provision a Runner',
    description: 'Deploy the Burro Runner to your infrastructure.',
    code: `docker run -d --name burro-runner \\
  -e CORRAL_API_KEY=your_key_here \\
  burros/runner:latest`,
    icon: Terminal,
  },
  {
    title: 'Define Your First Task',
    description: 'Tell your Burro what to do in plain English.',
    input: 'Audit dependencies in /app and report vulnerabilities.',
    icon: Zap,
  },
  {
    title: 'Watch it Work',
    description: 'Monitor the reasoning loop in the Corral dashboard.',
    icon: ChevronRight,
  },
];

export default function GettingStarted() {
  return (
    <section id="getting-started" className="py-24 bg-surface/20 border-t border-secondary/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Zero to One in 60s</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Deploy your first autonomous agent fleet with just a few steps.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {STEPS.map((step, i) => (
            <div key={i} className="flex gap-6 md:gap-10">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary font-bold bg-background">
                  {i + 1}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-0.5 h-full bg-secondary/10 mt-2" />
                )}
              </div>
              <div className="pb-12 w-full">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <step.icon size={20} className="text-secondary" />
                  {step.title}
                </h3>
                <p className="text-secondary mb-6">{step.description}</p>
                
                {step.cta && (
                  <a href={step.link} className="btn-primary inline-block">
                    {step.cta}
                  </a>
                )}

                {step.code && (
                  <div className="bg-black rounded-sm p-6 border border-secondary/20 font-mono text-sm text-white overflow-x-auto shadow-2xl">
                    <pre>
                      <code className="text-primary">{step.code}</code>
                    </pre>
                  </div>
                )}

                {step.input && (
                  <div className="bg-surface border border-secondary/20 p-4 rounded-sm flex items-center gap-4 text-secondary italic">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    "{step.input}"
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center p-12 bg-primary/10 border border-primary/20 rounded-sm w-full">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to automate?</h3>
            <p className="text-secondary mb-10 max-w-xl">
              Join teams building the next generation of intelligent software systems with Burros.AI.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://app.burros.ai/signup" className="btn-primary px-10 py-4 text-lg">Get Started Now</a>
              <button className="btn-secondary px-10 py-4 text-lg">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
