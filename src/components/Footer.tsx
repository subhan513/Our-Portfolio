
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Web Development",
    "Backend Development",
  ];

  return (
    <footer className="bg-card/80 border-t border-border py-16 px-4 backdrop-blur">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Subhan.dev
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Full-stack developer specializing in modern web technologies. 
              Building scalable applications that drive business growth.
            </p>
            <div className="flex space-x-4">
              <a href="github.com/subhan513" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="www.linkedin.com/in/muhammad-subhan-6b5a1232b/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              {/* <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Twitter size={20} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <Mail size={16} className="mr-3" />
                <span>subhancs57@gmail.com</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone size={16} className="mr-3" />
                <span>+92 3288101603</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin size={16} className="mr-3" />
                <span>Remote / Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 Subhan.dev. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
