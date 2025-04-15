
import React from 'react';
import { Play } from 'lucide-react';

const VideoPlayButton = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/80 to-purple-400/80 flex items-center justify-center backdrop-blur-sm transition-transform hover:scale-110">
        <Play className="w-8 h-8 text-white ml-1" />
      </div>
    </div>
  );
};

export default VideoPlayButton;
