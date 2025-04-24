
import React from 'react';

export const GrowthLineChart = () => {
  return (
    <div className="h-[300px] relative">
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-white text-sm">
        <span>40</span>
        <span>30</span>
        <span>20</span>
        <span>10</span>
      </div>

      {/* Horizontal grid lines */}
      <div className="ml-8 h-full flex flex-col justify-between">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="border-t border-white/20 w-full h-0"></div>
        ))}
      </div>

      {/* Line chart - simplified representation */}
      <div className="absolute inset-0 ml-8 mt-2">
        <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
          <path
            d="M0,280 L80,200 L160,120 L240,180 L320,60 L400,20"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          {/* Data points */}
          <circle cx="0" cy="280" r="4" fill="white" />
          <circle cx="80" cy="200" r="4" fill="white" />
          <circle cx="160" cy="120" r="4" fill="white" />
          <circle cx="240" cy="180" r="4" fill="white" />
          <circle cx="320" cy="60" r="4" fill="white" />
        </svg>
      </div>

      {/* Item label */}
      <div className="absolute bottom-0 right-4 text-white text-sm">Item 3</div>
    </div>
  );
};
