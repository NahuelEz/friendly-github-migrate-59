import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Header from '@/components/landing/Header';
import ClientsSection from '@/components/landing/ClientsSection';
import Footer from '@/components/landing/Footer';
const Pricing = () => {
  return <div className="flex flex-col min-h-screen bg-white">
      {/* Use the same Header from the home page */}
      <Header />

      {/* Hero Section with 50% OFF Promo */}
      <div className="relative w-full bg-gradient-to-br from-[#1c034e] to-[#7b2897] overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[#3b0a6f] rounded-full transform translate-x-[-30%] translate-y-[30%] opacity-50"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#7b2897] rounded-full transform translate-x-[30%] translate-y-[-30%] opacity-70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          {/* Promo Box */}
          <div className="max-w-lg mx-auto bg-[#aa6bd7]/30 backdrop-blur-sm rounded-lg border border-[#ffffff20] p-8 mb-10">
            <div className="text-white text-6xl font-bold mb-1">50% OFF</div>
            <div className="text-white text-xl uppercase mb-1">EN PLANES ANUALES</div>
            <div className="w-full h-px bg-white/40 my-2"></div>
            <div className="text-white text-xl uppercase">POR TIEMPO LIMITADO</div>
          </div>
          
          {/* CTA Button */}
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
            empieza a crecer hoy
          </button>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pack 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-white p-6 text-center border-b">
              <h2 className="text-2xl font-bold text-gray-800">PACK 1</h2>
            </div>
            <div className="p-6 space-y-4 bg-white">
              <div className="flex items-start space-x-3">
                <Check className="min-w-5 h-5 text-purple-500" />
                <p className="text-sm text-gray-700">Estrategia de IA hasta llegar a 1.000-2000 followers</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="min-w-5 h-5 text-purple-500" />
                <p className="text-sm text-gray-700">Resultados garantizados o te devolvemos el dinero</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="min-w-5 h-5 text-purple-500" />
                <p className="text-sm text-gray-700">Soporte 24/7</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="min-w-5 h-5 text-purple-500" />
                <p className="text-sm text-gray-700">Comunidad Orgánica Garantizada</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="min-w-5 h-5 text-purple-500" />
                <p className="text-sm text-gray-700">Engagement</p>
              </div>
            </div>
            <div className="p-6 flex justify-center bg-white">
              <button className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                comenzar
              </button>
            </div>
          </div>

          {/* Pack 2 */}
          <div className="border border-purple-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-400 p-6 text-center border-b">
              <h2 className="text-2xl font-bold text-white">PACK 2</h2>
            </div>
            <div className="p-6 space-y-4 bg-purple-400">
              <div className="flex items-start space-x-3">
                <Check className="min-w-5 h-5 text-white" />
                <p className="text-sm text-white">Estrategia de IA hasta llegar a 2000-5000 followers</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="min-w-5 h-5 text-white" />
                <p className="text-sm text-white">Resultados garantizados o te devolvemos el dinero</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="min-w-5 h-5 text-white" />
                <p className="text-sm text-white">Soporte 24/7</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="min-w-5 h-5 text-white" />
                <p className="text-sm text-white">Comunidad Orgánica Garantizada</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="min-w-5 h-5 text-white" />
                <p className="text-sm text-white">Engagement</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="min-w-5 h-5 text-white" />
                <p className="text-sm text-white">Menciones desde nuestro Staff de influencer</p>
              </div>
            </div>
            <div className="p-6 flex justify-center bg-purple-400">
              <button className="bg-white hover:bg-gray-100 text-purple-600 px-6 py-2 rounded-full text-sm font-medium transition-colors">
                comenzar
              </button>
            </div>
          </div>

          {/* Pack 3 */}
          <div className="border border-purple-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-900 p-6 text-center border-b">
              <h2 className="text-2xl font-bold text-white">PACK 3</h2>
            </div>
            <div className="p-6 space-y-4 bg-purple-900">
              <div className="flex items-start space-x-3">
                <Check className="min-w-5 h-5 text-white" />
                <p className="text-sm text-white">Estrategia de IA hasta llegar a 5000-8000 followers</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="min-w-5 h-5 text-white" />
                <p className="text-sm text-white">Resultados garantizados o te devolvemos el dinero</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="min-w-5 h-5 text-white" />
                <p className="text-sm text-white">Soporte 24/7</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="min-w-5 h-5 text-white" />
                <p className="text-sm text-white">Comunidad Orgánica Garantizada</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="min-w-5 h-5 text-white" />
                <p className="text-sm text-white">Engagement</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="min-w-5 h-5 text-white" />
                <p className="text-sm text-white">Menciones desde nuestro Staff de influencer</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="min-w-5 h-5 text-white" />
                <p className="text-sm text-white">Menciones a través de nuestro staff de influencer</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="min-w-5 h-5 text-white" />
                <p className="text-sm text-white">Comentarios Verificados, Likes y Visualizaciones en los Reels</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="min-w-5 h-5 text-white" />
                <p className="text-sm text-white">5 Ediciones+animacion+subtitulos Anuales</p>
              </div>
            </div>
            <div className="p-6 flex justify-center bg-purple-900">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                comenzar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* "ESTA PENSADO PARA VOS" Section */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/lovable-uploads/d6ad7714-19c0-444c-8297-fef26645b1f6.png" alt="Esta pensado para vos" className="w-full h-full object-cover" />
        </div>
        
      </div>

      {/* Clients Section */}
      <ClientsSection />

      {/* Footer */}
      <Footer />

      {/* Footer Line */}
      <div className="w-full h-2 bg-gradient-to-r from-purple-900 via-orange-500 to-purple-900"></div>
    </div>;
};
export default Pricing;