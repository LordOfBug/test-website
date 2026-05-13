import { DashboardSidebar } from '@/components/DashboardSidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-obsidian text-muted-silver overflow-hidden">
      <DashboardSidebar />
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-slate-gray flex items-center justify-between px-8 bg-slate-dark/30">
          <div className="flex items-center gap-4">
            <h1 className="text-sm font-mono text-zinc-dimmed">CORRAL / <span className="text-muted-silver">PRODUCTION_ALPHA</span></h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 text-xs font-mono">
              <span className="text-zinc-dimmed">LOAD:</span>
              <span className="text-electric-blue">14.2%</span>
            </div>
            <div className="w-px h-4 bg-slate-gray" />
            <button className="text-xs font-mono text-zinc-dimmed hover:text-muted-silver transition-colors">
              LOGOUT
            </button>
          </div>
        </header>
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
