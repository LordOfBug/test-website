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
      <div className="w-12 h-12 bg-burnt-orange/10 rounded-lg flex items-center justify-center mb-6 transition-colors group-hover:bg-burnt-orange/20">
        <Icon className="w-6 h-6 text-burnt-orange" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-sand">{title}</h3>
      <p className="text-dusty-gray leading-relaxed">
        {description}
      </p>
    </div>
  );
};
