import React from "react";
export const ResultsSection: React.FC = () => {
  return <section className="bg-[#181615] flex w-full flex-col items-center px-20 max-md:max-w-full max-md:px-5">
      <div className="z-10 flex mt-[-209px] mb-[-58px] w-full max-w-[1360px] flex-col items-stretch max-md:max-w-full max-md:mt-[-200px] max-md:mb-2.5">
        <div className="self-center w-[1164px] max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {[1, 2, 3, 4].map(i => <div key={i} className="w-3/12 max-md:w-full max-md:ml-0">
                <div className="bg-[rgba(217,217,217,1)] flex gap-[9px] font-medium w-full pt-6 pb-[443px] px-[19px] max-md:mt-[19px] max-md:pl-5 max-md:pb-[100px]">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/125fec5088d807ae908654880b7b663832f38666a6c54192d365209cb57e0c4f?placeholderIfAbsent=true" alt="Profile" className="aspect-[1] object-contain w-[34px] shrink-0 rounded-[50%]" />
                  <div className="flex flex-col items-stretch">
                    <div className="flex items-stretch gap-5 text-xs text-white whitespace-nowrap justify-between">
                      <div>nkchaudhary01</div>
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d77303c688719bc5d138ba4ea0d1697813904a5d512bd6052f4b632c2e3af84?placeholderIfAbsent=true" alt="Options" className="aspect-[3.75] object-contain w-[15px] shrink-0 mt-3" />
                    </div>
                    <div className="text-[rgba(118,119,126,1)] text-[9px]">
                      Mumbai, India
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
        <div className="mt-[69px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {[1, 2, 3, 4].map(i => <div key={i} className="w-3/12 max-md:w-full max-md:ml-0">
                <div className="shadow-[3px_5px_20px_0px_rgba(0,0,0,0.50)] bg-white flex grow flex-col items-stretch text-6xl text-[#181615] font-normal whitespace-nowrap text-center w-full py-[60px] rounded-[20px] max-md:text-[40px] max-md:mt-5">
                  <div className="self-center max-md:text-[40px]">39,389</div>
                  <div className="shrink-0 h-0 mt-[43px] border-black max-md:mt-10" />
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ResultsSection;