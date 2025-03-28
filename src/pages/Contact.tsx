
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "@/components/SectionHeading";
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
    <div className="min-h-screen relative bg-[url('/lovable-uploads/brick-texture.png')] bg-repeat bg-fixed">
      {/* Traditional Newari wooden window frame at the top */}
      <div className="absolute top-0 left-0 w-full h-24 bg-[url('/lovable-uploads/wood-carving.png')] bg-repeat-x opacity-20"></div>
      
      <div className="pt-32 pb-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Newari temple-inspired header section */}
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-24 bg-newari-brick opacity-10 rounded-t-3xl"></div>
            <div className="relative z-10 pb-6">
              <h1 className="text-4xl font-bold text-newari-maroon mb-4">Get in Touch</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-newari-gold to-newari-red mx-auto"></div>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Have a question or want to work together? Feel free to reach out.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20">
            {/* Contact info column with traditional Newari door frame design */}
            <div className="lg:col-span-2">
              <div className="bg-white/95 dark:bg-gray-900/95 rounded-lg overflow-hidden shadow-lg relative">
                {/* Newari door frame decorative elements */}
                <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-newari-maroon via-newari-gold to-newari-red"></div>
                <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-r from-newari-maroon via-newari-gold to-newari-red"></div>
                <div className="absolute top-6 left-0 w-6 h-[calc(100%-12px)] bg-gradient-to-b from-newari-gold via-newari-amber to-newari-gold"></div>
                <div className="absolute top-6 right-0 w-6 h-[calc(100%-12px)] bg-gradient-to-b from-newari-gold via-newari-amber to-newari-gold"></div>
                
                <div className="p-10 m-6">
                  <h3 className="text-2xl font-bold text-newari-brick mb-8">Contact Information</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-5">
                        <div className="w-12 h-12 rounded-full bg-newari-gold/20 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-newari-gold" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Phone</h4>
                        <p className="font-medium text-lg">9769378424</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-5">
                        <div className="w-12 h-12 rounded-full bg-newari-gold/20 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-newari-gold" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Email</h4>
                        <p className="font-medium text-lg">ronishprajapati0@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-5">
                        <div className="w-12 h-12 rounded-full bg-newari-gold/20 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-newari-gold" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Location</h4>
                        <p className="font-medium text-lg">Gwarko, Lalitpur</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-newari-gold/20">
                    <h3 className="text-xl font-bold text-newari-brick mb-6">Social Profiles</h3>
                    <div className="flex items-center space-x-5">
                      <a 
                        href="https://github.com/ronishprajapati" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-newari-red/10 flex items-center justify-center text-newari-red hover:bg-newari-red hover:text-white transition-colors"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                      <a 
                        href="https://linkedin.com/in/ronish-prajapati" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-newari-red/10 flex items-center justify-center text-newari-red hover:bg-newari-red hover:text-white transition-colors"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form column with Newari scroll design */}
            <div className="lg:col-span-3">
              <div className="bg-white/95 dark:bg-gray-900/95 rounded-lg shadow-lg relative overflow-hidden">
                {/* Newari scroll design elements */}
                <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-newari-brick to-newari-brown opacity-80"></div>
                <div className="absolute top-8 right-0 w-8 h-8 rounded-full bg-newari-red opacity-70"></div>
                <div className="absolute top-8 left-0 w-8 h-8 rounded-full bg-newari-red opacity-70"></div>
                
                <div className="p-10 mt-8">
                  <h3 className="text-2xl font-bold text-newari-brick mb-8">Send a Message</h3>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-newari-brick">Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your name" 
                                  {...field} 
                                  className="border-newari-gold/30 focus-visible:ring-newari-gold/50"
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
                              <FormLabel className="text-newari-brick">Email</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your email" 
                                  {...field} 
                                  className="border-newari-gold/30 focus-visible:ring-newari-gold/50"
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
                            <FormLabel className="text-newari-brick">Subject</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Message subject" 
                                {...field} 
                                className="border-newari-gold/30 focus-visible:ring-newari-gold/50"
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
                            <FormLabel className="text-newari-brick">Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Your message" 
                                className="min-h-[150px] resize-none border-newari-gold/30 focus-visible:ring-newari-gold/50" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-newari-brick to-newari-maroon hover:from-newari-maroon hover:to-newari-brick text-white py-6 text-lg"
                      >
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          
          {/* Newari decorative footer element */}
          <div className="flex justify-center">
            <div className="w-24 h-24 yomari-punhi-element opacity-50"></div>
          </div>
        </div>
      </div>
      
      {/* Traditional Newari wooden frame at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-[url('/lovable-uploads/wood-carving.png')] bg-repeat-x opacity-20 transform rotate-180"></div>
    </div>
  );
};

export default Contact;
