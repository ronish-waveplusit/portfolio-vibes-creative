
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
        "group relative overflow-hidden rounded-lg border bg-white dark:bg-gray-900 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",
        className
      )}
    >
      {/* Decorative top border inspired by Newari art */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-red-800 to-amber-600"></div>
      
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
          <h3 className="text-xl font-semibold text-foreground group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">{title}</h3>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-amber-100 text-amber-800 hover:bg-amber-600 hover:text-white dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-700 dark:hover:text-white transition-colors"
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
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
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
