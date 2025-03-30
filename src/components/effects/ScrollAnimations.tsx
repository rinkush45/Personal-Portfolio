import { useEffect, useState } from 'react';

export default function ScrollAnimations() {
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Set initial dimensions
    setViewportHeight(window.innerHeight);
    setDocumentHeight(document.body.scrollHeight);
    
    console.log("ScrollAnimations component mounted");

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
      setDocumentHeight(document.body.scrollHeight);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calculate scroll progress (0 to 1)
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = currentScrollY / maxScroll;
      setScrollProgress(progress);
      
      // Add scroll-direction class to body for conditional animations
      if (currentScrollY > scrollY) {
        document.body.classList.add('scrolling-down');
        document.body.classList.remove('scrolling-up');
      } else {
        document.body.classList.add('scrolling-up');
        document.body.classList.remove('scrolling-down');
      }
      
      // Add animation to elements in viewport
      const animateItems = document.querySelectorAll('.animate-on-scroll');
      animateItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isInViewport = (
          rect.top <= (window.innerHeight * 0.75) && 
          rect.bottom >= (window.innerHeight * 0.25)
        );
        
        if (isInViewport) {
          item.classList.add('is-visible');
        }
      });
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Initial setup - add animation classes to elements
    const setupAnimations = () => {
      console.log("Setting up animations");
      
      // Add animation class to sections
      document.querySelectorAll('section').forEach(section => {
        section.classList.add('animate-on-scroll');
      });
      
      // Add animation to headings
      document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
        heading.classList.add('animate-on-scroll');
      });
      
      // Add animation to paragraphs
      document.querySelectorAll('p').forEach(p => {
        p.classList.add('animate-on-scroll');
      });
      
      // Add animation to images
      document.querySelectorAll('img').forEach(img => {
        img.classList.add('animate-on-scroll');
      });
      
      // Add animation to cards and UI components
      document.querySelectorAll('.card, [class*="card"], [class*="box"]').forEach(card => {
        card.classList.add('animate-on-scroll');
      });
    };
    
    // Call once to set initial values
    handleScroll();
    handleResize();
    setupAnimations();
    
    // Set a timeout to ensure DOM is fully loaded
    setTimeout(setupAnimations, 1000);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollY]);

  return (
    <>
      {/* CSS for scroll animations - direct style tag instead of jsx to ensure it works */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Scroll progress bar */
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(to right, 
            rgb(139, 92, 246), 
            rgb(236, 72, 153)
          );
          transform-origin: 0 50%;
          z-index: 1000;
          transition: transform 0.1s;
        }
        
        /* Base animation styles */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .animate-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Different animations for different elements */
        section.animate-on-scroll {
          transform: translateY(0);
          opacity: 1;
        }
        
        h1.animate-on-scroll, 
        h2.animate-on-scroll, 
        h3.animate-on-scroll,
        h4.animate-on-scroll,
        h5.animate-on-scroll,
        h6.animate-on-scroll {
          transform: translateY(30px);
        }
        
        p.animate-on-scroll {
          transform: translateY(20px);
        }
        
        img.animate-on-scroll {
          transform: scale(0.95);
          filter: blur(5px);
          transition: opacity 0.8s ease, transform 0.8s ease, filter 0.8s ease;
        }
        
        img.animate-on-scroll.is-visible {
          transform: scale(1);
          filter: blur(0);
        }
        
        [class*="card"].animate-on-scroll,
        [class*="box"].animate-on-scroll {
          transform: translateY(40px);
          transition-delay: calc(var(--index, 0) * 0.1s);
        }
        
        /* Delay sequential elements */
        .animate-on-scroll:nth-child(1) { --index: 1; }
        .animate-on-scroll:nth-child(2) { --index: 2; }
        .animate-on-scroll:nth-child(3) { --index: 3; }
        .animate-on-scroll:nth-child(4) { --index: 4; }
        .animate-on-scroll:nth-child(5) { --index: 5; }
        .animate-on-scroll:nth-child(6) { --index: 6; }
        .animate-on-scroll:nth-child(7) { --index: 7; }
        .animate-on-scroll:nth-child(8) { --index: 8; }
      `}} />
      
      {/* Scroll progress bar */}
      <div 
        className="scroll-progress" 
        style={{ transform: `scaleX(${scrollProgress})` }} 
      />
      
      {/* Particle effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10"
            style={{
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.2) * (index % 2 === 0 ? 1 : -1)}px)`,
              opacity: 0.3 + Math.random() * 0.3,
              filter: 'blur(8px)',
              transition: 'transform 0.3s ease-out'
            }}
          />
        ))}
      </div>
    </>
  );
} 