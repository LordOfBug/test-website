import { Code, ShieldCheck, Database, Search } from 'lucide-react';

const USE_CASES = [
  {
    title: 'Security & Compliance',
    description: 'Automate dependency audits, vulnerability scanning, and compliance reporting across your repositories.',
    icon: ShieldCheck,
    tags: ['Security', 'DevOps'],
  },
  {
    title: 'Data Engineering',
    description: 'Orchestrate agents to clean datasets, validate schemas, and move data between disparate systems.',
    icon: Database,
    tags: ['Data', 'Automation'],
  },
  {
    title: 'Technical Support',
    description: 'Deploy agents that can triage issues, investigate logs, and propose fixes for common infrastructure failures.',
    icon: Search,
    tags: ['Ops', 'Support'],
  },
  {
    title: 'Code Refactoring',
    description: 'Bulk update legacy codebases, migrate frameworks, or apply security patches across thousands of files.',
    icon: Code,
    tags: ['Dev', 'Engineering'],
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for Industry</h2>
            <p className="text-secondary text-lg">
              Burros.AI is designed for complex, high-stakes environments where security and precision are non-negotiable.
            </p>
          </div>
          <div>
            <button className="btn-secondary">View Case Studies</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {USE_CASES.map((uc, i) => (
            <div key={i} className="card-glass flex flex-col md:flex-row gap-6 p-8">
              <div className="w-16 h-16 shrink-0 rounded-sm bg-secondary/10 flex items-center justify-center">
                <uc.icon className="text-secondary" size={32} />
              </div>
              <div>
                <div className="flex gap-2 mb-4">
                  {uc.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/30 px-2 py-0.5 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{uc.title}</h3>
                <p className="text-secondary leading-relaxed">
                  {uc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
