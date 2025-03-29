
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className,
}) => {
  return (
    <div
      className={cn(
        "space-y-3 mb-10",
        centered && "text-center",
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight relative inline-block text-[#7F1D1D]">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#9A3412]"></span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
