
import { Code, Smartphone, Globe, Database, Cloud, Shield } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Node.js, and MongoDB.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Scalable backend solutions with robust APIs and database management.",
      features: ["RESTful APIs", "Database Design", "Authentication"]
    },
    {
      icon: Shield,
      title: "Security Consulting",
      description: "Application security audits and implementation of best security practices.",
      features: ["Vulnerability Testing", "Secure Coding", "Compliance"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 relative">
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive development solutions to help your business grow and succeed in the digital world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-panel rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <service.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
