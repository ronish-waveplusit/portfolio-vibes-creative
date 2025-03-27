
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  url: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  url,
  className,
}) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",
        className
      )}
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label={`Visit ${title} website`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        
        <p className="mt-2 text-muted-foreground text-sm line-clamp-3">{description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
