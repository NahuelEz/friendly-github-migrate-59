
import React from 'react';

const ImageFooterSection = () => {
  return (
    <div className="w-full relative py-16 bg-gradient-to-r from-purple-800 via-purple-700 to-orange-500">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/41b34e54-7328-4cf4-ba81-2a3f85b0e59d.png" 
          alt="Social media background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-5xl font-bold text-white mb-8 uppercase transform scale-y-[2] origin-top">
          EMPIEZA AHORA
        </h2>
        <div className="flex justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg transform transition-all duration-300 hover:scale-105">
            COMIENZA HOY
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageFooterSection;
