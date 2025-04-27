import React from 'react';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-space-black/80 backdrop-blur-md border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Rocket className="h-6 w-6 text-neon-cyan mr-2" />
            <span className="font-orbitron text-lg bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
             K Madan Mohan Reddy
            </span>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="linkedin.com/in/k-madan-reddy-a5119b294" 
              className="text-gray-400 hover:text-neon-cyan transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="linkedin.com/in/k-madan-reddy-a5119b294" 
              className="text-gray-400 hover:text-neon-cyan transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:kmadanreddy656@gmail.com" 
              className="text-gray-400 hover:text-neon-cyan transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Madan Mohan Reddy. All rights reserved.</p>
          <p className="mt-1"></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;