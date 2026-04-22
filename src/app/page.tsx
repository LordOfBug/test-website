import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Basic Hero for scaffold verification */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-white px-4 py-24 text-center md:px-6">
        <div className="container relative z-10 flex flex-col items-center gap-6">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-primary md:text-6xl lg:text-7xl">
            Orchestrate Agentic Flows with <span className="text-accent">Precision</span>
          </h1>
          <p className="max-w-2xl text-lg text-foreground/60 md:text-xl">
            Manage autonomous fleets of specialist agents through powerful Corrals and Playbooks.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="#contact" className="btn-primary">
              Launch a Corral
            </Link>
            <Link href="#how-it-works" className="btn-secondary">
              View Playbooks
            </Link>
          </div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(37,99,235,0.05)_0%,transparent_100%)]" />
      </section>

      {/* Scaffold Sections */}
      <div className="container mx-auto py-24 text-center">
        <p className="text-foreground/40 italic">Project scaffold complete. Sections pending implementation.</p>
      </div>
    </div>
  )
}
