
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
    <div className="flex flex-col min-h-screen bg-[#F9F6F2] relative overflow-hidden">
      {/* Traditional Newari pattern overlay */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/newari-pattern.png')] bg-repeat opacity-[0.03] pointer-events-none"></div>
      
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-[#F9F6F2] z-50">
          <div className="flex flex-col items-center">
            {/* Newari-inspired loading animation */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-4 border-t-transparent animate-spin mb-4" 
                style={{borderColor: '#9A3412', borderTopColor: 'transparent'}}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-[#9A3412] rounded-full opacity-70"></div>
              </div>
            </div>
            <span className="text-[#7F1D1D] font-medium">Loading...</span>
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
