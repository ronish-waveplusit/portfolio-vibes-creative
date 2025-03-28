
import React, { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  
  const projects = [
    {
      title: "ArthaScan",
      description: "An accounting system built with React that manages financial transactions and reporting. Provides comprehensive financial tracking and analytics.",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Financial", "Dashboard"],
      url: "https://arthascan.waveplusit.com",
      category: "react"
    },
    {
      title: "PTS Municipality",
      description: "Project tracking system for municipalities, built with React to monitor ongoing projects. Helps local governments track the progress of infrastructure and development initiatives.",
      imageUrl: "https://images.unsplash.com/photo-1569389397653-c04fe624e663?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Project Management"],
      url: "https://pts.waveplus.com.np",
      category: "react"
    },
    {
      title: "Visit Madhyapur",
      description: "Tourism website built with WordPress showcasing local destinations and Newari cultural heritage. Designed to promote tourism in the Madhyapur region of Bhaktapur.",
      imageUrl: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=1000&auto=format&fit=crop",
      tags: ["WordPress", "Tourism", "Culture"],
      url: "https://visitimadhyapur.com",
      category: "wordpress"
    },
    {
      title: "Bhaktapur Health Concern",
      description: "A dynamic website for a health organization built with WordPress, providing health information and services to the community in the heart of Newari culture.",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
      tags: ["WordPress", "Healthcare"],
      url: "#",
      category: "wordpress"
    },
    {
      title: "Newari Job Portal",
      description: "A fully functional job portal built as a side project using Laravel, featuring jobs with a focus on preserving traditional arts and crafts in the Kathmandu Valley.",
      imageUrl: "https://images.unsplash.com/photo-1573496358961-3c82861469cd?q=80&w=1000&auto=format&fit=crop",
      tags: ["Laravel", "Job Board"],
      url: "#",
      category: "laravel"
    },
    {
      title: "Cultural Heritage Forms",
      description: "Contributed to the development of dynamic form components for documenting intangible cultural heritage of the Newari community in Nepal.",
      imageUrl: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=1000&auto=format&fit=crop",
      tags: ["Laravel", "Forms", "Heritage"],
      url: "#",
      category: "laravel"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-24 pb-16 animate-fade-in bg-white dark:bg-gray-950 relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('/lovable-uploads/newari-pattern.png')] bg-repeat -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-amber-50/30 to-transparent dark:from-gray-900/30 dark:to-transparent -z-5"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <SectionHeading 
            title="My Projects" 
            subtitle="A showcase of my development work, blending modern technology with cultural inspiration"
            centered
          />
          
          <div className="mt-8 inline-flex flex-wrap justify-center gap-2 p-1.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-sm border border-amber-100 dark:border-gray-800">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                filter === "all" 
                  ? "bg-amber-600 text-white shadow-sm" 
                  : "hover:bg-amber-100 dark:hover:bg-amber-900/30"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("react")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                filter === "react" 
                  ? "bg-amber-600 text-white shadow-sm" 
                  : "hover:bg-amber-100 dark:hover:bg-amber-900/30"
              }`}
            >
              React
            </button>
            <button
              onClick={() => setFilter("laravel")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                filter === "laravel" 
                  ? "bg-amber-600 text-white shadow-sm" 
                  : "hover:bg-amber-100 dark:hover:bg-amber-900/30"
              }`}
            >
              Laravel
            </button>
            <button
              onClick={() => setFilter("wordpress")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                filter === "wordpress" 
                  ? "bg-amber-600 text-white shadow-sm" 
                  : "hover:bg-amber-100 dark:hover:bg-amber-900/30"
              }`}
            >
              WordPress
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              url={project.url}
              className="border-amber-100 dark:border-gray-800 hover:border-amber-300 dark:hover:border-amber-800"
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No projects found with the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
