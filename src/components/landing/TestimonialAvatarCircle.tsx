
import React from "react";

interface TestimonialAvatarCircleProps {
  imageSrc: string;
  className?: string;
}

const TestimonialAvatarCircle: React.FC<TestimonialAvatarCircleProps> = ({
  imageSrc,
  className = ""
}) => {
  return (
    <div className={`rounded-full overflow-hidden ${className}`}>
      <img
        src={imageSrc}
        className="w-full h-full object-cover"
        alt="Avatar"
      />
    </div>
  );
};

export default TestimonialAvatarCircle;
