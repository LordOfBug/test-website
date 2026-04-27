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
    <div className={cn("burro-card group", className)}>
      <div className="w-12 h-12 bg-electric-blue/10 rounded-[4px] flex items-center justify-center mb-6 transition-colors group-hover:bg-electric-blue/20">
        <Icon className="w-6 h-6 text-electric-blue" />
      </div>
      <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-white">{title}</h3>
      <p className="text-muted-silver leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};
