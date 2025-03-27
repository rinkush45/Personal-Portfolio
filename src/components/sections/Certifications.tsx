
import { useScrollReveal } from '@/hooks/useScrollReveal';
import CertificationCard from '../ui/CertificationCard';

export default function Certifications() {
  const sectionRef = useScrollReveal();
  
  const certifications = [
    {
      title: "Internship Certificate in DevOps Engineering",
      issuer: "Mobzway Technologies",
      date: "June 2023",
      url: "#",
      color: "orange",
      delay: 0
    },
    {
      title: "Kubernetes Training Certification",
      issuer: "Learn and Build",
      date: "March 2023",
      url: "#",
      color: "violet",
      delay: 1
    },
    {
      title: "OpenStack & Python Training Certification",
      issuer: "Quibble AI",
      date: "December 2022",
      url: "#",
      color: "pink",
      delay: 2
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "September 2022",
      url: "#",
      color: "cyan",
      delay: 3
    }
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden bg-secondary/20 w-full flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-30 z-0"
      />
      
      <div className="content-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Certifications</h2>
        </div>
        
        <div 
          ref={sectionRef} 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center"
        >
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              url={cert.url}
              color={cert.color as 'violet' | 'pink' | 'orange' | 'cyan'}
              delay={cert.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
