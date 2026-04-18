export default function Hero() {
  return (
    <section className="relative bg-white pt-20 pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
            Orchestrate Your <span className="text-primary">Agentic Workforce</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            Burros.AI enables specialist agents to collaborate in organized corrals, executing complex tasks through precision-engineered blueprints.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1">
              Deploy Your First Corral
            </a>
            <a href="#features" className="px-8 py-4 bg-white text-primary border-2 border-primary font-bold rounded-lg hover:bg-blue-50 transition transform hover:-translate-y-1">
              Explore Blueprints
            </a>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
    </section>
  );
}
