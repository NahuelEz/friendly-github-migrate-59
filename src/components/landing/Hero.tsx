import React from "react";
import CTAButton from "@/components/ui/CTAButton";
export const Hero: React.FC = () => {
  return <section className="w-full relative overflow-hidden bg-transparent px-[91px] mx-0 my-[13px] py-[89px]">
      <div className="container mx-auto flex flex-col md:flex-row gap-10 relative z-10 px-0 py-[141px]">
        {/* Left column with headline and CTA */}
        <div className="w-full md:w-3/5">
          <figure className="mb-8 z-50">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e9943856d7743216e2dc7db55bc9ddc901c6cab" alt="Seguidores reales y orgánicos en Instagram" className="w-full h-auto max-w-[1087px] object-contain z-10" />
          </figure>

          <div className="flex flex-wrap gap-4 mt-10">
            <CTAButton variant="primary" className="rounded-full font-bold text-sm w-auto px-4 py-2 text-center">
              comenzar
            </CTAButton>
            <CTAButton variant="secondary" className="bg-[#FF6200] rounded-full text-slate-50 px-[29px] my-0 mx-0 font-bold py-[14px] text-sm">
              previsualizar mi crecimiento
            </CTAButton>
          </div>

          <p className="text-[#4F1092] text-3xl md:text-4xl mt-16 max-w-[700px]">
            Más de 24.000 influencers confían en nosotros para aumentar el
            número de seguidores Instagram.
          </p>
        </div>
      </div>

      {/* Positioned testimonial and phone to extend past the section */}
      <div className="relative mt-20 z-0 mr-5">
        {/* Instagram testimonial card */}
        <div className="absolute right-[20%] bottom-20 z-10 w-[580px]">
          <div className="bg-white bg-opacity-35 rounded-3xl p-8 shadow-lg z-1 px-[23px] my-0 mx-0 py-[70px]">
            <div className="flex items-center gap-4 ml-56">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d82819b5badff56c3eeb939017e6f7befcb78b5310c339cab33b1171357513f0?placeholderIfAbsent=true" alt="Instagram icon" className="w-16 h-16 object-contain" />
              <div className="text-[#FF6200] text-4xl">
                24k 28.769
              </div>
            </div>

            <div className="mt-8 text-[#4F1092] ml-1">
              <blockquote className="text-2xl md:text-3xl">
                <span className="font-formula text-[35px]">
                  "Lorem ipsum dolor sit,"
                </span>
                <br />
                consectetur adipiscing elite.
                <br />
                Nulla leo vitae diam est erat <br />
                fames purus adipisc et feugi"
              </blockquote>
              <div className="text-2xl font-bold mt-8">
                @usuarioinstagram
              </div>
            </div>
          </div>
        </div>

        {/* Phone mockup - positioned to extend beyond the section border */}
        <div className="absolute right-[5%] bottom-[-350px] z-20 mr-9">
          <img src="/uploads/444ad407-0b2e-40b7-8274-d0fb9db9bb5a.png" alt="Instagram en smartphone" className="w-auto h-[750px] filter drop-shadow-2xl object-contain" />
        </div>
      </div>
    </section>;
};
export default Hero;