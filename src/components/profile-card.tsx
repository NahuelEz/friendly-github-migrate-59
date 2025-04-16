
import React from "react";

interface ProfileCardProps {
  username: string;
  profession: string;
  followers: string;
  followersGained: string;
  avgLikes: string;
}

export function ProfileCard({ 
  username, 
  profession, 
  followers, 
  followersGained, 
  avgLikes 
}: ProfileCardProps) {
  return (
    <div className="bg-[#4f1092] text-white rounded-3xl overflow-hidden shadow-lg w-[280px]">
      <div className="p-4 flex flex-col items-center">
        <div className="relative w-20 h-20 mb-2">
          <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white">
            <img
              src="/lovable-uploads/10c9cb7c-f217-47ed-a9b4-fd116a7171e0.png"
              alt={username}
              width={80}
              height={80}
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>

        <h3 className="text-xl font-bold">{username}</h3>
        <p className="text-sm text-gray-200">{profession}</p>

        <p className="text-[#ff6200] text-sm font-medium mt-2">{followers}</p>
      </div>

      <div className="grid grid-cols-2 border-t border-[#b762f7]/30">
        <div className="p-4 flex flex-col items-center border-r border-[#b762f7]/30">
          <h4 className="text-3xl font-bold">{followersGained}</h4>
          <p className="text-xs text-gray-200">Followers Gained</p>
        </div>

        <div className="p-4 flex flex-col items-center">
          <h4 className="text-3xl font-bold">{avgLikes}</h4>
          <p className="text-xs text-gray-200">Avg. Likes/Post</p>
        </div>
      </div>
    </div>
  );
}
