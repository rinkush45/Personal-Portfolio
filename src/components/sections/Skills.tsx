
import { useScrollReveal } from '@/hooks/useScrollReveal';
import AnimatedIcon from '../ui/AnimatedIcon';

export default function Skills() {
  const sectionRef = useScrollReveal();
  
  const skillCategories = [
    {
      name: "Cloud Platforms",
      skills: [
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", color: "orange" },
        { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", color: "cyan" },
        { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", color: "cyan" }
      ]
    },
    {
      name: "Container & Orchestration",
      skills: [
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "cyan" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", color: "cyan" }
      ]
    },
    {
      name: "Infrastructure as Code",
      skills: [
        { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", color: "violet" },
        { name: "Ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg", color: "orange" }
      ]
    },
    {
      name: "CI/CD",
      skills: [
        { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", color: "orange" },
        { name: "GitLab CI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", color: "orange" },
        { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "violet" }
      ]
    },
    {
      name: "Monitoring & Logging",
      skills: [
        { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg", color: "orange" },
        { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", color: "orange" },
        { name: "ELK Stack", icon: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg", color: "cyan" }
      ]
    },
    {
      name: "Programming & Scripting",
      skills: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "cyan" },
        { name: "Bash", icon: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg", color: "violet" },
        { name: "YAML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yaml/yaml-original.svg", color: "pink" }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 relative overflow-hidden bg-secondary/20"
    >
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-30 z-0"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Technical Skills</h2>
        </div>
        
        <div ref={sectionRef} className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-10">
              <h3 className="text-xl font-semibold mb-6 inline-block relative">
                {category.name}
                <span className="absolute bottom-[-5px] left-0 w-full h-0.5 rounded-full bg-gradient-to-r from-neon-violet to-neon-pink"></span>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <AnimatedIcon
                    key={skillIndex}
                    icon={skill.icon}
                    name={skill.name}
                    color={skill.color as 'violet' | 'pink' | 'orange' | 'cyan'}
                    delay={(categoryIndex * 300) + (skillIndex * 100)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
