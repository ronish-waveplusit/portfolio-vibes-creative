
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Heart, MessageSquare, Share2, BookmarkPlus, ArrowLeft, Calendar, MapPin, Camera, Info } from "lucide-react";

// Sample blog data - in a real app, this would come from an API
const blogPosts = [
  {
    id: 1,
    title: "Journey Through Kathmandu's Ancient Temples",
    content: `
      <p class="mb-4 text-lg">The Kathmandu Valley, a UNESCO World Heritage site, is home to seven monument zones filled with ancient temples, palaces, and artifacts that date back centuries. The valley's rich cultural heritage makes it a must-visit destination for travelers seeking to understand Nepal's spiritual and artistic traditions.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">The Sacred Pashupatinath Temple</h2>
      <p class="mb-4">Located on the banks of the sacred Bagmati River, Pashupatinath Temple is one of the most significant Hindu temples dedicated to Lord Shiva. The main temple features a distinctive pagoda style with gilt roofing, beautifully carved rafters, and four silver-plated doors surrounded by statues of deities.</p>
      <p class="mb-4">As Nepal's oldest Hindu temple, it serves as an important pilgrimage site for devotees from across South Asia. The temple complex is a place of deep spiritual significance, particularly during festivals like Maha Shivaratri, when thousands of pilgrims gather to pay homage to Lord Shiva.</p>
      
      <div class="my-8 rounded-lg overflow-hidden">
        <img src="https://images.unsplash.com/photo-1597131628347-c264af95d4ce" alt="Pashupatinath Temple" class="w-full h-[400px] object-cover"/>
        <p class="text-sm text-muted-foreground italic text-center pt-2">The sacred Pashupatinath Temple complex along the Bagmati River</p>
      </div>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Boudhanath Stupa: A Tibetan Buddhist Haven</h2>
      <p class="mb-4">Standing as one of the largest stupas in Nepal and the holiest Tibetan Buddhist temple outside Tibet, Boudhanath dominates the skyline with its impressive mandala design. The stupa's all-seeing eyes of Buddha gaze out in four directions, symbolizing the omniscient nature of enlightenment.</p>
      <p class="mb-4">Walking clockwise around the stupa alongside monks in crimson robes and locals spinning prayer wheels creates a profound meditative experience. The surrounding area features numerous monasteries and shops selling traditional Tibetan crafts, thangka paintings, and singing bowls.</p>
      
      <div class="grid grid-cols-2 gap-4 my-8">
        <div>
          <img src="https://images.unsplash.com/photo-1591268226357-a34733381ea9" alt="Boudhanath Stupa" class="w-full h-64 object-cover rounded-lg"/>
          <p class="text-sm text-muted-foreground italic text-center pt-2">The magnificent Boudhanath Stupa</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1581793968248-4fef31d0d058" alt="Prayer flags at Boudhanath" class="w-full h-64 object-cover rounded-lg"/>
          <p class="text-sm text-muted-foreground italic text-center pt-2">Colorful prayer flags surround the stupa</p>
        </div>
      </div>
      
      <div class="bg-secondary/20 border border-primary/5 p-6 rounded-lg my-8">
        <h3 class="text-xl font-medium flex items-center gap-2 mb-3"><Info size={20} className="text-vibrant-blue" /> Traveler's Tip</h3>
        <p>The best time to visit these temples is during early morning or late afternoon when the golden light casts a magical glow on the ancient structures. Many ceremonies take place at dawn, offering visitors a chance to witness authentic religious practices. Remember to dress modestly when visiting religious sites, covering shoulders and knees as a sign of respect.</p>
      </div>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Swayambhunath: The Monkey Temple</h2>
      <p class="mb-4">Perched atop a hill overlooking the Kathmandu Valley, Swayambhunath is one of Nepal's most iconic landmarks. Legend says the Kathmandu Valley was once a vast lake, and the hill on which Swayambhunath sits emerged naturally, hence the name "Swayambhu," meaning self-manifested.</p>
      <p class="mb-4">The challenging climb up the 365 stone steps rewards visitors with panoramic views of Kathmandu and a complex filled with shrines, prayer wheels, and colorful prayer flags. The resident monkeys that give the temple its nickname believe themselves to be holy, as mentioned in ancient texts.</p>
      
      <div class="my-8 rounded-lg overflow-hidden">
        <img src="https://images.unsplash.com/photo-1598857906315-ea6f38d09abe" alt="Swayambhunath Temple" class="w-full h-[400px] object-cover"/>
        <p class="text-sm text-muted-foreground italic text-center pt-2">The majestic Swayambhunath Stupa with its watchful eyes</p>
      </div>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Cultural Heritage Preservation Efforts</h2>
      <p class="mb-4">Following the devastating 2015 earthquake that damaged many of Kathmandu's historic structures, significant restoration efforts have been underway. International organizations, alongside local communities, are working tirelessly to preserve these architectural marvels for future generations.</p>
      <p class="mb-4">Visiting these sites not only offers a glimpse into Nepal's rich cultural tapestry but also contributes to the local economy and ongoing preservation efforts. Each entrance fee helps fund the maintenance and restoration of these invaluable cultural landmarks.</p>
      
      <div class="bg-gradient-to-r from-vibrant-orange/10 to-vibrant-purple/10 p-6 rounded-lg my-8 border border-primary/5">
        <h3 class="text-xl font-medium mb-3">Nepali Cultural Calendar</h3>
        <p class="mb-4">Nepal follows both the Gregorian and lunar calendars, with numerous festivals throughout the year. Here are some key celebrations to plan your visit around:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><span class="font-medium">Dashain (October)</span>: Nepal's largest festival celebrating the goddess Durga's victory over evil</li>
          <li><span class="font-medium">Tihar (November)</span>: The festival of lights honoring Laxmi, the goddess of wealth</li>
          <li><span class="font-medium">Holi (March)</span>: The colorful festival of spring with water and colored powder</li>
          <li><span class="font-medium">Buddha Jayanti (May)</span>: Celebrating Buddha's birth, especially at Lumbini and Boudhanath</li>
        </ul>
      </div>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">Kathmandu's ancient temples offer more than just architectural beauty; they provide a window into Nepal's living spiritual traditions that have endured for centuries. Taking the time to understand the symbolism and practices associated with these sacred sites enriches the travel experience immeasurably.</p>
      <p class="mb-4">Whether you're a spiritual seeker, history enthusiast, or photography lover, these temples will leave an indelible impression and foster a deeper appreciation for Nepal's cultural complexity and spiritual depth.</p>
    `,
    date: "April 15, 2023",
    author: {
      name: "Maya Tamang",
      avatar: "https://i.pravatar.cc/150?img=5",
      role: "Cultural Guide & Travel Writer"
    },
    category: "Cultural Heritage",
    imageUrl: "https://images.unsplash.com/photo-1641921403073-83551d2dd59d",
    readTime: "9 min read",
    tags: ["Nepal", "Temples", "Buddhist Culture", "Hindu Temples", "Kathmandu Valley"],
    likes: 124,
    location: "Kathmandu Valley, Nepal",
    comments: [
      {
        id: 1,
        author: {
          name: "Sarah Johnson",
          avatar: "https://i.pravatar.cc/150?img=5"
        },
        date: "April 17, 2023",
        content: "This guide was incredibly helpful during my visit to Kathmandu last month! The tip about visiting early morning was spot on - I got some amazing photos at Pashupatinath during sunrise.",
        likes: 8
      },
      {
        id: 2,
        author: {
          name: "Raj Patel",
          avatar: "https://i.pravatar.cc/150?img=7"
        },
        date: "April 18, 2023",
        content: "As a Nepali living abroad, your article brought back wonderful memories of home. I would also suggest visitors check out the nearby Patan Durbar Square for incredible wood carvings and traditional architecture.",
        likes: 12
      }
    ]
  },
  // Other blog posts would be defined here
  {
    id: 2,
    title: "Trekking the Annapurna Circuit: A Complete Guide",
    content: `<p>Content for Annapurna Circuit trekking article...</p>`,
    date: "March 22, 2023",
    author: {
      name: "Maya Tamang",
      avatar: "https://i.pravatar.cc/150?img=5",
      role: "Cultural Guide & Travel Writer"
    },
    category: "Trekking",
    imageUrl: "https://images.unsplash.com/photo-1585121736663-a0bb5ae4c165",
    readTime: "12 min read",
    tags: ["Nepal", "Trekking", "Annapurna", "Himalayas", "Adventure"],
    likes: 98,
    location: "Annapurna Region, Nepal",
    comments: []
  },
  {
    id: 3,
    title: "Nepali Cuisine: Beyond Momos and Dal Bhat",
    content: `<p>Content for Nepali cuisine article...</p>`,
    date: "February 10, 2023",
    author: {
      name: "Maya Tamang",
      avatar: "https://i.pravatar.cc/150?img=5",
      role: "Cultural Guide & Travel Writer"
    },
    category: "Food & Culture",
    imageUrl: "https://images.unsplash.com/photo-1587116987928-215c39256a04",
    readTime: "7 min read",
    tags: ["Nepal", "Food", "Cuisine", "Cultural Experiences"],
    likes: 76,
    location: "Nationwide, Nepal",
    comments: []
  },
  {
    id: 4,
    title: "Exploring the Living Goddess: Nepal's Kumari Tradition",
    content: `<p>Content for Kumari tradition article...</p>`,
    date: "January 28, 2023",
    author: {
      name: "Maya Tamang",
      avatar: "https://i.pravatar.cc/150?img=5",
      role: "Cultural Guide & Travel Writer"
    },
    category: "Cultural Heritage",
    imageUrl: "https://images.unsplash.com/photo-1623068215264-307a637e38e5",
    readTime: "8 min read",
    tags: ["Nepal", "Kumari", "Living Goddess", "Tradition", "Kathmandu"],
    likes: 87,
    location: "Kathmandu, Nepal",
    comments: []
  },
  {
    id: 5,
    title: "Pokhara: Gateway to the Annapurnas",
    content: `<p>Content for Pokhara article...</p>`,
    date: "December 15, 2022",
    author: {
      name: "Maya Tamang",
      avatar: "https://i.pravatar.cc/150?img=5",
      role: "Cultural Guide & Travel Writer"
    },
    category: "Destinations",
    imageUrl: "https://images.unsplash.com/photo-1565073624497-7436104a9540",
    readTime: "6 min read",
    tags: ["Nepal", "Pokhara", "Phewa Lake", "Travel Guide"],
    likes: 112,
    location: "Pokhara, Nepal",
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
      {/* Full-width hero section */}
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
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-white gap-4">
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
              <div className="flex flex-wrap gap-4 text-sm text-white/80">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1.5" />
                  <span>{post.location}</span>
                </div>
                <div className="flex items-center">
                  <Camera className="h-4 w-4 mr-1.5" />
                  <span>{post.readTime}</span>
                </div>
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
              {/* Decorative element - prayer flags inspired divider */}
              <div className="flex justify-center mb-8">
                <div className="flex space-x-1">
                  {['bg-vibrant-blue', 'bg-white', 'bg-vibrant-purple', 'bg-vibrant-orange', 'bg-green-500'].map((color, i) => (
                    <div key={i} className={`h-1.5 w-12 rounded-full ${color}`}></div>
                  ))}
                </div>
              </div>
              
              <div 
                className="prose prose-lg max-w-none mb-10 dark:prose-invert prose-headings:font-semibold prose-a:text-vibrant-blue prose-img:rounded-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 rounded-full text-sm bg-accent/30 text-accent-foreground hover:bg-accent/50 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between py-4 border-t border-b border-border mb-10">
                <div className="flex items-center gap-6">
                  <button 
                    onClick={handleLike}
                    className={`flex items-center gap-1 ${liked ? 'text-vibrant-orange' : 'text-muted-foreground'} hover:text-vibrant-orange transition-colors`}
                    aria-label="Like post"
                  >
                    <Heart className={`h-5 w-5 ${liked ? 'fill-vibrant-orange' : ''}`} />
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
                    className={`${bookmarked ? 'text-vibrant-purple' : 'text-muted-foreground'} hover:text-vibrant-purple transition-colors`}
                    aria-label="Bookmark post"
                  >
                    <BookmarkPlus className={`h-5 w-5 ${bookmarked ? 'fill-vibrant-purple' : ''}`} />
                  </button>
                </div>
              </div>
              
              {/* Author bio with Nepali-inspired styling */}
              <div className="bg-gradient-to-r from-vibrant-orange/5 to-vibrant-purple/5 rounded-lg p-6 mb-10 border border-primary/5">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16 border-2 border-vibrant-orange/20">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">About {post.author.name}</h3>
                    <p className="text-muted-foreground mb-3">{post.author.role}</p>
                    <p className="text-sm">Maya is a native Nepali travel writer with a passion for sharing her country's rich cultural heritage. Born in a small village near Pokhara, she has spent years exploring Nepal's diverse landscapes and traditions. When not writing, she leads cultural tours and photography workshops.</p>
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
                                  className="text-muted-foreground hover:text-vibrant-orange text-sm flex items-center gap-1"
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
                  <Button type="submit" className="bg-gradient-to-r from-vibrant-orange to-vibrant-purple hover:opacity-90 px-6">
                    Post Comment
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Sidebar column with Nepali-inspired styling */}
            <div className="md:w-1/4 space-y-8">
              {/* Nepal travel info card */}
              <div className="bg-vibrant-orange/5 rounded-lg p-5 border border-vibrant-orange/20">
                <h3 className="text-lg font-semibold mb-3 text-vibrant-orange">Nepal Travel Info</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Best Season</span>
                    <span>Oct-Nov, Mar-May</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Currency</span>
                    <span>Nepali Rupee (NPR)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Languages</span>
                    <span>Nepali, English</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Visa on Arrival</span>
                    <span>Yes, most countries</span>
                  </li>
                </ul>
              </div>
              
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
                      <h4 className="font-medium text-foreground group-hover:text-vibrant-orange transition-colors line-clamp-2">
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
              
              {/* Newsletter with Nepal-inspired colors */}
              <div className="bg-gradient-to-br from-vibrant-blue/10 to-vibrant-orange/10 rounded-lg p-6 border border-primary/5">
                <h3 className="text-lg font-semibold mb-3">Subscribe to our newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">Get the latest Nepal travel tips and cultural insights delivered straight to your inbox.</p>
                <Button className="w-full bg-gradient-to-r from-vibrant-blue to-vibrant-orange hover:opacity-90">
                  Subscribe
                </Button>
              </div>
              
              {/* Nepal map or guide promo */}
              <div className="rounded-lg overflow-hidden border border-primary/10">
                <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7" alt="Nepal Map" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-medium mb-2">Free Nepal Travel Guide</h4>
                  <p className="text-sm text-muted-foreground mb-3">Download our comprehensive guide with maps, phrases & tips.</p>
                  <Button variant="outline" size="sm" className="w-full">Download PDF</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
