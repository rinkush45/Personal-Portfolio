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
      company: "QUibble AI Pvt. Ltd.",
      location: "Jaipur",
      period: "June 2024 - Present",
      responsibilities: [
        "Used AI models in real applications by connecting them with APIs and running them smoothly using tools like Docker and Kubernetes.",
        "Deployed AI models on AWS, handling environment setup, resource management, and performance optimization.",
        "Set up Prometheus and Grafana to track system health in real-time, which helped reduce the time to fix issues by 30% and made the systems more reliable."
      ],
      skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins", "CI/CD", "Ansible", "Azure", "Prometheus/Grafana", "GitOps", "Linux/Shell Scripting", "ELK Stack"],
      isRemote: false
    },
    {
      role: "Backend  Engineer Intern",
      company: "Learn and Build",
      location: "Jaipur",
      period: "September 2023 - November  2023",
      responsibilities: [
        "Documented APIs and database schemas to enhance future development and maintainability.",
        "Developed and optimized backend services using Node.js, Express.js, and PostgreSQL.",
        "Set up and managed databases like MongoDB and Postgres, making sure the data was stored efficiently and could be accessed quickly"
      ],
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Python", "RESTful APIs"],
      isRemote: false
    },
    {
      role: "DevOps Engineer Intern",
      company: "Learn and Build",
      location: "Jaipur",
      period: "March 2023 - August 2023",
      responsibilities: [
        "Implemented CI/CD pipelines for seamless application deployment.",
        "Automated infrastructure deployment using Jenkins and Terraform, reducing deployment time by 80%.",
        "Deployed and monitored Kubernetes clusters with Docker, Prometheus, and the ELK Stack."
      ],
      skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins", "CI/CD"],
      isRemote: false
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
