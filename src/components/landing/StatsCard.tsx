
import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  percentage: string;
  className?: string;
  width?: string;
}

export const StatsCard: React.FC<StatCardProps> = ({
  title,
  value,
  percentage,
  className = "",
  width = "full",
}) => {
  return (
    <div
      className={`border shadow-[3px_5px_20px_0px_rgba(0,0,0,0.50)] bg-[#181615] w-${width} mx-auto px-5 py-4 rounded-[16px] border-solid border-[#29292E] ${className}`}
    >
      <div className="items-center content-center flex-wrap bg-[#181615] flex w-full gap-[6px_var(--8,6px)] rounded-lg">
        <div className="self-stretch text-sm text-white font-normal flex-1 shrink basis-[0%] my-auto rounded-lg">
          {title}
        </div>
        <div className="justify-center items-center shadow-[0px_1px_0px_0px_rgba(0,0,0,0.10)] bg-[rgba(255,255,255,0.04)] self-stretch flex w-[38px] my-auto pt-[3px] pb-[6px] rounded-[80px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/178ef81b8a124fbbb36fd103190391ae/cf97f1c5c399c72fa08642ae7ff4e5d87ad909ae?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-stretch my-auto"
            alt="Stat icon"
          />
        </div>
      </div>
      <div className="flex items-stretch text-white whitespace-nowrap mt-1">
        <div className="bg-[#181615] text-[28px] font-semibold leading-none rounded-lg">
          {value}
        </div>
        <div className="bg-[#181615] text-base font-normal leading-loose my-auto ml-1 rounded-lg">
          {percentage}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
