import React from 'react';
import Image from 'next/image';
import { Activity, Cpu, ShieldCheck } from 'lucide-react';

export type BurroStatus = 'IDLE' | 'PROCESSING' | 'WAITING' | 'ERROR';

interface BurroStatusCardProps {
  id: string;
  name: string;
  role: string;
  status: BurroStatus;
  currentTask?: string;
  load?: number; // 0 to 100
}

export const BurroStatusCard: React.FC<BurroStatusCardProps> = ({
  name,
  role,
  status,
  currentTask,
  load = 0
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'PROCESSING': return 'text-terminal-green';
      case 'WAITING': return 'text-warning-amber';
      case 'ERROR': return 'text-red-500';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusBg = () => {
    switch (status) {
      case 'PROCESSING': return 'bg-terminal-green';
      case 'WAITING': return 'bg-warning-amber';
      case 'ERROR': return 'bg-red-500';
      default: return 'bg-muted-foreground';
    }
  };

  return (
    <div className="burro-card flex flex-col gap-4 min-w-[280px]">
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <div className="relative w-10 h-10 bg-carbon border border-steel flex items-center justify-center overflow-hidden">
            <Image 
              src="/burros.png" 
              alt="Burro Logo" 
              width={32} 
              height={32}
              className="object-contain grayscale contrast-125"
            />
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-tight uppercase">{name}</h3>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{role}</p>
          </div>
        </div>
        <div className={`flex items-center gap-1.5 text-[10px] font-mono font-bold ${getStatusColor()}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${getStatusBg()} ${status === 'PROCESSING' ? 'animate-pulse shadow-[0_0_8px_#10B981]' : ''}`} />
          {status}
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-[9px] uppercase tracking-tighter text-muted-foreground font-bold">Current Task</label>
        <div className="bg-carbon/50 border border-steel/50 p-2 text-xs font-mono truncate">
          {currentTask || 'NO ACTIVE TASK'}
        </div>
      </div>

      <div className="mt-auto space-y-2">
        <div className="flex justify-between items-center text-[9px] font-mono uppercase text-muted-foreground">
          <span>Load / Capacity</span>
          <span>{load}%</span>
        </div>
        <div className="w-full h-1 bg-steel overflow-hidden">
          <div 
            className="h-full bg-terminal-green transition-all duration-500 ease-out" 
            style={{ width: `${load}%` }} 
          />
        </div>
      </div>
    </div>
  );
};
