
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Heart, MessageSquare, Share2, BookmarkPlus, ArrowLeft } from "lucide-react";

// Sample blog data - in a real app, this would come from an API
const blogPosts = [
  {
    id: 1,
    title: "Creating Intuitive User Interfaces",
    content: `
      <p class="mb-4">User interface design is a critical component of creating successful digital products. An intuitive UI can make the difference between a product that users love and one they abandon in frustration.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Understanding User Needs</h2>
      <p class="mb-4">The foundation of any intuitive interface is a deep understanding of your users' needs, goals, and behaviors. This requires thorough user research, including interviews, surveys, and usability testing.</p>
      <p class="mb-4">By identifying user pain points and preferences, you can design interfaces that align with their mental models and expectations. This alignment reduces cognitive load and makes the interface feel natural and intuitive.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Consistency is Key</h2>
      <p class="mb-4">Consistency in design creates familiarity and predictability, which are essential aspects of intuitive interfaces. When elements behave consistently throughout an application, users can apply what they've learned in one area to another, reducing the learning curve.</p>
      <p class="mb-4">This applies to visual elements (colors, typography, spacing), interaction patterns (how buttons respond to clicks), and language (terminology used throughout the interface).</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Visual Hierarchy and Feedback</h2>
      <p class="mb-4">A clear visual hierarchy guides users through the interface, highlighting important elements and actions. This can be achieved through size, color, contrast, and spacing.</p>
      <p class="mb-4">Immediate feedback for user actions is another crucial element of intuitive interfaces. When a user clicks a button or submits a form, the interface should acknowledge the action, whether through a color change, animation, or notification.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Simplicity and Progressive Disclosure</h2>
      <p class="mb-4">Intuitive interfaces prioritize simplicity and clarity. This doesn't mean removing functionality, but rather presenting it in a way that doesn't overwhelm users.</p>
      <p class="mb-4">Progressive disclosure is a technique that helps achieve this balance. It involves showing only the most necessary information and controls initially, then revealing more complex options as needed or requested by the user.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">Creating intuitive user interfaces is both an art and a science. It requires empathy for users, attention to detail, and a willingness to iterate based on feedback. By focusing on user needs, maintaining consistency, establishing a clear visual hierarchy, and prioritizing simplicity, designers can create interfaces that feel natural and effortless to use.</p>
    `,
    date: "May 15, 2023",
    author: {
      name: "Alex Chen",
      avatar: "https://i.pravatar.cc/150?img=11",
      role: "UX Designer"
    },
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    readTime: "6 min read",
    tags: ["UI/UX", "Design Principles", "User Experience"],
    likes: 124,
    comments: [
      {
        id: 1,
        author: {
          name: "Sarah Johnson",
          avatar: "https://i.pravatar.cc/150?img=5"
        },
        date: "May 16, 2023",
        content: "Great insights! I've found that user testing early and often really helps create more intuitive interfaces.",
        likes: 8
      },
      {
        id: 2,
        author: {
          name: "Raj Patel",
          avatar: "https://i.pravatar.cc/150?img=7"
        },
        date: "May 17, 2023",
        content: "I'm curious how you balance simplicity with feature-rich applications. Any specific techniques?",
        likes: 3
      }
    ]
  },
  // Other blog posts would be defined here
  {
    id: 2,
    title: "The Power of React Hooks",
    content: `<p>Content for React Hooks article...</p>`,
    date: "April 22, 2023",
    author: {
      name: "Jamie Lee",
      avatar: "https://i.pravatar.cc/150?img=12",
      role: "Frontend Developer"
    },
    category: "Development",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Web Development"],
    likes: 98,
    comments: []
  },
  {
    id: 3,
    title: "Responsive Design Best Practices",
    content: `<p>Content for responsive design article...</p>`,
    date: "March 10, 2023",
    author: {
      name: "Morgan Taylor",
      avatar: "https://i.pravatar.cc/150?img=13",
      role: "UI Designer"
    },
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a",
    readTime: "5 min read",
    tags: ["Responsive Design", "CSS", "Mobile First"],
    likes: 56,
    comments: []
  },
  {
    id: 4,
    title: "Optimizing Website Performance",
    content: `<p>Content for website performance article...</p>`,
    date: "February 28, 2023",
    author: {
      name: "Chris Williams",
      avatar: "https://i.pravatar.cc/150?img=14",
      role: "Performance Engineer"
    },
    category: "Performance",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    readTime: "7 min read",
    tags: ["Performance", "Optimization", "Web Vitals"],
    likes: 87,
    comments: []
  },
  {
    id: 5,
    title: "Building Accessible Web Applications",
    content: `<p>Content for accessibility article...</p>`,
    date: "January 15, 2023",
    author: {
      name: "Pat Rivera",
      avatar: "https://i.pravatar.cc/150?img=15",
      role: "Accessibility Specialist"
    },
    category: "Accessibility",
    imageUrl: "https://images.unsplash.com/photo-1573495612937-f22e8f3f6f72",
    readTime: "9 min read",
    tags: ["Accessibility", "ARIA", "Inclusive Design"],
    likes: 112,
    comments: []
  }
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [comment, setComment] = useState("");
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  
  // Find the post with the matching ID
  const post = blogPosts.find(post => post.id === Number(id));
  
  if (!post) {
    return (
      <div className="pt-28 pb-16 container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  // Find related posts (same category or shared tags)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);
  
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      toast.success("Comment submitted successfully!");
      setComment("");
    } else {
      toast.error("Please enter a comment.");
    }
  };
  
  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    if (!liked) {
      toast.success("Post liked!");
    }
  };
  
  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    if (!bookmarked) {
      toast.success("Post saved to your bookmarks!");
    } else {
      toast.info("Post removed from your bookmarks.");
    }
  };
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="pb-16">
      {/* Full-width hero section styled more like the reference site */}
      <div className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40 z-10"></div>
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-[70vh] object-cover"
        />
        <div className="container mx-auto px-4 md:px-6 absolute inset-0 z-20 flex flex-col justify-end pb-20">
          <div className="max-w-4xl">
            <div className="flex items-center mb-4 text-white/90">
              <Link to="/blog" className="text-sm hover:underline">Blog</Link>
              <span className="mx-2">›</span>
              <span className="text-sm">{post.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">{post.title}</h1>
            
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4 border-2 border-white">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-white/80">{post.author.role}</div>
                </div>
              </div>
              <div className="text-sm text-white/80">
                {post.date} · {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Main content column */}
            <div className="md:w-3/4">
              <div 
                className="prose prose-lg max-w-none mb-10 dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 rounded-full text-sm bg-accent/30 text-accent-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between py-4 border-t border-b border-border mb-10">
                <div className="flex items-center gap-6">
                  <button 
                    onClick={handleLike}
                    className={`flex items-center gap-1 ${liked ? 'text-vibrant-pink' : 'text-muted-foreground'} hover:text-vibrant-pink transition-colors`}
                    aria-label="Like post"
                  >
                    <Heart className={`h-5 w-5 ${liked ? 'fill-vibrant-pink' : ''}`} />
                    <span>{post.likes + likeCount}</span>
                  </button>
                  
                  <button 
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View comments"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>{post.comments.length}</span>
                  </button>
                </div>
                
                <div className="flex items-center gap-4">
                  <button 
                    onClick={handleShare}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Share post"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                  
                  <button 
                    onClick={handleBookmark}
                    className={`${bookmarked ? 'text-vibrant-orange' : 'text-muted-foreground'} hover:text-vibrant-orange transition-colors`}
                    aria-label="Bookmark post"
                  >
                    <BookmarkPlus className={`h-5 w-5 ${bookmarked ? 'fill-vibrant-orange' : ''}`} />
                  </button>
                </div>
              </div>
              
              {/* Author bio - similar to the reference site */}
              <div className="bg-accent/10 rounded-lg p-6 mb-10">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">About {post.author.name}</h3>
                    <p className="text-muted-foreground mb-2">{post.author.role}</p>
                    <p>An experienced writer and specialist in {post.category.toLowerCase()} topics with a passion for creating engaging content that inspires readers.</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-6 border-b pb-2">Comments ({post.comments.length})</h3>
                
                {post.comments.length > 0 ? (
                  <div className="space-y-6">
                    {post.comments.map((comment) => (
                      <Card key={comment.id} className="bg-white/5 backdrop-blur-md dark:bg-gray-800/20 border-primary/5">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                              <AvatarFallback>{comment.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <span className="font-medium text-lg">{comment.author.name}</span>
                                  <span className="text-sm text-muted-foreground ml-2">{comment.date}</span>
                                </div>
                                <button 
                                  className="text-muted-foreground hover:text-primary text-sm flex items-center gap-1"
                                  aria-label="Like comment"
                                >
                                  <Heart className="h-3.5 w-3.5" />
                                  <span>{comment.likes}</span>
                                </button>
                              </div>
                              <p className="text-foreground">{comment.content}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 bg-white/5 backdrop-blur-md dark:bg-gray-800/20 rounded-lg">
                    <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h4 className="text-lg font-medium mb-2">No comments yet</h4>
                    <p className="text-muted-foreground mb-4">Be the first to share your thoughts on this article!</p>
                  </div>
                )}
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 border-b pb-2">Join the conversation</h3>
                <form onSubmit={handleSubmitComment}>
                  <div className="mb-4">
                    <Textarea 
                      placeholder="Share your thoughts on this article..."
                      className="min-h-[150px] bg-white/5 backdrop-blur-md dark:bg-gray-800/20 border-primary/10 focus:border-primary"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="bg-gradient-to-r from-vibrant-purple to-vibrant-pink hover:opacity-90 px-6">
                    Post Comment
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Sidebar column - similar to the reference site */}
            <div className="md:w-1/4 space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 border-b pb-2">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link 
                      to={`/blog/${relatedPost.id}`} 
                      key={relatedPost.id}
                      className="group block"
                    >
                      <div className="aspect-video rounded-md overflow-hidden mb-2">
                        <img 
                          src={relatedPost.imageUrl} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {relatedPost.date} · {relatedPost.readTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 border-b pb-2">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap(post => post.tags))).slice(0, 10).map((tag, index) => (
                    <Link 
                      to={`/blog?tag=${tag}`} 
                      key={index}
                      className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent-foreground hover:bg-accent/40 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-vibrant-purple/10 to-vibrant-pink/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Subscribe to our newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">Get the latest articles and resources delivered straight to your inbox.</p>
                <Button className="w-full bg-gradient-to-r from-vibrant-purple to-vibrant-pink hover:opacity-90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
