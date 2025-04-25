
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
    <header className="w-full">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold">
            SocialAI
          </Link>
          {isMobile ? (
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            <div className="flex items-center space-x-8">
              <Link to="/pricing" className="text-white hover:text-white/80">
                Pricing
              </Link>
              <InstagramSearchBar onSearch={handleSearch} />
            </div>
          )}
        </div>
        {isMobile && isMenuOpen && (
          <div className="mt-4 space-y-4">
            <Link to="/pricing" className="block text-white hover:text-white/80">
              Pricing
            </Link>
            <InstagramSearchBar onSearch={handleSearch} />
          </div>
        )}
      </nav>
    </header>
  );
}
