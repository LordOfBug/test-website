export default function FeatureGrid() {
  const features = [
    {
      title: 'Burros',
      description: 'Specialized AI agents designed to execute specific tasks with precision.',
      icon: '🫏',
    },
    {
      title: 'Corrals',
      description: 'Managed environments where groups of Burros collaborate securely.',
      icon: '🏘️',
    },
    {
      title: 'Blueprints',
      description: 'Reusable templates for orchestrating complex multi-agent workflows.',
      icon: '📜',
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Core Pillars
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            The foundation of the Burros.AI orchestration platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
