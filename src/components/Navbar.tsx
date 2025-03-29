
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled 
          ? "bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm" 
          : "bg-transparent"
      )}
    >
      {/* Traditional Newari decorative pattern at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#9A3412]"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between py-5">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            {/* Newari-inspired logo element */}
            <div className="w-8 h-8 bg-[#9A3412] rounded-full"></div>
            <span className="text-xl font-bold tracking-tight text-[#7F1D1D]">
              Ronish Prajapati
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-none group",
                    location.pathname === link.path
                      ? "text-[#7F1D1D]"
                      : "text-muted-foreground hover:text-[#9A3412]"
                  )}
                >
                  {/* Newari-inspired ornamental active indicator */}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#9A3412]"></span>
                  )}
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
          
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-foreground rounded-full bg-secondary/50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu with Newari-inspired decoration */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden pt-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#9A3412]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#9A3412]"></div>
          
          <nav className="flex flex-col items-center justify-center w-full gap-8 p-8 animate-fade-in">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-xl font-medium relative transition-all animate-fade-in flex flex-col items-center",
                  `stagger-${index + 1}`,
                  location.pathname === link.path
                    ? "text-[#7F1D1D]"
                    : "text-muted-foreground hover:text-[#9A3412]"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="mt-2 w-12 h-1 bg-[#9A3412] rounded-none"></span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
