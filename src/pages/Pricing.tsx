import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Header } from "../components/landing/Header";
import { Footer } from "../components/landing/Footer";
const Pricing = () => {
  return <div className="flex flex-col min-h-screen">
      {/* Navigation - using existing Header component */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4f1092] to-[#b762f7] py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-0 w-[600px] h-[600px] rounded-full bg-[#b762f7]/30 blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[#b762f7]/30 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="bg-[#b762f7]/30 backdrop-blur-sm p-12 rounded-lg text-white text-center max-w-md">
            <h1 className="text-6xl font-bold mb-2">50% OFF</h1>
            <div className="border-t border-b border-white py-2 mb-2">
              <p className="text-xl">EN PLANES ANUALES</p>
            </div>
            <p className="text-xl">POR TIEMPO LIMITADO</p>
          </div>

          <button className="mt-12 bg-[#fe6202] hover:bg-[#ff6200] text-white font-medium py-3 px-8 rounded-full">
            empieza a crecer hoy
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Pack 1 */}
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold text-center">PACK 1</h2>
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
                <button className="bg-[#b762f7] text-white px-8 py-2 rounded-full">comenzar</button>
              </div>
            </div>

            {/* Pack 2 */}
            <div className="bg-[#b762f7] rounded-lg overflow-hidden shadow-sm text-white">
              <div className="p-6 border-b border-white/20">
                <h2 className="text-2xl font-bold text-center">PACK 2</h2>
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
                <button className="bg-[#4f1092] text-white px-8 py-2 rounded-full">comenzar</button>
              </div>
            </div>

            {/* Pack 3 */}
            <div className="bg-[#4f1092] rounded-lg overflow-hidden shadow-sm text-white">
              <div className="p-6 border-b border-white/20">
                <h2 className="text-2xl font-bold text-center">PACK 3</h2>
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
                <button className="bg-[#fe6202] text-white px-8 py-2 rounded-full">comenzar</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "Esta Pensado Para Vos" Section */}
      <section className="bg-gradient-to-r from-[#4f1092] to-[#fe6202] py-24 relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              ESTA PENSADO
              <br />
              PARA VOS
            </h2>
          </div>
          <div className="md:w-1/2">
            <img src="/placeholder.svg" alt="Person holding a phone" className="rounded-lg w-full h-auto max-w-[500px]" />
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-[#d9d9d9]">
        
      </section>

      {/* Footer - using existing Footer component */}
      <Footer />
    </div>;
};
export default Pricing;