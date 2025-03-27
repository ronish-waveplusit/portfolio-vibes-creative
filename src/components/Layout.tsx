
import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Only set up the observer after the loading state is complete
    if (!isLoading) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      const sections = document.querySelectorAll('.section-fade');
      sections.forEach(section => observer.observe(section));

      return () => {
        sections.forEach(section => observer.unobserve(section));
      };
    }
  }, [isLoading]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin mb-4"></div>
            <span className="text-primary font-medium">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
