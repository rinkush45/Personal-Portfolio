
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
  const sectionRef = useScrollReveal();
  
  const projects = [
    {
      title: "Civom AI",
      description: "Deployed and managed infrastructure for an AI-powered platform using AWS, Kubernetes, and Terraform. Implemented CI/CD pipelines for automated testing and deployment, resulting in a 60% reduction in deployment time and improved reliability.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["AWS", "Kubernetes", "Terraform", "CI/CD", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
      color: "violet",
      delay: 0
    },
    {
      title: "FreeDevs",
      description: "Designed and implemented backend infrastructure for a freelancer marketplace using AWS services including EC2, ELB, RDS, and S3. Set up auto-scaling capabilities and monitoring using CloudWatch and Prometheus, ensuring 99.9% uptime and optimal performance during peak usage.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["AWS", "Auto-scaling", "Prometheus", "Grafana", "Backend"],
      githubUrl: "#",
      liveUrl: "#",
      color: "pink",
      delay: 1
    },
    {
      title: "Hotstar Clone",
      description: "Created a fully automated cloud deployment for a Hotstar clone using Terraform and AWS. Implemented a microservices architecture with containerized applications, and set up automated testing and continuous deployment workflows, reducing development cycle time by 40%.",
      image: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      tags: ["Terraform", "AWS", "Microservices", "Docker", "CI/CD"],
      githubUrl: "#",
      liveUrl: "#",
      color: "orange",
      delay: 2
    },
    {
      title: "Cloud Cost Optimization",
      description: "Implemented a cost optimization strategy for a startup's AWS infrastructure, resulting in a 30% reduction in monthly cloud costs. Used AWS Cost Explorer, Trusted Advisor, and custom scripts to identify unused resources and optimize instance sizing and reserved instance coverage.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      tags: ["AWS", "Cost Optimization", "Python", "Automation"],
      githubUrl: "#",
      liveUrl: "#",
      color: "cyan",
      delay: 3
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">My Projects</h2>
        </div>
        
        <div 
          ref={sectionRef} 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              color={project.color as 'violet' | 'pink' | 'orange' | 'cyan'}
              delay={project.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
