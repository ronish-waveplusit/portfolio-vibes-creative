
import React from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const HeroSection = () => {
  const fullText = "Backend Developer specialized in Laravel & WordPress development";
  const text = useTypingEffect(fullText);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
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
  );
};

export default HeroSection;
