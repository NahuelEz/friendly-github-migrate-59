import React from "react";
export const ClientsSection: React.FC = () => {
  return <section className="bg-[#D9D9D9] flex w-full flex-col items-center text-[70px] text-white font-normal whitespace-nowrap uppercase leading-[0.9] justify-center py-0 px-0 mt-32">
      <div className="flex w-full max-w-[1741px] items-stretch gap-[40px_100px] flex-wrap justify-between max-md:max-w-full max-md:text-[40px]">
        {[1, 2, 3, 4, 5].map(i => <div key={i} className="text-center text-[#FFFFFF]">
            LOGOCLIENT
          </div>)}
      </div>
    </section>;
};
export default ClientsSection;