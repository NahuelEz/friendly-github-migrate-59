
import React, { useState, useRef, MouseEvent, useCallback } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";

interface CardHoverProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

const Card3DHover: React.FC<CardHoverProps> = ({ children, className = "", isActive = false }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      
      // Calcular la posición del mouse relativa a la tarjeta
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calcular la rotación basada en la posición del mouse
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
        transform: isHovered 
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.03)`
          : isActive 
            ? 'perspective(1000px) rotateX(0) rotateY(0) scale(1.15) translateY(-20px)' 
            : 'perspective(1000px) rotateX(0) rotateY(0)',
        transition: 'all 0.3s ease-out',
        boxShadow: isHovered || isActive ? '0 15px 30px rgba(0,0,0,0.3)' : '0 4px 8px rgba(0,0,0,0.1)',
        zIndex: isActive ? 10 : 0
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
  const [activeCard, setActiveCard] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const profileCards = [1, 2, 3, 4];
  const statsCards = [1, 2, 3, 4];

  // Update the active card when the carousel changes
  useCallback(() => {
    if (!api) return;
    
    const handleSelect = () => {
      setActiveCard(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    
    // Cleanup
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <section className="bg-[#181615] flex w-full flex-col items-center px-20 max-md:max-w-full max-md:px-5">
      <div className="z-10 flex mt-[-209px] mb-[-58px] w-full max-w-[1360px] flex-col items-stretch max-md:max-w-full max-md:mt-[-200px] max-md:mb-2.5">
        <div className="self-center w-full max-w-[1164px] relative">
          <Carousel 
            className="w-full"
            opts={{ 
              loop: true,
              align: "start"
            }}
            setApi={setApi}
          >
            <CarouselContent>
              {profileCards.map((_, i) => (
                <CarouselItem key={i} className="md:basis-1/4 pl-4">
                  <Card3DHover 
                    className="bg-[rgba(217,217,217,1)] flex gap-[9px] font-medium w-full pt-6 pb-[443px] px-[19px] max-md:mt-[19px] max-md:pl-5 max-md:pb-[100px]"
                    isActive={activeCard === i}
                  >
                    <img 
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/125fec5088d807ae908654880b7b663832f38666a6c54192d365209cb57e0c4f?placeholderIfAbsent=true" 
                      alt="Profile" 
                      className="aspect-[1] object-contain w-[34px] shrink-0 rounded-[50%]" 
                    />
                    <div className="flex flex-col items-stretch">
                      <div className="flex items-stretch gap-5 text-xs text-white whitespace-nowrap justify-between">
                        <div>nkchaudhary01</div>
                        <img 
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d77303c688719bc5d138ba4ea0d1697813904a5d512bd6052f4b632c2e3af84?placeholderIfAbsent=true" 
                          alt="Options" 
                          className="aspect-[3.75] object-contain w-[15px] shrink-0 mt-3" 
                        />
                      </div>
                      <div className="text-[rgba(118,119,126,1)] text-[9px]">
                        Mumbai, India
                      </div>
                    </div>
                  </Card3DHover>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -left-8 top-1/2 -translate-y-1/2">
              <CarouselPrevious 
                className="bg-[#FF6200] text-white border-none hover:bg-[#ff7a28] h-[67px] w-[67px]" 
              />
            </div>
            <div className="absolute -right-8 top-1/2 -translate-y-1/2">
              <CarouselNext 
                className="bg-[#FF6200] text-white border-none hover:bg-[#ff7a28] h-[67px] w-[67px]" 
              />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-[69px] max-md:max-w-full max-md:mt-10">
          <Carousel className="w-full">
            <CarouselContent>
              {statsCards.map((_, i) => (
                <CarouselItem key={i} className="md:basis-1/4 pl-4">
                  <Card3DHover className="shadow-[3px_5px_20px_0px_rgba(0,0,0,0.50)] bg-white flex grow flex-col items-stretch text-6xl text-[#181615] font-normal whitespace-nowrap text-center w-full py-[60px] rounded-[20px] max-md:text-[40px] max-md:mt-5">
                    <div className="self-center max-md:text-[40px]">39,389</div>
                    <div className="shrink-0 h-0 mt-[43px] border-black max-md:mt-10" />
                  </Card3DHover>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
