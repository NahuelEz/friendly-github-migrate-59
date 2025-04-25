
import React, { useState } from "react";
import InstagramSearchBar from "@/components/ui/InstagramSearchBar";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const handleSearch = (username: string) => {
    console.log("Searching for:", username);
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="bg-transparent py-4 z-50 relative">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link to="/" className="text-white text-xl font-bold">
            Social AI
          </Link>
        </div>
        
        {isMobile ? (
          <>
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {isMenuOpen && (
              <div className="fixed inset-0 bg-purple-900/95 z-50 pt-20">
                <div className="flex flex-col items-center space-y-6">
                  <Link to="/" className="text-white text-lg" onClick={toggleMenu}>
                    Home
                  </Link>
                  <Link to="/pricing" className="text-white text-lg" onClick={toggleMenu}>
                    Pricing
                  </Link>
                  <Link to="/case-studies" className="text-white text-lg" onClick={toggleMenu}>
                    Case Studies
                  </Link>
                  <Link to="/consultar-mi-crecimiento" className="text-white text-lg" onClick={toggleMenu}>
                    Consultar Mi Crecimiento
                  </Link>
                  <Link to="/articulos-de-interes" className="text-white text-lg" onClick={toggleMenu}>
                    Articulos De Interes
                  </Link>
                  <InstagramSearchBar onSearch={handleSearch} />
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-purple-200">
              Home
            </Link>
            <Link to="/pricing" className="text-white hover:text-purple-200">
              Pricing
            </Link>
            <Link to="/case-studies" className="text-white hover:text-purple-200">
              Case Studies
            </Link>
            <Link to="/consultar-mi-crecimiento" className="text-white hover:text-purple-200">
              Consultar Mi Crecimiento
            </Link>
            <Link to="/articulos-de-interes" className="text-white hover:text-purple-200">
              Articulos De Interes
            </Link>
            <InstagramSearchBar onSearch={handleSearch} />
            <Link to="/login" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
