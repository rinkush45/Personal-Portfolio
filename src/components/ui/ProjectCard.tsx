
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  color?: 'violet' | 'pink' | 'orange' | 'cyan';
  delay?: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  color = 'violet',
  delay = 0
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const colorVariants = {
    violet: 'border-neon-violet/30 shadow-neon-violet hover:border-neon-violet/50',
    pink: 'border-neon-pink/30 shadow-neon-pink hover:border-neon-pink/50',
    orange: 'border-neon-orange/30 shadow-neon-orange hover:border-neon-orange/50',
    cyan: 'border-neon-cyan/30 shadow-neon-cyan hover:border-neon-cyan/50',
  };
  
  const tagColorVariants = {
    violet: 'bg-neon-violet/10 text-neon-violet',
    pink: 'bg-neon-pink/10 text-neon-pink',
    orange: 'bg-neon-orange/10 text-neon-orange',
    cyan: 'bg-neon-cyan/10 text-neon-cyan',
  };
  
  const btnColorVariants = {
    violet: 'text-neon-violet hover:bg-neon-violet/10',
    pink: 'text-neon-pink hover:bg-neon-pink/10',
    orange: 'text-neon-orange hover:bg-neon-orange/10',
    cyan: 'text-neon-cyan hover:bg-neon-cyan/10',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={cn(
        'glass-card glass-card-dark rounded-xl overflow-hidden',
        'border transition-all duration-300',
        colorVariants[color],
        isExpanded ? 'md:col-span-2' : ''
      )}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className={cn(
          'absolute inset-0 opacity-30',
          'bg-gradient-to-t from-background to-transparent'
        )}/>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className={cn(
                'text-xs px-2 py-1 rounded-full',
                tagColorVariants[color]
              )}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <p className={cn(
          'text-muted-foreground transition-all duration-300',
          isExpanded ? 'h-auto' : 'line-clamp-3'
        )}>
          {description}
        </p>
        
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              'flex items-center gap-1 text-sm font-medium',
              'transition-all duration-300 rounded-lg px-3 py-1',
              btnColorVariants[color]
            )}
          >
            {isExpanded ? 'Show Less' : 'Read More'}
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <div className="flex gap-2">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                  'p-2 rounded-full transition-all duration-300',
                  btnColorVariants[color]
                )}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                  'p-2 rounded-full transition-all duration-300',
                  btnColorVariants[color]
                )}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
