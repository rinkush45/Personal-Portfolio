import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedIcon from '@/components/ui/AnimatedIcon';
import aws from "@/images/aws-svgrepo-com.svg"

export default function Skills() {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const skillCategories = [
    {
      name: "Cloud Platforms",
      skills: [
        { 
          name: "AWS", 
          icon: aws,
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
      name: "Version Control",
      skills: [
        { 
          name: "Git", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", 
          color: "orange",
          description: "Git - Distributed version control system for tracking changes in source code during software development."
        },
        { 
          name: "GitHub", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", 
          color: "violet",
          description: "GitHub - Web-based hosting service for version control using Git, with collaboration features."
        },
        { 
          name: "GitLab", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", 
          color: "orange",
          description: "GitLab - Web-based DevOps lifecycle tool that provides a Git repository manager with CI/CD pipeline features."
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
        },
        { 
          name: "Istio", 
          icon: "https://www.vectorlogo.zone/logos/istioio/istioio-icon.svg", 
          color: "cyan",
          description: "Istio Service Mesh - Open-source service mesh that provides traffic management, security, and observability for microservices."
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
        },
        { 
          name: "CloudFormation", 
          icon: "https://symbols.getvecta.com/stencil_73/126_amazoncloudformation-icon.1e398e5f9f.svg", 
          color: "orange",
          description: "AWS CloudFormation - Service for modeling and provisioning AWS resources using templates."
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
      name: "OS & Networking",
      skills: [
        { 
          name: "Linux", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", 
          color: "orange",
          description: "Linux - Open-source operating system, using distributions like Ubuntu and RHEL for server environments."
        },
        { 
          name: "NGINX", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", 
          color: "cyan",
          description: "NGINX - Web server, reverse proxy, and load balancer for high-traffic websites."
        },
        { 
          name: "HTTP/HTTPS", 
          icon: "https://www.svgrepo.com/show/508319/network.svg", 
          color: "violet",
          description: "HTTP/HTTPS - Protocols for transmitting hypertext requests between browsers and servers, with HTTPS adding encryption."
        }
      ]
    },
    {
      name: "Database",
      skills: [
        { 
          name: "MySQL", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", 
          color: "cyan",
          description: "MySQL - Open-source relational database management system for storing and retrieving data."
        },
        { 
          name: "MongoDB", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", 
          color: "cyan",
          description: "MongoDB - NoSQL database program that uses JSON-like documents with optional schemas."
        },
        { 
          name: "PostgreSQL", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", 
          color: "cyan",
          description: "PostgreSQL - Advanced open-source relational database with SQL compliance and many features."
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section 
      id="skills" 
      className="py-16 md:py-24 relative overflow-hidden w-full"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black opacity-80 z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-pink-600 dark:from-neon-violet dark:to-neon-pink mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div 
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                <span className="relative">
                  {category.name}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-pink-500 dark:from-neon-violet dark:to-neon-pink rounded-full"></span>
                </span>
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.2 + (skillIndex * 0.1),
                      duration: 0.5,
                      type: "spring"
                    }}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center justify-center gap-2"
                  >
                    <div className="tooltip-container relative">
                      {/* Tooltip that appears ABOVE the icon */}
                      <div className="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-52 p-2 
                                    bg-white dark:bg-gray-800 rounded-md shadow-lg z-50
                                    text-xs text-gray-700 dark:text-gray-300
                                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                    transition-all duration-200 pointer-events-none">
                        {skill.description}
                        <div className="tooltip-arrow absolute top-full left-1/2 transform -translate-x-1/2 
                                       border-8 border-transparent border-t-white dark:border-t-gray-800"></div>
                      </div>
                      
                      {/* Icon container */}
                      <div className="group w-12 h-12 rounded-full flex items-center justify-center 
                                    bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 
                                    hover:border-violet-300 dark:hover:border-neon-violet/50 
                                    transition-all duration-300">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-6 h-6 object-contain" 
                        />
                      </div>
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
