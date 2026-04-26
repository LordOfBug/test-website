export default function FeatureGrid() {
  const features = [
    {
      title: 'Agent Specialization',
      description: 'Deploy Burros with specific skillsets: from TypeScript engineering to financial audit compliance.',
      icon: '🫏',
    },
    {
      title: 'Corral Security',
      description: 'Isolate agent groups in secure Corrals with fine-grained tool access and data persistence policies.',
      icon: '🛡️',
    },
    {
      title: 'Blueprint Engine',
      description: 'Standardize complex multi-agent workflows with reusable Playbooks and Blackstone state management.',
      icon: '📜',
    },
  ];

  return (
    <section id="features" className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl uppercase tracking-tighter">
            Enterprise Pillars
          </h2>
          <p className="mt-4 text-xl text-muted-foreground font-mono text-sm">
            PRECISION // SECURITY // SCALE
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="corral-card">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
