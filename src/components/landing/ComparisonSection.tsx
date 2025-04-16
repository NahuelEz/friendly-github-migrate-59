import React from "react";
import CTAButton from "@/components/ui/CTAButton";

// Custom SVG components for check and x icons
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="30" height="23" viewBox="0 0 30 23" fill="none" className="flex-shrink-0">
    <path d="M8.51901 21.2301L1.07687 13.7858C0.735478 13.4447 0.464656 13.0396 0.279881 12.5938C0.0951055 12.148 0 11.6701 0 11.1876C0 10.705 0.0951055 10.2271 0.279881 9.78129C0.464656 9.33547 0.735478 8.93044 1.07687 8.58934C1.76631 7.90091 2.70078 7.51425 3.67508 7.51425C4.64938 7.51425 5.58385 7.90091 6.27329 8.58934L10.934 13.2458C11.028 13.3392 11.1551 13.3916 11.2876 13.3916C11.4201 13.3916 11.5472 13.3392 11.6412 13.2458L23.7269 1.16005C24.4163 0.471629 25.3508 0.0849609 26.3251 0.0849609C27.2994 0.0849609 28.2338 0.471629 28.9233 1.16005C29.2647 1.50115 29.5355 1.90618 29.7203 2.352C29.9051 2.79782 30.0002 3.27568 30.0002 3.75827C30.0002 4.24086 29.9051 4.71872 29.7203 5.16454C29.5355 5.61035 29.2647 6.01538 28.9233 6.35648L14.0519 21.2301C13.3181 21.9636 12.323 22.3757 11.2854 22.3757C10.2479 22.3757 9.25278 21.9636 8.51901 21.2301Z" fill="#B762F7" />
  </svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" className="flex-shrink-0">
    <path fillRule="evenodd" clipRule="evenodd" d="M16.1765 1.32102L10.755 6.73816L5.33361 1.31673C5.04798 1.01926 4.70585 0.781809 4.32726 0.61828C3.94868 0.454751 3.54126 0.36844 3.12888 0.364406C2.71651 0.360372 2.30748 0.438696 1.92576 0.594787C1.54405 0.750878 1.19734 0.981596 0.905944 1.27342C0.614551 1.56524 0.384342 1.91229 0.228811 2.29423C0.0732804 2.67617 -0.00444308 3.08532 0.000196081 3.49769C0.00483524 3.91005 0.0917436 4.31735 0.255828 4.69569C0.419912 5.07404 0.65787 5.41582 0.955754 5.70101L6.37504 11.1224L0.96004 16.5374C0.393913 17.1224 0.0803178 17.9063 0.0868639 18.7203C0.0934099 19.5343 0.419573 20.3132 0.995034 20.8889C1.57049 21.4646 2.34916 21.7912 3.16315 21.7981C3.97715 21.8051 4.76127 21.4919 5.34647 20.926L10.755 15.5003L16.1722 20.9196C16.458 21.2165 16.8002 21.4534 17.1787 21.6165C17.5572 21.7796 17.9644 21.8656 18.3765 21.8695C18.7886 21.8734 19.1974 21.7952 19.5789 21.6392C19.9604 21.4833 20.307 21.2529 20.5984 20.9615C20.8898 20.6701 21.1202 20.3235 21.2761 19.942C21.432 19.5605 21.5103 19.1517 21.5064 18.7396C21.5025 18.3275 21.4165 17.9203 21.2534 17.5418C21.0903 17.1633 20.8534 16.8211 20.5565 16.5353L15.1479 11.1246L20.5629 5.70959C21.129 5.12466 21.4426 4.3407 21.4361 3.5267C21.4295 2.7127 21.1034 1.93388 20.5279 1.35813C19.9524 0.782393 19.1738 0.45585 18.3598 0.448906C17.5458 0.441963 16.7617 0.755175 16.1765 1.32102Z" fill="#4F1092" />
  </svg>;
const WhiteCheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 30 23" fill="none" className="flex-shrink-0">
    <path d="M8.51901 21.2301L1.07687 13.7858C0.735478 13.4447 0.464656 13.0396 0.279881 12.5938C0.0951055 12.148 0 11.6701 0 11.1876C0 10.705 0.0951055 10.2271 0.279881 9.78129C0.464656 9.33547 0.735478 8.93044 1.07687 8.58934C1.76631 7.90091 2.70078 7.51425 3.67508 7.51425C4.64938 7.51425 5.58385 7.90091 6.27329 8.58934L10.934 13.2458C11.028 13.3392 11.1551 13.3916 11.2876 13.3916C11.4201 13.3916 11.5472 13.3392 11.6412 13.2458L23.7269 1.16005C24.4163 0.471629 25.3508 0.0849609 26.3251 0.0849609C27.2994 0.0849609 28.2338 0.471629 28.9233 1.16005C29.2647 1.50115 29.5355 1.90618 29.7203 2.352C29.9051 2.79782 30.0002 3.27568 30.0002 3.75827C30.0002 4.24086 29.9051 4.71872 29.7203 5.16454C29.5355 5.61035 29.2647 6.01538 28.9233 6.35648L14.0519 21.2301C13.3181 21.9636 12.323 22.3757 11.2854 22.3757C10.2479 22.3757 9.25278 21.9636 8.51901 21.2301Z" fill="white" />
  </svg>;
export const ComparisonSection: React.FC = () => {
  return <section className="self-center w-full max-w-[1280px] px-4 mt-[104px] max-md:mt-10">
      <div className="flex gap-8 max-md:flex-col max-md:items-stretch">
        {/* Otras Páginas card */}
        <div className="w-1/2 max-md:w-full max-md:ml-0">
          <div className="shadow-[3px_5px_20px_0px_rgba(0,0,0,0.50)] bg-white w-[603px] h-[758px] flex-shrink-0 flex flex-col pt-[60px] pb-[60px] rounded-[20px] max-md:mt-9 max-md:w-full">
            <div className="flex flex-col items-center text-center mb-8">
              <h2 className="text-[#181615] text-3xl scale-y-[2] leading-tight font-bold">
                OTRAS PÁGINAS
              </h2>
              <div className="w-full h-px bg-black mt-6" />
            </div>
            
            <div className="flex-1 flex flex-col px-10 max-md:px-6">
              <div className="space-y-6">
                {[{
                icon: "check",
                text: "Funcionan"
              }, {
                icon: "check",
                text: "Cuentan con todas las funciones estándar"
              }, {
                icon: "x",
                text: "Configuración larga"
              }, {
                icon: "x",
                text: "Pague más por más funciones"
              }, {
                icon: "x",
                text: "Crecimiento lento e ineficiente"
              }, {
                icon: "x",
                text: "Las prohibiciones son habituales"
              }, {
                icon: "x",
                text: "Muy fácil de detectar"
              }, {
                icon: "x",
                text: "Hay que pagar para recibir asistencia"
              }].map((item, index) => <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      {item.icon === "check" ? <CheckIcon /> : <XIcon />}
                    </div>
                    <div className="text-[#181615] text-[22px] font-normal leading-[1.3]">
                      {item.text}
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
        
        {/* Social AI card */}
        <div className="w-1/2 max-md:w-full max-md:ml-0">
          <div className="shadow-[3px_5px_20px_0px_rgba(0,0,0,0.50)] bg-[#B762F7] w-[603px] h-[866px] flex-shrink-0 flex flex-col pt-[50px] pb-[60px] rounded-[20px] max-md:mt-9 max-md:w-full py-[60px]">
            <div className="flex flex-col items-center text-center mb-8 py-0">
              <h2 className="text-white text-3xl leading-tight font-bold scale-y-[2]">
                SOCIAL AI
              </h2>
              <div className="w-full h-px bg-white mt-5" />
            </div>
            
            <div className="flex-1 flex flex-col px-10 max-md:px-6 py-0">
              <div className="space-y-6">
                {["Funciona de verdad", "Garantía de crecimiento en 7 días", "Crecimiento un 141% más rápido", "Segmentación por hashtags, intereses y ubicación", "Riesgo cero"].map((text, index) => <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <WhiteCheckIcon />
                    </div>
                    <div className="text-white text-[22px] font-normal leading-[1.3]">
                      {text}
                    </div>
                  </div>)}
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <CTAButton variant="primary" className="bg-[#4F1092]">
                comenzar
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ComparisonSection;