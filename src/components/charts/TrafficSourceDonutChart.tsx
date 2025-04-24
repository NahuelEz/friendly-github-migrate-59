
import React from 'react';

export const TrafficSourceDonutChart = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg absolute bottom-[-80px] left-[-80px] max-w-[320px]">
      <h3 className="text-black font-semibold mb-4">Fuente de trafico</h3>

      <div className="flex">
        <div className="w-1/2">
          <svg viewBox="0 0 100 100" className="w-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#e0e0e0" strokeWidth="20" />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#4f1092"
              strokeWidth="20"
              strokeDasharray="125.6 251.2"
              strokeDashoffset="0"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#b762f7"
              strokeWidth="20"
              strokeDasharray="62.8 251.2"
              strokeDashoffset="-125.6"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#ff6200"
              strokeWidth="20"
              strokeDasharray="31.4 251.2"
              strokeDashoffset="-188.4"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#29292e"
              strokeWidth="20"
              strokeDasharray="31.4 251.2"
              strokeDashoffset="-219.8"
            />
          </svg>
        </div>

        <div className="w-1/2 pl-4 space-y-2">
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#b762f7] mr-2"></span>
            <span className="text-xs">Lorem ipsum</span>
            <span className="ml-auto text-xs">52.1%</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#4f1092] mr-2"></span>
            <span className="text-xs">Lorem ipsum</span>
            <span className="ml-auto text-xs">22.8%</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#29292e] mr-2"></span>
            <span className="text-xs">Lorem ipsum</span>
            <span className="ml-auto text-xs">13.9%</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#ff6200] mr-2"></span>
            <span className="text-xs">Lorem ipsum</span>
            <span className="ml-auto text-xs">11.2%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
