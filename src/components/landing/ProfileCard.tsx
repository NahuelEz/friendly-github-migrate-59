
import React from "react";

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
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
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
