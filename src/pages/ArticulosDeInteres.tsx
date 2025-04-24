import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/landing/Header";
import InstagramSearchBar from "@/components/ui/InstagramSearchBar";
import Footer from "@/components/landing/Footer";
import SplitSection from "@/components/landing/SplitSection";
export default function ArticulosDeInteres() {
  return <div className="min-h-screen bg-gradient-to-b from-[#4F1092] to-[#B762F7]">
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
          {[1, 2, 3].map(item => <div key={item} className="bg-white rounded-lg overflow-hidden">
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
            </div>)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          

          
        </div>
      </main>

      <SplitSection />
      <Footer />
    </div>;
}