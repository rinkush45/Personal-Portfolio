
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Briefcase, Calendar, Circle, ArrowRight } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export default function Experience() {
  const sectionRef = useScrollReveal();
  
  const experiences: ExperienceItem[] = [
    {
      role: "DevOps Engineer",
      company: "Mobzway Technologies",
      period: "2024 - Present",
      responsibilities: [
        "Designed and optimized cloud infrastructure, improving deployment efficiency by 60%.",
        "Automated CI/CD pipelines, reducing manual deployment errors."
      ]
    },
    {
      role: "DevOps Engineer Intern",
      company: "Quibble AI",
      period: "2023",
      responsibilities: [
        "Developed infrastructure automation scripts for AWS & Kubernetes.",
        "Deployed AI models in cloud environments for scalable solutions."
      ]
    },
    {
      role: "DevOps Intern",
      company: "Learn and Build",
      period: "2022 - 2023",
      responsibilities: [
        "Assisted in cloud migration projects, improving performance & security.",
        "Built monitoring dashboards using Prometheus & Grafana."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-20 relative overflow-hidden w-full flex items-center justify-center">
      <div className="w-full max-w-[100vw]">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Experience</h2>
        </div>
        
        <div
          ref={sectionRef}
          className="flex flex-col items-center w-full px-4 sm:px-6 md:px-12 lg:px-24"
        >
          <div className="relative w-full max-w-3xl mx-auto">
            {/* Timeline Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-neon-violet to-neon-pink opacity-60"></div>
            
            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={cn(
                  "mb-12 md:mb-16 relative opacity-0",
                  "flex flex-col md:flex-row md:items-center justify-center gap-4 md:gap-8",
                  "animate-slide-up will-change-transform"
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-neon-violet animate-pulse-glow"></div>
                </div>
                
                {/* Card */}
                <div 
                  className={cn(
                    "glass-card glass-card-dark rounded-lg p-6 border w-full max-w-xl",
                    "transition-all duration-300 hover:shadow-lg",
                    index % 2 === 0 ? "border-neon-teal/40 shadow-neon-teal" : "border-neon-gold/40 shadow-neon-gold"
                  )}
                >
                  {/* Role and Company */}
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Briefcase className={cn(
                        "w-5 h-5",
                        index % 2 === 0 ? "text-neon-teal" : "text-neon-gold"
                      )} />
                      <h3 className="text-lg md:text-xl font-semibold">{exp.role}</h3>
                    </div>
                    <span className="hidden md:inline-block mx-2 text-muted-foreground">•</span>
                    <span className="text-base md:text-lg font-medium">{exp.company}</span>
                  </div>
                  
                  {/* Period */}
                  <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm md:text-base">{exp.period}</span>
                  </div>
                  
                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                        <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <a 
              href="#skills" 
              className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-neon-violet to-neon-pink text-white font-medium hover:opacity-90 transition-all duration-300 hover:translate-y-[-2px] shadow-lg shadow-neon-pink/20"
            >
              Explore My Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
