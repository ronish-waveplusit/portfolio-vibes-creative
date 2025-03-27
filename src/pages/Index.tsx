
import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactCTA from "@/components/sections/ContactCTA";

const Index = () => {
  return (
    <div className="pt-16 overflow-x-hidden">
      <HeroSection />
      <div className="section-container">
        <AboutSection />
      </div>
      <div className="section-container">
        <SkillsSection />
      </div>
      <div className="section-container">
        <ProjectsSection />
      </div>
      <div className="section-container">
        <ContactCTA />
      </div>
    </div>
  );
};

export default Index;
