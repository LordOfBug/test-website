import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface CorralCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export const CorralCard = ({ title, description, icon: Icon, className }: CorralCardProps) => {
  return (
    <div className={cn("corral-card group", className)}>
      <div className="w-12 h-12 bg-obsidian border border-slate-gray flex items-center justify-center mb-6 transition-colors group-hover:border-electric-blue">
        <Icon className="w-6 h-6 text-electric-blue" />
      </div>
      <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-muted-silver">{title}</h3>
      <p className="text-zinc-dimmed leading-relaxed text-sm font-mono">
        {description}
      </p>
      <div className="mt-6 flex items-center gap-2">
        <div className="h-1 w-1 rounded-full bg-electric-blue animate-pulse" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-dimmed/40">Status: Active</span>
      </div>
    </div>
  );
};
