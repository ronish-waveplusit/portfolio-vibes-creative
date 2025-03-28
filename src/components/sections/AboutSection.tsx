
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mountain, Compass, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SkillBadge from "@/components/SkillBadge";

const AboutSection = () => {
  const skills = [
    "Web Development", "Mobile Apps", "UI/UX Design", "React", 
    "Laravel", "WordPress", "Node.js", "MongoDB", "MySQL",
    "JavaScript", "TypeScript", "PHP"
  ];

  return (
    <section className="py-24 px-4 section-fade relative overflow-hidden">
      {/* Newari decorative elements */}
      <div className="absolute -left-16 top-24 w-32 h-32 rounded-full bg-amber-600/10 blur-3xl"></div>
      <div className="absolute -right-16 bottom-24 w-32 h-32 rounded-full bg-red-800/10 blur-3xl"></div>
      
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
          subtitle="I'm a passionate developer with deep roots in Newari culture, combining modern technology with traditional values."
          centered
        />
        <div className="mt-12 bg-white dark:bg-gray-900/60 rounded-2xl shadow-xl p-8 md:p-10 space-y-6 backdrop-blur-sm border border-amber-600/10 relative">
          {/* Decorative border inspired by Newari wood carvings */}
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-amber-700 via-red-800 to-amber-700 rounded-t-2xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Born and raised in the cultural heart of Nepal, I've been surrounded by the intricate artistry and traditions of Newari culture. This heritage has inspired my approach to development and design, where attention to detail and craftsmanship are paramount, much like the elaborate wood carvings found in traditional Newari architecture.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a developer, I bring the same dedication to my work that Newari artisans bring to their craft. I specialize in creating responsive web applications that combine modern functionality with aesthetic appeal. My cultural background has given me a unique perspective that influences my design sensibilities, resulting in work that stands out while remaining intuitive and user-friendly.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex items-center gap-3 bg-secondary/50 p-4 rounded-lg w-full border-l-4 border-amber-600">
                <Mountain className="h-8 w-8 text-amber-600" />
                <div>
                  <h4 className="font-medium">Frontend Expert</h4>
                  <p className="text-sm text-muted-foreground">React & Modern JS</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-secondary/50 p-4 rounded-lg w-full border-l-4 border-red-800">
                <Compass className="h-8 w-8 text-red-800" />
                <div>
                  <h4 className="font-medium">Backend Developer</h4>
                  <p className="text-sm text-muted-foreground">Laravel & Node.js</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-secondary/50 p-4 rounded-lg w-full border-l-4 border-amber-700">
                <BookOpen className="h-8 w-8 text-amber-700" />
                <div>
                  <h4 className="font-medium">Cultural Designer</h4>
                  <p className="text-sm text-muted-foreground">UI/UX with heritage</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-primary/5">
            <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
          <div className="pt-6">
            <Button asChild className="rounded-full px-6 bg-gradient-to-r from-amber-600 to-red-800 hover:opacity-90">
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
