
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mountains, Compass, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SkillBadge from "@/components/SkillBadge";

const AboutSection = () => {
  const skills = [
    "Himalayan Treks", "Cultural Heritage", "Local Cuisine", "Photography", 
    "Travel Writing", "Storytelling", "Adventure Tours", "Sustainable Tourism",
    "Nepali History", "Buddhist Culture"
  ];

  return (
    <section className="py-24 px-4 section-fade relative overflow-hidden">
      {/* Cultural decorative elements */}
      <div className="absolute -left-16 top-24 w-32 h-32 rounded-full bg-vibrant-orange/10 blur-3xl"></div>
      <div className="absolute -right-16 bottom-24 w-32 h-32 rounded-full bg-vibrant-blue/10 blur-3xl"></div>
      
      {/* Mandala-inspired decorative pattern */}
      <div className="absolute right-0 top-0 w-48 h-48 opacity-5 dark:opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M100,15 L120,40 L150,40 L130,65 L140,95 L110,80 L80,95 L90,65 L70,40 L100,40 Z"></path>
          <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="1"></circle>
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1"></circle>
          <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="1"></circle>
        </svg>
      </div>
      
      <div className="container mx-auto max-w-5xl">
        <SectionHeading 
          title="About Me" 
          subtitle="I'm a passionate travel writer and photographer dedicated to sharing Nepal's rich cultural heritage and breathtaking landscapes."
          centered
        />
        <div className="mt-12 bg-white dark:bg-gray-900/60 rounded-2xl shadow-xl p-8 md:p-10 space-y-6 backdrop-blur-sm border border-primary/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Born and raised among the foothills of the Himalayas, I've spent the last five years exploring the hidden treasures of Nepal - from the ancient temples of Kathmandu Valley to the majestic peaks of the Everest region. My passion is documenting these journeys and sharing the rich cultural tapestry that makes Nepal a truly unique destination.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through my writing and photography, I aim to showcase not only the stunning landscapes but also the rich traditions, vibrant festivals, and warm hospitality of the Nepali people. Join me as we journey through ancient cities, remote mountain villages, and sacred Buddhist and Hindu sites.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex items-center gap-3 bg-secondary/50 p-4 rounded-lg w-full">
                <Mountains className="h-8 w-8 text-vibrant-blue" />
                <div>
                  <h4 className="font-medium">Trekking Expert</h4>
                  <p className="text-sm text-muted-foreground">50+ treks completed</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-secondary/50 p-4 rounded-lg w-full">
                <Compass className="h-8 w-8 text-vibrant-orange" />
                <div>
                  <h4 className="font-medium">Cultural Guide</h4>
                  <p className="text-sm text-muted-foreground">Deep local knowledge</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-secondary/50 p-4 rounded-lg w-full">
                <BookOpen className="h-8 w-8 text-vibrant-purple" />
                <div>
                  <h4 className="font-medium">Published Writer</h4>
                  <p className="text-sm text-muted-foreground">200+ travel articles</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-primary/5">
            <h3 className="text-lg font-semibold mb-4">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
          <div className="pt-6">
            <Button asChild className="rounded-full px-6 bg-gradient-to-r from-vibrant-orange to-vibrant-purple hover:opacity-90">
              <Link to="/about">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
