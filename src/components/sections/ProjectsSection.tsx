
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const ProjectsSection = () => {
  const featuredProjects = [
    {
      title: "ArthaScan",
      description: "An accounting system built with React that manages financial transactions and reporting.",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Financial", "Dashboard"],
      url: "https://arthascan.waveplusit.com"
    },
    {
      title: "PTS Municipality",
      description: "Project tracking system for municipalities, built with React to monitor ongoing projects.",
      imageUrl: "https://images.unsplash.com/photo-1569389397653-c04fe624e663?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Project Management"],
      url: "https://pts.waveplus.com.np"
    },
    {
      title: "Visit Imadhyapur",
      description: "Tourism website built with WordPress showcasing local destinations and attractions.",
      imageUrl: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=1000&auto=format&fit=crop",
      tags: ["WordPress", "Tourism"],
      url: "https://visitimadhyapur.com"
    }
  ];

  return (
    <section className="py-24 px-4 section-fade">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Here are some of my recent projects that showcase my skills and experience."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.title} className="group h-full bg-white dark:bg-gray-900/60 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium mt-auto"
                >
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
