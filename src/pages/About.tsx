
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SkillBadge from "@/components/SkillBadge";

const About = () => {
  const skills = [
    "PHP", "Laravel", "WordPress", "ReactJS", "TypeScript", 
    "Node.js", "RESTful API", "Git", "Database Management", 
    "Problem Solving", "Team Leadership", "Communication"
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <SectionHeading 
            title="About Me" 
            subtitle="Learn more about my background, skills and experience."
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1 flex justify-center">
            <div className="relative w-64 h-64 rounded-xl overflow-hidden animate-fade-in">
              <img 
                src="/lovable-uploads/2e838f1a-7079-428c-8911-50a100582038.png" 
                alt="Ronish Prajapati"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
          
          <div className="col-span-2 animate-slide-in-right stagger-1">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Ronish Prajapati</h3>
              <p className="text-muted-foreground">
                I am a dedicated web developer with hands-on experience in Laravel and WordPress, gained during a three-month internship. I have developed dynamic websites, custom plugins, and tailored themes for WordPress, alongside building robust backend systems using Laravel.
              </p>
              <p className="text-muted-foreground">
                My expertise includes working with databases, creating RESTful APIs, and implementing features such as user authentication. Additionally, I have a strong foundation in Node.js, which enhances my backend development capabilities.
              </p>
              <div className="pt-2">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Gwarko, Lalitpur</span>
                  <span>•</span>
                  <a href="tel:9769378424" className="hover:text-primary transition-colors">9769378424</a>
                  <span>•</span>
                  <a href="mailto:ronishprajapati0@gmail.com" className="hover:text-primary transition-colors">ronishprajapati0@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-12 section-fade">
          <SectionHeading title="Professional Experience" />
          
          <div className="border rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-sm">
            <div className="p-6 border-b">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Laravel/WordPress Intern</h3>
                  <p className="text-muted-foreground">Nirvan Studio (Waveplus IT)</p>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>July 2024 - Present</span>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <p className="text-muted-foreground">
                  I completed a three-month internship at Nirvan Studio as a WordPress/Laravel intern, where I worked
                  on building dynamic websites, learning new topics, and creating tailored themes. My role also involved
                  backend development using Laravel, focusing on database management and API integration.
                </p>
                <h4 className="font-medium mt-4">Accomplishments:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Developed a CMS using Laravel enabling efficient content management and improved site functionality.</li>
                  <li>Contributed to the development of dynamic form components of the FAO Nepal website, collaborating on key functionalities and dynamic forms working in packages.</li>
                  <li>Built a dynamic website using WordPress for Bhaktapur Health Concern, tailored to meet their specific needs.</li>
                  <li>Built a fully functional job portal as a side project using Laravel and Blade components, featuring job listings, user authentication, and an application submission system.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Education */}
        <div className="mb-12 section-fade">
          <SectionHeading title="Education" />
          
          <div className="border rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-sm">
            <div className="p-6 border-b">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science and Information Technology (BSc CSIT)</h3>
                  <p className="text-muted-foreground">Bhaktapur Multiple Campus</p>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <GraduationCap className="h-4 w-4 mr-1" />
                  <span>8th semester ongoing</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-b">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">+2 in Science</h3>
                  <p className="text-muted-foreground">Moonlight College</p>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <GraduationCap className="h-4 w-4 mr-1" />
                  <span>3.55 GPA</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Primary</h3>
                  <p className="text-muted-foreground">Bal Deeksha Sadan School</p>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <GraduationCap className="h-4 w-4 mr-1" />
                  <span>3.55 GPA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills */}
        <div className="mb-12 section-fade">
          <SectionHeading title="Skills & Expertise" />
          
          <div className="border rounded-lg p-6 bg-white dark:bg-gray-900 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Strengths</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground mr-2">✓</div>
                    <span>Problem solving and analytical thinking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground mr-2">✓</div>
                    <span>Strong communication skills</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground mr-2">✓</div>
                    <span>Team leadership and collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground mr-2">✓</div>
                    <span>Self-motivated learner</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground mr-2">✓</div>
                    <span>Attention to detail and code quality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center section-fade">
          <h3 className="text-xl font-semibold mb-4">Interested in working together?</h3>
          <Button asChild size="lg">
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
