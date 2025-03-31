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
                <InstagramPost />
              </div>
              <div className="w-[72%] ml-5 max-md:w-full max-md:ml-0">
                <div className="shadow-[1px_3px_20px_0px_rgba(0,0,0,0.15)] bg-white flex w-full flex-col mx-auto pt-[60px] px-20 rounded-[20px] max-md:max-w-full max-md:px-5 py-[61px]">
                  <div className="w-[571px] max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                      <div className="w-6/12 max-md:w-full max-md:ml-0">
                        <StatsCard title="Stories Viewed" value="7,265" percentage="+11.01%" />
                      </div>
                      <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                        <StatsCard title="Comments liked" value="7,265" percentage="+11.01%" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[15px]">
                    <StatsCard title="Live Reactions" value="7,265" percentage="+11.01%" />
                  </div>
                  <div className="mt-[34px] mb-[60px] max-md:mr-2.5">
                    <ProfileCard username="nkchaudhary01" profession="Wildlife Photographer" followers="61K" followersGained="39,389" avgLikes="1,800+" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[45%] ml-5 max-md:w-full max-md:ml-0">
          <div className="shadow-[1px_3px_20px_0px_rgba(0,0,0,0.15)] bg-white w-full pl-[29px] py-14 rounded-[20px] max-md:max-w-full max-md:mt-5 mx-[3px] px-[150px]">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[39%] max-md:w-full max-md:ml-0">
                <TrafficSourceChart />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default StatsSection;