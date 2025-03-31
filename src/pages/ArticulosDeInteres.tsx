
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import InstagramSearchBar from "@/components/ui/InstagramSearchBar";

export default function ArticulosDeInteres() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4F1092] to-[#B762F7]">
      <header className="container mx-auto py-6 px-4 flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <Link to="/">
            <div className="flex items-center">
              <span className="text-white">Social</span>
              <span className="text-white ml-1">AI</span>
            </div>
          </Link>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="bg-[#B762F7]/50 rounded-full px-4 py-2 flex items-center">
            <input
              type="text"
              placeholder="Introducir tu usuario de Instagram"
              className="bg-transparent text-white placeholder-white/70 outline-none w-40 md:w-auto"
            />
            <div className="h-5 mx-2 border-r border-white/30"></div>
            <Button variant="link" className="text-white whitespace-nowrap">
              Consultar mi crecimiento
            </Button>
          </div>

          <nav className="hidden md:flex items-center space-x-4 text-white">
            <Link to="/pricing" className="hover:text-white/80">
              Tarifas
            </Link>
            <Link to="/case-studies" className="hover:text-white/80">
              Estudios de caso
            </Link>
            <Link to="#" className="hover:text-white/80">
              Comentarios
            </Link>
            <Link to="#" className="hover:text-white/80">
              Recursos
            </Link>
          </nav>
        </div>
      </header>

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

      <footer className="bg-[#4F1092] mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-white text-2xl font-bold mb-6">
                <Link to="/">
                  <div className="flex items-center">
                    <span className="text-white">Social</span>
                    <span className="text-white ml-1">AI</span>
                  </div>
                </Link>
              </div>

              <div className="text-white/80">
                <p className="mb-1">IG. @socialai</p>
                <p className="mb-1">M. info@socialai.com</p>
                <p>T. +5491112341234</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-center gap-4 text-white/80">
              <Link to="/pricing" className="hover:text-white">
                Tarifas
              </Link>
              <Link to="/case-studies" className="hover:text-white">
                Clientes
              </Link>
              <Link to="/articulos-de-interes" className="hover:text-white">
                Contenido
              </Link>
              <Link to="#" className="hover:text-white">
                Contacto
              </Link>
              <Link to="#" className="hover:text-white">
                Menciones legales
              </Link>
            </div>

            <div>
              <p className="text-white mb-4">Suscríbete a nuestro boletín de noticias.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="bg-white/20 rounded-l-full px-4 py-2 text-white placeholder-white/60 outline-none flex-grow"
                />
                <Button className="rounded-r-full bg-white/20 hover:bg-white/30 text-white border-l border-white/20">
                  Registrarse
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
