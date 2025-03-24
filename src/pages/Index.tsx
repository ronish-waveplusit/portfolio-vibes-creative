import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, ExternalLink, Code, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";

const Index = () => {
  const [text, setText] = useState("");
  const [fullText] = useState("Backend Developer specialized in Laravel & WordPress development");
  const [index, setIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prevText => prevText + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 40);
      
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  const skills = [
    "PHP", "Laravel", "WordPress", "ReactJS", "TypeScript", 
    "Node.js", "RESTful API", "Git", "Database Management", "Problem Solving"
  ];

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
      {/* Hero Section - Elvito inspired */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50/50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-950/50 -z-10"></div>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex flex-col items-center animate-fade-in">
            <div className="mb-6 relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-gray-200 to-primary/30 rounded-full blur-sm"></div>
              <img 
                src="/lovable-uploads/2e838f1a-7079-428c-8911-50a100582038.png" 
                alt="Ronish Prajapati"
                className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-white shadow-lg relative"
              />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-in-left stagger-1">
              Ronish Prajapati
            </h1>
            <div className="h-12">
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-right stagger-2">
                {text}<span className="animate-pulse">|</span>
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-8 animate-fade-in stagger-3">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/contact">
                  Contact Me
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-5 pt-8 animate-fade-in stagger-4">
              <a 
                href="https://github.com/ronishprajapati" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/ronish-prajapati" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:ronishprajapati0@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <button 
          onClick={handleScrollDown}
          className="absolute bottom-12 animate-bounce p-3 rounded-full bg-white/80 text-primary shadow-md hover:bg-primary hover:text-primary-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      </section>

      {/* About Section - Elvito inspired */}
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

      {/* Skills Section - NEW, Elvito inspired */}
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

      {/* Projects Section - Expanded and Enhanced */}
      <section className="py-24 px-4 section-fade">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Here are some of my recent projects that showcase my skills and experience."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.title} className="group h-full bg-white dark:bg-gray-900/60 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium mt-auto"
                  >
                    View Project <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA - Elvito inspired */}
      <section className="py-24 px-4 section-fade relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-950/70 -z-10"></div>
        <div className="container mx-auto max-w-4xl text-center">
          <SectionHeading 
            title="Let's Work Together" 
            subtitle="Have a project in mind? I'd love to help you bring it to life."
            centered
          />
          <Button asChild size="lg" className="mt-8 rounded-full px-10 py-6 text-lg">
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
