
import React from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";

const Index = () => {
  const skills = [
    "PHP", "Laravel", "WordPress", "ReactJS", "TypeScript", 
    "Node.js", "RESTful API", "Git", "Database Management", "Problem Solving"
  ];

  const featuredProjects = [
    {
      title: "ArthaScan",
      description: "An accounting system built with React that manages financial transactions and reporting.",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Financial", "Dashboard"],
      url: "https://arthascan.waveplusit.com"
    },
    {
      title: "PTS Municipality",
      description: "Project tracking system for municipalities, built with React to monitor ongoing projects.",
      imageUrl: "https://images.unsplash.com/photo-1569389397653-c04fe624e663?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Project Management"],
      url: "https://pts.waveplus.com.np"
    },
    {
      title: "Visit Imadhyapur",
      description: "Tourism website built with WordPress showcasing local destinations and attractions.",
      imageUrl: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=1000&auto=format&fit=crop",
      tags: ["WordPress", "Tourism"],
      url: "https://visitimadhyapur.com"
    }
  ];

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="h-[90vh] flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
          <div className="inline-block mb-4">
            <img 
              src="/lovable-uploads/2e838f1a-7079-428c-8911-50a100582038.png" 
              alt="Ronish Prajapati"
              className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-slide-in-left stagger-1">
            Ronish Prajapati
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-right stagger-2">
            Backend Developer specialized in Laravel & WordPress development
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-fade-in stagger-3">
            <Button asChild size="lg">
              <Link to="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Contact Me
              </Link>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 pt-4 animate-fade-in stagger-4">
            <a 
              href="https://github.com/ronishprajapati" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/ronish-prajapati" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:ronishprajapati0@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <button 
          onClick={handleScrollDown}
          className="absolute bottom-12 animate-bounce p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 section-fade">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading 
            title="About Me" 
            subtitle="I'm a dedicated backend developer with expertise in Laravel and WordPress, creating robust and efficient web applications."
            centered
          />
          <div className="mt-8 bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 md:p-8 space-y-4">
            <p className="text-muted-foreground">
              I am a dedicated web developer with hands-on experience in Laravel and WordPress, gained during a three-month internship. I have developed dynamic websites, custom plugins, and tailored themes for WordPress, alongside building robust backend systems using Laravel. My expertise includes working with databases, creating RESTful APIs, and implementing features such as user authentication. Additionally, I have a strong foundation in Node.js, which enhances my backend development capabilities.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
            <div className="pt-4">
              <Button asChild>
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 section-fade">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Here are some of my recent projects that showcase my skills and experience."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                url={project.url}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 section-fade">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionHeading 
            title="Let's Work Together" 
            subtitle="Have a project in mind? I'd love to help you bring it to life."
            centered
          />
          <Button asChild size="lg" className="mt-6">
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
