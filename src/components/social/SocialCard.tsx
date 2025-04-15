
import React from 'react';
import { Heart, MessageCircle, MoreHorizontal, Send } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface SocialCardProps {
  size?: "small" | "normal" | "large";
  className?: string;
}

const SocialCard: React.FC<SocialCardProps> = ({
  size = "normal",
  className = "",
}) => {
  const cardStyles = {
    small: {
      card: "w-[300px] h-[500px]",
      image: "w-[285px] h-[285px]",
      avatar: "w-10 h-10",
      username: "text-[16px]",
      location: "text-[12px]",
      icons: "w-5 h-5",
      likes: "text-[14px]",
      date: "text-[12px]",
    },
    normal: {
      card: "w-[320px] h-[520px]",
      image: "w-[305px] h-[305px]",
      avatar: "w-11 h-11",
      username: "text-[17px]",
      location: "text-[12px]",
      icons: "w-5 h-5",
      likes: "text-[14px]",
      date: "text-[12px]",
    },
    large: {
      card: "w-[380px] h-[580px]",
      image: "w-[365px] h-[365px]",
      avatar: "w-[50px] h-[50px]",
      username: "text-[20px]",
      location: "text-[14px]",
      icons: "w-[23px] h-[23px]",
      likes: "text-[17px]",
      date: "text-[14px]",
    },
  };

  const styles = cardStyles[size];

  return (
    <div className={`${styles.card} ${className} relative bg-[#141414] rounded-[20px] border-[1.25px] border-solid border-[#29292d] shadow-[0px_5px_30px_#0000004c] overflow-hidden`}>
      <div className="p-0">
        {/* Header */}
        <div className="flex items-center p-5">
          <Avatar className={`${styles.avatar} bg-gray-600`}>
            <AvatarImage src="/placeholder.svg" alt="Profile picture" />
            <AvatarFallback>PP</AvatarFallback>
          </Avatar>

          <div className="ml-3">
            <p className={`font-medium text-white ${styles.username}`}>hawkins360</p>
            <p className={`font-medium text-[#76777e] ${styles.location}`}>New Delhi, India</p>
          </div>

          <div className="ml-auto">
            <MoreHorizontal className="text-white" />
          </div>
        </div>

        {/* Post Image */}
        <div className={`${styles.image} flex items-center justify-center bg-[#1a1a1a]`}>
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#b762f7] to-transparent opacity-80"></div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center p-4">
          <Heart className={`${styles.icons} text-[#f0304e] fill-[#f0304e] mr-4`} />
          <MessageCircle className={`${styles.icons} text-[#76777e] mr-4`} />
          <Send className={`${styles.icons} text-[#76777e]`} />
        </div>

        {/* Likes */}
        <div className={`px-5 font-normal text-white ${styles.likes}`}>
          Liked by <span className="font-medium">Nanny</span> and <span className="font-medium">739 others</span>
        </div>

        {/* Date */}
        <div className={`px-5 mt-2 font-medium text-[#76777e] ${styles.date}`}>Wed, 26 January 2021</div>
      </div>
    </div>
  );
};

export default SocialCard;
