
import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`font-bold ${className}`}>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
        Social AI
      </span>
    </div>
  );
};
