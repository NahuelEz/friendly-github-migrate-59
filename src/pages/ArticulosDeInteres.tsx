
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/landing/Header";
import InstagramSearchBar from "@/components/ui/InstagramSearchBar";
import Footer from "@/components/landing/Footer";

export default function ArticulosDeInteres() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4F1092] to-[#B762F7]">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-12">ARTICULOS DE INTERES</h1>

        <div className="flex flex-wrap gap-4 mb-12">
          <Button variant="outline" className="rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20">
            instagram
          </Button>
          <Button variant="outline" className="rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20">
            crecimiento en instagram
          </Button>
          <Button variant="outline" className="rounded-full bg-[#FF6200] text-white border-[#FF6200] hover:bg-[#FF6200]/80">
            reseñas
          </Button>
          <Button variant="outline" className="rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20">
            herramientas útiles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden">
              <div className="bg-gray-300 h-40"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Titular lorem ipsum dolor sit amet consectetur.</h3>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet consectetur. Tempus hendrerit netus quam orci velit. Lacus commodo
                  ultricies ipsum in sed scelerisque. Id tempus purus nibh cursus etiam
                </p>
                <Link to="#" className="text-[#4F1092] font-medium flex items-center">
                  seguir leyendo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="relative bg-gradient-to-r from-black to-gray-800 rounded-lg overflow-hidden p-6">
            <div className="absolute top-10 left-10">
              <h2 className="text-white text-2xl font-bold">¡NUEVO!</h2>
              <div className="text-purple-300 text-8xl font-bold opacity-70">RRSS</div>
            </div>

            <div className="relative mt-32 bg-black/50 backdrop-blur-sm rounded-lg p-6">
              <div className="text-white/60 text-xs uppercase mb-1">ESTRATEGIAS DE CRECIMIENTO</div>
              <h3 className="text-white text-xl font-bold mb-4">Tendencias en crecimiento orgánico</h3>
              <Button
                variant="outline"
                className="rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                ver más
              </Button>
            </div>
          </div>

          <div className="relative bg-gradient-to-r from-[#B762F7] to-[#4F1092] rounded-lg overflow-hidden p-6">
            <div className="absolute top-10 left-10">
              <h2 className="text-white text-2xl font-bold">MAS LEIDO</h2>
              <div className="text-purple-900 text-8xl font-bold opacity-70">LIKES</div>
            </div>

            <div className="relative mt-32 bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-white/60 text-xs uppercase mb-1">ESTRATEGIAS DE CRECIMIENTO</div>
              <h3 className="text-white text-xl font-bold mb-4">¿Qué es lo que los atrae a tu cuenta?</h3>
              <Button
                variant="outline"
                className="rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                ver más
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
