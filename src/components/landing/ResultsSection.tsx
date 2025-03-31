
import React, { useState, useRef, MouseEvent } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface CardHoverProps {
  children: React.ReactNode;
  className?: string;
}

const Card3DHover: React.FC<CardHoverProps> = ({ children, className = "" }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to card
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate rotation based on mouse position
      const rotateX = ((y / rect.height) - 0.5) * -10;
      const rotateY = ((x / rect.width) - 0.5) * 10;
      
      setRotation({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`${className} transition-all duration-300`}
      style={{
        transform: isHovered ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.03)` : 'perspective(1000px) rotateX(0) rotateY(0)',
        transition: 'all 0.3s ease-out',
        boxShadow: isHovered ? '0 10px 20px rgba(0,0,0,0.2)' : '0 4px 8px rgba(0,0,0,0.1)'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export const ResultsSection: React.FC = () => {
  return <section className="bg-[#181615] flex w-full flex-col items-center px-20 max-md:max-w-full max-md:px-5">
      <div className="z-10 flex mt-[-209px] mb-[-58px] w-full max-w-[1360px] flex-col items-stretch max-md:max-w-full max-md:mt-[-200px] max-md:mb-2.5">
        <div className="self-center w-[1164px] max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {[1, 2, 3, 4].map(i => <div key={i} className="w-3/12 max-md:w-full max-md:ml-0">
                <Card3DHover className="bg-[rgba(217,217,217,1)] flex gap-[9px] font-medium w-full pt-6 pb-[443px] px-[19px] max-md:mt-[19px] max-md:pl-5 max-md:pb-[100px]">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/125fec5088d807ae908654880b7b663832f38666a6c54192d365209cb57e0c4f?placeholderIfAbsent=true" alt="Profile" className="aspect-[1] object-contain w-[34px] shrink-0 rounded-[50%]" />
                  <div className="flex flex-col items-stretch">
                    <div className="flex items-stretch gap-5 text-xs text-white whitespace-nowrap justify-between">
                      <div>nkchaudhary01</div>
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d77303c688719bc5d138ba4ea0d1697813904a5d512bd6052f4b632c2e3af84?placeholderIfAbsent=true" alt="Options" className="aspect-[3.75] object-contain w-[15px] shrink-0 mt-3" />
                    </div>
                    <div className="text-[rgba(118,119,126,1)] text-[9px]">
                      Mumbai, India
                    </div>
                  </div>
                </Card3DHover>
              </div>)}
          </div>
        </div>
        <div className="mt-[69px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {[1, 2, 3, 4].map(i => <div key={i} className="w-3/12 max-md:w-full max-md:ml-0">
                <Card3DHover className="shadow-[3px_5px_20px_0px_rgba(0,0,0,0.50)] bg-white flex grow flex-col items-center text-center w-full py-10 px-6 rounded-[20px] max-md:mt-5">
                  <div className="text-[#181615] text-5xl font-bold">39,389</div>
                  <div className="text-gray-600 text-sm mt-3">Followers Gained</div>
                </Card3DHover>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ResultsSection;
