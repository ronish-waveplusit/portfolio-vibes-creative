
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
      title: "Visit Imadhyapur",
      description: "Tourism website built with WordPress showcasing local destinations and attractions. Designed to promote tourism in the Madhyapur region with an emphasis on cultural heritage.",
      imageUrl: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=1000&auto=format&fit=crop",
      tags: ["WordPress", "Tourism"],
      url: "https://visitimadhyapur.com",
      category: "wordpress"
    },
    {
      title: "Bhaktapur Health Concern",
      description: "A dynamic website for a health organization built with WordPress, providing health information and services to the community.",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
      tags: ["WordPress", "Healthcare"],
      url: "#",
      category: "wordpress"
    },
    {
      title: "Job Portal",
      description: "A fully functional job portal built as a side project using Laravel and Blade components, featuring job listings, user authentication, and an application submission system.",
      imageUrl: "https://images.unsplash.com/photo-1573496358961-3c82861469cd?q=80&w=1000&auto=format&fit=crop",
      tags: ["Laravel", "Job Board"],
      url: "#",
      category: "laravel"
    },
    {
      title: "FAO Nepal Forms",
      description: "Contributed to the development of dynamic form components for the FAO Nepal website, improving data collection and processing capabilities.",
      imageUrl: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=1000&auto=format&fit=crop",
      tags: ["Laravel", "Forms"],
      url: "#",
      category: "laravel"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <SectionHeading 
            title="My Projects" 
            subtitle="Here's a collection of projects I've worked on, showcasing my skills and experience."
            centered
          />
          
          <div className="mt-8 inline-flex flex-wrap justify-center gap-2 p-1 bg-secondary rounded-lg">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === "all" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-primary/10"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("react")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === "react" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-primary/10"
              }`}
            >
              React
            </button>
            <button
              onClick={() => setFilter("laravel")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === "laravel" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-primary/10"
              }`}
            >
              Laravel
            </button>
            <button
              onClick={() => setFilter("wordpress")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === "wordpress" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-primary/10"
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
