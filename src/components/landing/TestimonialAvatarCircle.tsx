import React from "react";
interface TestimonialAvatarCircleProps {
  imageSrc: string;
  className?: string;
}
const TestimonialAvatarCircle: React.FC<TestimonialAvatarCircleProps> = ({
  imageSrc,
  className = ""
}) => {
  return <div className={`rounded-full overflow-hidden ${className}`}>
      
    </div>;
};
export default TestimonialAvatarCircle;