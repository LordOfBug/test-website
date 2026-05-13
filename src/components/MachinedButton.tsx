import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Machined Button component based on 'Industrial Precision' specs.
 * Uses a polygon clip-path for the characteristic 45-degree technical cut.
 */
interface MachinedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

export const MachinedButton = React.forwardRef<HTMLButtonElement, MachinedButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variantClasses = {
      primary: 'bg-electric-blue hover:bg-electric-blue/90 text-white',
      secondary: 'bg-slate-gray hover:bg-slate-gray/90 text-muted-silver',
      danger: 'bg-safety-orange hover:bg-safety-orange/90 text-white',
    };

    return (
      <button
        ref={ref}
        className={twMerge(
          'btn-precision',
          variantClasses[variant],
          className
        )}
        {...props}
      />
    );
  }
);

MachinedButton.displayName = 'MachinedButton';
