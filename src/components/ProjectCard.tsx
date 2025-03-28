
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
        "group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl nepali-scroll",
        className
      )}
    >
      {/* Top decorative Newari temple-inspired roof element */}
      <div className="newari-temple-roof w-full"></div>
      
      <div className="bg-white dark:bg-gray-900 overflow-hidden">
        {/* Image container with traditional fabric pattern overlay */}
        <div className="aspect-video overflow-hidden relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay with traditional Newari pattern */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-[url('/lovable-uploads/newari-pattern.png')] bg-repeat opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          
          {/* Traditional Newari wood carving inspired corner embellishments */}
          <div className="absolute top-0 left-0 w-12 h-12 bg-[url('/lovable-uploads/wood-carving.png')] bg-no-repeat bg-cover opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 bg-[url('/lovable-uploads/wood-carving.png')] bg-no-repeat bg-cover opacity-20 transform rotate-180"></div>
        </div>
        
        <div className="p-6 border-t-2 border-newari-gold/20">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold text-newari-brick dark:text-newari-amber group-hover:text-newari-red dark:group-hover:text-newari-gold transition-colors">
              {title}
            </h3>
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
          
          <p className="mt-3 text-muted-foreground text-sm line-clamp-3">{description}</p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-newari-red/10 text-newari-red dark:bg-newari-amber/20 dark:text-newari-amber/90"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom decorative element inspired by Newari woodwork */}
      <div className="h-3 bg-gradient-to-r from-newari-maroon via-newari-gold to-newari-red"></div>
    </div>
  );
};

export default ProjectCard;
