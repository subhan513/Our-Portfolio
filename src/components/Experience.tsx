
import { Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "ZedStack",
      location: "Remote",
      duration: "2025 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Managing a team of 5 developers and overseeing project architecture.",
      achievements: [
        "Increased application performance by 40%",
        "Led migration to microservices architecture",
        "Mentored junior developers"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
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
            Work Experience
          </h2>
          <p className="text-xl text-white/80 drop-shadow-lg">
            My professional journey and key achievements
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-zed-blue to-zed-orange hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-5 h-5 bg-gradient-to-r from-zed-blue to-zed-orange rounded-full border-4 border-white/20 z-10 shadow-lg"></div>
                
                <div className="md:ml-16 w-full">
                  <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-zed-blue/50 transition-all duration-300 shadow-xl">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2 drop-shadow-lg">
                          {exp.title}
                        </h3>
                        <p className="text-zed-orange font-medium text-lg drop-shadow-lg">
                          {exp.company}
                        </p>
                      </div>
                      
                      <div className="flex flex-col md:items-end mt-4 md:mt-0">
                        <div className="flex items-center text-white/80 mb-2">
                          <Calendar size={16} className="mr-2" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center text-white/80">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-white/80 mb-6 leading-relaxed drop-shadow-lg">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3 drop-shadow-lg">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-center text-white/80">
                            <div className="w-2 h-2 bg-zed-orange rounded-full mr-3"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
