import React from 'react';

interface BurroProps {
  name: string;
  role: string;
  status: 'idle' | 'active' | 'waiting' | 'success' | 'error';
}

export function Burro({ name, role, status }: BurroProps) {
  const statusClasses = {
    idle: 'status-idle',
    active: 'status-working',
    waiting: 'status-waiting',
    success: 'status-success',
    error: 'status-error',
  };

  return (
    <div className="flex flex-col border border-border bg-background p-4 min-w-[200px]">
      <div className="flex justify-between items-start mb-4">
        <span className="font-mono text-[10px] text-muted-foreground uppercase">Agent</span>
        <span className={`burro-status-badge ${statusClasses[status]}`}>
          {status}
        </span>
      </div>
      <h4 className="text-white font-bold text-sm mb-1 uppercase">{name}</h4>
      <p className="text-muted-foreground text-[10px] leading-tight mb-4">{role}</p>
      <div className="mt-auto pt-4 border-t border-border flex gap-1">
        <div className="w-full h-1 bg-muted">
          {status === 'active' && <div className="h-full bg-primary animate-[shimmer_2s_infinite] w-1/2" />}
        </div>
      </div>
    </div>
  );
}

interface CorralProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Corral({ title, children, className = "" }: CorralProps) {
  return (
    <div className={`border-2 border-accent bg-card relative ${className}`}>
      <div className="absolute -top-3 left-6 bg-accent px-3 py-1">
        <span className="text-white font-mono text-[10px] font-bold uppercase tracking-widest">
          Corral: {title}
        </span>
      </div>
      <div className="p-8 flex flex-wrap gap-4 pt-10">
        {children}
      </div>
      <div className="absolute -bottom-3 right-6 bg-border px-3 py-1">
        <span className="text-muted-foreground font-mono text-[10px] uppercase">
          SECURE_ORCHESTRATION_LAYER
        </span>
      </div>
    </div>
  );
}
