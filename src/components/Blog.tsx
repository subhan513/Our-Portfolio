
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development: React Server Components",
      excerpt: "Explore how React Server Components are revolutionizing the way we build web applications, offering better performance and developer experience.",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "React",
      image: "/placeholder.svg",
      author: "Dan Abramov"
    },
    {
      title: "Building Scalable Node.js Applications with TypeScript",
      excerpt: "Learn best practices for architecting large-scale Node.js applications using TypeScript, focusing on maintainability and performance.",
      date: "January 10, 2025",
      readTime: "12 min read",
      category: "Backend",
      image: "/placeholder.svg",
      author: "Kent C. Dodds"
    },
    {
      title: "Modern CSS: Container Queries and Subgrid",
      excerpt: "Discover the latest CSS features that are changing how we approach responsive design and layout systems in 2025.",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "CSS",
      image: "/placeholder.svg",
      author: "Jen Simmons"
    },
    {
      title: "Database Optimization Strategies for High-Traffic Apps",
      excerpt: "Learn advanced database optimization techniques including indexing strategies, query optimization, and caching for applications serving millions of users.",
      date: "December 28, 2024",
      readTime: "15 min read",
      category: "Database",
      image: "/placeholder.svg",
      author: "Prisma Team"
    },
    {
      title: "The Complete Guide to Web Performance Optimization",
      excerpt: "Master the art of web performance with Core Web Vitals, lazy loading, and modern optimization techniques that actually matter.",
      date: "December 20, 2024",
      readTime: "10 min read",
      category: "Performance",
      image: "/placeholder.svg",
      author: "Addy Osmani"
    },
    {
      title: "AI Integration in Modern Web Applications",
      excerpt: "Practical approaches to integrating AI features into web applications, from chatbots to recommendation systems using modern APIs.",
      date: "December 15, 2024",
      readTime: "9 min read",
      category: "AI/ML",
      image: "/placeholder.svg",
      author: "Vercel Team"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-slate-300">
            Insights, tutorials, and thoughts on web development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center relative">
                <div className="text-6xl text-slate-600">📝</div>
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-slate-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center text-slate-400 text-sm">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-300 mb-4 leading-relaxed text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">
                    by {post.author}
                  </span>
                  
                  <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group">
                    Read More
                    <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};
