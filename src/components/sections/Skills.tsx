
import { useScrollReveal } from '@/hooks/useScrollReveal';
import AnimatedIcon from '../ui/AnimatedIcon';

export default function Skills() {
  const sectionRef = useScrollReveal();
  
  const skillCategories = [
    {
      name: "Cloud Platforms",
      skills: [
        { 
          name: "AWS", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", 
          color: "orange",
          description: "Amazon Web Services - EC2, ELB, RDS, S3, Lambda, CloudFormation, and more services for cloud computing."
        },
        { 
          name: "GCP", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", 
          color: "cyan",
          description: "Google Cloud Platform - Compute Engine, Cloud Storage, BigQuery, and Kubernetes Engine for cloud services."
        },
        { 
          name: "Azure", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", 
          color: "cyan",
          description: "Microsoft Azure - Virtual Machines, App Services, Azure Functions and Storage for cloud infrastructure."
        }
      ]
    },
    {
      name: "Container & Orchestration",
      skills: [
        { 
          name: "Docker", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", 
          color: "cyan",
          description: "Docker - Container platform for packaging applications and dependencies for consistent deployment."
        },
        { 
          name: "Kubernetes", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", 
          color: "cyan",
          description: "Kubernetes - Container orchestration platform for automating deployment, scaling, and management."
        }
      ]
    },
    {
      name: "Infrastructure as Code",
      skills: [
        { 
          name: "Terraform", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", 
          color: "violet",
          description: "Terraform - Infrastructure as code tool for building, changing, and versioning infrastructure safely."
        },
        { 
          name: "Ansible", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg", 
          color: "orange",
          description: "Ansible - Automation tool for configuration management, application deployment, and task automation."
        }
      ]
    },
    {
      name: "CI/CD",
      skills: [
        { 
          name: "Jenkins", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", 
          color: "orange",
          description: "Jenkins - Open-source automation server for building, testing, and deploying code."
        },
        { 
          name: "GitLab CI", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", 
          color: "orange",
          description: "GitLab CI - Continuous integration and deployment platform integrated with GitLab."
        },
        { 
          name: "GitHub Actions", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", 
          color: "violet",
          description: "GitHub Actions - CI/CD platform integrated with GitHub repositories for automated workflows."
        }
      ]
    },
    {
      name: "Monitoring & Logging",
      skills: [
        { 
          name: "Prometheus", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg", 
          color: "orange",
          description: "Prometheus - Monitoring and alerting toolkit for metrics collection and storage."
        },
        { 
          name: "Grafana", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", 
          color: "orange",
          description: "Grafana - Analytics and monitoring platform for visualizing metrics from various data sources."
        },
        { 
          name: "ELK Stack", 
          icon: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg", 
          color: "cyan",
          description: "ELK Stack - Elasticsearch, Logstash, and Kibana for log collection, analysis, and visualization."
        }
      ]
    },
    {
      name: "Programming & Scripting",
      skills: [
        { 
          name: "Python", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
          color: "cyan",
          description: "Python - Versatile programming language used for automation, scripting, and data processing."
        },
        { 
          name: "Bash", 
          icon: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg", 
          color: "violet",
          description: "Bash - Unix shell and command language for automation and system administration."
        },
        { 
          name: "YAML", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yaml/yaml-original.svg", 
          color: "pink",
          description: "YAML - Human-readable data serialization standard for configuration files and data exchange."
        }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 relative overflow-hidden bg-secondary/20 w-full flex items-center justify-center"
    >
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-30 z-0"
      />
      
      <div className="content-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Technical Skills</h2>
        </div>
        
        <div ref={sectionRef} className="space-y-12 w-full max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-10">
              <h3 className="text-xl font-semibold mb-6 inline-block relative text-center w-full">
                {category.name}
                <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-48 h-0.5 rounded-full bg-gradient-to-r from-neon-violet to-neon-pink"></span>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <AnimatedIcon
                    key={skillIndex}
                    icon={skill.icon}
                    name={skill.name}
                    color={skill.color as 'violet' | 'pink' | 'orange' | 'cyan'}
                    delay={(categoryIndex * 300) + (skillIndex * 100)}
                    description={skill.description}
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
