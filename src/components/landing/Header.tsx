
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
    <header className="py-4 px-6 flex justify-between items-center bg-transparent z-50 relative">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          Social AI
        </Link>
      </div>
      
      {isMobile ? (
        <>
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {isMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 p-4 flex flex-col gap-4">
              <Link to="/" className="text-white hover:text-gray-300">Home</Link>
              <Link to="/pricing" className="text-white hover:text-gray-300">Pricing</Link>
              <Link to="/articulos-de-interes" className="text-white hover:text-gray-300">Artículos</Link>
              <Link to="/consultar-mi-crecimiento" className="text-white hover:text-gray-300">Mi Crecimiento</Link>
              <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/pricing" className="text-white hover:text-gray-300">Pricing</Link>
            <Link to="/articulos-de-interes" className="text-white hover:text-gray-300">Artículos</Link>
            <Link to="/consultar-mi-crecimiento" className="text-white hover:text-gray-300">Mi Crecimiento</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <InstagramSearchBar onSearch={handleSearch} />
            <Link to="/login" className="bg-white text-purple-800 px-4 py-2 rounded-full hover:bg-gray-100">
              Login
            </Link>
          </div>
        </>
      )}
    </header>
  );
}
