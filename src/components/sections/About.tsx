import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { User, Briefcase, Code, GitBranch, Award, ExternalLink } from 'lucide-react';
import CertificationCard from '../ui/CertificationCard';

export default function About() {
  const sectionRef = useScrollReveal();
  const bioRef = useScrollReveal();
  const cardRef = useScrollReveal();
  const certRef = useScrollReveal();
  
  const cards = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Experience",
      description: "1.5+ years of experience as a DevOps Engineer at Mobzway, Quibble AI, and Learn and Build."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Expertise",
      description: "Proficient in CI/CD pipelines, cloud infrastructure management, and container orchestration."
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Projects",
      description: "Successfully deployed and managed infrastructure for AI platforms, web applications, and microservices."
    }
  ];
  
  const certifications = [
    {
      title: "Internship Certificate in DevOps Engineering",
      issuer: "Mobzway Technologies",
      date: "June 2023",
      url: "https://drive.google.com/file/d/YOURFILEID1/view",
      color: "orange",
      delay: 0
    },
    {
      title: "Kubernetes Training Certification",
      issuer: "Learn and Build",
      date: "March 2023",
      url: "https://drive.google.com/file/d/YOURFILEID2/view",
      color: "violet",
      delay: 1
    },
    {
      title: "OpenStack & Python Training Certification",
      issuer: "Quibble AI",
      date: "December 2022",
      url: "https://drive.google.com/file/d/YOURFILEID3/view",
      color: "pink",
      delay: 2
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "September 2022",
      url: "https://drive.google.com/file/d/YOURFILEID4/view",
      color: "cyan",
      delay: 3
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">About Me</h2>
        </div>
        
        {/* Two-column layout with equal space for large screens */}
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - About info */}
          <div>
            {/* Who I Am section */}
            <div ref={bioRef} className="opacity-0 animate-slide-up mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-violet-100 dark:bg-secondary flex items-center justify-center text-violet-600 dark:text-neon-violet">
                  <User className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Who I Am</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4 text-gray-700 dark:text-muted-foreground">
                <p className="text-base md:text-lg">
                  I'm Rinku Sharma, a passionate DevOps Engineer with expertise in cloud infrastructure, automation, and CI/CD pipelines. My journey in the tech world has been driven by a fascination with building efficient, scalable, and reliable systems.
                </p>
                <p className="text-base md:text-lg">
                  With over 1.5 years of hands-on experience, I've worked across various domains including AI deployment platforms, web applications, and microservices architectures. My approach combines technical expertise with a problem-solving mindset to deliver robust solutions.
                </p>
                <p className="text-base md:text-lg">
                  I thrive in collaborative environments where I can contribute to the entire software development lifecycle, from planning and infrastructure design to deployment and monitoring.
                </p>
              </div>
            </div>
            
            {/* Experience Cards */}
            <div ref={cardRef} className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {cards.map((card, index) => (
                <div 
                  key={index}
                  className={cn(
                    "bg-white dark:glass-card dark:glass-card-dark rounded-lg p-3 md:p-4 border border-violet-200 dark:border-neon-pink/30 shadow-sm dark:shadow-neon-pink opacity-0",
                    "hover:translate-y-[-5px] transition-all duration-300"
                  )}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-violet-100 dark:bg-secondary flex items-center justify-center text-violet-600 dark:text-neon-pink">
                      {card.icon}
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">{card.title}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-muted-foreground text-sm">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-violet-100 dark:bg-secondary flex items-center justify-center text-violet-600 dark:text-neon-violet">
                <Award className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Certifications</h3>
            </div>
            
            {/* Certification Cards */}
            <div ref={certRef} className="space-y-3">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className={cn(
                    "bg-white dark:bg-gray-800/50 rounded-lg p-3 border border-gray-200 dark:border-gray-700 shadow-sm opacity-0 animate-slide-up",
                    "hover:shadow-md hover:translate-y-[-2px] transition-all duration-300",
                    cert.color === 'orange' ? "bg-gradient-to-r from-orange-50/50 to-transparent dark:from-orange-900/20" : "",
                    cert.color === 'violet' ? "bg-gradient-to-r from-violet-50/50 to-transparent dark:from-violet-900/20" : "",
                    cert.color === 'pink' ? "bg-gradient-to-r from-pink-50/50 to-transparent dark:from-pink-900/20" : "",
                    cert.color === 'cyan' ? "bg-gradient-to-r from-cyan-50/50 to-transparent dark:from-cyan-900/20" : ""
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0",
                      cert.color === 'orange' ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400" : "",
                      cert.color === 'violet' ? "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400" : "",
                      cert.color === 'pink' ? "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400" : "",
                      cert.color === 'cyan' ? "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400" : ""
                    )}>
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-base font-medium text-gray-900 dark:text-white">{cert.title}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm mt-1">
                        <span className="text-gray-600 dark:text-gray-300">{cert.issuer}</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{cert.date}</span>
                      </div>
                      <div className="mt-1.5">
                        <a 
                          href={cert.url} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "text-xs font-medium py-1 px-2 rounded inline-flex items-center gap-1",
                            cert.color === 'orange' ? "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300" : "",
                            cert.color === 'violet' ? "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300" : "",
                            cert.color === 'pink' ? "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300" : "",
                            cert.color === 'cyan' ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300" : ""
                          )}
                        >
                          View Certificate
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-10 flex justify-center">
          <a 
            href="#skills" 
            className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-violet-600 to-pink-600 dark:from-neon-violet dark:to-neon-pink text-white font-medium hover:opacity-90 transition-all duration-300 hover:translate-y-[-2px] shadow-lg shadow-pink-500/20 dark:shadow-neon-pink/20"
          >
            Explore My Skills
          </a>
        </div>
      </div>
    </section>
  );
}
