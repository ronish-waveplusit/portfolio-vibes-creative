
import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-12 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Ronish Prajapati</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              A dedicated backend developer specializing in Laravel, WordPress, and RESTful APIs.
              Building robust and efficient web applications.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact</h3>
            <div className="space-y-3">
              <a 
                href="tel:9769378424" 
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <PhoneCall className="h-4 w-4 mr-2" />
                9769378424
              </a>
              <a 
                href="mailto:ronishprajapati0@gmail.com" 
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                ronishprajapati0@gmail.com
              </a>
              <p className="flex items-center text-sm text-muted-foreground">
                Gwarko, Lalitpur
              </p>
              <div className="flex items-center space-x-4 pt-3">
                <a 
                  href="https://github.com/ronishprajapati" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/ronish-prajapati" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ronish Prajapati. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
