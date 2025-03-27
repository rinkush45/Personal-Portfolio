
import { useEffect, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

// Tech icons
const techIcons = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', delay: 300, top: '20%', left: '80%', size: 'w-10 h-10' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg', delay: 500, top: '70%', left: '85%', size: 'w-8 h-8' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', delay: 700, top: '30%', left: '10%', size: 'w-12 h-12' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', delay: 900, top: '65%', left: '15%', size: 'w-9 h-9' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', delay: 1100, top: '15%', left: '40%', size: 'w-8 h-8' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', delay: 1300, top: '75%', left: '40%', size: 'w-10 h-10' },
];

export default function Hero() {
  // Refs for animated elements
  const techIconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Animate tech icons into view with delays
    techIconsRef.current.forEach((icon, index) => {
      if (icon) {
        setTimeout(() => {
          icon.style.opacity = '1';
          icon.style.transform = 'translateY(0) scale(1)';
        }, index * 200);
      }
    });
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden grid-bg py-16 md:py-0"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/80 z-0" />
      
      {/* Floating tech icons - hide on mobile for better performance */}
      {!isMobile && techIcons.map((icon, index) => (
        <div
          key={index}
          ref={el => techIconsRef.current[index] = el}
          style={{
            position: 'absolute',
            top: icon.top,
            left: icon.left,
            opacity: 0,
            transform: 'translateY(20px) scale(0.8)',
            transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
          className={cn(
            'animate-float',
            icon.size
          )}
        >
          <div className="p-2 bg-secondary/30 backdrop-blur-md rounded-full border border-border/50">
            <img src={icon.src} alt="" className="w-full h-full" />
          </div>
        </div>
      ))}
      
      <div className="content-container z-10 px-4 sm:px-6 md:px-8 text-center">
        <div className="mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 backdrop-blur-sm text-sm border border-border/50">
          <div className="w-2 h-2 rounded-full bg-neon-pink animate-pulse-glow"></div>
          <span>DevOps Engineer</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-violet via-neon-pink to-neon-orange">
          Rinku Sharma
        </h1>
        
        <h2 className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed text-foreground/80">
          Cloud & Automation Enthusiast with expertise in 
          <span className="neon-glow-text-violet font-semibold"> AWS</span>,
          <span className="neon-glow-text-cyan font-semibold"> Kubernetes</span>,
          <span className="neon-glow-text-pink font-semibold"> Terraform</span> & 
          <span className="neon-glow-text-orange font-semibold"> CI/CD</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-neon-violet to-neon-pink text-white font-medium hover:opacity-90 transition-all duration-300 hover:translate-y-[-2px] shadow-lg shadow-neon-pink/20"
          >
            Get in Touch
          </a>
          
          <a 
            href="#" 
            download 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neon-orange/50 text-neon-orange font-medium hover:bg-neon-orange/10 transition-all duration-300 hover:translate-y-[-2px] shadow-neon-orange"
          >
            <Download className="w-4 h-4" /> 
            Download Resume
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
