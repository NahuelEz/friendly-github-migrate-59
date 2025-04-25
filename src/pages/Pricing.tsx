
import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Header } from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const Pricing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/lovable-uploads/e2fb0665-1dcc-41d0-8506-fc55c3cd7e8d.png" 
            alt="Purple gradient background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="bg-[#b762f7]/30 backdrop-blur-sm p-12 rounded-lg text-white text-center max-w-md">
            <h1 className="text-6xl font-bold mb-2 scale-y-[2] pb-2">50% OFF</h1>
            <div className="border-t border-b border-white py-2 mb-2">
              <p className="text-xl scale-y-[2] py-2">EN PLANES ANUALES</p>
            </div>
            <p className="text-xl scale-y-[2] py-2">POR TIEMPO LIMITADO</p>
          </div>

          <button className="mt-12 bg-[#fe6202] hover:bg-[#ff6200] text-white font-medium py-3 px-8 rounded-full">
            empezá a crecer hoy
          </button>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Pack 1 */}
            <div className="border rounded-lg overflow-hidden shadow-xl shadow-black/40 transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:shadow-black/20 group">
              <div className="p-6 border-b group-hover:bg-[#b762f7]/5">
                <h2 className="text-2xl font-bold text-center group-hover:text-[#b762f7]">PACK 1</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-2">
                  <Check className="text-[#b762f7] mt-1 flex-shrink-0" size={18} />
                  <p>Estrategia de IA hasta llegar a 1000-2000 followers</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-[#b762f7] mt-1 flex-shrink-0" size={18} />
                  <p>Resultados garantizados o te devolvemos el dinero</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-[#b762f7] mt-1 flex-shrink-0" size={18} />
                  <p>Soporte 24/7</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-[#b762f7] mt-1 flex-shrink-0" size={18} />
                  <p>Comunidad Orgánica Garantizada</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-[#b762f7] mt-1 flex-shrink-0" size={18} />
                  <p>Engagement</p>
                </div>
              </div>
              <div className="p-6 flex justify-center">
                <button className="bg-[#b762f7] text-white px-8 py-2 rounded-full transition-all duration-300 hover:bg-[#9f4ad8] hover:scale-105">comenzar</button>
              </div>
            </div>

            {/* Pack 2 */}
            <div className="bg-[#b762f7] rounded-lg overflow-hidden shadow-xl shadow-black/40 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/30 group">
              <div className="p-6 border-b border-white/20 group-hover:bg-[#4f1092]/10">
                <h2 className="text-2xl font-bold text-center group-hover:text-white/90">PACK 2</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-2">
                  <Check className="text-white mt-1 flex-shrink-0" size={18} />
                  <p>Estrategia de IA hasta llegar a 2000-3000 followers</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-white mt-1 flex-shrink-0" size={18} />
                  <p>Resultados garantizados o te devolvemos el dinero</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-white mt-1 flex-shrink-0" size={18} />
                  <p>Soporte 24/7</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-white mt-1 flex-shrink-0" size={18} />
                  <p>Comunidad Orgánica Garantizada</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-white mt-1 flex-shrink-0" size={18} />
                  <p>Engagement</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-white mt-1 flex-shrink-0" size={18} />
                  <p>Menciones desde nuestro Staff de influencer</p>
                </div>
              </div>
              <div className="p-6 flex justify-center">
                <button className="bg-[#4f1092] text-white px-8 py-2 rounded-full transition-all duration-300 hover:bg-[#3D0C70] hover:scale-105">comenzar</button>
              </div>
            </div>

            {/* Pack 3 */}
            <div className="bg-[#4f1092] rounded-lg overflow-hidden shadow-xl shadow-black/40 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/40 group">
              <div className="p-6 border-b border-white/20 group-hover:bg-[#fe6202]/10">
                <h2 className="text-2xl font-bold text-center group-hover:text-white/90">PACK 3</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-2">
                  <Check className="text-white mt-1 flex-shrink-0" size={18} />
                  <p>Estrategia de IA hasta llegar a 4000-5000 followers</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-white mt-1 flex-shrink-0" size={18} />
                  <p>Resultados garantizados o te devolvemos el dinero</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-white mt-1 flex-shrink-0" size={18} />
                  <p>Soporte 24/7</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-white mt-1 flex-shrink-0" size={18} />
                  <p>Comunidad Orgánica Garantizada</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-white mt-1 flex-shrink-0" size={18} />
                  <p>Engagement</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-white mt-1 flex-shrink-0" size={18} />
                  <p>Menciones desde nuestro Staff de influencer</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-white mt-1 flex-shrink-0" size={18} />
                  <p>Menciones a través de nuestro staff de influencer</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-white mt-1 flex-shrink-0" size={18} />
                  <p>Comentarios Verificados , Likes y Visualizaciones en los Reels</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-white mt-1 flex-shrink-0" size={18} />
                  <p>5 Ediciones+animacion+subtitulos Anuales</p>
                </div>
              </div>
              <div className="p-6 flex justify-center">
                <button className="bg-[#fe6202] text-white px-8 py-2 rounded-full transition-all duration-300 hover:bg-[#ff6200] hover:scale-105">comenzar</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "Esta Pensado Para Vos" Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/lovable-uploads/9c6dab0a-2fb3-4e27-9f31-b23a80c5032a.png" 
            alt="Person using smartphone" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              ESTA PENSADO
              <br />
              PARA VOS
            </h2>
          </div>
          <div className="md:w-1/2">
            <img
              src="/placeholder.svg"
              alt="Person holding a phone"
              className="rounded-lg w-full h-auto max-w-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-[#d9d9d9]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="text-xl font-bold text-[#181615]">
                LOGOCLIENT
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
