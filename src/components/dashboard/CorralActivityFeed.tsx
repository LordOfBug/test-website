import React, { useEffect, useRef } from 'react';

export interface ActivityEvent {
  id: string;
  timestamp: string;
  burroId: string;
  burroType: 'ARCHITECT' | 'DEVELOPER' | 'RESEARCHER' | 'SYSTEM';
  event: string;
  message: string;
  severity: 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR';
}

interface CorralActivityFeedProps {
  events: ActivityEvent[];
}

export const CorralActivityFeed: React.FC<CorralActivityFeedProps> = ({ events }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [events]);

  const getBurroColor = (type: ActivityEvent['burroType']) => {
    switch (type) {
      case 'ARCHITECT': return 'text-blue-400';
      case 'DEVELOPER': return 'text-purple-400';
      case 'RESEARCHER': return 'text-amber-400';
      case 'SYSTEM': return 'text-stark-white';
      default: return 'text-muted-foreground';
    }
  };

  const getSeverityColor = (severity: ActivityEvent['severity']) => {
    switch (severity) {
      case 'SUCCESS': return 'text-terminal-green';
      case 'WARNING': return 'text-warning-amber';
      case 'ERROR': return 'text-red-500';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="panel flex flex-col h-full overflow-hidden">
      <div className="border-b border-steel p-3 flex justify-between items-center bg-graphite/80">
        <h2 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 bg-terminal-green animate-pulse rounded-full shadow-[0_0_8px_#10B981]" />
          Corral Activity Feed
        </h2>
        <div className="text-[10px] font-mono text-muted-foreground uppercase">
          Live Connection: Est.
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-1.5 font-mono text-[11px] leading-relaxed scrollbar-thin scrollbar-thumb-steel"
      >
        {events.map((ev) => (
          <div key={ev.id} className="flex gap-2 group hover:bg-white/5 transition-colors">
            <span className="text-muted-foreground shrink-0 select-none">[{ev.timestamp}]</span>
            <span className={`${getBurroColor(ev.burroType)} shrink-0 font-bold select-none`}>
              [{ev.burroId}]
            </span>
            <span className={`${getSeverityColor(ev.severity)} shrink-0 font-bold uppercase select-none`}>
              {ev.event}
            </span>
            <span className="text-stark-white/90 break-words">
              {ev.message}
            </span>
          </div>
        ))}
        {events.length === 0 && (
          <div className="text-muted-foreground italic">No activity detected in the current corral...</div>
        )}
      </div>

      <div className="bg-carbon p-2 border-t border-steel flex gap-4">
        {['SYSTEM', 'ARCHITECT', 'DEVELOPER', 'RESEARCHER'].map((filter) => (
          <button 
            key={filter}
            className="text-[9px] font-mono font-bold uppercase text-muted-foreground hover:text-stark-white transition-colors"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};
