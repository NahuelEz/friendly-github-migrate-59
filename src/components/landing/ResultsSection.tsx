
import React, { useState, useRef, MouseEvent, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import VideoPlayButton from '../ui/VideoPlayButton';

interface CardHoverProps {
  children: React.ReactNode;
  className?: string;
  showVideoButton?: boolean;
  videoUrl?: string;
}

const Card3DHover: React.FC<CardHoverProps> = ({ children, className = "", showVideoButton = false, videoUrl = "" }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const handlePlayClick = () => {
    if (videoUrl && videoRef.current) {
      setShowVideo(true);
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div
      ref={cardRef}
      className={`${className} relative transition-all duration-300 overflow-hidden`}
      style={{
        transform: isHovered ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.03)` : 'perspective(1000px) rotateX(0) rotateY(0)',
        transition: 'all 0.3s ease-out',
        boxShadow: isHovered ? '0 10px 20px rgba(0,0,0,0.2)' : '0 4px 8px rgba(0,0,0,0.1)'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showVideo && videoUrl ? (
        <video 
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-10" 
          src={videoUrl}
          controls={false}
          onClick={handlePlayClick}
        />
      ) : (
        children
      )}
      
      {showVideoButton && (
        <VideoPlayButton 
          videoUrl={videoUrl} 
          onClick={handlePlayClick}
        />
      )}
    </div>
  );
};

// Create a new CounterAnimation component for the animated numbers
interface CounterAnimationProps {
  end: number;
  className?: string;
  duration?: number;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({ 
  end, 
  className = "", 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    
    animationFrameId = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isVisible]);
  
  return <div ref={counterRef} className={className}>{count.toLocaleString()}</div>;
};

export const ResultsSection: React.FC = () => {
  // Example video URLs - replace with actual videos
  const videoUrls = [
    "https://example.com/video1.mp4",
    "https://example.com/video2.mp4",
    "https://example.com/video3.mp4",
    "https://example.com/video4.mp4"
  ];

  return <section className="bg-[#181615] flex w-full flex-col items-center px-20 max-md:max-w-full max-md:px-5">
      <div className="z-10 flex mt-[-209px] mb-[-58px] w-full max-w-[1360px] flex-col items-stretch max-md:max-w-full max-md:mt-[-200px] max-md:mb-2.5">
        <div className="self-center w-[1164px] max-w-full">
          <div className="gap-8 flex max-md:flex-col max-md:items-stretch">
            {[1, 2, 3, 4].map((i, index) => <div key={i} className="w-3/12 max-md:w-full max-md:ml-0">
                <Card3DHover 
                  className="bg-[rgba(217,217,217,1)] flex gap-[9px] font-medium w-full pt-6 pb-[443px] px-[19px] max-md:mt-[19px] max-md:pl-5 max-md:pb-[100px]" 
                  showVideoButton={true}
                  videoUrl={videoUrls[index]}
                >
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
          <div className="gap-8 flex max-md:flex-col max-md:items-stretch">
            {[1, 2, 3, 4].map((i, index) => <div key={i} className="w-3/12 max-md:w-full max-md:ml-0">
                <Card3DHover className="shadow-[3px_5px_20px_0px_rgba(0,0,0,0.50)] bg-white flex grow flex-col items-center text-center w-full py-10 px-6 rounded-[20px] max-md:mt-5" showVideoButton={false}>
                  <CounterAnimation 
                    end={39389} 
                    className="text-[#181615] text-5xl font-bold" 
                    duration={2000}
                  />
                  <div className="text-gray-600 text-sm mt-3">Followers Gained</div>
                </Card3DHover>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};

export default ResultsSection;
