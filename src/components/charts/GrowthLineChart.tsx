
import React from 'react';
import { ArrowUpRight } from "lucide-react";

export const GrowthLineChart = () => {
  return (
    <div className="bg-[#b762f7] rounded-xl p-6 relative h-[400px]">
      <h3 className="text-white text-2xl font-semibold mb-4">Our Growth</h3>

      <div className="h-[300px] relative">
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-white text-sm">
          <span>40</span>
          <span>30</span>
          <span>20</span>
          <span>10</span>
        </div>

        <div className="ml-8 h-full flex flex-col justify-between">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="border-t border-white/20 w-full h-0"></div>
          ))}
        </div>

        <div className="absolute inset-0 ml-8 mt-2">
          <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
            <path
              d="M0,280 L80,200 L160,120 L240,180 L320,60 L400,20"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
            <circle cx="0" cy="280" r="4" fill="white" />
            <circle cx="80" cy="200" r="4" fill="white" />
            <circle cx="160" cy="120" r="4" fill="white" />
            <circle cx="240" cy="180" r="4" fill="white" />
            <circle cx="320" cy="60" r="4" fill="white" />
          </svg>
        </div>

        <div className="absolute bottom-0 right-4 text-white text-sm">Item 3</div>
      </div>

      <div className="absolute -top-4 -right-4 bg-[#181615] text-white p-4 rounded-lg shadow-lg w-64">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">Comments liked</span>
          <ArrowUpRight className="h-4 w-4" />
        </div>
        <div className="flex items-baseline">
          <span className="text-4xl font-bold">7,265</span>
          <span className="ml-2 text-[#21ee43]">+11.01%</span>
        </div>
      </div>

      <div className="absolute -bottom-32 -right-4 bg-[#4f1092] text-white p-6 rounded-lg shadow-lg w-64">
        <div className="flex flex-col items-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-white">
            <img
              src="/lovable-uploads/10c9cb7c-f217-47ed-a9b4-fd116a7171e0.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="font-semibold">nkchaudhary01</h4>
          <p className="text-sm text-white/80">Wildlife Photographer</p>
          <p className="text-sm text-[#ff6200] mt-1">61K Followers</p>
        </div>

        <div className="grid grid-cols-2 gap-2 border-t border-white/20 pt-4">
          <div className="text-center">
            <p className="text-2xl font-bold">39,389</p>
            <p className="text-xs">Followers Gained</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">
              1,800<span className="text-lg">+</span>
            </p>
            <p className="text-xs">Avg. Likes/Post</p>
          </div>
        </div>
      </div>
    </div>
  );
};
