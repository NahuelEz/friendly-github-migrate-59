
import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SocialCard from './SocialCard';

export const StartToday = () => {
  return (
    <div className="bg-[#b762f7] flex flex-row justify-center w-full">
      <div className="w-full max-w-[1920px] min-h-[852px] relative py-16">
        <div className="relative w-full max-w-[1605px] mx-auto px-4">
          {/* Left Section */}
          <div className="flex flex-col max-w-[440px] mt-16">
            <h1 className="font-bold text-white text-[56.9px] tracking-[0] leading-normal whitespace-nowrap uppercase">
              COMIENZA HOY
            </h1>

            <Separator className="bg-white/30 h-px my-8" />

            <p className="font-normal text-white text-[28px] md:text-[35px] tracking-[-0.53px] leading-[42.0px] mt-4">
              Registrate y mira cómo crecen tus seguidores y tu comunidad en una semana
            </p>

            <Button className="w-[197px] h-[58px] mt-16 bg-[#4f1092] hover:bg-[#4f1092]/90 rounded-[117.72px]">
              <span className="font-bold text-white text-[25.9px] leading-[25.9px]">comenzar</span>
            </Button>
          </div>

          {/* Right Section - Social Cards */}
          <div className="absolute right-[100px] md:right-[200px] lg:right-[400px] top-0 flex">
            <div className="relative">
              {/* First Card - Left */}
              <div className="absolute top-11 left-0">
                <SocialCard size="normal" />
              </div>

              {/* Middle Card - Center */}
              <div className="absolute left-[180px] md:left-[250px] top-[79px]">
                <SocialCard size="large" />
              </div>

              {/* Last Card - Right */}
              <div className="absolute left-[400px] md:left-[565px] top-11">
                <SocialCard size="normal" />

                {/* Checkmark Icon */}
                <div className="absolute w-[180px] h-[180px] md:w-[234px] md:h-[236px] top-[425px] left-[50px]">
                  <div className="relative h-full">
                    <div className="absolute w-[120px] h-[120px] md:w-[148px] md:h-[148px] top-0 left-0 bg-[#4f1092] rounded-[26.76px]" />
                    <div className="absolute w-[160px] h-[160px] md:w-[197px] md:h-[197px] top-[30px] md:top-[39px] left-[30px] md:left-[37px]">
                      <div className="relative w-full h-full -top-0.5 -left-0.5 bg-[#ffffff33] rounded-[26.76px] backdrop-blur-[16.73px] flex items-center justify-center">
                        <svg width="102" height="87" viewBox="0 0 102 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 43.5L36.5 75L97 5" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartToday;
