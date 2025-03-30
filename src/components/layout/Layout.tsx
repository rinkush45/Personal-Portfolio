import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollAnimations from '../effects/ScrollAnimations';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Add the 'animate-on-scroll' class to all sections on mount
  useEffect(() => {
    // Add animation classes to sections and their children
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('animate-on-scroll');
      
      // Add stagger animation to headings and paragraphs in sections
      const contentGroups = section.querySelectorAll('.content-container > div');
      contentGroups.forEach(group => {
        group.classList.add('stagger-children');
      });
      
      // Add animation to images
      const images = section.querySelectorAll('img');
      images.forEach(img => {
        img.classList.add('animate-on-scroll');
      });
    });
    
    // Get all skill cards, project cards, etc. for animations
    const cards = document.querySelectorAll('.card, .project-card, .skill-card');
    cards.forEach(card => {
      card.classList.add('animate-on-scroll');
    });
    
    // Create IntersectionObserver polyfill for :in-viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-viewport');
        } else {
          entry.target.classList.remove('in-viewport');
        }
      });
    }, { threshold: 0.1 });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .stagger-children');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}