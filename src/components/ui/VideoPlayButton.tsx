
import React from 'react';
import { Play } from 'lucide-react';

const VideoPlayButton = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-purple-500/80 flex items-center justify-center">
        <Play className="w-8 h-8 text-white ml-1 opacity-90" />
      </div>
    </div>
  );
};

export default VideoPlayButton;
