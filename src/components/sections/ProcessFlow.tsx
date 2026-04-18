export default function ProcessFlow() {
  const steps = [
    {
      step: "01",
      title: "Define Blueprint",
      description: "Design the task sequence and define requirements for your specific use case."
    },
    {
      step: "02",
      title: "Assemble Corral",
      description: "Select the specialized Burros required to execute each stage of the blueprint."
    },
    {
      step: "03",
      title: "Execute & Scale",
      description: "Watch your agents collaborate in real-time, delivering consistent outcomes at scale."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From architecture to autonomous execution in three simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((item, index) => (
              <div key={index} className="bg-white text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
