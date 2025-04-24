
import React from 'react';
import { ArrowUpRight } from "lucide-react";
import { GrowthLineChart } from './GrowthLineChart';
import { TrafficSourceDonutChart } from './TrafficSourceDonutChart';

export const Pack3Dashboard = () => {
  return (
    <div className="bg-[#fdfbf9] py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 relative">
          {/* Column 1: CRECIMIENTO CON PACK 3 - 3 columns wide */}
          <div className="lg:col-span-3">
            <div className="sticky top-8">
              <h2 className="text-[#4f1092] text-2xl font-bold">CRECIMIENTO CON</h2>
              <h1 className="text-[#4f1092] text-7xl font-bold leading-tight">PACK 3</h1>
            </div>
          </div>

          {/* Column 2: Lorem ipsum text blocks - 3 columns wide */}
          <div className="space-y-8 lg:col-span-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="max-w-md">
                <h3 className="text-[#4f1092] text-xl font-semibold mb-1">Lorem ipsum</h3>
                <p className="text-[#4f1092]">Dolor sit amet consectetur. Eget faucibus fringilla sed bibendum.</p>
              </div>
            ))}
          </div>

          {/* Column 3: Charts and Stats - 6 columns wide (wider) */}
          <div className="relative lg:col-span-6">
            {/* Growth Chart */}
            <div className="bg-[#b762f7] rounded-xl p-6 relative h-[400px]">
              <h3 className="text-white text-2xl font-semibold mb-4">Our Growth</h3>
              <GrowthLineChart />

              {/* Stats Card - Comments */}
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

              {/* Profile Card */}
              <div className="absolute -bottom-16 -right-4 bg-[#4f1092] text-white p-6 rounded-lg shadow-lg w-64">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-white">
                    <img
                      src="/placeholder.svg"
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

            <TrafficSourceDonutChart />
          </div>
        </div>
      </div>
    </div>
  );
};
