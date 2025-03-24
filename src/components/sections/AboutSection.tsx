
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SkillBadge from "@/components/SkillBadge";

const AboutSection = () => {
  const skills = [
    "PHP", "Laravel", "WordPress", "ReactJS", "TypeScript", 
    "Node.js", "RESTful API", "Git", "Database Management", "Problem Solving"
  ];

  return (
    <section className="py-24 px-4 section-fade">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading 
          title="About Me" 
          subtitle="I'm a dedicated backend developer with expertise in Laravel and WordPress, creating robust and efficient web applications."
          centered
        />
        <div className="mt-12 bg-white dark:bg-gray-900/60 rounded-2xl shadow-xl p-8 md:p-10 space-y-6 backdrop-blur-sm">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a dedicated web developer with hands-on experience in Laravel and WordPress, gained during a three-month internship. I have developed dynamic websites, custom plugins, and tailored themes for WordPress, alongside building robust backend systems using Laravel. My expertise includes working with databases, creating RESTful APIs, and implementing features such as user authentication. Additionally, I have a strong foundation in Node.js, which enhances my backend development capabilities.
          </p>
          <div className="pt-8">
            <h3 className="text-lg font-semibold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
          <div className="pt-6">
            <Button asChild className="rounded-full px-6">
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
