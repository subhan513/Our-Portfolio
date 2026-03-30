
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Me
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's connect and build something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 p-4 glass-panel rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                <Mail className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">Email</h3>
                <p className="text-muted-foreground">subhancs57@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 glass-panel rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                <Linkedin className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">LinkedIn</h3>
                <p className="text-muted-foreground">https://www.linkedin.com/in/muhammadsubhandev/</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 glass-panel rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                <Github className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">GitHub</h3>
                <p className="text-muted-foreground">github.com/subhan513</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background/60 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background/60 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background/60 border-border text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg interactive-hover"
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
