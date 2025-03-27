
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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin mb-4 glow-effect"></div>
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
