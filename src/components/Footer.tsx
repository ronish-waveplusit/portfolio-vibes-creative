
import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-newari-gold/20 py-16 overflow-hidden">
      {/* Newari architectural decorative elements */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/brick-texture.png')] bg-repeat opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-newari-maroon via-newari-gold to-newari-red opacity-50"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo and description section */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 biska-jatra-element"></div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-newari-brick to-newari-red dark:from-newari-amber dark:to-newari-gold">
                Ronish Prajapati
              </h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              A dedicated backend developer specializing in Laravel, WordPress, and RESTful APIs.
              Building robust and efficient web applications inspired by both modern technology and Nepali cultural heritage.
            </p>
            
            {/* Newari-inspired decorative element */}
            <div className="w-32 h-1 bg-gradient-to-r from-newari-maroon via-newari-gold to-newari-red opacity-50"></div>
          </div>
          
          {/* Quick links section */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-lg font-bold text-newari-brick dark:text-newari-gold">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {["Home", "About", "Projects", "Blog", "Contact"].map((item, index) => (
                <Link 
                  key={index} 
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                  className="text-sm text-muted-foreground hover:text-newari-maroon dark:hover:text-newari-gold transition-colors relative inline-block"
                >
                  <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-newari-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    {item}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Contact info section */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-lg font-bold text-newari-brick dark:text-newari-gold">Contact</h3>
            <div className="space-y-3">
              <a 
                href="tel:9769378424" 
                className="flex items-center text-sm text-muted-foreground hover:text-newari-maroon dark:hover:text-newari-gold transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-newari-gold/10 flex items-center justify-center mr-3">
                  <PhoneCall className="h-4 w-4 text-newari-gold" />
                </div>
                9769378424
              </a>
              <a 
                href="mailto:ronishprajapati0@gmail.com" 
                className="flex items-center text-sm text-muted-foreground hover:text-newari-maroon dark:hover:text-newari-gold transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-newari-gold/10 flex items-center justify-center mr-3">
                  <Mail className="h-4 w-4 text-newari-gold" />
                </div>
                ronishprajapati0@gmail.com
              </a>
              <p className="flex items-center text-sm text-muted-foreground">
                Gwarko, Lalitpur
              </p>
              <div className="flex items-center space-x-3 pt-3">
                <a 
                  href="https://github.com/ronishprajapati" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-newari-red/10 flex items-center justify-center text-newari-red hover:bg-newari-red hover:text-white transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a 
                  href="https://linkedin.com/in/ronish-prajapati" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-newari-red/10 flex items-center justify-center text-newari-red hover:bg-newari-red hover:text-white transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer bottom section with traditional patterns */}
        <div className="mt-12 pt-6 border-t border-newari-gold/20 text-center relative">
          <div className="newari-divider absolute left-0 right-0 -top-2 h-4"></div>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Ronish Prajapati. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <div className="w-4 h-4 indra-jatra-element opacity-50"></div>
            <div className="w-4 h-4 biska-jatra-element opacity-50"></div>
            <div className="w-4 h-4 yomari-punhi-element opacity-50"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
