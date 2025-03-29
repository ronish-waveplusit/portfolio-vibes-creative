
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      {/* Festival background image with overlay */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/c6023dd7-ffc6-4aef-925f-a6fef0636cfa.png')] bg-cover bg-center bg-no-repeat opacity-15 z-0"></div>
      <div className="absolute inset-0 bg-[#F9F6F2]/80 z-0"></div>
      
      {/* Traditional Newari decorative header */}
      <div className="w-full h-16 bg-[#9A3412] relative mb-16 z-10">
        <div className="absolute bottom-0 left-0 w-full h-6 bg-[#9A3412]" style={{
          clipPath: "polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)"
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#7F1D1D] mb-4">Get in Touch</h1>
          <div className="w-24 h-1 bg-[#9A3412] mx-auto mb-6"></div>
          <p className="text-[#78350F] max-w-2xl mx-auto">Have a question or want to work together? Feel free to reach out.</p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info column */}
          <div className="lg:col-span-1 bg-white/90 backdrop-blur-sm border-2 border-[#9A3412] p-8 relative">
            {/* Newari window pattern decoration */}
            <div className="absolute top-0 left-0 w-full h-6 bg-[#9A3412]"></div>
            
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-[#7F1D1D] mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-5">
                    <div className="w-12 h-12 rounded-full bg-[#9A3412]/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-[#9A3412]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#78350F] mb-1">Phone</h4>
                    <p className="font-medium text-lg">9769378424</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-5">
                    <div className="w-12 h-12 rounded-full bg-[#9A3412]/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-[#9A3412]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#78350F] mb-1">Email</h4>
                    <p className="font-medium text-lg">ronishprajapati0@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-5">
                    <div className="w-12 h-12 rounded-full bg-[#9A3412]/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-[#9A3412]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#78350F] mb-1">Location</h4>
                    <p className="font-medium text-lg">Gwarko, Lalitpur</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-[#9A3412]/20">
                <h3 className="text-xl font-bold text-[#7F1D1D] mb-6">Social Profiles</h3>
                <div className="flex items-center space-x-5">
                  <a 
                    href="https://github.com/ronishprajapati" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#9A3412]/10 flex items-center justify-center text-[#9A3412] hover:bg-[#9A3412] hover:text-white transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/ronish-prajapati" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#9A3412]/10 flex items-center justify-center text-[#9A3412] hover:bg-[#9A3412] hover:text-white transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form column */}
          <div className="lg:col-span-2 bg-white/90 backdrop-blur-sm border-2 border-[#9A3412] p-8 relative">
            {/* Newari window pattern decoration */}
            <div className="absolute top-0 left-0 w-full h-6 bg-[#9A3412]"></div>
            
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-[#7F1D1D] mb-8">Send a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#78350F]">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              {...field} 
                              className="border-[#9A3412]/30 focus-visible:ring-[#9A3412]/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#78350F]">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email" 
                              {...field} 
                              className="border-[#9A3412]/30 focus-visible:ring-[#9A3412]/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#78350F]">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Message subject" 
                            {...field} 
                            className="border-[#9A3412]/30 focus-visible:ring-[#9A3412]/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#78350F]">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            className="min-h-[150px] resize-none border-[#9A3412]/30 focus-visible:ring-[#9A3412]/50" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#9A3412] hover:bg-[#7F1D1D] text-white py-6 text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
        
        {/* Traditional Newari footer decoration */}
        <div className="w-full h-16 bg-[#9A3412] relative mt-16">
          <div className="absolute top-0 left-0 w-full h-6 bg-[#9A3412]" style={{
            clipPath: "polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)"
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
