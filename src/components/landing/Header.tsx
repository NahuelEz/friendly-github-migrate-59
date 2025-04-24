
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
    <header className="bg-[rgba(79,16,146,1)] w-full py-4 px-8 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="30" viewBox="0 0 230 40" fill="none">
            <path d="M4.84326 22.551V22.6201H21.7163V16.6907H4.84326V22.551Z" fill="white"/>
            <path d="M37.5124 33.3958H31.6587V38.726H37.5124V33.3958Z" fill="white"/>
            <path d="M16.1586 1.11475C14.9898 2.28351 13.7058 3.5708 12.3066 4.97003C10.9074 6.36925 9.49828 7.78165 8.0793 9.20063C6.66032 10.6229 5.25122 12.0221 3.85199 13.4016C2.45276 14.7811 1.16877 16.0552 0 17.2273V22.62H5.32035C6.48912 21.4513 7.77312 20.1673 9.17235 18.7648C10.5716 17.3655 11.9807 15.9531 13.3997 14.5342C14.8186 13.1119 16.2277 11.7028 17.627 10.3036C19.0262 8.90432 20.3102 7.61704 21.479 6.44827H37.5717V1.11475H16.1586Z" fill="white"/>
            <path d="M189.281 25.7841V25.8533H195.138V19.9238H189.281V25.7841Z" fill="white"/>
            <path d="M210.786 17.2931C209.617 16.1244 208.33 14.8404 206.931 13.4411C205.532 12.0419 204.119 10.6328 202.7 9.21382C201.278 7.79484 199.879 6.38574 198.499 4.98651C197.12 3.58728 195.846 2.30329 194.674 1.13452H189.281V6.45488C190.45 7.62364 191.734 8.90764 193.136 10.3069C194.535 11.7061 195.948 13.1152 197.367 14.5342C198.789 15.9532 200.198 17.3623 201.597 18.7615C202.996 20.1607 204.284 21.4447 205.453 22.6135V38.7062H210.783V17.2931H210.786Z" fill="white"/>
            <path d="M185.514 1.13794H179.568V38.7097H185.514V1.13794Z" fill="white"/>
            <path d="M47.2646 10.0897L44.1665 13.2536V35.5688L47.2646 38.7327H69.6752L72.7733 35.5688V13.2503L69.6752 10.0864H47.2646V10.0897ZM66.5179 32.5234H50.4252V16.2924H66.5179V32.5234Z" fill="white"/>
            <path d="M80.8196 10.0896L77.7183 13.2535V35.5687L80.8196 38.7326H103.227L106.328 35.5687V30.0179H100.07V32.5233H83.9769V16.2923H100.07V18.7977H106.328V13.2469L103.227 10.083H80.8196V10.0896Z" fill="white"/>
            <path d="M117.2 10.0896H110.941V38.7326H117.2V10.0896Z" fill="white"/>
            <path d="M117.2 0.541992H110.941V6.8665H117.2V0.541992Z" fill="white"/>
            <path d="M124.88 10.0897L121.782 13.2536V18.8044H128.041V16.299H142.613L121.782 29.6032V35.5688L124.88 38.7327H139.541L144.13 34.0939V38.7327H150.389V13.2503L147.291 10.0864H124.88V10.0897ZM128.041 32.5234V32.2864L144.134 21.9749V32.5234H128.041Z" fill="white"/>
            <path d="M161.56 0.541992H155.301V38.7294H161.56V0.541992Z" fill="white"/>
            <path d="M221.325 0.541992H215.066V6.8665H221.325V0.541992Z" fill="white"/>
            <path d="M221.325 13.158H215.066V38.7292H221.325V13.158Z" fill="white"/>
            <path d="M229.187 39.1344C228.647 39.6777 227.978 39.9476 227.185 39.9476C226.392 39.9476 225.723 39.6777 225.183 39.1344C224.643 38.5912 224.37 37.913 224.37 37.0965C224.37 36.28 224.64 35.5985 225.183 35.0586C225.723 34.5153 226.392 34.2454 227.185 34.2454C227.978 34.2454 228.647 34.5153 229.187 35.0586C229.727 35.6018 230 36.28 230 37.0965C230 37.913 229.73 38.5945 229.187 39.1344ZM227.185 39.513C227.853 39.513 228.403 39.2859 228.834 38.8282C229.266 38.3706 229.483 37.7945 229.483 37.0965C229.483 36.3985 229.266 35.8322 228.834 35.3746C228.403 34.9203 227.853 34.6898 227.185 34.6898C226.517 34.6898 225.977 34.917 225.542 35.3746C225.108 35.8322 224.89 36.4051 224.89 37.0965C224.89 37.7879 225.108 38.364 225.542 38.8249C225.977 39.2859 226.527 39.513 227.185 39.513ZM225.983 38.5813V35.5623H227.445C227.751 35.5623 228.008 35.6413 228.216 35.7993C228.423 35.9574 228.528 36.1714 228.528 36.4479C228.528 36.8101 228.354 37.0471 228.011 37.1656V37.1887C228.248 37.2578 228.397 37.4422 228.459 37.7319C228.476 37.8274 228.486 37.9426 228.495 38.0809C228.505 38.2192 228.515 38.3212 228.532 38.3937C228.548 38.4628 228.571 38.5089 228.601 38.5221V38.5813H227.801C227.768 38.5649 227.725 38.3344 227.672 37.8866C227.649 37.62 227.491 37.485 227.202 37.485H226.8V38.5813H225.987H225.983ZM226.797 36.2109V36.8957H227.304C227.587 36.8957 227.728 36.7804 227.728 36.5533C227.728 36.3261 227.587 36.2109 227.304 36.2109H226.797Z" fill="white"/>
            <path d="M21.4165 38.7294C22.5853 37.5606 23.8693 36.2734 25.2685 34.8741C26.6677 33.4749 28.0769 32.0625 29.4958 30.6435C30.9148 29.2213 32.3239 27.822 33.7231 26.4426C35.1224 25.0631 36.4064 23.789 37.5751 22.6169V17.2241H32.2548C31.086 18.3929 29.802 19.6769 28.4028 21.0794C27.0036 22.4786 25.5945 23.891 24.1755 25.31C22.7565 26.7323 21.3474 28.1414 19.9482 29.5406C18.5489 30.9398 17.2649 32.2271 16.0962 33.3959H0.00341797V38.7261H21.4198L21.4165 38.7294Z" fill="white"/>
          </svg>
        </Link>
      </div>

      {/* Search Bar - Only show on desktop */}
      {!isMobile && (
        <div className="flex-1 max-w-xl mx-8">
          <InstagramSearchBar onSearch={handleSearch} />
        </div>
      )}

      {/* Hamburger Menu Button - Only show on mobile */}
      {isMobile && (
        <button 
          className="text-white p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Navigation and Login Button - Only show on desktop or when menu is open on mobile */}
      <div className={`${isMobile ? 'absolute top-full left-0 right-0 bg-[rgba(79,16,146,0.95)] p-6 transition-all duration-300 shadow-lg z-50' : 'flex items-center space-x-6'} ${isMobile && !isMenuOpen ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100 pointer-events-auto translate-y-0'}`}>
        <nav className={isMobile ? 'mb-4' : ''}>
          <ul className={`${isMobile ? 'flex flex-col space-y-4' : 'flex items-center space-x-4'}`}>
            <li>
              <Link
                to="/pricing"
                className="text-white text-sm font-medium hover:text-[#B762F7] transition-colors block py-1"
              >
                Tarifas
              </Link>
            </li>
            <li>
              <Link
                to="/case-studies"
                className="text-white text-sm font-medium hover:text-[#B762F7] transition-colors block py-1"
              >
                Estudios de caso
              </Link>
            </li>
            <li>
              <a
                href="#comentarios"
                className="text-white text-sm font-medium hover:text-[#B762F7] transition-colors block py-1"
              >
                Comentarios
              </a>
            </li>
            <li>
              <a
                href="#recursos"
                className="text-white text-sm font-medium hover:text-[#B762F7] transition-colors block py-1"
              >
                Recursos
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Login button */}
        <Link 
          to="/login" 
          className={`bg-[#B762F7] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#9f4ad8] transition-colors ${isMobile ? 'block text-center' : ''}`}
        >
          Inicio sesión
        </Link>
        
        {/* Show search bar in mobile menu when open */}
        {isMobile && isMenuOpen && (
          <div className="mt-4">
            <InstagramSearchBar onSearch={handleSearch} />
          </div>
        )}
      </div>
    </header>
  );
}
