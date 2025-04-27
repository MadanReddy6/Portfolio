import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  const baseStyles = "relative rounded-lg overflow-hidden backdrop-blur-sm border border-gray-700/50 bg-space-blue/20";
  const hoverStyles = hover ? "transition-all duration-500 ease-out hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-neon-cyan/5 before:to-transparent before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-1000" : "";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;