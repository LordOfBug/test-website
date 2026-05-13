import React from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * Corral Card component for technical structural panels.
 * Implements 'slate-dark' background and 'slate-gray' borders.
 */
interface CorralCardProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

export const CorralCard = React.forwardRef<HTMLDivElement, CorralCardProps>(
  ({ className, active, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          'corral-card',
          active && 'border-electric-blue shadow-glow-blue',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CorralCard.displayName = 'CorralCard';
