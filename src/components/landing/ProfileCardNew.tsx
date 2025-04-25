
import React, { useState, useRef, MouseEvent } from "react";
import VideoPlayButton from '../ui/VideoPlayButton';

interface ProfileCardProps {
  username: string;
  location: string;
  avatarSrc: string;
  dotsSrc: string;
  className?: string;
  showVideoButton?: boolean;
  videoUrl?: string;
}

const ProfileCardNew: React.FC<ProfileCardProps> = ({
  username,
  location,
  avatarSrc,
  dotsSrc,
  className = "",
  showVideoButton = false,
  videoUrl = ""
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to card
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate rotation based on mouse position
      const rotateX = ((y / rect.height) - 0.5) * -10;
      const rotateY = ((x / rect.width) - 0.5) * 10;
      
      setRotation({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const handlePlayClick = () => {
    if (videoUrl && videoRef.current) {
      setShowVideo(true);
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-300 overflow-hidden bg-[rgba(217,217,217,1)] ${className}`}
      style={{
        transform: isHovered ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.03)` : 'perspective(1000px) rotateX(0) rotateY(0)',
        transition: 'all 0.3s ease-out',
        boxShadow: isHovered ? '0 10px 20px rgba(0,0,0,0.2)' : '0 4px 8px rgba(0,0,0,0.1)'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showVideo && videoUrl ? (
        <video 
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-10" 
          src={videoUrl}
          controls={false}
          onClick={handlePlayClick}
        />
      ) : (
        <div className="flex gap-[9px] font-medium w-full pt-[21px] pb-[478px] px-[21px] max-md:mt-5 max-md:pr-5 max-md:pb-[100px]">
          <img
            src={avatarSrc}
            className="aspect-[1] object-contain w-[37px] shrink-0 rounded-[50%]"
            alt={`${username}'s avatar`}
          />
          <div className="flex flex-col items-stretch mt-1">
            <div className="flex items-stretch gap-5 text-[13px] text-white whitespace-nowrap justify-between">
              <div>{username}</div>
              <img
                src={dotsSrc}
                className="aspect-[4] object-contain w-4 shrink-0 mt-[13px]"
                alt="Options"
              />
            </div>
            <div className="text-[rgba(118,119,126,1)] text-[9px]">{location}</div>
          </div>
        </div>
      )}
      
      {showVideoButton && (
        <VideoPlayButton 
          videoUrl={videoUrl} 
          onClick={handlePlayClick}
        />
      )}
    </div>
  );
};

export default ProfileCardNew;
