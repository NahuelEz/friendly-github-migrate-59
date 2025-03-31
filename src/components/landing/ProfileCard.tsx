
import React, { useState, useRef, MouseEvent } from "react";

interface ProfileCardProps {
  username: string;
  profession: string;
  followers: string;
  followersGained: string;
  avgLikes: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  username,
  profession,
  followers,
  followersGained,
  avgLikes
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      
      // Calcular la posición del mouse relativa a la tarjeta
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calcular la rotación basada en la posición del mouse
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

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition-all duration-300"
      style={{
        transform: isHovered ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.03)` : 'perspective(1000px) rotateX(0) rotateY(0)',
        transition: 'all 0.3s ease-out',
        boxShadow: isHovered ? '0 10px 20px rgba(0,0,0,0.2)' : '0 4px 8px rgba(0,0,0,0.1)'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-16 h-16 rounded-full bg-gray-200 mb-3"></div>
      <h3 className="text-lg font-bold text-[#4F1092]">{username}</h3>
      <p className="text-sm text-gray-600 mb-3">{profession}</p>
      <div className="grid grid-cols-3 w-full gap-2 text-center">
        <div className="flex flex-col">
          <span className="font-bold text-sm">{followers}</span>
          <span className="text-xs text-gray-500">Seguidores</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm text-green-500">+{followersGained}</span>
          <span className="text-xs text-gray-500">Ganados</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm">{avgLikes}</span>
          <span className="text-xs text-gray-500">Likes prom.</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
