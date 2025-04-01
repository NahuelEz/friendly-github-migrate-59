import React from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import StatsSection from "@/components/landing/StatsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ClientsSection from "@/components/landing/ClientsSection";
import ResultsSection from "@/components/landing/ResultsSection";
import CTAButton from "@/components/ui/CTAButton";
import GradientBlur from "@/components/ui/GradientBlur";

const Index = () => {
  return (
    <div className="relative flex flex-col overflow-hidden w-full">
      {/* Background gradient image */}
      <div className="absolute top-0 left-0 w-full h-[1060px] -z-10">
        <img 
          src="/lovable-uploads/c01c6e3d-0dfc-4182-af71-88efc4879bab.png" 
          alt="Fondo degradado" 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="absolute w-auto-[800px] mt-[3250px] ml-[900px] z-10 opacity-50">
        <img 
          src="/lovable-uploads/c01c6e3d-0dfc-4182-af71-88efc4879bab.png" 
          alt="Fondo degradado" 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="absolute w-auto-[800px] mt-[3490px] ml-[900px] -z-10 opacity-40">
        <img 
          src="/lovable-uploads/c01c6e3d-0dfc-4182-af71-88efc4879bab.png" 
          alt="Fondo degradado" 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="absolute w-auto-[800px] mt-[4800px] ml-[2px] z-10 opacity-40 rotate-180">
        <img 
          src="/lovable-uploads/c01c6e3d-0dfc-4182-af71-88efc4879bab.png" 
          alt="Fondo degradado" 
          className="w-full h-full object-cover" 
        />
      </div>

      <Header />
      <Hero />

      {/* This image overlaps with the phone from the Hero section */}
      <div className="relative -mt-24 z-30">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b9068c2a3b2c6f928899c25be29c05d7e132f954318e9ff7fea8282f9d67698?placeholderIfAbsent=true" 
          alt="Divider" 
          className="aspect-[2.56] object-contain w-full max-md:max-w-full" 
        />
      </div>

      <h2 className="rotate-[0.003745252016376141rad] text-[rgba(79,16,146,1)] text-6xl leading-[1.1] text-center uppercase self-center mt-[53px] max-md:text-[40px] max-md:mt-10 font-bold">
        TITULAR
      </h2>

      <StatsSection />

      <div className="text-[rgba(79,16,146,1)] text-[31px] font-bold leading-none self-center mt-[137px] max-md:mt-10">
        No te fíes de nosotros, 
      </div>

      <div className="rotate-[0.003745252016376141rad] text-[rgba(79,16,146,1)] text-6xl font-bold leading-[66px] text-center uppercase self-center w-[887px] mt-[27px] max-md:max-w-full max-md:text-[30px] max-md:leading-[49px]">
        ¡comprueba de primera mano los resultados de nuestros clientes!
      </div>

      <div className="self-center z-10 flex w-full max-w-[1436px] items-stretch gap-5 flex-wrap justify-between mt-[215px] max-md:max-w-full max-md:mt-10">
        <button className="items-center bg-[#FF6200] flex overflow-hidden w-[67px] h-[67px] px-[26px] py-[21px] rounded-[40px] max-md:px-5">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7f9f5a06611f9f55cecdd5959c2f173384aebb805f6d6c359042b7b6fca4c31?placeholderIfAbsent=true" 
            alt="Previous" 
            className="aspect-[0.6] object-contain w-[15px] self-stretch my-auto" 
          />
        </button>
        <button className="items-center bg-[#FF6200] flex min-h-[69px] overflow-hidden w-[68px] h-[68px] px-[26px] py-[22px] rounded-[40px] max-md:px-5">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b95774d10cd459d6e0dad9b230f900ff229a0af8e0ee1ccee1454b31a8bd21d?placeholderIfAbsent=true" 
            alt="Next" 
            className="aspect-[0.6] object-contain w-[15px] self-stretch my-auto" 
          />
        </button>
      </div>

      <ResultsSection />

      <CTAButton className="self-center mt-[110px] max-md:mt-10 text-base font-bold">
        comenzar
      </CTAButton>

      <div className="text-[rgba(79,16,146,1)] text-5xl font-bold leading-[66px] text-center uppercase self-center w-[986px] mt-[166px] max-md:max-w-full max-md:text-[40px] max-md:leading-[49px] max-md:mt-10">
        Confía en nuestra experiencia para desarrollar tu estrategia de
        crecimiento en Instagram.
      </div>

      <TestimonialsSection />

      <div className="bg-[rgba(79,16,146,1)] flex w-full flex-col overflow-hidden mt-[141px] pt-[93px] px-[54px] pb-[340px] relative max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <GradientBlur />
        </div>

        <div className="text-white text-7xl font-bold leading-[0.9] uppercase max-md:max-w-full max-md:text-[30px] relative z-10">
          esta PENSADO para vos
        </div>

        <div className="flex justify-end w-full mt-12 relative z-10">
          <div className="flex gap-6 items-end">
            <div className="bg-[rgba(217,217,217,1)] w-[400px] h-[500px] rounded-[20px_20px_0px_0px] relative">
              <div className="bg-white absolute bottom-0 left-0 right-0 py-4 text-center">
                <span className="text-[#4F1092] text-2xl font-normal uppercase">INFLUENCERS</span>
              </div>
            </div>

            <div className="bg-[rgba(217,217,217,1)] w-[150px] h-[250px] rounded-[20px_20px_0px_0px] relative">
              <div className="bg-white absolute bottom-0 left-0 right-0 py-4 text-center">
                <span className="text-[#4F1092] text-2xl font-normal uppercase">MARCAS</span>
              </div>
            </div>

            <div className="bg-[rgba(217,217,217,1)] w-[150px] h-[250px] rounded-[20px_20px_0px_0px] relative">
              <div className="bg-white absolute bottom-0 left-0 right-0 py-4 text-center">
                <span className="text-[#4F1092] text-2xl font-normal uppercase">MODA</span>
              </div>
            </div>
          </div>
        </div>

        <button className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center bg-[#FF6200] flex overflow-hidden w-[67px] h-[67px] px-[26px] py-[21px] rounded-[40px] max-md:px-5 z-10">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7f9f5a06611f9f55cecdd5959c2f173384aebb805f6d6c359042b7b6fca4c31?placeholderIfAbsent=true" 
            alt="Previous" 
            className="aspect-[0.6] object-contain w-[15px] self-stretch my-auto" 
          />
        </button>
      </div>

      <HowItWorksSection />
      <ComparisonSection />
      <ClientsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
