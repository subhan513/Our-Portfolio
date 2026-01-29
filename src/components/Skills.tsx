import { FaReact, FaNodeJs, FaDatabase,FaMobileAlt,FaJs, FaCss3Alt, FaHtml5, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase, SiExpress,SiSupabase, SiTypescript, SiJavascript } from 'react-icons/si';

export const Skills = () => {
  const skills = [
    { name: "React", icon: FaReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Git", icon: FaGitAlt },
    { name: "TypeScript", icon: SiTypescript },
    {name : "JavaScript", icon : SiJavascript}
  ];

  const SkillIcon = ({ skill }: { skill: any }) => {
    const IconComponent = skill.icon;
    
    return (
      <div className="group flex flex-col items-center p-4 sm:p-6 backdrop-blur-sm bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 shadow-xl hover:scale-105 sm:hover:scale-110 transition-all duration-300 hover:bg-white/10 min-w-[120px] sm:min-w-[140px]">
        <div 
          className="mb-3 sm:mb-4 group-hover:scale-110 sm:group-hover:scale-125 transition-transform duration-300"
          style={{ filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.5))' }}
        >
          <IconComponent size={32} className="text-cyan-400 sm:text-5xl sm:w-12 sm:h-12" />
        </div>
        <h3 className="text-white font-bold text-sm sm:text-lg text-center leading-tight">{skill.name}</h3>
      </div>
    );
  };

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 relative">
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
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
            Skills & Expertise
          </h2>
          <p className="text-lg sm:text-xl text-white/80 drop-shadow-lg px-4">
            Technologies I master to build scalable, modern applications
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 justify-items-center animate-fade-in max-w-6xl mx-auto">
          {skills.map((skill) => (
            <SkillIcon key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
