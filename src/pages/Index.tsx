
import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactCTA from "@/components/sections/ContactCTA";

// Newari decorative separator component inspired by traditional wood carvings
const NewariSeparator = () => (
  <div className="relative py-16">
    <div className="newari-divider absolute top-0 left-0 right-0"></div>
    <div className="newari-divider absolute bottom-0 left-0 right-0 transform rotate-180"></div>
    
    <div className="flex items-center justify-center">
      <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-newari-gold to-transparent"></div>
      <div className="mx-4 relative">
        <div className="w-16 h-16 indra-jatra-element"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 biska-jatra-element"></div>
        </div>
      </div>
      <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-newari-gold to-transparent"></div>
    </div>
  </div>
);

// Traditional Newari festival banner component with authentic design elements
const FestivalBanner = () => (
  <div className="newari-door-frame my-12 mx-4 md:mx-12 relative">
    <div className="absolute inset-0 bg-[url('/lovable-uploads/fea760f0-ff0f-495c-9363-fdf69c0b05ba.png')] bg-cover bg-center opacity-15"></div>
    <div className="absolute inset-0 bg-white/70"></div>
    <div className="relative py-8 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/lovable-uploads/newari-pattern.png')] bg-repeat"></div>
      
      {/* Traditional corner decorations inspired by temple architecture */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-[url('/lovable-uploads/wood-carving.png')] bg-no-repeat bg-cover opacity-15"></div>
      <div className="absolute top-0 right-0 w-16 h-16 bg-[url('/lovable-uploads/wood-carving.png')] bg-no-repeat bg-cover opacity-15 transform rotate-90"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-[url('/lovable-uploads/wood-carving.png')] bg-no-repeat bg-cover opacity-15 transform -rotate-90"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-[url('/lovable-uploads/wood-carving.png')] bg-no-repeat bg-cover opacity-15 transform rotate-180"></div>
      
      <div className="relative z-10 text-center">
        <div className="flex justify-center space-x-12 mb-6">
          <div className="w-12 h-12 indra-jatra-element"></div>
          <div className="w-12 h-12 biska-jatra-element"></div>
          <div className="w-12 h-12 yomari-punhi-element"></div>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-newari-brick dark:text-newari-gold mb-4">Celebrating Newari Festivals</h3>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          From the chariot processions of Indra Jatra to the intricate masks of Biska Jatra and sweet
          Yomari during Yomari Punhi - our heritage influences my creative approach and digital craftsmanship,
          blending tradition with modern technology.
        </p>
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="relative overflow-x-hidden bg-[url('/lovable-uploads/brick-texture-light.png')] bg-fixed bg-opacity-5 dark:bg-gray-950">
      {/* Cultural background pattern - brick texture from Newari architecture with layered effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 to-white/10 dark:from-gray-900/30 dark:to-gray-950/10 z-0"></div>
      
      {/* Traditional Newari architectural elements as decorative border */}
      <div className="absolute top-0 left-0 w-full h-24 bg-[url('/lovable-uploads/wood-carving.png')] bg-repeat-x opacity-10 dark:opacity-15"></div>
      
      {/* Main content sections with Newari-inspired spacing and decoration */}
      <div className="pt-16 relative z-10">
        {/* Hero section with Newari-inspired background elements */}
        <HeroSection />
        
        <NewariSeparator />
        
        <div className="section-container relative z-10">
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
        <div className="relative h-16 w-full bg-[url('/lovable-uploads/wood-carving.png')] bg-repeat-x opacity-10 dark:opacity-15 transform rotate-180"></div>
      </div>
    </div>
  );
};

export default Index;
