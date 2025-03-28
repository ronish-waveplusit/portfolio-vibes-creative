
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { Search, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample blog data with Nepali cultural content
const blogPosts = [
  {
    id: 1,
    title: "The Art of Modern Web Development with React",
    excerpt: "Exploring modern web development techniques using React and how they can be used to create beautiful, functional websites with cultural influences.",
    date: "May 15, 2023",
    category: "Development",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "Newari Architecture: Inspiring Modern Web Design",
    excerpt: "How traditional Newari architectural elements like intricately carved wooden windows and brick facades can inspire unique and culturally rich web designs.",
    date: "April 22, 2023",
    category: "Culture",
    imageUrl: "https://images.unsplash.com/photo-1523946521142-ec8e2ac2c7e9",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Indra Jatra: The Festival of Rain and Harvest",
    excerpt: "Exploring the significance of Indra Jatra, one of the biggest festivals in Kathmandu Valley, its traditions, rituals, and how it inspires my creative work.",
    date: "March 10, 2023",
    category: "Festivals",
    imageUrl: "https://images.unsplash.com/photo-1568308073315-f287254f74f8",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "Yomari Punhi: Celebrating the Sweet Rice Delicacy",
    excerpt: "The tradition of Yomari Punhi, a Newari festival celebrating harvest with sweet dumplings, and how food brings communities together.",
    date: "February 28, 2023",
    category: "Festivals",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "Biska Jatra of Thimi: The Ancient Celebration of New Year",
    excerpt: "The fascinating traditions and rituals of Biska Jatra in Thimi, featuring colorful powder battles and cultural significance.",
    date: "January 15, 2023",
    category: "Festivals",
    imageUrl: "https://images.unsplash.com/photo-1542611332-3376046ae382",
    readTime: "9 min read",
  },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Filter by search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.category.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = activeCategory === "all" || post.category.toLowerCase() === activeCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...new Set(blogPosts.map(post => post.category.toLowerCase()))];

  return (
    <div className="pt-28 pb-16 container mx-auto px-4 md:px-6 relative">
      {/* Decorative Newari architectural elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-[url('/lovable-uploads/wood-carving.png')] bg-repeat-x opacity-10 dark:opacity-15"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-newari-amber/5 to-transparent dark:from-newari-maroon/10 dark:to-transparent -z-10"></div>
      <div className="absolute top-40 left-0 w-full h-[500px] opacity-5 bg-[url('/lovable-uploads/newari-pattern.png')] bg-repeat -z-10"></div>
      
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Nepali Cultural Blog"
          subtitle="Insights on development, design, and the rich cultural heritage that inspires my work"
          centered={true}
        />
        
        {/* Traditional Newari festival highlight banner */}
        <div className="festival-banner my-8">
          <h3 className="text-lg md:text-xl font-medium text-newari-maroon dark:text-newari-gold mb-2">Celebrating Newari Festivals</h3>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
            Explore stories about Indra Jatra, Biska Jatra of Thimi, Yomari Punhi, and how these cultural traditions
            influence modern design and development approaches.
          </p>
        </div>
        
        <div className="mt-8 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl border border-newari-gold/30 dark:border-newari-gold/20 shadow-md">
          <div className="relative mb-6">
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-newari-gold/20 dark:border-newari-gold/10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-newari-gold dark:text-newari-gold/70 h-4 w-4" />
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className={activeCategory === category 
                  ? "bg-newari-red hover:bg-newari-maroon text-white" 
                  : "border-newari-gold/20 dark:border-newari-gold/30 hover:bg-newari-gold/10 dark:hover:bg-newari-gold/10"}
                onClick={() => setActiveCategory(category)}
              >
                {category === "all" ? "All Posts" : category}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id} className="no-underline group">
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-newari-gold/20 dark:border-newari-gold/10 hover:border-newari-gold/50 hover:-translate-y-1">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Subtle Newari pattern overlay on hover */}
                      <div className="absolute inset-0 bg-[url('/lovable-uploads/newari-pattern.png')] bg-repeat opacity-0 group-hover:opacity-5 mix-blend-overlay transition-opacity duration-300"></div>
                    </div>
                    <CardHeader className="pb-2 border-b border-newari-gold/10 dark:border-newari-gold/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-newari-red/10 text-newari-red dark:bg-newari-red/20 dark:text-newari-red/90">
                          {post.category}
                        </span>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <CardTitle className="text-xl line-clamp-2 group-hover:text-newari-red dark:group-hover:text-newari-gold transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-4">
                      <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="text-sm flex justify-between items-center">
                      <span className="text-newari-maroon dark:text-newari-gold/80">{post.readTime}</span>
                      <span className="text-newari-red dark:text-newari-gold font-medium">Read more →</span>
                    </CardFooter>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">No articles found matching "{searchTerm}"</p>
                <Button 
                  className="mt-4 bg-newari-red hover:bg-newari-maroon"
                  onClick={() => {setSearchTerm(''); setActiveCategory('all');}}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
          
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationLink href="#" isActive className="bg-newari-red hover:bg-newari-maroon">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="pointer-events-none opacity-50">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="pointer-events-none opacity-50">3</PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Blog;
