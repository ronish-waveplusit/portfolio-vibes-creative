
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

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-amber-50/30 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Newari architectural elements as background decoration */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-newari-pattern bg-repeat pointer-events-none"></div>
      
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
          <div className="flex flex-col items-center">
            {/* Newari-inspired loading animation */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-4 border-t-transparent animate-spin mb-4 glow-effect" 
                style={{borderColor: 'var(--newari-gold)', borderTopColor: 'transparent'}}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-newari-gold rounded-full opacity-70"></div>
              </div>
            </div>
            <span className="text-newari-maroon font-medium">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <main className="flex-grow relative" key={location.pathname}>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
