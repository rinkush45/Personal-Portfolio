import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience'},
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Find which section is currently in view
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full flex justify-center pt-4',
        isScrolled ? 'py-2' : 'py-4'
      )}
    >
      <div 
        className={cn(
          'flex items-center justify-between px-6 backdrop-blur-md',
          'dark:bg-background/30 bg-white/75',
          'dark:border-border/40 border-gray-200/70',
          'rounded-full border transition-all duration-300',
          'shadow-sm dark:shadow-none',
          isScrolled ? 'py-2 max-w-3xl' : 'py-3 max-w-4xl'
        )}
      >
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <ul className="flex gap-4 lg:gap-8">
            {navItems.slice(0, -1).map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-all duration-300 px-3 py-2 rounded-md',
                    activeSection === item.href.substring(1)
                      ? 'text-foreground dark:text-foreground'
                      : 'text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-foreground hover:bg-gray-100/70 dark:hover:bg-foreground/5'
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button and Theme Toggle */}
        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            className="text-sm font-medium bg-gradient-to-r from-neon-violet/90 to-neon-pink/90 text-white px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-neon-pink/20 hover:opacity-90 backdrop-blur-sm"
          >
            Book a Call
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden ml-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 dark:text-foreground rounded-md hover:bg-gray-100/70 dark:hover:bg-foreground/5"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 top-[60px] bg-white/95 dark:bg-background/95 backdrop-blur-lg z-40 animate-fade-in"
        >
          <nav className="container mx-auto px-4 py-8">
            <ul className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <li 
                  key={item.label}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className="opacity-0 animate-slide-down"
                >
                  <a
                    href={item.href}
                    className={cn(
                      'text-lg font-medium transition-all duration-300 block py-2 text-center',
                      'border-b border-gray-200 dark:border-border',
                      activeSection === item.href.substring(1)
                        ? 'text-gray-900 dark:text-foreground'
                        : 'text-gray-600 dark:text-muted-foreground'
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
