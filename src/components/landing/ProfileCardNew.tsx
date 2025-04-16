
import React from "react";

interface ProfileCardProps {
  username: string;
  location: string;
  avatarSrc: string;
  dotsSrc: string;
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  username,
  location,
  avatarSrc,
  dotsSrc,
  className = "",
}) => {
  return (
    <div
      className={`bg-white/10 backdrop-blur-sm rounded-lg flex gap-[9px] font-medium w-full p-4 hover:bg-white/20 transition-colors duration-200 ${className}`}
    >
      <img
        src={avatarSrc}
        className="aspect-[1] object-cover w-[42px] h-[42px] shrink-0 rounded-full"
        alt={`${username}'s avatar`}
      />
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-3 text-[15px] text-white font-medium">
          <span>{username}</span>
          <img
            src={dotsSrc}
            className="w-4 h-1 opacity-60"
            alt="Options"
          />
        </div>
        <div className="text-white/60 text-[13px]">{location}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
