import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Years Experience", value: "2+", bg: "bg-primary/20", color: "text-accent", delay: "0.2s" },
  { label: "Projects Completed", value: "8+", bg: "bg-accent/20", color: "text-primary", delay: "0.4s" },
  { label: "Happy Clients", value: "1+", bg: "bg-primary/20", color: "text-accent", delay: "0.6s" },
  { label: "Problems Solved", value: "120+", bg: "bg-accent/20", color: "text-primary", delay: "0.8s" },
  { label: "Passionate", value: "💡", bg: "bg-primary/20", color: "text-accent", delay: "1s" },
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32"
    >
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Hero Text */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-foreground">
              <span className="text-primary">Hi </span>{" "}
              <span className="text-foreground">I am a MERN Stack Developer</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              I build scalable, secure, and user-friendly web apps. Passionate about problem solving, I’ve solved 90+ coding challenges and delivered 8+ projects.
            </p>
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300 px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl interactive-hover h-auto w-full sm:w-auto">
              <a href="#contact">Let's Discuss Your Idea!</a>
            </Button>
            <Button
              variant="outline"
              className="bg-card/60 border-2 border-border hover:border-primary hover:bg-primary/10 text-foreground backdrop-blur-sm px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl shadow-lg interactive-hover h-auto w-full sm:w-auto"
            >
              <a href="#projects">View My Work</a>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 pt-16 sm:pt-20 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group text-center animate-slide-in-right glass-panel rounded-lg p-6 sm:p-8 shadow-lg interactive-hover`}
                style={{ animationDelay: stat.delay }}
              >
                <div
                  className={`text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 transition-transform duration-300 group-hover:-translate-y-2`}
                >
                  {stat.value}
                </div>
                <div className="text-base sm:text-lg text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-foreground/80" size={32} />
      </div>
    </section>
  );
};