
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const ContactCTA = () => {
  return (
    <section className="py-24 px-4 section-fade relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-950/70 -z-10"></div>
      <div className="container mx-auto max-w-4xl text-center">
        <SectionHeading 
          title="Let's Work Together" 
          subtitle="Have a project in mind? I'd love to help you bring it to life."
          centered
        />
        <Button asChild size="lg" className="mt-8 rounded-full px-10 py-6 text-lg">
          <Link to="/contact">
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ContactCTA;
