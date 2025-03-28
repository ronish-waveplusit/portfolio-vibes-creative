
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
      {/* Decorative top border inspired by Newari wood carvings */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-newari-maroon via-newari-gold to-newari-red"></div>
      
      <div className="aspect-video overflow-hidden relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay with traditional Newari pattern */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/newari-pattern.png')] bg-repeat opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-newari-red dark:group-hover:text-newari-gold transition-colors">{title}</h3>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-newari-gold/10 text-newari-gold hover:bg-newari-gold hover:text-white dark:bg-newari-gold/20 dark:text-newari-gold dark:hover:bg-newari-gold dark:hover:text-white transition-colors"
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
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-newari-red/10 text-newari-red dark:bg-newari-red/20 dark:text-newari-red/90"
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
