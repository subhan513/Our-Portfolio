
import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    // Here you would integrate with your email service
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Background with gradient */}
      <div className="absolute inset-0" style={{animation: 'none'}}>
        <div 
          className="absolute inset-0" 
          style={{
            background: 'transparent'
          }}
        ></div>
        <div 
          className="absolute inset-0" 
          style={{
            background: 'transparent'
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Contact Me
          </h2>
          <p className="text-xl text-white/80 drop-shadow-lg">
            Let's connect and build something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 p-4 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-zed-orange to-zed-blue rounded-full flex items-center justify-center shadow-lg">
                <Mail className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold drop-shadow-lg">Email</h3>
                <p className="text-white/80">subhancs57@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-zed-blue to-zed-orange rounded-full flex items-center justify-center shadow-lg">
                <Linkedin className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold drop-shadow-lg">LinkedIn</h3>
                <p className="text-white/80">www.linkedin.com/in/muhammad-subhan-6b5a1232b/</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-zed-orange to-zed-blue rounded-full flex items-center justify-center shadow-lg">
                <Github className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold drop-shadow-lg">GitHub</h3>
                <p className="text-white/80">github.com/subhan513</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-zed-blue backdrop-blur-sm"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-zed-blue backdrop-blur-sm"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-zed-blue resize-none backdrop-blur-sm"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-zed-blue to-zed-orange hover:from-zed-orange hover:to-zed-blue text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg interactive-hover"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
