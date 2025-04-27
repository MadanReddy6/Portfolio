/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          black: '#000814',
          purple: '#240046',
          blue: '#1a1a2e',
        },
        neon: {
          cyan: '#00ffff',
          magenta: '#ff00ff',
          blue: '#0080ff',
        },
        metallic: {
          silver: '#c0c0c0',
          gold: '#ffd700',
        },
      },
      fontFamily: {
        orbitron: ['"Orbitron"', 'sans-serif'],
        exo: ['"Exo 2"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            filter: 'brightness(1)' 
          },
          '50%': { 
            filter: 'brightness(1.5)' 
          },
        },
        'float': {
          '0%, 100%': { 
            transform: 'translateY(0px)' 
          },
          '50%': { 
            transform: 'translateY(-20px)' 
          },
        },
        'typing': {
          'from': { 
            width: '0' 
          },
          'to': { 
            width: '100%' 
          },
        },
        'blink-caret': {
          'from, to': { 
            borderColor: 'transparent' 
          },
          '50%': { 
            borderColor: '#00ffff' 
          },
        },
      },
    },
  },
  plugins: [],
};


