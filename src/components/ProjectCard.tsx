
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
        "group relative overflow-hidden border-2 border-[#9A3412] shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-lg",
        className
      )}
    >
      {/* Traditional Newari decorative roof element */}
      <div className="w-full h-4 bg-[#9A3412]" style={{
        clipPath: "polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)"
      }}></div>
      
      <div className="bg-white overflow-hidden">
        {/* Image container */}
        <div className="aspect-video overflow-hidden relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Traditional overlay on hover */}
          <div className="absolute inset-0 bg-[#9A3412]/50 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
          
          {/* Corner wooden carving patterns */}
          <div className="absolute top-0 left-0 w-12 h-12 bg-[url('/lovable-uploads/wood-carving.png')] bg-no-repeat bg-cover opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 bg-[url('/lovable-uploads/wood-carving.png')] bg-no-repeat bg-cover opacity-30 transform rotate-180"></div>
        </div>
        
        <div className="p-6 border-t-2 border-[#9A3412]">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold text-[#7F1D1D] group-hover:text-[#9A3412] transition-colors">
              {title}
            </h3>
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#9A3412]/10 text-[#9A3412] hover:bg-[#9A3412] hover:text-white transition-colors"
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
                className="inline-flex items-center px-2.5 py-0.5 border border-[#9A3412] text-xs font-medium text-[#7F1D1D]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="h-2 bg-[#9A3412]"></div>
    </div>
  );
};

export default ProjectCard;
