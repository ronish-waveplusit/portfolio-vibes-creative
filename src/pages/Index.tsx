
import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactCTA from "@/components/sections/ContactCTA";
import { Separator } from "@/components/ui/separator";

// Newari decorative separator component
const NewariSeparator = () => (
  <div className="flex items-center justify-center py-8">
    <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>
    <div className="mx-4">
      <svg className="w-8 h-8 text-amber-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 15L9 12M12 15L15 12M12 15V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>
  </div>
);

const Index = () => {
  return (
    <div className="pt-16 overflow-x-hidden bg-[url('/lovable-uploads/brick-texture-light.png')] bg-fixed bg-opacity-5 dark:bg-gray-950">
      {/* Cultural background pattern - subtle brick texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 to-white/10 dark:from-gray-900/30 dark:to-gray-950/10 z-0"></div>
      
      <HeroSection />
      <NewariSeparator />
      
      <div className="section-container relative z-10">
        <AboutSection />
      </div>
      <NewariSeparator />
      
      <div className="section-container relative z-10">
        <SkillsSection />
      </div>
      <NewariSeparator />
      
      <div className="section-container relative z-10">
        <ProjectsSection />
      </div>
      <NewariSeparator />
      
      <div className="section-container relative z-10">
        <ContactCTA />
      </div>
    </div>
  );
};

export default Index;
