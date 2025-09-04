
import { Card } from '@/components/ui/card';
import { ExternalLink, Youtube, ChevronLeft, ChevronRight, Github } from 'lucide-react';
import { FaGlobe, FaYoutube, FaReact, FaNodeJs, FaDatabase, FaJs, FaCss3Alt, FaHtml5, FaFigma, FaUnity, FaCamera } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiFirebase, SiFlutter, SiNextdotjs, SiRedux, SiReactquery, SiClerk, SiSupabase, SiStripe, SiVercel, SiNetlify, SiAmazon, SiSharp, SiAppwrite } from 'react-icons/si';
import { useState, useRef } from 'react';

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToProject = (index: number) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 320; // w-80 = 320px
      const gap = 16; // gap-4 = 16px
      const paddingLeft = 48; // px-12 = 48px
      const scrollLeft = index * (cardWidth + gap) + paddingLeft - (container.clientWidth - cardWidth) / 2;
      
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: 'smooth'
      });
    }
  };

  const nextProject = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    scrollToProject(nextIndex);
  };

  const prevProject = () => {
    const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    scrollToProject(prevIndex);
  };

  const getTechIcon = (tech: string) => {
    const iconProps = { className: "w-4 h-4" };
    
    switch (tech.toLowerCase()) {
      case 'react':
      case 'reactjs':
        return <FaReact {...iconProps} className="w-4 h-4 text-cyan-500" />;
      case 'react native':
      case 'reactnative':
        return <FaReact {...iconProps} className="w-4 h-4 text-cyan-400" />;
      case 'next.js':
      case 'nextjs':
        return <SiNextdotjs {...iconProps} className="w-4 h-4 text-black dark:text-white" />;
      case 'typescript':
        return <SiTypescript {...iconProps} className="w-4 h-4 text-blue-600" />;
      case 'javascript':
        return <FaJs {...iconProps} className="w-4 h-4 text-yellow-500" />;
      case 'tailwind css':
      case 'tailwindcss':
        return <SiTailwindcss {...iconProps} className="w-4 h-4 text-cyan-500" />;
      case 'html':
        return <FaHtml5 {...iconProps} className="w-4 h-4 text-orange-600" />;
      case 'css':
        return <FaCss3Alt {...iconProps} className="w-4 h-4 text-blue-600" />;
      case 'node.js':
      case 'nodejs':
        return <FaNodeJs {...iconProps} className="w-4 h-4 text-green-600" />;
      case 'mongodb':
      case 'mongo db':
        return <SiMongodb {...iconProps} className="w-4 h-4 text-green-500" />;
      case 'firebase':
        return <SiFirebase {...iconProps} className="w-4 h-4 text-orange-500" />;
      case 'flutter':
        return <SiFlutter {...iconProps} className="w-4 h-4 text-blue-500" />;
      case 'dart':
        return <SiFlutter {...iconProps} className="w-4 h-4 text-blue-400" />;
      case 'unity':
        return <FaUnity {...iconProps} className="w-4 h-4 text-black dark:text-white" />;
      case 'redux':
        return <SiRedux {...iconProps} className="w-4 h-4 text-purple-600" />;
      case 'clerk':
        return <SiClerk {...iconProps} className="w-4 h-4 text-purple-500" />;
      case 'supabase':
        return <SiSupabase {...iconProps} className="w-4 h-4 text-green-500" />;
      case 'vercel':
        return <SiVercel {...iconProps} className="w-4 h-4 text-black dark:text-white" />;
      case 'figma':
        return <FaFigma {...iconProps} className="w-4 h-4 text-purple-500" />;
      case 'c#':
      case 'csharp':
        return <SiSharp {...iconProps} className="w-4 h-4 text-blue-600" />;
      case 'image processing':
        return <FaCamera {...iconProps} className="w-4 h-4 text-green-600" />;
      case 'appwrite':
        return <SiAppwrite {...iconProps} className="w-4 h-4 text-pink-600" />;
      case 'express':
        return <FaNodeJs {...iconProps} className="w-4 h-4 text-green-500" />;
      case 'news api':
        return <FaDatabase {...iconProps} className="w-4 h-4 text-blue-500" />;
      case 'responsive design':
        return <FaCss3Alt {...iconProps} className="w-4 h-4 text-blue-600" />;
      case 'real-time updates':
        return <FaDatabase {...iconProps} className="w-4 h-4 text-green-500" />;
      case 'cms':
        return <FaDatabase {...iconProps} className="w-4 h-4 text-purple-500" />;
      case 'commerce':
        return <FaDatabase {...iconProps} className="w-4 h-4 text-orange-500" />;
      case 'api integration':
        return <FaDatabase {...iconProps} className="w-4 h-4 text-cyan-500" />;
      default:
        return <FaDatabase {...iconProps} className="w-4 h-4 text-gray-500" />;
    }
  };

  const projects = [
     {
      title: "Real Time Chat Application",
      category: "Chat Application",
      description: "A real-time chat application built with React, Node.js, and Socket.io, allowing users to chat with each other in real-time. Features include user authentication, room creation, and message history.",
      image: "/lovable-uploads/chatApp.png",
      technologies: ["React", "Node.js", "Socket.io", "Responsive Design", "Real-time Updates"],
      githubUrl: "https://github.com/subhan513/news-app"
    },
          {
       title: " FullStack Recipe Finder App",
       category: "Recipe Finder App",
       description: "A comprehensive recipe discovery app that helps users find, save, and create delicious recipes. Features include recipe search, ingredient filtering and personalized recipe recommendations.",
       image: "/lovable-uploads/mobile.png",
       technologies: ["React Native", "Node.js", "Express API", "Responsive Design", "neonDB"],
       githubUrl: "https://github.com/subhan513/news-app"
     },
    {
      title: "NewsMonkey - Top General Headlines",
      category: "News Platform",
      description: "Stay updated with the latest news from around the world. Features top general headlines covering stock market updates, political developments, health news, and current affairs with a clean, responsive interface.",
      image: "/lovable-uploads/efc34539-41a6-4d8b-9720-90395f2f231b.png",
      technologies: ["React", "News API", "Responsive Design", "Real-time Updates"],
      websiteUrl: "https://newsapp-three-jet.vercel.app/",
      githubUrl: "https://github.com/subhan513/newsapp"
    },
    {
      title: "Educational Institution Website",
      category: "Education Platform",
      description: "Excellence in Education - Our mission is to inspire students not only intellectually but also Spiritually. A comprehensive educational platform with admission management and institutional information.",
      image: "/lovable-uploads/6c0347b2-15cf-414d-962f-8b9ba9a86da8.png",
      technologies: ["React", "TailwindCSS", "CMS", "Responsive Design"],
      websiteUrl: "https://sharifeducaitonalcomplex.vercel.app/",
      githubUrl: "https://github.com/subhan513/Sharif-Complex"
    },
    {
      title: "QuickCart - Experience Pure Sound",
      category: "E-commerce Platform",
      description: "Experience Pure Sound - Your Perfect Headphones Awaits! A modern e-commerce platform featuring premium audio products with exclusive limited time offers and seamless shopping experience.",
      image: "/lovable-uploads/d83422aa-e68c-46fa-b366-9e95ca81f7a2.png",
      technologies: ["React", "Nodejs", "Commerce", "MongoDB", "Express"],
      websiteUrl: "https://e-commerce-store-rho-three.vercel.app/",
      githubUrl: "https://github.com/subhan513/ecommerce-store"
    },
    {
      title: "Movie Entertainment Platform",
      category: "Entertainment Platform",
      description: "Discover the latest movies and entertainment content with an immersive viewing experience. Browse through popular titles including Black Adam, Dungeons & Dragons, and trending blockbusters with stunning visual presentation.",
      image: "/lovable-uploads/7e5f0ea2-1a8a-4132-bc7b-a18630cef7fc.png",
      technologies: ["React", "API Integration", "Appwrite", "TailwindCSS"],
      websiteUrl: "https://movie-application-git-main-subhan513s-projects.vercel.app/",
      githubUrl: "https://github.com/subhan513/movie-app"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'News Platform':
        return 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400';
      case 'Education Platform':
        return 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400';
      case 'E-commerce Platform':
        return 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400';
      case 'Entertainment Platform':
        return 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400';
      default:
        return 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400';
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-28 xl:py-32 bg-accent/5">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 text-white">
            Our <span className="text-cyan-400">Projects</span>
        </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto px-2 sm:px-4">
            Discover our latest projects showcasing innovative solutions across web development, 
            mobile applications, and modern platforms.
          </p>
        </div>

        {/* Projects Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group overflow-hidden animate-fade-in h-full flex flex-col rounded-2xl bg-slate-900/60 supports-[backdrop-filter]:bg-slate-900/40 backdrop-blur border border-slate-700/40 ring-1 ring-white/5 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 hover:border-cyan-400/40 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64 sm:h-72 md:h-80 bg-slate-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/40"></div>

                {/* Category Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur bg-white/10 ring-1 ring-white/10 shadow-sm ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>

                {/* Links */}
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 dark:bg-black/90 rounded-full hover:bg-white dark:hover:bg-black transition-colors ring-1 ring-white/10"
                    >
                      <FaGlobe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 dark:bg-black/90 rounded-full hover:bg-white dark:hover:bg-black transition-colors ring-1 ring-white/10"
                    >
                      <Github className="w-4 h-4 text-gray-800 dark:text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex-1 bg-slate-900/90 border-t border-slate-800/80 rounded-b-2xl">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-sm sm:text-base mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="h-px bg-slate-700/60 mb-4"></div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-full bg-white/5 text-slate-200 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors duration-200"
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40 transition-colors duration-200"
                    >
                      <FaGlobe className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-slate-700/60 text-white border border-slate-600/60 hover:bg-slate-600/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
                     </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-black transition-all duration-200 active:scale-95"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
                      <button 
            onClick={nextProject}
            className="absolute right-1 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-black transition-all duration-200 active:scale-95"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                      
          {/* Horizontal Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-12 pb-2 scrollbar-hide"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth'
            }}
            onScroll={(e) => {
              const container = e.target as HTMLElement;
              const cardWidth = 320;
              const gap = 16;
              const newIndex = Math.round(container.scrollLeft / (cardWidth + gap));
              if (newIndex !== currentIndex && newIndex >= 0 && newIndex < projects.length) {
                setCurrentIndex(newIndex);
              }
            }}
          >
            {projects.map((project, index) => (
              <div key={project.title} className="flex-shrink-0 w-80 snap-center snap-always">
                <Card className="group overflow-hidden border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm h-full flex flex-col rounded-lg hover:border-cyan-400/50 transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-64 bg-slate-900">
                        <img
                          src={project.image}
                          alt={project.title}
                      className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Links */}
                    <div className="absolute top-4 right-4 z-10 flex gap-2">
                      {project.websiteUrl && (
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/90 dark:bg-black/90 rounded-full hover:bg-white dark:hover:bg-black transition-colors"
                        >
                          <FaGlobe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/90 dark:bg-black/90 rounded-full hover:bg-white dark:hover:bg-black transition-colors"
                        >
                          <Github className="w-4 h-4 text-gray-800 dark:text-white" />
                        </a>
                      )}
                    </div>
                      </div>
                      
                  {/* Project Details */}
                  <div className="p-6 pl-8 flex-1 bg-slate-900/90 border-t border-slate-700/50">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                    
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                            <span
                          key={i}
                          className="flex items-center gap-2 px-3 py-1.5 text-xs bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors duration-200"
                            >
                          {getTechIcon(tech)}
                          {tech}
                            </span>
                          ))}
                        </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.websiteUrl && (
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-cyan-500/10 text-cyan-400 rounded-lg border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors duration-200 text-xs"
                        >
                          <FaGlobe className="w-3 h-3" />
                          Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-slate-700/50 text-white rounded-lg border border-slate-600/50 hover:bg-slate-600/50 transition-colors duration-200 text-xs"
                        >
                          <Github className="w-3 h-3" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${
                  index === currentIndex 
                    ? 'bg-cyan-400 shadow-lg' 
                    : 'bg-cyan-400/30 hover:bg-cyan-400/50'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
                        </div>
                      </div>
      </div>
    </section>
  );
};
