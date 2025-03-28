
import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactCTA from "@/components/sections/ContactCTA";

// Newari decorative separator component inspired by traditional wood carvings
const NewariSeparator = () => (
  <div className="flex items-center justify-center py-8">
    <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-newari-gold to-transparent"></div>
    <div className="mx-4">
      <svg className="w-12 h-12 text-newari-red" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L14.4 8.09L21 9.4L16.5 14.01L17.6 20.6L12 17.5L6.4 20.6L7.5 14.01L3 9.4L9.6 8.09L12 2Z" />
        <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
    <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-newari-gold to-transparent"></div>
  </div>
);

// Traditional Newari festival banner component
const FestivalBanner = () => (
  <div className="relative py-4 px-6 md:px-12 my-6 overflow-hidden bg-newari-brick/10 rounded-lg border border-newari-gold/30">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/lovable-uploads/newari-pattern.png')] bg-repeat"></div>
    <div className="relative z-10 text-center">
      <h3 className="text-xl md:text-2xl font-semibold text-newari-maroon mb-2">Celebrating Newari Festivals</h3>
      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
        From the chariot processions of Indra Jatra to the intricate masks of Biska Jatra and sweet
        Yomari during Yomari Punhi - our heritage influences my creative approach
      </p>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="pt-16 overflow-x-hidden bg-[url('/lovable-uploads/brick-texture-light.png')] bg-fixed bg-opacity-5 dark:bg-gray-950">
      {/* Cultural background pattern - brick texture from Newari architecture */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 to-white/10 dark:from-gray-900/30 dark:to-gray-950/10 z-0"></div>
      
      {/* Traditional Newari architectural elements as decorative border */}
      <div className="absolute top-0 left-0 w-full h-16 bg-[url('/lovable-uploads/wood-carving.png')] bg-repeat-x opacity-10 dark:opacity-15"></div>
      
      <HeroSection />
      <NewariSeparator />
      
      <div className="section-container relative z-10 px-4 md:px-8">
        <FestivalBanner />
        <AboutSection />
      </div>
      <NewariSeparator />
      
      <div className="section-container relative z-10 px-4 md:px-8">
        <SkillsSection />
      </div>
      <NewariSeparator />
      
      <div className="section-container relative z-10 px-4 md:px-8">
        <ProjectsSection />
      </div>
      <NewariSeparator />
      
      <div className="section-container relative z-10 px-4 md:px-8">
        <ContactCTA />
      </div>
      
      {/* Traditional Newari architectural elements as decorative footer border */}
      <div className="relative h-12 w-full bg-[url('/lovable-uploads/wood-carving.png')] bg-repeat-x opacity-10 dark:opacity-15 transform rotate-180"></div>
    </div>
  );
};

export default Index;
