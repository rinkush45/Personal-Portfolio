
import { useEffect, useRef } from 'react';

interface UseScrollRevealProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  delay?: number;
  animationClass?: string;
}

export function useScrollReveal({
  threshold = 0.1,
  root = null,
  rootMargin = '0px',
  delay = 0,
  animationClass = 'animate-slide-up'
}: UseScrollRevealProps = {}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Hide the element initially
    node.style.opacity = '0';
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When it comes in view, delay and then set animation class
            setTimeout(() => {
              node.style.opacity = '1';
              node.classList.add(animationClass);
            }, delay);
            
            // Stop observing once it's animated
            observer.unobserve(node);
          }
        });
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, delay, animationClass]);

  return ref;
}
