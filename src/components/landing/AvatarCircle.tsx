
import React from "react";

interface AvatarCircleProps {
  imageSrc: string;
  className?: string;
}

const AvatarCircle: React.FC<AvatarCircleProps> = ({
  imageSrc,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col relative aspect-[1] w-28 max-w-full rounded-[50%] ${className}`}
    >
      <img
        src={imageSrc}
        className="absolute h-full w-full object-cover inset-0"
        alt="Avatar"
      />
      <div className="flex flex-col relative aspect-[1] w-full rounded-[50%]">
        <img
          src={imageSrc}
          className="absolute h-full w-full object-cover inset-0"
          alt="Avatar overlay"
        />
        <div className="flex flex-col relative aspect-[1] w-full rounded-[50%]">
          <img
            src={imageSrc}
            className="absolute h-full w-full object-cover inset-0"
            alt="Avatar overlay 2"
          />
          <img
            src={imageSrc}
            className="aspect-[1] object-contain w-full rounded-[50%]"
            alt="Avatar overlay 3"
          />
        </div>
      </div>
    </div>
  );
};

export default AvatarCircle;
