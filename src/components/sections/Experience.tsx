import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  skills: string[];
  isRemote?: boolean;
}

export default function Experience() {
  const sectionRef = useScrollReveal();
  
  const experiences: ExperienceItem[] = [
    {
      role: "DevOps Engineer",
      company: "Mobzway Technologies",
      location: "Guwahati",
      period: "2024 - Present",
      responsibilities: [
        "Designed and optimized cloud infrastructure, improving deployment efficiency by 60%.",
        "Automated CI/CD pipelines, reducing manual deployment errors."
      ],
      skills: ["AWS", "Kubernetes", "Terraform", "CI/CD", "Docker"],
      isRemote: false
    },
    {
      role: "DevOps Engineer Intern",
      company: "Quibble AI",
      location: "Guwahati",
      period: "2023",
      responsibilities: [
        "Developed infrastructure automation scripts for AWS & Kubernetes.",
        "Deployed AI models in cloud environments for scalable solutions."
      ],
      skills: ["AWS", "Kubernetes", "Terraform", "Python", "Docker"],
      isRemote: true
    },
    {
      role: "DevOps Intern",
      company: "Learn and Build",
      location: "Guwahati",
      period: "2022 - 2023",
      responsibilities: [
        "Assisted in cloud migration projects, improving performance & security.",
        "Built monitoring dashboards using Prometheus & Grafana."
      ],
      skills: ["AWS", "Monitoring", "Prometheus", "Grafana", "Docker"],
      isRemote: true
    }
  ];

  return (
    <section 
      id="experience" 
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
          <h2 className="section-title">Experience</h2>
        </div>
        
        <div ref={sectionRef} className="space-y-32">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index}
              experience={exp} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={cn(
      "relative flex flex-col md:flex-row items-center",
      "opacity-0 animate-slide-up",
      isEven ? "md:flex-row" : "md:flex-row-reverse"
    )}
    style={{ animationDelay: `${index * 200}ms` }}>
      {/* Left/Right Side - Date Circle */}
      <div className="w-full md:w-2/5 flex justify-center relative">
        <div className="w-40 h-40 rounded-full bg-background-dark border border-border flex items-center justify-center relative">
          <div className="text-center">
            <Calendar className="w-6 h-6 text-neon-teal mx-auto mb-2" />
            <div className="text-neon-teal font-medium">
              {experience.period}
            </div>
          </div>
          
          {/* Timeline connecting dot removed */}
        </div>
      </div>
      
      {/* Right/Left Side - Content */}
      <div className={cn(
        "w-full md:w-3/5",
        isEven ? "md:pl-8" : "md:pr-8",
        "relative z-10 mt-6 md:mt-0"
      )}>
        <div className="text-sm text-neon-pink font-medium mb-1 flex items-center gap-2">
          <Briefcase className="w-4 h-4" />
          {experience.isRemote ? "Remote Position" : "Full Time"}
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-neon-pink">
          {experience.role}
        </h3>
        
        <h4 className="text-xl font-semibold mb-4 text-foreground/90">
          {experience.company}, {experience.location}
        </h4>
        
        <div className="glass-card glass-card-dark border border-border p-5 md:p-6 rounded-lg shadow-lg mb-4 backdrop-blur-sm">
          <ul className="space-y-3 text-muted-foreground">
            {experience.responsibilities.map((item, i) => (
              <li key={i} className="flex items-start">
                <ArrowRight className="w-4 h-4 mt-1 mr-2 text-neon-pink shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, skillIndex) => (
            <span 
              key={skillIndex} 
              className="text-xs px-2.5 py-1 rounded-full bg-neon-teal/10 text-neon-teal border border-neon-teal/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
