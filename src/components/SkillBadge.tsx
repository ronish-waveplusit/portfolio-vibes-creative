
import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  skill: string;
  className?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, className }) => {
  return (
    <Badge
      variant="secondary"
      className={cn(
        "skill-badge px-4 py-2 text-sm font-medium transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground",
        className
      )}
    >
      {skill}
    </Badge>
  );
};

export default SkillBadge;
