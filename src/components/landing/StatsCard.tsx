import React from "react";

interface StatsCardProps {
  title: string;
  value: string;
  percentage: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  percentage,
}) => {
  return (
    <div className="border shadow-[3px_5px_20px_0px_rgba(0,0,0,0.50)] bg-[#181615] w-full mx-auto px-7 py-6 rounded-[20px] border-solid border-[#29292E] max-md:px-5">
      <div className="items-center content-center flex-wrap bg-[#181615] flex w-full gap-2 rounded-lg">
        <div className="self-stretch text-base text-white font-normal flex-1 shrink basis-4 my-auto rounded-lg">
          {title}
        </div>
        <div className="justify-center items-center border border-[color:var(--Linear-Border-lighting,rgba(255,255,255,0.40))] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.10)] bg-[rgba(255,255,255,0.04)] self-stretch flex w-11 my-auto px-2 py-1 rounded-[80px] border-solid">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1622e7c7dfa71adfd212d789765b9cc86cb126cbbb8d8507eb6170955a9ea22?placeholderIfAbsent=true"
            alt="Stats icon"
            className="aspect-[1] object-contain w-7 self-stretch my-auto"
          />
        </div>
      </div>
      <div className="flex items-stretch text-white whitespace-nowrap mt-2">
        <div className="bg-[#181615] text-[32px] font-semibold leading-none rounded-lg">
          {value}
        </div>
        <div className="bg-[#181615] text-lg font-normal leading-loose my-auto rounded-lg">
          {percentage}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
