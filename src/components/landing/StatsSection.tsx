import React from "react";
import InstagramPost from "./InstagramPost";
import StatsCard from "./StatsCard";
import ProfileCard from "./ProfileCard";
import TrafficSourceChart from "./TrafficSourceChart";
export const StatsSection: React.FC = () => {
  return <section className="self-center w-full max-w-[1724px] ml-6 mt-[27px] max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[55%] max-md:w-full max-md:ml-0">
          <div className="grow max-md:max-w-full max-md:mt-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[28%] max-md:w-full max-md:ml-0">
                <InstagramPost imageUrl="/uploads/d6ad7714-19c0-444c-8297-fef26645b1f6.png" likes="2.5K" comments="384" />
              </div>
              <div className="w-[72%] ml-5 max-md:w-full max-md:ml-0">
                
              </div>
            </div>
          </div>
        </div>
        <div className="w-[45%] ml-5 max-md:w-full max-md:ml-0">
          
        </div>
      </div>
    </section>;
};
export default StatsSection;