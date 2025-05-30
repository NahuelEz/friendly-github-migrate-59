import React from "react";
import { Header } from "@/components/landing/Header";
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
  return <div className="relative flex flex-col overflow-hidden w-full">
      {/* Background gradient image */}
      <div className="absolute top-0 left-0 w-full h-[1060px] -z-10">
        <img src="/uploads/c01c6e3d-0dfc-4182-af71-88efc4879bab.png" alt="Fondo degradado" className="w-full h-full object-cover" />
      </div>

      <div className="absolute w-auto-[800px] mt-[3250px] ml-[900px] z-10 opacity-50">
        <img src="/uploads/c01c6e3d-0dfc-4182-af71-88efc4879bab.png" alt="Fondo degradado" className="w-full h-full object-cover" />
      </div>

      <div className="absolute w-auto-[800px] mt-[3490px] ml-[900px] -z-10 opacity-40">
        <img src="/uploads/c01c6e3d-0dfc-4182-af71-88efc4879bab.png" alt="Fondo degradado" className="w-full h-full object-cover" />
      </div>

      <div className="absolute w-auto-[800px] mt-[4800px] ml-[2px] z-10 opacity-40 rotate-180">
        
      </div>

      <Header />
      <Hero />

      {/* New image section */}
      <div className="w-full relative z-30">
        <img src="/lovable-uploads/5261649a-8606-49de-940d-180947a4a2ad.png" alt="Seguidores reales y orgánicos en Instagram" className="w-full h-auto object-none pb-20" />
      </div>

      {/* Existing divider image */}
      <div className="relative -mt-24 z-30">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b9068c2a3b2c6f928899c25be29c05d7e132f954318e9ff7fea8282f9d67698?placeholderIfAbsent=true" alt="Divider" className="aspect-[2.56] object-contain w-full max-md:max-w-full" />
      </div>

      <StatsSection />

      <div className="text-[rgba(79,16,146,1)] text-[25px] font-bold leading-none self-center mt-[137px] max-md:mt-10 font-formula uppercase">
        No te fíes de nosotros, 
      </div>

      <div className="rotate-[0.003745252016376141rad] text-[rgba(79,16,146,1)] text-3xl font-bold leading-[0.8] scale-y-[2] origin-top text-center uppercase self-center w-[887px] mt-[27px] max-md:max-w-full max-md:text-[30px] max-md:leading-[49px] font-formula">
        ¡comprueba de primera mano los resultados<br />
        de nuestros clientes!
      </div>

      <div className="self-center z-10 flex w-full max-w-[1436px] items-stretch gap-5 flex-wrap justify-between mt-[215px] max-md:max-w-full max-md:mt-10">
        <button className="items-center bg-[#FF6200] flex overflow-hidden w-[67px] h-[67px] px-[26px] py-[21px] rounded-[40px] max-md:px-5">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7f9f5a06611f9f55cecdd5959c2f173384aebb805f6d6c359042b7b6fca4c31?placeholderIfAbsent=true" alt="Previous" className="aspect-[0.6] object-contain w-[15px] self-stretch my-auto" />
        </button>
        <button className="items-center bg-[#FF6200] flex min-h-[69px] overflow-hidden w-[68px] h-[68px] px-[26px] py-[22px] rounded-[40px] max-md:px-5">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b95774d10cd459d6e0dad9b230f900ff229a0af8e0ee1ccee1454b31a8bd21d?placeholderIfAbsent=true" alt="Next" className="aspect-[0.6] object-contain w-[15px] self-stretch my-auto" />
        </button>
      </div>

      <ResultsSection />

      <CTAButton className="self-center mt-[110px] max-md:mt-10 text-base font-bold">
        comenzar
      </CTAButton>

      <div className="text-[rgba(79,16,146,1)] pb-0 text-5xl leading-[66px] text-center uppercase self-center w-[986px] mt-[166px] max-md:max-w-full max-md:text-[40px] max-md:leading-[49px] max-md:mt-10 font-normal font-formula uppercase">
        CONFÍA EN NUESTRA EXPERIENCIA <br />
        PARA DESARROLLAR TÚ <br />
        ESTRATEGIA DE CRECIMIENTO
      </div>

      <TestimonialsSection />

      <div className="w-full relative">
        <img src="/lovable-uploads/94a42eac-6973-48b0-91ea-e31862b61b41.png" alt="Esta pensado para vos" className="w-full h-auto object-cover mt-60" />
      </div>

      <HowItWorksSection />
      <ComparisonSection />
      <ClientsSection />
      <FAQSection />
      <Footer />
    </div>;
};
export default Index;