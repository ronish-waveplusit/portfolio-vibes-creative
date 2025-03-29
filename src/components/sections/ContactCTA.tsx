
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const ContactCTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Festival background image with overlay */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/fea760f0-ff0f-495c-9363-fdf69c0b05ba.png')] bg-cover bg-center bg-fixed bg-no-repeat opacity-15 z-0"></div>
      <div className="absolute inset-0 bg-[#F9F6F2]/80 z-0"></div>
      
      {/* Traditional decorative divider at top */}
      <div className="absolute top-0 left-0 w-full h-4 bg-[#9A3412] z-10" style={{
        clipPath: "polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)"
      }}></div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <SectionHeading 
          title="Let's Work Together" 
          subtitle="Have a project in mind? I'd love to help you bring it to life."
          centered
        />
        <Button asChild size="lg" className="mt-8 px-10 py-6 text-lg bg-[#9A3412] hover:bg-[#7F1D1D] text-white border-0">
          <Link to="/contact">
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
      
      {/* Traditional decorative divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-[#9A3412] z-10" style={{
        clipPath: "polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)"
      }}></div>
    </section>
  );
};

export default ContactCTA;
