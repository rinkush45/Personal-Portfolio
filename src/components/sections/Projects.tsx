import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import hotstar from "@/images/hotstart.jpeg"

interface Project {
  title: string;
  description: string[];
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export default function Projects() {
  const sectionRef = useScrollReveal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState('right');
  const [isAnimating, setIsAnimating] = useState(false);
  
  const projects: Project[] = [
    {
      title: "Civom-AI Deployment: [A Combination of Multiple AI Models] ",
      description: [
        "Built an AI-powered platform for generating conversations, videos, images, code, and music",
        "Deployed LLMs on AWS with auto-scaling and monitoring mechanisms",
        "Implemented Blue-Green deployments to ensure zero downtime during releases",
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["AWS", "Kubernetes", "Terraform", "CI/CD", "Docker"],
      githubUrl: "https://github.com/rinkush45/Civom-ai",
      liveUrl: "https://civom-ai.vercel.app/",
      featured: true
    },
    {
      title: "FreeDevs: [Freelancer Website]",
      description: [
        "Deployed and managed the platform's backend using AWS EC2, RDS, and S3.",
        "Implemented CI/CD pipelines for automated deployment and updates.",
        "Ensured high availability with load balancing and auto-scaling.",
        "Monitored infrastructure performance using Prometheus & Grafana."
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["AWS", "Auto-scaling", "Prometheus", "Grafana", "Backend"],
      githubUrl: "https://github.com/rinkush45/FreeDev",
      liveUrl: "https://freedevs.netlify.app/",
      featured: true
    },
    {
      title: "Hotstar: [Hotstar Clone Deployment]",
      description: [
        "Integrated CI/CD pipelines for automated deployment and testing.",
        "Deployed application infrastructure using AWS & Terraform.",
        "Conducted thorough testing post-deployment to ensure seamless user experience"
      ],
      image: hotstar,
      tags: ["Terraform", "AWS", "Microservices", "Docker", "CI/CD"],
      githubUrl: "https://github.com/rinkush45/hotstar-clone",
      liveUrl: "https://app-hotstar.netlify.app/",
      featured: true
    }
  ];

  // Auto-rotate projects every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        goToNext();
      }
    }, 7000);
    
    return () => clearInterval(timer);
  }, [currentIndex, isAnimating]);

  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setAnimationDirection('left');
    
    setCurrentIndex(prev => 
      prev === 0 ? projects.length - 1 : prev - 1
    );
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setAnimationDirection('right');
    
    setCurrentIndex(prev => 
      prev === projects.length - 1 ? 0 : prev + 1
    );
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section 
      id="projects" 
      className="py-20 relative overflow-hidden w-full flex items-center justify-center grid-bg"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/80 z-0" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-grid-pattern opacity-30" />
      </div>
      
      <div className="content-container max-w-6xl z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Things I've Worked on, Some of Them</h2>
        </div>
        
        <div ref={sectionRef} className="relative min-h-[30rem]">
          {/* Linked List Visualization */}
          <div className="absolute top-0 left-0 right-0 flex justify-center items-center gap-2 mb-8">
            {projects.map((_, idx) => (
              <div key={idx} className="flex items-center">
                <div 
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors duration-300",
                    currentIndex === idx ? "bg-neon-pink" : "bg-neon-pink/30"
                  )}
                />
                {idx < projects.length - 1 && (
                  <div className="w-8 h-0.5 bg-neon-pink/30" />
                )}
              </div>
            ))}
          </div>
          
          {/* Project Display */}
          <div className="relative mt-10 overflow-hidden">
            <div
              className={cn(
                "transition-all duration-500 ease-in-out",
                isAnimating && animationDirection === 'right' ? "opacity-0 translate-x-[100px]" : "",
                isAnimating && animationDirection === 'left' ? "opacity-0 -translate-x-[100px]" : "",
              )}
            >
              <ProjectCard project={projects[currentIndex]} index={currentIndex} />
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between absolute top-1/2 left-0 right-0 -mt-6 px-4">
              <button 
                onClick={goToPrev}
                className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-neon-violet/30 flex items-center justify-center text-white shadow-lg shadow-neon-violet/20 hover:bg-neon-violet/20 transition-all duration-300"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={goToNext}
                className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-neon-pink/30 flex items-center justify-center text-white shadow-lg shadow-neon-pink/20 hover:bg-neon-pink/20 transition-all duration-300"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
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
  
  const handleProjectClick = () => {
    // Clean up the slug 
    const slug = project.title
      .toLowerCase()
      .replace(/[\[\]:]/g, '')  // Remove brackets and colons
      .replace(/\s+/g, '-')     // Replace spaces with hyphens
      .trim();                  // Remove any extra whitespace
      
    // Create query params with the project data
    const queryParams = new URLSearchParams();
    queryParams.set('data', JSON.stringify(project));
    queryParams.set('index', index.toString());
    
    // Navigate to the project detail page
    window.location.href = `/project/${slug}?${queryParams.toString()}`;
  };
  
  return (
    <div 
      className={cn(
        "relative flex flex-col md:flex-row items-center cursor-pointer",
        "animate-fade-in hover:scale-[1.01] transition-transform duration-300",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
      onClick={handleProjectClick}
    >
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
          <ul className="space-y-3 text-muted-foreground">
            {project.description.map((item, i) => (
              <li key={i} className="flex items-start">
                <ArrowRight className="w-4 h-4 mt-1 mr-2 text-neon-pink shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
