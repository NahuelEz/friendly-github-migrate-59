
import React from "react";

interface ProfileCardProps {
  username: string;
  location: string;
  avatarSrc: string;
  dotsSrc: string;
  className?: string;
}

const ProfileCardNew: React.FC<ProfileCardProps> = ({
  username,
  location,
  avatarSrc,
  dotsSrc,
  className = "",
}) => {
  return (
    <div
      className={`bg-[rgba(217,217,217,1)] flex gap-[9px] font-medium w-full pt-[21px] pb-[478px] px-[21px] max-md:mt-5 max-md:pr-5 max-md:pb-[100px] ${className}`}
    >
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
  );
};

export default ProfileCardNew;
