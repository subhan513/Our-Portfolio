
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Global Animated Gradient Background */}
      <div className="fixed inset-0 z-0" style={{
        animation: 'none'
      }}>
        <div className="absolute inset-0" style={{
          background: 'hsl(220, 15%, 7%)'
        }}></div>
        <div className="absolute inset-0" style={{ background: 'transparent' }}></div>
      </div>
      
      {/* Floating animated elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute w-72 h-72 bg-zed-blue/20 rounded-full mix-blend-multiply filter blur-xl animate-float interactive-hover" style={{
          top: '22.9901%',
          left: '19.9642%'
        }}></div>
        <div className="absolute w-72 h-72 bg-zed-orange/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{
          animationDelay: '2s',
          top: '44.4851%',
          right: '19.9642%'
        }}></div>
        <div className="absolute w-72 h-72 bg-zed-blue/15 rounded-full mix-blend-multiply filter blur-xl animate-float interactive-hover" style={{
          animationDelay: '4s',
          bottom: '22.9901%',
          left: '54.9821%',
          transform: 'translateX(-50%)'
        }}></div>
      </div>

      {/* Content with proper z-index */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <div className="py-8"></div> {/* Spacing between Hero and About */}
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
      
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
