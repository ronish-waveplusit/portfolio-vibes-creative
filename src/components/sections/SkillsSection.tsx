
import React from "react";
import { Code, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/SectionHeading";
import SkillBadge from "@/components/SkillBadge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-5 w-5" />,
      skills: ["ReactJS", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: <Code className="h-5 w-5" />,
      skills: ["PHP", "Laravel", "WordPress", "Node.js", "RESTful API", "MySQL"]
    },
    {
      title: "Tools & Technologies",
      icon: <Briefcase className="h-5 w-5" />,
      skills: ["Git", "GitHub", "VS Code", "Docker", "NPM", "Webpack"]
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-50 dark:bg-gray-900/20 section-fade">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading 
          title="My Skills" 
          subtitle="Here are the technologies and skills I've mastered throughout my development journey."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="bg-white dark:bg-gray-900/60 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
