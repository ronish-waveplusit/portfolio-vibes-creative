
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
      title: "Bhaktapur Heritage Portal",
      description: "A digital platform documenting the rich cultural heritage of Bhaktapur, focusing on traditional Newari architecture, temples, and wood carvings.",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
      tags: ["WordPress", "Heritage", "Documentation"],
      url: "#",
      category: "wordpress"
    },
    {
      title: "Newari Crafts Marketplace",
      description: "An online marketplace connecting traditional Newari artisans with global customers, helping preserve ancient crafts while providing sustainable livelihoods.",
      imageUrl: "https://images.unsplash.com/photo-1573496358961-3c82861469cd?q=80&w=1000&auto=format&fit=crop",
      tags: ["Laravel", "E-commerce"],
      url: "#",
      category: "laravel"
    },
    {
      title: "Cultural Heritage Documentation",
      description: "A comprehensive digital archive for documenting intangible cultural heritage of the Newari community in Nepal, featuring festivals, rituals, and traditions.",
      imageUrl: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=1000&auto=format&fit=crop",
      tags: ["Laravel", "Archive", "Heritage"],
      url: "#",
      category: "laravel"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-24 pb-16 animate-fade-in relative">
      {/* Newari decorative elements and background */}
      <div className="absolute top-0 left-0 w-full h-16 bg-[url('/lovable-uploads/wood-carving.png')] bg-repeat-x opacity-10 dark:opacity-15"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('/lovable-uploads/brick-texture.png')] bg-repeat -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-newari-gold/5 to-transparent dark:from-newari-gold/10 dark:to-transparent -z-5"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <SectionHeading 
            title="My Projects" 
            subtitle="A showcase of my development work, blending modern technology with Newari cultural inspiration"
            centered
          />
          
          {/* Newari-inspired decorative element */}
          <div className="my-8 relative">
            <div className="h-24 w-24 mx-auto relative">
              <div className="absolute inset-0 bg-newari-red/10 dark:bg-newari-red/20 rounded-full"></div>
              <div className="absolute inset-2 border-2 border-dashed border-newari-gold/30 dark:border-newari-gold/40 rounded-full"></div>
              <div className="absolute inset-4 bg-newari-gold/10 dark:bg-newari-gold/20 rounded-full flex items-center justify-center">
                <span className="text-newari-maroon dark:text-newari-gold text-xl font-medium">{projects.length}</span>
              </div>
            </div>
            <div className="mt-2 text-center text-sm text-newari-maroon dark:text-newari-gold/80">Total Projects</div>
          </div>
          
          <div className="mt-8 inline-flex flex-wrap justify-center gap-2 p-1.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-sm border border-newari-gold/30 dark:border-newari-gold/20">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                filter === "all" 
                  ? "bg-newari-red text-white shadow-sm" 
                  : "hover:bg-newari-red/10 dark:hover:bg-newari-red/20"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("react")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                filter === "react" 
                  ? "bg-newari-red text-white shadow-sm" 
                  : "hover:bg-newari-red/10 dark:hover:bg-newari-red/20"
              }`}
            >
              React
            </button>
            <button
              onClick={() => setFilter("laravel")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                filter === "laravel" 
                  ? "bg-newari-red text-white shadow-sm" 
                  : "hover:bg-newari-red/10 dark:hover:bg-newari-red/20"
              }`}
            >
              Laravel
            </button>
            <button
              onClick={() => setFilter("wordpress")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                filter === "wordpress" 
                  ? "bg-newari-red text-white shadow-sm" 
                  : "hover:bg-newari-red/10 dark:hover:bg-newari-red/20"
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
              className="border-newari-gold/20 dark:border-newari-gold/10 hover:border-newari-gold/50 dark:hover:border-newari-gold/30"
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
