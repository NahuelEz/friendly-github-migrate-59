
import React from "react";
import { TrendingUp } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  percentage: string;
}

export function StatsCard({ title, value, percentage }: StatsCardProps) {
  return (
    <div className="bg-[#181615] text-white rounded-xl p-4 shadow-lg w-[220px]">
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm text-gray-300">{title}</p>
        <div className="bg-[#29292e] p-1 rounded-md">
          <TrendingUp className="w-4 h-4" />
        </div>
      </div>

      <div className="flex justify-between items-end">
        <h3 className="text-4xl font-bold">{value}</h3>
        <p className="text-[#ff6200] text-sm font-medium">{percentage}</p>
      </div>
    </div>
  );
}
