import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, FileText, MapPin, Phone, ExternalLink, Heart, Code, Cloud } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('footer-visible');
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/rinkush45',
      icon: <Github className="w-5 h-5" />,
      color: 'group-hover:text-neon-violet',
      bgColor: 'group-hover:bg-neon-violet/10'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/rinkush45',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'group-hover:text-neon-pink',
      bgColor: 'group-hover:bg-neon-pink/10'
    },
    {
      name: 'Email',
      url: 'mailto:sharmarinku@outlook.com',
      icon: <Mail className="w-5 h-5" />,
      color: 'group-hover:text-neon-orange',
      bgColor: 'group-hover:bg-neon-orange/10'
    },
    {
      name: 'Resume',
      url: '/public/resume/Rinku-Sharma.pdf',
      icon: <FileText className="w-5 h-5" />,
      color: 'group-hover:text-neon-cyan',
      bgColor: 'group-hover:bg-neon-cyan/10',
      download: true
    }
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: 'sharmarinku@outlook.com',
      href: 'mailto:sharmarinku@outlook.com'
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: 'Jaipur, Rajasthan, India',
      href: 'https://maps.google.com/?q=Jaipur,Rajasthan,India'
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: '+91 7425949833',
      href: 'tel:+917425949833'
    }
  ];

  const expertise = [
    { icon: <Cloud className="w-4 h-4" />, text: 'DevOps & Cloud' },
    { icon: <Code className="w-4 h-4" />, text: 'Automation' },
    { icon: <Github className="w-4 h-4" />, text: 'CI/CD Pipelines' }
  ];

  return (
    <footer
      ref={footerRef}
      className="relative py-10 md:py-16 bg-secondary/30 backdrop-blur-sm border-t border-border w-full overflow-hidden grid-bg"
      style={{
        '--stagger-delay': '100ms',
      } as React.CSSProperties}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/80 z-0" />

      {/* Animated grid background */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-grid-pattern opacity-30" />
      </div>

      <style>{`
        .footer-visible .animate-footer-fade-up {
          animation: footerFadeUp 0.5s ease forwards;
          opacity: 0;
        }
        
        @keyframes footerFadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .footer-visible .footer-col:nth-child(1) .animate-footer-fade-up {
          animation-delay: calc(var(--stagger-delay) * 1);
        }
        
        .footer-visible .footer-col:nth-child(2) .animate-footer-fade-up {
          animation-delay: calc(var(--stagger-delay) * 2);
        }
        
        .footer-visible .footer-col:nth-child(3) .animate-footer-fade-up {
          animation-delay: calc(var(--stagger-delay) * 3);
        }
        
        .footer-visible .footer-col:nth-child(4) .animate-footer-fade-up {
          animation-delay: calc(var(--stagger-delay) * 4);
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        
        .heart-icon {
          display: inline-block;
          animation: pulse 1.5s ease infinite;
        }
      `}</style>

      <div className="content-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10">
          {/* Column 1: About */}
          <div className="footer-col">
            <div className="animate-footer-fade-up">
              <div className="relative mb-5">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-violet/20 to-neon-pink/20 rounded-lg blur opacity-75"></div>
                <div className="relative bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-neon-violet/20">
                  <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-violet to-neon-pink">
                    Rinku Sharma
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    DevOps Engineer & Cloud Specialist
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Passionate about building reliable, scalable cloud infrastructure and automating development processes.
              </p>

              <div className="flex flex-wrap gap-3 mb-5">
                {expertise.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 bg-secondary/50 backdrop-blur-sm text-xs text-muted-foreground px-3 py-1.5 rounded-full border border-border/50"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group p-2.5 rounded-full bg-background border border-border/60 transition-all duration-300",
                      "hover:scale-110 hover:shadow-md hover:border-transparent",
                      link.bgColor
                    )}
                    aria-label={link.name}
                  >
                    <div className={cn("transition-all duration-300", link.color)}>
                      {link.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col">
            <div className="animate-footer-fade-up">
              <h3 className="text-base font-semibold mb-5 text-foreground inline-flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-neon-violet to-transparent rounded-full"></div>
                Navigation
              </h3>
              <nav>
                <ul className="grid grid-cols-2 gap-2">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="group flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span className="w-0 h-0.5 bg-neon-pink group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Column 3: Contact Information */}
          <div className="footer-col">
            <div className="animate-footer-fade-up">
              <h3 className="text-base font-semibold mb-5 text-foreground inline-flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-neon-violet to-transparent rounded-full"></div>
                Contact
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index} className="group flex items-start">
                    <span className="mr-3 p-2 bg-secondary/60 rounded-full text-neon-violet group-hover:bg-neon-violet/20 transition-all duration-300 flex-shrink-0">
                      {info.icon}
                    </span>
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground group-hover:text-foreground transition-colors pt-1.5"
                    >
                      {info.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Stay Connected */}
          <div className="footer-col">
            <div className="animate-footer-fade-up">
              <h3 className="text-base font-semibold mb-5 text-foreground inline-flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-neon-violet to-transparent rounded-full"></div>
                Get in Touch
              </h3>
              <div className="bg-secondary/40 backdrop-blur-sm rounded-lg p-5 border border-border/40 relative overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-violet via-neon-pink to-neon-cyan"></div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Looking for a DevOps engineer to help with your project? Let's talk about how I can contribute to your team.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-neon-violet to-neon-pink text-white text-sm font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-neon-pink/20 group"
                >
                  Book a Call
                  <ExternalLink className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="pt-6 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0 animate-footer-fade-up">
              © {currentYear} Rinku Sharma. All Rights Reserved.
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-2 animate-footer-fade-up" style={{ animationDelay: 'calc(var(--stagger-delay) * 5)' }}>
              Designed & Built with <Heart className="w-3 h-3 text-neon-pink heart-icon" fill="currentColor" /> using React, Next.js & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
