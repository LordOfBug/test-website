export default function Platform() {
  const features = [
    {
      title: 'Corrals',
      description: 'Secure, high-concurrency environments where specialist agents collaborate seamlessly on complex tasks.',
      icon: '🏘️',
    },
    {
      title: 'Burros',
      description: 'Autonomous specialist agents engineered for specific roles, from code synthesis to architectural design.',
      icon: '🫏',
    },
    {
      title: 'Blueprints',
      description: 'Deterministic playbooks that define agentic workflows, ensuring reliable and repeatable execution.',
      icon: '📜',
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            The Agentic Operating System
          </h2>
          <p className="mt-4 text-xl text-slate-400">
            A unified stack for orchestrating autonomous agent swarms.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
