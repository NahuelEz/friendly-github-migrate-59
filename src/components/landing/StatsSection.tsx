import React from "react";
import InstagramPost from "./InstagramPost";
import StatsCard from "./StatsCard";
import ProfileCard from "./ProfileCard";
import TrafficSource from "./TrafficSource";
export const StatsSection: React.FC = () => {
  return <section className="flex flex-col items-stretch pb-[72px] mx-0 py-[100px]">
      <h1 className="rotate-[0.003745252016376141rad] text-[rgba(79,16,146,1)] scale-y-[2] text-4xl leading-[1.1] text-center uppercase self-center z-10 -mt-1 max-md:text-[40px] font-bold">
        TITULAR
      </h1>
      <div className="w-full mt-[27px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {/* Left Column */}
          <div className="w-[55%] max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full max-md:mt-5">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                {/* Social Post Card Column */}
                <div className="w-[28%] max-md:w-full max-md:ml-0">
                  <div className="mr-[-142px] my-auto max-md:mt-10 relative z-20">
                    <InstagramPost imageUrl="/uploads/d6ad7714-19c0-444c-8297-fef26645b1f6.png" likes="903" comments="384" />
                  </div>
                </div>
                {/* Stats Column */}
                <div className="w-[72%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="shadow-[1px_3px_20px_0px_rgba(0,0,0,0.15)] bg-white flex w-full flex-col mx-auto pt-8 pb-[100px] px-20 rounded-[20px] max-md:max-w-full max-md:px-5 relative py-[30px]">
                    <div className="w-[571px] max-w-full">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch pb-40">
                        <div className="w-6/12 max-md:w-full max-md:ml-0 flex flex-col gap-3">
                          <StatsCard title="Stories Viewed" value="7,265" percentage="+11.01%" />
                          <StatsCard title="Live Reactions" value="7,265" percentage="+11.01%" width="full" />
                        </div>
                        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0 flex flex-col">
                          <StatsCard title="Comments liked" value="7,265" percentage="+11.01%" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative -mt-[40px]">
                    <ProfileCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column - Traffic Source */}
          <div className="w-[45%] ml-5 max-md:w-full max-md:ml-0">
            <TrafficSource />
          </div>
        </div>
      </div>
    </section>;
};
export default StatsSection;