
import React from "react";
import ProfileCarousel from "./ProfileCarousel";

const CaseStudiesHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#243949] to-[#517fa4] flex w-full flex-col overflow-hidden pt-[87px] px-[55px] pb-[200px] max-md:max-w-full max-md:px-5">
      <h1 className="text-white text-8xl font-bold leading-[0.9] uppercase max-w-[800px] max-md:max-w-full max-md:text-[40px]">
        esta hecho para vos
      </h1>

      <div className="mt-16 max-md:mt-10">
        <ProfileCarousel />
      </div>
    </section>
  );
};

export default CaseStudiesHero;
