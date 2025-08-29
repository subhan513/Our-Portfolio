
export const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
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

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
              About Me
            </h2>
            
            <div className="space-y-6">
              <p className="text-white/90 text-lg leading-relaxed drop-shadow-lg">
                I'm a passionate full-stack developer with 2 years of experience in building 
                modern web applications. I specialize in React, Node.js, and cloud technologies, 
                helping businesses transform their ideas into powerful digital solutions.
              </p>
              
              <p className="text-white/80 leading-relaxed drop-shadow-lg">
                My journey in web development started with a curiosity about how websites work, 
                and it has evolved into a career dedicated to creating exceptional user experiences 
                and robust backend systems.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-zed-orange mb-2 drop-shadow-lg">10+</div>
                  <div className="text-white/80">Projects Completed</div>
                </div>
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-zed-blue mb-2 drop-shadow-lg">2+</div>
                  <div className="text-white/80">Years Experience</div>
                </div>
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-zed-orange mb-2 drop-shadow-lg">5+</div>
                  <div className="text-white/80">Happy Clients</div>
                </div>
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-zed-blue mb-2 drop-shadow-lg">15+</div>
                  <div className="text-white/80">Technologies</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 backdrop-blur-sm bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl">
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg border-4 border-gradient-to-br from-zed-orange to-zed-blue">
                    <img 
                      src="/lovable-uploads/3a204c5c-c862-4463-bd90-bafb57a9ff0f.png" 
                      alt="Professional Developer Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-white/90 text-sm font-semibold">Professional Developer</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-zed-blue to-zed-orange rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <span className="text-white font-bold text-sm">React</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-zed-orange to-zed-blue rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '0.5s' }}>
                <span className="text-white text-sm font-bold">JS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
