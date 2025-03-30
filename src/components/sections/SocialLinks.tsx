import { Github, Linkedin, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
}

export default function SocialLinks({ 
  className, 
  iconSize = 20, 
  showLabels = false 
}: SocialLinksProps) {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={iconSize} />,
      url: 'https://www.linkedin.com/in/rinkush45',
      color: 'text-[#0A66C2]/80 hover:text-[#0A66C2] border-[#0A66C2]/30 hover:border-[#0A66C2]'
    },
    {
      name: 'GitHub',
      icon: <Github size={iconSize} />,
      url: 'https://github.com/rinkush45',
      color: 'text-foreground/80 hover:text-foreground border-foreground/30 hover:border-foreground dark:text-white/80 dark:hover:text-white dark:border-white/30 dark:hover:border-white'
    },
    {
      name: 'LeetCode',
      icon: <Code size={iconSize} />,
      url: 'https://leetcode.com/rinkusharma45',
      color: 'text-[#FFA116]/80 hover:text-[#FFA116] border-[#FFA116]/30 hover:border-[#FFA116]'
    }
  ];

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center gap-2 transition-all duration-300",
            "p-2 rounded-full border bg-background-dark/50",
            "hover:transform hover:scale-110 shadow-sm",
            "backdrop-blur-sm",
            link.color
          )}
          aria-label={link.name}
        >
          {link.icon}
          {showLabels && <span className="text-sm font-medium">{link.name}</span>}
        </a>
      ))}
    </div>
  );
}