import { cn } from '@/lib/utils';

interface BurroStatus {
  name: string;
  status: string;
  progress: number;
}

interface CorralCardProps {
  id: string;
  status: string;
  burros: BurroStatus[];
  updates: string[];
  className?: string;
}

export default function CorralCard({ id, status, burros, updates, className }: CorralCardProps) {
  return (
    <div className={cn("corral-card group flex flex-col gap-4", className)}>
      <div className="flex justify-between items-center border-b border-slate-gray pb-4">
        <span className="font-mono text-sm font-bold text-muted-silver">{id}</span>
        <span className={cn(
          "text-[10px] font-mono px-2 py-0.5 border uppercase",
          status === 'OK' ? "border-status-success text-status-success" : "border-electric-blue text-electric-blue"
        )}>
          {status}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-dimmed">Active Burros:</span>
        {burros.map((burro, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-muted-silver">(B) {burro.name}</span>
              <span className="text-zinc-dimmed">[{burro.status}]</span>
            </div>
            <div className="w-full h-1.5 bg-obsidian border border-slate-gray">
              <div 
                className="h-full bg-electric-blue transition-all duration-500" 
                style={{ width: `${burro.progress}%` }} 
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 pt-4 border-t border-slate-gray">
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-dimmed">Shared Blackboard:</span>
        <div className="mt-2 flex flex-col gap-1">
          {updates.map((update, idx) => (
            <p key={idx} className="text-[10px] font-mono text-zinc-dimmed truncate">
              {'>'} "{update}"
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
