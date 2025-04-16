
import React from "react";
import ProfileCarousel from "./ProfileCarousel";

const CaseStudiesHero: React.FC = () => {
  return (
    <section className="bg-[rgba(79,16,146,1)] flex w-full flex-col overflow-hidden pt-[87px] px-[55px] max-md:max-w-full max-md:px-5">
      <h1 className="text-white text-9xl font-normal leading-[0.9] uppercase max-md:max-w-full max-md:text-[40px]">
        esta hecho para vos
      </h1>

      <div className="mt-[147px] mb-[-198px] max-md:mt-10 max-md:mb-2.5">
        <ProfileCarousel />
      </div>
    </section>
  );
};

export default CaseStudiesHero;
