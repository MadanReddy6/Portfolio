import React from 'react';
import Card from '../ui/Card';
import { education, certifications } from '../../data/education';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-space-black via-space-blue/20 to-space-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent inline-block">
            KNOWLEDGE MATRIX
          </h2>
          <div className="h-1 w-20 bg-neon-blue mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
             Collection of Certifications and Training Across Every Field.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="font-orbitron text-xl font-bold mb-6 text-white flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-neon-cyan mr-2" />
              Academic Map
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-5 hover:border-neon-cyan/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="font-orbitron text-lg font-medium text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-400">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-space-blue/50 border border-neon-cyan/30 rounded-full text-neon-cyan text-sm">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-orbitron text-xl font-bold mb-6 text-white flex items-center justify-center">
              <Award className="w-6 h-6 text-neon-magenta mr-2" />
              Special Commendations
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-sm bg-space-purple/10 border border-gray-800 rounded-lg p-4 text-center hover:border-neon-magenta/50 hover:shadow-[0_0_15px_rgba(255,0,255,0.2)] transition-all duration-300"
                >
                  <Award className="w-8 h-8 text-neon-magenta mx-auto mb-2" />
                  <p className="text-white font-medium">
                    {cert.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;