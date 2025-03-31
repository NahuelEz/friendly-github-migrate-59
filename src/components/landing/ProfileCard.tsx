import React, { useState, useRef, MouseEvent } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
interface ProfileCardProps {
  username: string;
  profession: string;
  followers: string;
  followersGained: string;
  avgLikes: string;
  profileImage?: string;
}
export const ProfileCard: React.FC<ProfileCardProps> = ({
  username,
  profession,
  followers,
  followersGained,
  avgLikes,
  profileImage
}) => {
  const [rotation, setRotation] = useState({
    x: 0,
    y: 0
  });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();

      // Calculate mouse position relative to the card
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate rotation based on mouse position
      const rotateX = (y / rect.height - 0.5) * -10;
      const rotateY = (x / rect.width - 0.5) * 10;
      setRotation({
        x: rotateX,
        y: rotateY
      });
    }
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({
      x: 0,
      y: 0
    });
  };
  return <div ref={cardRef} className="bg-[#5D27A3] rounded-lg shadow-lg p-5 flex flex-col items-center transition-all duration-300" style={{
    transform: isHovered ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.03)` : 'perspective(1000px) rotateX(0) rotateY(0)',
    transition: 'all 0.3s ease-out',
    boxShadow: isHovered ? '0 10px 20px rgba(0,0,0,0.3)' : '0 4px 8px rgba(0,0,0,0.2)'
  }} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Profile Image */}
      <Avatar className="w-20 h-20 border-2 border-white">
        
        <AvatarFallback className="bg-purple-300 text-purple-800">{username.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      
      {/* User Info */}
      <h3 className="text-white text-xl font-bold mt-3">{username}</h3>
      <p className="text-purple-200 text-sm mb-4">{profession}</p>
      
      {/* Divider */}
      <div className="w-full h-px bg-purple-400/30 my-3"></div>
      
      {/* Stats */}
      <div className="grid grid-cols-2 w-full gap-2 text-center">
        <div className="flex flex-col">
          <span className="font-bold text-2xl text-white">{followers}</span>
          <span className="text-xs text-purple-200">Followers Gained</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-2xl text-white">{avgLikes}</span>
          <span className="text-xs text-purple-200">Avg. Likes/Post</span>
        </div>
      </div>
    </div>;
};
export default ProfileCard;