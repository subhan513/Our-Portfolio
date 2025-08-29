
import { Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";

export const Projects = () => {
  const projects = [
    {
      title: "NewsMonkey - Top General Headlines",
      description: "Stay updated with the latest news from around the world. Features top general headlines covering stock market updates, political developments, health news, and current affairs with a clean, responsive interface.",
      image: "/lovable-uploads/efc34539-41a6-4d8b-9720-90395f2f231b.png",
      tags: ["React", "News API", "Responsive Design", "Real-time Updates"],
      liveUrl: "#",
      githubUrl: "#",
      category: "News"
    },
    {
      title: "Educational Institution Website",
      description: "Excellence in Education - Our mission is to inspire students not only intellectually but also Spiritually. A comprehensive educational platform with admission management and institutional information.",
      image: "/lovable-uploads/6c0347b2-15cf-414d-962f-8b9ba9a86da8.png",
      tags: ["React", "Education", "CMS", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Education"
    },
    {
      title: "QuickCart - Experience Pure Sound",
      description: "Experience Pure Sound - Your Perfect Headphones Awaits! A modern e-commerce platform featuring premium audio products with exclusive limited time offers and seamless shopping experience.",
      image: "/lovable-uploads/d83422aa-e68c-46fa-b366-9e95ca81f7a2.png",
      tags: ["React", "E-commerce", "Audio Products", "Modern UI"],
      liveUrl: "#",
      githubUrl: "#",
      category: "E-commerce"
    },
    {
      title: "Movie Entertainment Platform",
      description: "Discover the latest movies and entertainment content with an immersive viewing experience. Browse through popular titles including Black Adam, Dungeons & Dragons, and trending blockbusters with stunning visual presentation.",
      image: "/lovable-uploads/7e5f0ea2-1a8a-4132-bc7b-a18630cef7fc.png",
      tags: ["React", "API Integration", "Entertainment", "Modern UI"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Entertainment"
    }
  ];

  const carouselRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current?.scrollNext) {
        carouselRef.current.scrollNext();
      }
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          PROJECTS
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
          ref={carouselRef}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={project.title} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                <Dialog>
                  <DialogTrigger asChild>
                     <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20 h-full cursor-pointer relative">
                       <div className="aspect-video overflow-hidden relative">
                         <img
                           src={project.image}
                           alt={project.title}
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                         />
                         
                         {/* Black overlay with project details - shown on hover */}
                         <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                           <p className="text-white text-sm leading-relaxed mb-4">
                             {project.description}
                           </p>
                           
                           <div className="flex flex-wrap gap-2 justify-center mb-4">
                             {project.tags.map((tag) => (
                               <span
                                 key={tag}
                                 className="px-3 py-1 bg-cyan-500/30 text-cyan-300 rounded-full text-xs font-medium"
                               >
                                 {tag}
                               </span>
                             ))}
                           </div>
                           
                           <Button
                             size="sm"
                             variant="outline"
                             className="border-white/30 text-white hover:bg-white/10"
                             onClick={(e) => e.stopPropagation()}
                           >
                             <Github size={16} className="mr-2" />
                             View Code
                           </Button>
                         </div>
                       </div>
                       
                       <div className="p-6">
                         <div className="flex items-center justify-between">
                           <h3 className="text-xl font-semibold text-white">
                             {project.title}
                           </h3>
                           <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">
                             {project.category}
                           </span>
                         </div>
                       </div>
                     </div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-[95vw] md:max-w-4xl w-full h-[95vh] bg-slate-900/95 backdrop-blur-sm border-slate-700/50 p-0 overflow-hidden">
                    <DialogTitle className="sr-only">{project.title}</DialogTitle>
                    <DialogDescription className="sr-only">{project.description}</DialogDescription>
                    
                    <div className="relative w-full h-full flex flex-col">
                      {/* Close Button */}
                      <button 
                        className="absolute top-4 right-4 z-50 p-2 bg-slate-800/80 hover:bg-slate-700/80 rounded-full text-white transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          // The dialog will close automatically when clicking this
                        }}
                      >
                        <X size={20} />
                      </button>
                      
                      {/* Responsive Image Container */}
                      <div className="flex-1 flex items-center justify-center p-4 md:p-6">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="max-w-full max-h-full object-contain rounded-lg"
                        />
                      </div>
                      
                      {/* Project Info */}
                      <div className="bg-gradient-to-t from-slate-900 to-slate-900/50 p-4 md:p-6">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-slate-300 mb-4 text-sm md:text-base">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 md:px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs md:text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-center">
                          <Button
                            variant="outline"
                            className="border-slate-600 text-slate-300 hover:bg-slate-700"
                          >
                            <Github size={16} className="mr-2" />
                            View Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-slate-600 text-slate-300 hover:bg-slate-700" />
          <CarouselNext className="hidden md:flex -right-12 border-slate-600 text-slate-300 hover:bg-slate-700" />
        </Carousel>
      </div>
    </section>
  );
};
