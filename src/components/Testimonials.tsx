
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "/placeholder.svg",
      rating: 5,
      content: "Subhan delivered exceptional work on our web application. His attention to detail and technical expertise exceeded our expectations. The project was completed on time and within budget."
    },
    {
      name: "Michael Chen",
      position: "CTO, DataFlow Systems",
      image: "/placeholder.svg",
      rating: 5,
      content: "Working with Subhan was a fantastic experience. He transformed our complex requirements into a beautiful, functional application. His communication throughout the project was outstanding."
    },
    {
      name: "Emily Rodriguez",
      position: "Product Manager, InnovateCorp",
      image: "/placeholder.svg",
      rating: 5,
      content: "Subhan's expertise in React and Node.js helped us build a scalable platform that serves thousands of users daily. His code quality and documentation are top-notch."
    },
    {
      name: "David Wilson",
      position: "Founder, EcomPlus",
      image: "/placeholder.svg",
      rating: 5,
      content: "The e-commerce platform Subhan built for us has significantly increased our sales. His understanding of modern web technologies and user experience is remarkable."
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-slate-300">
            What our clients say about working with us
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <Quote className="text-cyan-400 mr-4" size={32} />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
