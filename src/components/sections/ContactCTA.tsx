
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const ContactCTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Vibrant background */}
      <div className="absolute inset-0 bg-gradient-to-br from-vibrant-blue/5 to-vibrant-purple/10 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-vibrant-purple/10 blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-vibrant-pink/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-vibrant-orange/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <SectionHeading 
          title="Let's Work Together" 
          subtitle="Have a project in mind? I'd love to help you bring it to life."
          centered
        />
        <Button asChild size="lg" className="mt-8 rounded-full px-10 py-6 text-lg bg-gradient-to-r from-vibrant-purple to-vibrant-pink hover:from-vibrant-pink hover:to-vibrant-purple transition-all duration-300 shadow-lg hover:shadow-xl">
          <Link to="/contact">
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ContactCTA;
