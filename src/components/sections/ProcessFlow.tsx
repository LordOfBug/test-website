export default function ProcessFlow() {
  const steps = [
    {
      step: "01",
      title: "Draft Playbook",
      description: "Define the workflow logic, success criteria, and required toolsets in a declarative YAML manifest."
    },
    {
      step: "02",
      title: "Provision Corral",
      description: "Initialize a secure compute boundary and deploy specialized Burros with scoped credentials."
    },
    {
      step: "03",
      title: "Orchestrate",
      description: "Monitor real-time ReAct reasoning loops as your fleet executes the mission with human-in-the-loop options."
    }
  ];

  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4 uppercase">Operational Flow</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono text-sm">
            MISSION_LIFECYCLE_SEQUENCE
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((item, index) => (
              <div key={index} className="bg-card border border-border p-8 text-center transition-all hover:border-primary">
                <div className="w-16 h-16 bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-8 font-mono">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
