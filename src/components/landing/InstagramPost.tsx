import React from 'react';
interface InstagramPostProps {
  imageUrl: string;
  likes: string;
  comments: string;
}
const InstagramPost: React.FC<InstagramPostProps> = ({
  imageUrl,
  likes,
  comments
}) => {
  return <div className="relative group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      
      
    </div>;
};
export default InstagramPost;