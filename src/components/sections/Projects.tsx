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
  featured?: boolean;
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
      featured: true
    },
    {
      title: "FreeDevs",
      description: "Designed and implemented backend infrastructure for a freelancer marketplace using AWS services including EC2, ELB, RDS, and S3. Set up auto-scaling capabilities and monitoring using CloudWatch and Prometheus, ensuring 99.9% uptime and optimal performance during peak usage.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["AWS", "Auto-scaling", "Prometheus", "Grafana", "Backend"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Hotstar Clone",
      description: "Created a fully automated cloud deployment for a Hotstar clone using Terraform and AWS. Implemented a microservices architecture with containerized applications, and set up automated testing and continuous deployment workflows, reducing development cycle time by 40%.",
      image: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      tags: ["Terraform", "AWS", "Microservices", "Docker", "CI/CD"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden w-full flex items-center justify-center">
      <div className="content-container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="section-title">Things I've Worked on, Some of Them</h2>
        </div>
        
        <div ref={sectionRef} className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={cn(
      "relative flex flex-col md:flex-row items-center",
      "opacity-0 animate-slide-up",
      isEven ? "md:flex-row" : "md:flex-row-reverse"
    )}
    style={{ animationDelay: `${index * 200}ms` }}>
      {/* Project Image Side */}
      <div className="w-full md:w-1/2 relative">
        <div className={cn(
          "rounded-lg overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]",
          "border border-border relative z-10"
        )}>
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-auto object-cover aspect-[3/2]"
          />
          
          {/* Mobile device frame overlay */}
          <div className={cn(
            "absolute inset-0 bg-contain bg-center bg-no-repeat pointer-events-none z-20",
            "transform scale-[0.85]"
          )}
            style={{ backgroundImage: "url('/images/phone-frame.png')" }} 
          />
        </div>
      </div>
      
      {/* Project Content Side */}
      <div className={cn(
        "w-full md:w-1/2",
        isEven ? "md:pl-8 lg:pl-0 md:-ml-12" : "md:pr-8 lg:pr-0 md:-mr-12",
        "relative z-20 mt-6 md:mt-0"
      )}>
        <div className="text-sm text-neon-cyan font-medium mb-1">
          Featured Project
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neon-cyan">
          {project.title}
        </h3>
        
        <div className="glass-card glass-card-dark border border-border p-5 md:p-6 rounded-lg shadow-lg mb-4 backdrop-blur-sm">
          <p className="text-muted-foreground">{project.description}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex} 
              className="text-xs px-2.5 py-1 rounded-full bg-neon-teal/10 text-neon-teal border border-neon-teal/30"
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
            className="inline-flex items-center gap-1.5 text-sm hover:text-neon-teal transition-colors"
          >
            <Github size={16} />
            Code
          </a>
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm hover:text-neon-teal transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
