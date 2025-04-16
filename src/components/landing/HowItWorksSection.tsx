import React from "react";
import CTAButton from "@/components/ui/CTAButton";
export const HowItWorksSection: React.FC = () => {
  return <section className="bg-[#4F1092] flex w-full flex-col py-24 px-8 lg:px-20">
      <div className="self-start max-w-[1627px] w-full">
        <h2 className="text-white text-7xl leading-[0.9] scale-y-[2] uppercase mb-20 font-bold lg:text-7xl z-20">
          COMO FUNCIONA
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Step 1 */}
          <div className="flex items-start gap-6">
            <div className="w-px h-full bg-white" />
            <div className="flex flex-col">
              <span className="text-[#B762F7] text-5xl lg:text-7xl leading-[0.9] uppercase">
                1.
              </span>
              <div className="text-white text-4xl lg:text-5xl leading-[1.1] uppercase mt-6">
                Cuentanos <br />
                tu objetivo
              </div>
              <div className="text-white text-2xl lg:text-[2rem] leading-tight mt-4">
                o deja que nuestra <br />IA lo descubra
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-6">
            <div className="w-px h-full bg-white" />
            <div className="flex flex-col">
              <span className="text-[#B762F7] text-5xl lg:text-7xl leading-[0.9] uppercase">
                2.
              </span>
              <div className="text-white text-4xl lg:text-5xl leading-[1.1] uppercase mt-6">
                Llamamos <br />
                atención
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-6">
            <div className="w-px h-full bg-white" />
            <div className="flex flex-col">
              <span className="text-[#B762F7] text-5xl lg:text-7xl leading-[0.9] uppercase">
                3.
              </span>
              <div className="text-white text-4xl lg:text-5xl leading-[1.1] uppercase mt-6">
                Hacemos <br />
                crecer tu <br />
                marca
              </div>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="flex items-start gap-6">
          <div className="w-px h-full bg-white" />
            <div className="flex flex-col">
              <span className="text-[#B762F7] text-5xl lg:text-7xl leading-[0.9] uppercase">
                4.
              </span>
              <div className="text-white text-3xl lg:text-5xl leading-[1.1] uppercase mt-6">
                generamos <br />
                engagement <br />
              </div>
            </div>
          </div>
        </div>

        <div className="text-white text-4xl lg:text-6xl font-normal ml-20 leading-[0.9] uppercase text-center mt-32 max-md:mt-16">
          ¿te interesa?
        </div>
        
        <CTAButton className="mx-auto mt-16 max-md:mt-10 ml-[700px]">
          comenzar
        </CTAButton>
      </div>
    </section>;
};
export default HowItWorksSection;