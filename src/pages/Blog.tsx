
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { Search } from "lucide-react";

// Sample blog data - in a real app, this would come from an API
const blogPosts = [
  {
    id: 1,
    title: "Creating Intuitive User Interfaces",
    excerpt: "Learn the principles of designing intuitive user interfaces that delight users and improve engagement.",
    date: "May 15, 2023",
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "The Power of React Hooks",
    excerpt: "Discover how React Hooks can simplify your code and make your components more reusable and maintainable.",
    date: "April 22, 2023",
    category: "Development",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Responsive Design Best Practices",
    excerpt: "Explore the latest best practices for creating responsive websites that work flawlessly across all devices.",
    date: "March 10, 2023",
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "Optimizing Website Performance",
    excerpt: "Learn techniques to improve your website's loading speed and overall performance for better user experience.",
    date: "February 28, 2023",
    category: "Performance",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Building Accessible Web Applications",
    excerpt: "Discover how to make your web applications accessible to everyone, including users with disabilities.",
    date: "January 15, 2023",
    category: "Accessibility",
    imageUrl: "https://images.unsplash.com/photo-1573495612937-f22e8f3f6f72",
    readTime: "9 min read",
  },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-28 pb-16 container mx-auto px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Blog"
          subtitle="Thoughts, stories and ideas about design, development, and technology"
          centered={true}
        />
        
        <div className="relative mt-8 mb-12">
          <Input
            type="text"
            placeholder="Search articles..."
            className="pl-10 bg-white/10 backdrop-blur-md border-primary/20 dark:bg-gray-800/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="no-underline">
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border-primary/20 hover:border-primary hover:-translate-y-1 group">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="text-sm text-muted-foreground">
                    {post.date}
                  </CardFooter>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
        
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" disabled>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" disabled>3</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Blog;
