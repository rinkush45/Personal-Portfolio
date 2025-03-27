
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
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass-card glass-card-dark rounded-lg p-8 border border-neon-violet/30 shadow-neon-violet col-span-1 md:col-span-2 opacity-0 animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-neon-violet">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Who I Am</h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
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
                  "glass-card glass-card-dark rounded-lg p-6 border border-neon-pink/30 shadow-neon-pink opacity-0",
                  "hover:translate-y-[-5px] transition-all duration-300"
                )}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-neon-pink">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <a 
            href="#skills" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-all duration-300"
          >
            Explore My Skills
          </a>
        </div>
      </div>
    </section>
  );
}
