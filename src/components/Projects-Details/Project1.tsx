import { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, Github, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/router';

// Define Project interface
interface Project {
  title: string;
  description: string[];
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export default function ProjectDetail() {
  const router = useRouter();
  const { query } = router; // Use router.query for Next.js 12 and below
  const data = query.data as string;
  const index = query.index as string;
  const [project, setProject] = useState<Project | null>(null);
  
  useEffect(() => {
    if (data) {
      try {
        const projectData = JSON.parse(decodeURIComponent(data)) as Project;
        setProject(projectData);
      } catch (error) {
        console.error('Failed to parse project data', error);
      }
    }
  }, [data]);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading project details...</div>
      </div>
    );
  }
  
  return (
    <>
      <div className="min-h-screen py-20">
        <div className="max-w-5xl mx-auto">
          {/* Back button */}
          <button 
            onClick={() => router.push('/#projects')}
            className="mb-8 flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </button>
          
          {/* Project header */}
          <div className="mb-10">
            <div className="text-sm text-blue-400 font-medium mb-1">Featured Project</div>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-blue-400 border border-blue-500/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Project image */}
          <div className="mb-10">
            <div className="rounded-lg overflow-hidden border border-gray-700 shadow-xl">
              <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
            </div>
          </div>
          
          {/* Project description */}
          <div className="border border-gray-700 p-6 md:p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
            <ul className="space-y-4 text-gray-400">
              {project.description.map((item, i) => (
                <li key={i} className="flex items-start">
                  <ArrowRight className="w-5 h-5 mt-1 mr-3 text-pink-500" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Project links */}
          <div className="flex gap-6 mb-12">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 border border-purple-500/30 hover:bg-purple-600 transition-all"
            >
              <Github size={18} />
              <span>View Code</span>
            </a>
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 border border-pink-500/30 hover:bg-pink-600 transition-all"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          </div>
          
          {/* Back to projects button */}
          <div className="text-center">
            <button 
              onClick={() => router.push('/#projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-all"
            >
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
