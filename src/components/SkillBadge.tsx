
import React from "react";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  className?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, className }) => {
  return (
    <div
      className={cn(
        "skill-badge inline-flex px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground",
        className
      )}
    >
      {skill}
    </div>
  );
};

export default SkillBadge;
