
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Briefcase, Building, Calendar } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  color: 'violet' | 'pink' | 'orange';
}

export default function Experience() {
  const sectionRef = useScrollReveal();
  
  const experiences: ExperienceItem[] = [
    {
      company: "Mobzway Technologies",
      role: "DevOps Engineer",
      period: "2024 - Present",
      responsibilities: [
        "Designed and optimized cloud infrastructure, improving deployment efficiency by 60%.",
        "Automated CI/CD pipelines, reducing manual deployment errors.",
        "Implemented monitoring solutions using Prometheus and Grafana for real-time system insights."
      ],
      color: "violet"
    },
    {
      company: "Quibble AI",
      role: "DevOps Engineer Intern",
      period: "2023",
      responsibilities: [
        "Developed infrastructure automation scripts for AWS & Kubernetes.",
        "Deployed AI models in cloud environments for scalable solutions.",
        "Assisted in implementing containerization strategies with Docker."
      ],
      color: "pink"
    },
    {
      company: "Learn and Build",
      role: "DevOps Intern",
      period: "2022 - 2023",
      responsibilities: [
        "Assisted in cloud migration projects, improving performance & security.",
        "Built monitoring dashboards using Prometheus & Grafana.",
        "Learned and applied Kubernetes for container orchestration."
      ],
      color: "orange"
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden w-full flex items-center justify-center bg-secondary/20">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience</h2>
        </div>
        
        <div ref={sectionRef} className="w-full max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border dark:bg-border/30"></div>
            
            {/* Experience items */}
            {experiences.map((exp, index) => (
              <ExperienceCard 
                key={index} 
                experience={exp} 
                index={index} 
                isLast={index === experiences.length - 1} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
  isLast: boolean;
}

function ExperienceCard({ experience, index, isLast }: ExperienceCardProps) {
  const colorVariants = {
    violet: "border-neon-violet/50 text-neon-violet shadow-neon-violet",
    pink: "border-neon-pink/50 text-neon-pink shadow-neon-pink",
    orange: "border-neon-orange/50 text-neon-orange shadow-neon-orange",
  };
  
  const bgVariants = {
    violet: "bg-neon-violet/10",
    pink: "bg-neon-pink/10",
    orange: "bg-neon-orange/10",
  };
  
  return (
    <div 
      className={cn(
        "relative pb-12",
        isLast && "pb-0"
      )}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Timeline dot */}
      <div className={cn(
        "absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full z-10",
        "border-2",
        colorVariants[experience.color]
      )}>
        <div className={cn(
          "absolute inset-0 rounded-full",
          bgVariants[experience.color],
          "animate-pulse-glow"
        )}></div>
      </div>
      
      {/* Card - Alternate sides */}
      <div 
        className={cn(
          "opacity-0 animate-slide-up w-full md:w-[calc(50%-28px)]",
          index % 2 === 0 ? "ml-0 md:ml-auto" : "mr-0 md:mr-auto"
        )}
      >
        <div className={cn(
          "glass-card glass-card-dark rounded-lg p-6 border",
          "hover:translate-y-[-5px] transition-all duration-300",
          colorVariants[experience.color]
        )}>
          <div className="flex items-center gap-3 mb-4">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center",
              bgVariants[experience.color]
            )}>
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{experience.company}</h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Briefcase className="w-3.5 h-3.5" />
                <span>{experience.role}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 mb-3 text-muted-foreground text-sm">
            <Calendar className="w-4 h-4" />
            <span>{experience.period}</span>
          </div>
          
          <ul className="space-y-2 text-muted-foreground">
            {experience.responsibilities.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className={cn(
                  "block w-1.5 h-1.5 rounded-full mt-1.5",
                  bgVariants[experience.color]
                )}></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
