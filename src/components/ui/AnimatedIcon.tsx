
import React from 'react';
import { cn } from '@/lib/utils';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

interface AnimatedIconProps {
  icon: string;
  name: string;
  color?: 'violet' | 'pink' | 'orange' | 'cyan';
  delay?: number;
  className?: string;
  description?: string;
}

export default function AnimatedIcon({ 
  icon, 
  name, 
  color = 'violet',
  delay = 0,
  className,
  description
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
    <HoverCard>
      <HoverCardTrigger asChild>
        <div 
          className={cn(
            'group flex flex-col items-center justify-center gap-2 opacity-0',
            'animate-slide-up cursor-pointer',
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
      </HoverCardTrigger>
      
      {description && (
        <HoverCardContent className="w-64 glass-card glass-card-dark border-neon-violet/30 shadow-neon-violet p-4">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-neon-violet">{name}</h4>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
}
