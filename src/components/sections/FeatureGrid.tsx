export default function FeatureGrid() {
  const features = [
    {
      title: "Burros",
      description: "Autonomous specialist agents designed for high-precision execution of specific domain tasks.",
      icon: "🫏"
    },
    {
      title: "Corrals",
      description: "Secure, collaborative environments where multiple Burros sync and share context to solve multi-stage problems.",
      icon: "🏗️"
    },
    {
      title: "Blueprints",
      description: "Standardized orchestration playbooks that define how agents interact and hand off tasks for guaranteed results.",
      icon: "📋"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">The Platform Pillars</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to build, scale, and manage a high-performance agentic ecosystem.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
