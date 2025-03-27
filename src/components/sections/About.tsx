
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { User, Briefcase, Code, GitBranch } from 'lucide-react';

export default function About() {
  const sectionRef = useScrollReveal();
  
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

  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden w-full flex items-center justify-center">
      <div className="content-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 w-full max-w-4xl mx-auto">
          <div className="glass-card glass-card-dark rounded-lg p-6 md:p-8 border border-neon-violet/30 shadow-neon-violet col-span-1 md:col-span-2 opacity-0 animate-slide-up">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center text-neon-violet">
                <User className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold">Who I Am</h3>
            </div>
            
            <div className="space-y-3 md:space-y-4 text-muted-foreground">
              <p>
                I'm Rinku Sharma, a passionate DevOps Engineer with expertise in cloud infrastructure, automation, and CI/CD pipelines. My journey in the tech world has been driven by a fascination with building efficient, scalable, and reliable systems.
              </p>
              <p>
                With over 1.5 years of hands-on experience, I've worked across various domains including AI deployment platforms, web applications, and microservices architectures. My approach combines technical expertise with a problem-solving mindset to deliver robust solutions.
              </p>
              <p>
                I thrive in collaborative environments where I can contribute to the entire software development lifecycle, from planning and infrastructure design to deployment and monitoring.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            {cards.map((card, index) => (
              <div 
                key={index}
                className={cn(
                  "glass-card glass-card-dark rounded-lg p-4 md:p-6 border border-neon-pink/30 shadow-neon-pink opacity-0",
                  "hover:translate-y-[-5px] transition-all duration-300"
                )}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary flex items-center justify-center text-neon-pink">
                    {card.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold">{card.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 flex justify-center">
          <a 
            href="#skills" 
            className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-neon-violet to-neon-pink text-white font-medium hover:opacity-90 transition-all duration-300 hover:translate-y-[-2px] shadow-lg shadow-neon-pink/20"
          >
            Explore My Skills
          </a>
        </div>
      </div>
    </section>
  );
}
