
export const Skills = () => {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Git", icon: "🔄" },
    { name: "Firebase", icon: "🔥" },
  ];

  const SkillIcon = ({ skill }: { skill: any }) => {
    return (
      <div className="group flex flex-col items-center p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-white/10">
        <div 
          className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300"
          style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))' }}
        >
          {skill.icon}
        </div>
        <h3 className="text-white font-bold text-lg text-center">{skill.name}</h3>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 px-4 relative">
      {/* Background with gradient */}
      <div className="absolute inset-0" style={{animation: 'gradient 8s ease-in-out infinite'}}>
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(135deg, hsla(216, 98%, 24%, 1) 0%, hsla(17, 73%, 25%, 1) 96%, hsla(17, 81%, 20%, 1) 100%)'
          }}
        ></div>
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(315deg, hsla(216, 98%, 24%, 1) 0%, hsla(17, 73%, 25%, 1) 96%, hsla(17, 81%, 20%, 1) 100%)',
            animation: 'gradient 8s ease-in-out infinite reverse'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Skills & Expertise
          </h2>
          <p className="text-xl text-white/80 drop-shadow-lg">
            Technologies I master to build scalable, modern applications
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 animate-fade-in">
          {skills.map((skill) => (
            <SkillIcon key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
