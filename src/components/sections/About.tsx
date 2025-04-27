import React from 'react';
import Card from '../ui/Card';
import { Code, Database, Rocket } from 'lucide-react'; // Keep lucide-react icons
import { MdSportsSoccer } from 'react-icons/md'; // Football icon from react-icons
import { FaMusic } from 'react-icons/fa'; // Music icon from react-icons
import { GiMoneyStack } from 'react-icons/gi'; // Coins icon from react-icons

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-space-black via-space-purple/20 to-space-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent inline-block">
            GET TO KNOW ME
          </h2>
          <div className="h-1 w-20 bg-neon-cyan mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0 w-48 h-68 rounded-full bg-gradient-to-br from-neon-cyan to-neon-magenta p-1 mt-5">
                <img 
                  src="/portfolio4.png"
                  alt="Madan Mohan Reddy"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="font-orbitron text-xl md:text-2xl font-bold mb-4 text-white">
                  K Madan Mohan Reddy
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm an aspiring Web Developer and Data Analytics enthusiast with a solid foundation in Business Data Analytics and a passion for building innovative, data-driven web solutions. I'm seeking opportunities to apply and grow my skills in a collaborative, agile environment.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center mb-2">
                      <Code className="w-5 h-5 text-neon-cyan mr-2" />
                      <span className="font-orbitron font-medium">Development</span>
                    </div>
                    <p className="text-sm text-gray-400">Web & Application Development</p>
                  </div>
                  
                  <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center mb-2">
                      <Database className="w-5 h-5 text-neon-magenta mr-2" />
                      <span className="font-orbitron font-medium">Data Analysis</span>
                    </div>
                    <p className="text-sm text-gray-400">Insights & Visualization</p>
                  </div>
                  
                  <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center mb-2">
                      <Rocket className="w-5 h-5 text-neon-blue mr-2" />
                      <span className="font-orbitron font-medium">Innovation</span>
                    </div>
                    <p className="text-sm text-gray-400">Creative Problem Solving</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="font-orbitron text-xl font-bold mb-6 text-white text-center">
              Hobbies & Interests
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-space-blue/30 border border-neon-cyan/20 hover:border-neon-cyan/50 transition-colors">
                <MdSportsSoccer className="w-8 h-8 text-neon-cyan" />
                <h4 className="font-orbitron text-white">Football</h4>
                <p className="text-sm text-gray-400 text-center">Passionate about the beautiful game</p>
              </div>

              <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-space-blue/30 border border-neon-magenta/20 hover:border-neon-magenta/50 transition-colors">
                <FaMusic className="w-8 h-8 text-neon-magenta" /> {/* Music icon */}
                <h4 className="font-orbitron text-white">Music</h4>
                <p className="text-sm text-gray-400 text-center">Love listening to various genres</p>
              </div>

              <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-space-blue/30 border border-neon-blue/20 hover:border-neon-blue/50 transition-colors">
                <GiMoneyStack className="w-8 h-8 text-neon-blue" /> {/* Coins icon */}
                <h4 className="font-orbitron text-white">Coin Collection</h4>
                <p className="text-sm text-gray-400 text-center">Collecting coins from around the world</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
