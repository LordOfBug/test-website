export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <div className="max-w-3xl space-y-6">
        <div className="flex justify-center mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/burros.png" 
            alt="Burros.AI Logo" 
            className="h-12 w-auto"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
          Burros.<span className="text-primary">AI</span>
        </h1>
        <p className="text-xl text-secondary max-w-xl mx-auto">
          Production-grade AI agent fleet orchestration. Decoupled control plane. Secure local execution.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Documentation</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-16">
          <div className="card-glass text-left">
            <h3 className="text-lg font-bold mb-2">Corral</h3>
            <p className="text-sm text-secondary">The SaaS control plane for task definition, monitoring, and HITL approvals.</p>
          </div>
          <div className="card-glass text-left">
            <h3 className="text-lg font-bold mb-2">Burro Runner</h3>
            <p className="text-sm text-secondary">The secure edge worker that runs anywhere, accessing local tools and MCP skills.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
