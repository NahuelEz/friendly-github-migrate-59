
import React from "react";
import HomeTestimonialCard from "./HomeTestimonialCard";

export const TestimonialsSection: React.FC = () => {
  const testimonialContent = "Lorem ipsum dolor sit amet consectetur. Urna dui vulputate sed id. Gravida amet viverra euismod neque elit dictum. Diam nunc eu purus mus nulla dignissim facilisi nec vestibulum. Mauris ornare tempus pellentesque pretium urna magna. Tellus gravida vitae auctor malesuada vitae sagittis sed ac. Phasellus pellentesque est velit suspendisse pulvinar pharetra. Mauris ullamcorper euismod tellus neque neque. Ante ac tincidunt egestas sem. Adipiscing orci mauris amet eget mi condimentum.";
  
  return (
    <section className="self-center w-full max-w-[1360px] mt-[73px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch py-0 my-[-80px]">
        <div className="w-[33%] max-md:w-full max-md:ml-0">
          <HomeTestimonialCard name="Regina Miles" title="Designer" content={testimonialContent} rating={4} />
        </div>
        <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <HomeTestimonialCard name="Regina Miles" title="Designer" content={testimonialContent} rating={5} />
        </div>
        <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <HomeTestimonialCard name="Regina Miles" title="Designer" content={testimonialContent} rating={3} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
