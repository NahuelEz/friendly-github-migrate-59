
import React from "react";
import { Separator } from "@/components/ui/separator";

export const ProfileCard: React.FC = () => {
  return <div className="border shadow-[3px_5px_20px_0px_rgba(0,0,0,0.50)] bg-[#4F1092] z-10 flex w-[55%] max-w-full flex-col items-center text-white font-bold text-center rounded-[20px] border-solid border-[#29292E] px-[6px] py-[23px] mx-[221px] my-[-250px]">
      <img src="https://cdn.builder.io/api/v1/image/assets/178ef81b8a124fbbb36fd103190391ae/81a30c50c074562c2051aafe1abab5327851c1f7?placeholderIfAbsent=true" className="aspect-[1] object-contain w-16" alt="Profile avatar" />
      <div className="text-xl mt-[21px]">nkchaudhary01</div>
      <div className="text-white text-sm font-normal">
        Wildlife Photographer
      </div>
      <div className="text-[#FF6200] text-sm mt-[11px]">61K Followers</div>
      <div className="border self-stretch shrink-0 h-0 mt-[9px] border-white border-solid" />
      <div className="flex w-full max-w-full items-stretch gap-5 font-normal mt-[23px] px-3">
        <div className="flex flex-col items-stretch flex-1">
          <div className="text-2xl sm:text-[35px] self-center">39,389</div>
          <div className="text-xs sm:text-sm">Followers Gained</div>
        </div>
        <Separator 
          orientation="vertical" 
          className="h-[50px] bg-white/50 self-center" 
        />
        <div className="flex flex-col items-stretch flex-1">
          <div className="text-2xl sm:text-[35px]">1,800+</div>
          <div className="text-xs sm:text-sm">Avg. Likes/Post</div>
        </div>
      </div>
    </div>;
};

export default ProfileCard;
