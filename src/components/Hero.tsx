import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32">
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Company Text */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white drop-shadow-lg">
              <span className="text-primary">Welcome to</span> <span className="text-accent">CodeCraft</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed drop-shadow-lg max-w-4xl mx-auto">
              We develop scalable, secure, and user-friendly web apps that deliver seamless digital experiences and drive business growth.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <Button className="bg-primary hover:bg-accent text-white hover:text-white shadow-2xl hover:shadow-xl transition-all duration-300 px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl backdrop-blur-sm interactive-hover h-auto w-full sm:w-auto">
              <a href="#contact">Let's discuss your Idea!</a>
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-primary hover:border-accent hover:bg-primary/10 text-white hover:text-white backdrop-blur-sm px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl shadow-lg interactive-hover h-auto w-full sm:w-auto">
              <a href="#projects">View My Work</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 pt-16 sm:pt-20 max-w-4xl mx-auto">
            <div className="group text-center animate-slide-in-right backdrop-blur-sm bg-primary/20 rounded-lg p-6 sm:p-8 shadow-lg interactive-hover" style={{
            animationDelay: '0.2s'
          }}>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent drop-shadow-lg mb-2 transition-transform duration-300 group-hover:-translate-y-2">1+</div>
              <div className="text-base sm:text-lg text-white/80">Years Exp.</div>
            </div>
            <div className="group text-center animate-slide-in-right backdrop-blur-sm bg-accent/20 rounded-lg p-6 sm:p-8 shadow-lg interactive-hover" style={{
            animationDelay: '0.4s'
          }}>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary drop-shadow-lg mb-2 transition-transform duration-300 group-hover:-translate-y-2">10+</div>
              <div className="text-base sm:text-lg text-white/80">Projects</div>
            </div>
            <div className="group text-center animate-slide-in-right backdrop-blur-sm bg-primary/20 rounded-lg p-6 sm:p-8 shadow-lg interactive-hover" style={{
            animationDelay: '0.6s'
          }}>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent drop-shadow-lg mb-2 transition-transform duration-300 group-hover:-translate-y-2">5+</div>
              <div className="text-base sm:text-lg text-white/80">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white" size={32} />
      </div>
    </section>;
};