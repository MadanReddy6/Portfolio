import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const text = "K  MADAN REDDY FULLSTACK DEVELOPER";
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setCursorVisible(false);  // Hide cursor once typing is complete
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      if (i < text.length) {
        setCursorVisible(prev => !prev);
      }
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-space-purple/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-orbitron text-3xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-neon-cyan via-white to-neon-magenta bg-clip-text text-transparent inline-block h-25 md:h-60 pt-5">
            {displayedText}
            {cursorVisible && <span className="text-white">|</span>}
          </h1>

          <div className="h-px w-32 md:w-48 mx-auto bg-gradient-to-r from-transparent via-neon-cyan to-transparent my-8"></div>

          <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Web Developer & Data Analytics Specialist creating innovative, data-driven solutions for the digital universe.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 text-neon-cyan" />
      </a>
    </section>
  );
};

export default Hero;
