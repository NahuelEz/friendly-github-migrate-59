
import React from 'react';

interface InstagramPostProps {
  imageUrl: string;
  likes: string;
  comments: string;
}

const InstagramPost: React.FC<InstagramPostProps> = ({ imageUrl, likes, comments }) => {
  return (
    <div className="relative group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-square">
        <img 
          src={imageUrl} 
          alt="Instagram post" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">{likes} likes</span>
          <span className="text-sm text-gray-600">{comments} comments</span>
        </div>
      </div>
    </div>
  );
};

export default InstagramPost;
