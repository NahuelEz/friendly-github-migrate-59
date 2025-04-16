
import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoPlayButtonProps {
  videoUrl?: string;
  onClick?: () => void;
}

const VideoPlayButton = ({ videoUrl, onClick }: VideoPlayButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (videoUrl) {
      // Default behavior if no onClick provided but videoUrl exists
      setIsPlaying(!isPlaying);
      // Additional video functionality could be added here
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div 
        className="w-16 h-16 rounded-full bg-purple-500/80 flex items-center justify-center cursor-pointer hover:bg-purple-600/80 transition-all duration-200"
        onClick={handleClick}
      >
        {isPlaying ? (
          <Pause className="w-8 h-8 text-white opacity-90" />
        ) : (
          <Play className="w-8 h-8 text-white ml-1 opacity-90" />
        )}
      </div>
    </div>
  );
};

export default VideoPlayButton;
