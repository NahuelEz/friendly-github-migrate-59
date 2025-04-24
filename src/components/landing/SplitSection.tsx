
import React from "react";
import { Link } from "react-router-dom";

export const SplitSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section - RRSS */}
      <div className="w-full md:w-1/2 bg-gradient-to-b from-[#181615] to-[#321c33] relative overflow-hidden p-8 md:p-12">
        <div className="relative z-10">
          <h2 className="text-white text-2xl font-bold mb-4">¡NUEVO!</h2>
          <h1 className="text-[#b762f7] text-7xl md:text-8xl lg:text-9xl font-extrabold mb-8">RRSS</h1>

          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-6 max-w-md">
            <p className="text-white/80 uppercase text-xs font-medium tracking-wider mb-2">
              ESTADÍSTICAS DE CRECIMIENTO
            </p>
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-6">Tendencias en crecimiento orgánico</h3>
            <Link
              to="#"
              className="inline-block bg-white text-[#321c33] px-6 py-2 rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              ver más
            </Link>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#fe6202]/40 to-transparent"></div>
      </div>

      {/* Right Section - LIKES */}
      <div className="w-full md:w-1/2 bg-[#b762f7] relative overflow-hidden p-8 md:p-12">
        <div className="relative z-10">
          <h2 className="text-white text-2xl font-bold mb-4">MAS LEIDO</h2>
          <h1 className="text-[#4f1092] text-7xl md:text-8xl lg:text-9xl font-extrabold mb-8">LIKES</h1>

          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 max-w-md">
            <p className="text-white/80 uppercase text-xs font-medium tracking-wider mb-2">
              ESTADÍSTICAS DE CRECIMIENTO
            </p>
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-6">¿Qué es lo que los atrae a tu cuenta?</h3>
            <Link
              to="#"
              className="inline-block bg-white text-[#4f1092] px-6 py-2 rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              ver más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitSection;
