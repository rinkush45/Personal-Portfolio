
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/rinkusharma',
      icon: <Github className="w-5 h-5" />,
      color: 'hover:text-neon-violet hover:scale-110'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/rinkusharma',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:text-neon-pink hover:scale-110'
    },
    {
      name: 'Email',
      url: 'mailto:sharmarinku@outlook.com',
      icon: <Mail className="w-5 h-5" />,
      color: 'hover:text-neon-orange hover:scale-110'
    },
    {
      name: 'Resume',
      url: '#',
      icon: <FileText className="w-5 h-5" />,
      color: 'hover:text-neon-cyan hover:scale-110'
    }
  ];

  return (
    <footer className="py-10 bg-secondary/30 backdrop-blur-sm border-t border-border w-full">
      <div className="content-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-violet to-neon-pink">
              Rinku Sharma
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              DevOps Engineer & Cloud Automation Specialist
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 ${link.color}`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © {new Date().getFullYear()} Rinku Sharma | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
