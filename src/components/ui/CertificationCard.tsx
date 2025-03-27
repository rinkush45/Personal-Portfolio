
import { cn } from '@/lib/utils';
import { Award } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  url?: string;
  color?: 'violet' | 'pink' | 'orange' | 'cyan';
  delay?: number;
}

export default function CertificationCard({
  title,
  issuer,
  date,
  url,
  color = 'orange',
  delay = 0
}: CertificationCardProps) {
  const divStyle = {
    animationDelay: `${delay * 100}ms`,
  };
  
  const colorVariants = {
    violet: 'border-neon-violet/30 from-neon-violet/20 to-transparent',
    pink: 'border-neon-pink/30 from-neon-pink/20 to-transparent',
    orange: 'border-neon-orange/30 from-neon-orange/20 to-transparent',
    cyan: 'border-neon-cyan/30 from-neon-cyan/20 to-transparent',
  };

  const iconColorVariants = {
    violet: 'text-neon-violet',
    pink: 'text-neon-pink',
    orange: 'text-neon-orange',
    cyan: 'text-neon-cyan',
  };

  return (
    <div 
      className={cn(
        'glass-card glass-card-dark rounded-lg p-6',
        'border transition-all duration-300 opacity-0',
        'hover:translate-y-[-5px]',
        'bg-gradient-to-b',
        'animate-slide-up',
        colorVariants[color]
      )}
      style={divStyle}
    >
      <div className="flex items-start gap-4">
        <div className={cn(
          'p-3 rounded-full bg-secondary',
          iconColorVariants[color]
        )}>
          <Award className="w-6 h-6" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-muted-foreground text-sm">{issuer}</p>
          <p className="text-xs text-muted-foreground mt-1">{date}</p>
          
          {url && (
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                'mt-3 inline-block text-sm font-medium',
                'transition-all duration-300',
                iconColorVariants[color],
                'hover:underline'
              )}
            >
              View Certificate
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
