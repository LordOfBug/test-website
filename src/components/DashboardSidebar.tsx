import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, Network, Settings, Database, Activity } from 'lucide-react';

export const DashboardSidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
    { icon: Network, label: 'Blueprints', href: '/dashboard/blueprints' },
    { icon: Activity, label: 'Corrals', href: '/dashboard/corrals' },
    { icon: Database, label: 'Blackboard', href: '/dashboard/blackboard' },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  ];

  return (
    <aside className="w-64 h-screen bg-slate-dark border-r border-slate-gray flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-electric-blue clip-path-polygon-[0_0,100%_0,100%_calc(100%-4px),calc(100%-4px)_100%,0_100%] flex items-center justify-center font-bold text-obsidian">
          B
        </div>
        <span className="font-display font-extrabold text-xl tracking-tighter">BURROS.AI</span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <div className="tracking-blueprint px-2 mb-4">Orchestration</div>
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 text-zinc-dimmed hover:text-muted-silver hover:bg-slate-gray/50 transition-colors rounded-sm group font-mono text-sm"
          >
            <item.icon size={18} className="group-hover:text-electric-blue transition-colors" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-gray">
        <div className="bg-obsidian/50 p-3 rounded-sm border border-slate-gray/50">
          <div className="text-[10px] text-zinc-dimmed uppercase font-mono mb-1">System Status</div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse" />
            <span className="text-xs font-mono text-muted-silver">Engines Nominal</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
