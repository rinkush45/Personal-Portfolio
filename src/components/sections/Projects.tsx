
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  color: 'violet' | 'pink' | 'orange' | 'cyan';
  delay: number;
}

export default function Projects() {
  const sectionRef = useScrollReveal();
  
  const projects: Project[] = [
    {
      title: "Civom AI",
      description: "Deployed and managed infrastructure for an AI-powered platform using AWS, Kubernetes, and Terraform. Implemented CI/CD pipelines for automated testing and deployment, resulting in a 60% reduction in deployment time and improved reliability.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["AWS", "Kubernetes", "Terraform", "CI/CD", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
      color: "violet",
      delay: 0
    },
    {
      title: "FreeDevs",
      description: "Designed and implemented backend infrastructure for a freelancer marketplace using AWS services including EC2, ELB, RDS, and S3. Set up auto-scaling capabilities and monitoring using CloudWatch and Prometheus, ensuring 99.9% uptime and optimal performance during peak usage.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["AWS", "Auto-scaling", "Prometheus", "Grafana", "Backend"],
      githubUrl: "#",
      liveUrl: "#",
      color: "pink",
      delay: 1
    },
    {
      title: "Hotstar Clone",
      description: "Created a fully automated cloud deployment for a Hotstar clone using Terraform and AWS. Implemented a microservices architecture with containerized applications, and set up automated testing and continuous deployment workflows, reducing development cycle time by 40%.",
      image: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      tags: ["Terraform", "AWS", "Microservices", "Docker", "CI/CD"],
      githubUrl: "#",
      liveUrl: "#",
      color: "orange",
      delay: 2
    },
    {
      title: "Cloud Cost Optimization",
      description: "Implemented a cost optimization strategy for a startup's AWS infrastructure, resulting in a 30% reduction in monthly cloud costs. Used AWS Cost Explorer, Trusted Advisor, and custom scripts to identify unused resources and optimize instance sizing and reserved instance coverage.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      tags: ["AWS", "Cost Optimization", "Python", "Automation"],
      githubUrl: "#",
      liveUrl: "#",
      color: "cyan",
      delay: 3
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden w-full flex items-center justify-center">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="section-title">My Projects</h2>
        </div>
        
        <div ref={sectionRef} className="flex flex-col items-center w-full max-w-3xl mx-auto">
          {projects.map((project, index) => (
            <BlockchainProjectCard 
              key={index}
              project={project} 
              index={index}
              isLast={index === projects.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface BlockchainProjectCardProps {
  project: Project;
  index: number;
  isLast: boolean;
}

function BlockchainProjectCard({ project, index, isLast }: BlockchainProjectCardProps) {
  const colorVariants = {
    violet: "border-neon-violet/50 shadow-neon-violet text-neon-violet",
    pink: "border-neon-pink/50 shadow-neon-pink text-neon-pink",
    orange: "border-neon-orange/50 shadow-neon-orange text-neon-orange",
    cyan: "border-neon-cyan/50 shadow-neon-cyan text-neon-cyan"
  };
  
  const bgVariants = {
    violet: "bg-neon-violet/10",
    pink: "bg-neon-pink/10",
    orange: "bg-neon-orange/10",
    cyan: "bg-neon-cyan/10"
  };
  
  return (
    <div className="w-full">
      <div 
        className={cn(
          "glass-card glass-card-dark rounded-lg overflow-hidden border",
          "transition-all duration-500 hover:scale-[1.02]",
          "group relative w-full",
          colorVariants[project.color]
        )}
        style={{ 
          animationDelay: `${project.delay * 200}ms`,
        }}
      >
        {/* Blockchain node indicator */}
        <div className={cn(
          "absolute top-0 left-6 w-6 h-6 rounded-full -mt-3",
          "border-2 z-10",
          colorVariants[project.color], 
          bgVariants[project.color]
        )}>
          <div className="absolute inset-0 rounded-full animate-pulse-glow" />
        </div>
        
        {/* Project content */}
        <div className="p-6 md:p-8">
          <h3 className={cn(
            "text-xl md:text-2xl font-bold mb-3",
            `text-neon-${project.color}`
          )}>
            {project.title}
          </h3>
          
          <p className="text-muted-foreground mb-4">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex} 
                className={cn(
                  "text-xs px-2.5 py-1 rounded-full",
                  bgVariants[project.color],
                  "border",
                  colorVariants[project.color]
                )}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1.5 text-sm",
                "hover:opacity-80 transition-opacity"
              )}
            >
              <Github size={16} />
              View Code
            </a>
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1.5 text-sm",
                "hover:opacity-80 transition-opacity"
              )}
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          </div>
        </div>
      </div>
      
      {/* Connector line to next block */}
      {!isLast && (
        <div className="flex justify-center">
          <div className={cn(
            "h-16 w-0.5",
            `bg-neon-${project.color === 'violet' ? 'pink' : project.color === 'pink' ? 'orange' : project.color === 'orange' ? 'cyan' : 'violet'}/30`
          )} />
        </div>
      )}
    </div>
  );
}
