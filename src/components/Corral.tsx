import React from 'react';

interface CorralProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Corral: React.FC<CorralProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`corral-container ${className}`}>
      <div className="absolute top-0 left-0 bg-burro-blue text-white px-3 py-1 text-xs font-mono uppercase tracking-widest">
        Corral: {title}
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
};

interface BurroProps {
  name: string;
  role: string;
  status?: 'idle' | 'active' | 'success' | 'error';
  className?: string;
}

export const Burro: React.FC<BurroProps> = ({ name, role, status = 'idle', className = '' }) => {
  const statusClasses = status === 'active' ? 'burro-active' : '';
  
  return (
    <div className={`burro-card ${statusClasses} ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-xs text-cyber-blue">AGENT_{name.toUpperCase()}</span>
        <div className={`h-2 w-2 rounded-full ${status === 'active' ? 'bg-cyber-blue animate-pulse' : 'bg-iron-grey'}`} />
      </div>
      <h4 className="text-lg font-bold mb-1">{name}</h4>
      <p className="text-sm text-iron-grey">{role}</p>
    </div>
  );
};
