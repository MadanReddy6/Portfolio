import React from 'react';
import { skills } from '../../data/skills';
import { Zap } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-space-black via-space-purple/20 to-space-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-neon-magenta to-neon-cyan bg-clip-text text-transparent inline-block">
            TECH ARSENAL
          </h2>
          <div className="h-1 w-20 bg-neon-cyan mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Powerful Tools and Technologies Ready for Every Mission.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <div 
                key={groupIndex}
                className="relative backdrop-blur-sm bg-space-blue/10 border border-gray-800 rounded-lg overflow-hidden group hover:border-neon-cyan/50 transition-colors duration-300"
              >
                <div className="p-6">
                  <h3 className="font-orbitron text-lg font-bold mb-4 text-white flex items-center">
                    <Zap className="w-5 h-5 text-neon-cyan mr-2" />
                    {skillGroup.category}
                  </h3>
                  
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li 
                        key={skillIndex}
                        className="flex items-center text-gray-300 hover:text-neon-cyan transition-colors duration-300"
                      >
                        <span className="inline-block w-2 h-2 bg-neon-cyan rounded-full mr-2"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-cyan/30 rounded-lg transition-colors duration-500 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;