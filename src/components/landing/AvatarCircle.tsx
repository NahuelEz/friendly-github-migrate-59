import React from "react";
interface AvatarCircleProps {
  imageSrc: string;
  className?: string;
}
const AvatarCircle: React.FC<AvatarCircleProps> = ({
  imageSrc,
  className = ""
}) => {
  return <div className={`rounded-full overflow-hidden ${className}`}>
      
    </div>;
};
export default AvatarCircle;