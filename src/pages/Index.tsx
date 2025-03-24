
import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactCTA from "@/components/sections/ContactCTA";

const Index = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactCTA />
    </div>
  );
};

export default Index;
