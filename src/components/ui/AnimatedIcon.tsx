
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedIconProps {
  icon: string;
  name: string;
  color?: 'violet' | 'pink' | 'orange' | 'cyan';
  delay?: number;
  className?: string;
}

export default function AnimatedIcon({ 
  icon, 
  name, 
  color = 'violet',
  delay = 0,
  className 
}: AnimatedIconProps) {
  const colorVariants = {
    violet: 'text-neon-violet border-neon-violet/30 shadow-neon-violet',
    pink: 'text-neon-pink border-neon-pink/30 shadow-neon-pink',
    orange: 'text-neon-orange border-neon-orange/30 shadow-neon-orange',
    cyan: 'text-neon-cyan border-neon-cyan/30 shadow-neon-cyan',
  };

  const divStyle = {
    animationDelay: `${delay}ms`,
  };

  return (
    <div 
      className={cn(
        'group flex flex-col items-center justify-center gap-2 opacity-0',
        'animate-slide-up',
        className
      )}
      style={divStyle}
    >
      <div 
        className={cn(
          'p-4 rounded-2xl bg-secondary/50 backdrop-blur-sm border',
          'flex items-center justify-center transition-all duration-300',
          'group-hover:scale-110',
          colorVariants[color]
        )}
      >
        <img 
          src={icon} 
          alt={name} 
          className="w-12 h-12 object-contain" 
        />
      </div>
      <span className="text-sm font-medium opacity-80 group-hover:opacity-100">
        {name}
      </span>
    </div>
  );
}
