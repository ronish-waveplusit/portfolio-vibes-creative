
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { Search, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample blog data - in a real app, this would come from an API
const blogPosts = [
  {
    id: 1,
    title: "The Art of Modern Web Development with React",
    excerpt: "Exploring modern web development techniques using React and how they can be used to create beautiful, functional websites.",
    date: "May 15, 2023",
    category: "Development",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "Newari Architecture: Inspiring Modern Web Design",
    excerpt: "How traditional Newari architectural elements can inspire unique and culturally rich web designs for modern applications.",
    date: "April 22, 2023",
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1523946521142-ec8e2ac2c7e9",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Responsive Design Principles for Cultural Websites",
    excerpt: "Exploring best practices for creating responsive websites that showcase cultural heritage while working flawlessly across all devices.",
    date: "March 10, 2023",
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "Optimizing Heritage Websites for Performance",
    excerpt: "Techniques to improve loading speed and overall performance for websites that include rich cultural content and imagery.",
    date: "February 28, 2023",
    category: "Performance",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Celebrating Indra Jatra Through Interactive Web Elements",
    excerpt: "Creating interactive web experiences inspired by Nepal's famous Indra Jatra festival, combining tradition with modern technology.",
    date: "January 15, 2023",
    category: "Culture",
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
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-amber-50/30 to-transparent dark:from-gray-900/30 dark:to-transparent -z-10"></div>
      <div className="absolute top-40 left-0 w-full h-[500px] opacity-5 bg-[url('/lovable-uploads/newari-pattern.png')] bg-repeat -z-10"></div>
      
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Blog"
          subtitle="Thoughts on development, design, and the cultural heritage that inspires my work"
          centered={true}
        />
        
        <div className="mt-8 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl border border-amber-100 dark:border-gray-800 shadow-md">
          <div className="relative mb-6">
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-amber-200/50 dark:border-gray-700/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 dark:text-amber-400 h-4 w-4" />
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className={activeCategory === category 
                  ? "bg-amber-600 hover:bg-amber-700 text-white" 
                  : "border-amber-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-800"}
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
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-amber-100 dark:border-gray-700 hover:border-amber-300 hover:-translate-y-1">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2 border-b border-amber-100/50 dark:border-gray-700/50">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300">
                          {post.category}
                        </span>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <CardTitle className="text-xl line-clamp-2 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-4">
                      <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="text-sm flex justify-between items-center">
                      <span className="text-amber-700 dark:text-amber-400">{post.readTime}</span>
                      <span className="text-amber-600 dark:text-amber-400 font-medium">Read more →</span>
                    </CardFooter>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">No articles found matching "{searchTerm}"</p>
                <Button 
                  className="mt-4 bg-amber-600 hover:bg-amber-700"
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
                <PaginationLink href="#" isActive className="bg-amber-600 hover:bg-amber-700">1</PaginationLink>
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
