import React from 'react';
import { Logo } from '../ui/logo';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Logo and Description */}
        <div className="mb-6 md:mb-0">
          <Logo className="text-4xl" />
          <p className="text-sm mt-2 text-gray-400">
            Tu plataforma de confianza para crecer en Instagram.
            <br />
            Únete a +24,000 influencers que confían en nosotros.
          </p>
        </div>

        {/* Middle Section: Newsletter Subscription */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-bold mb-4">Subscríbete a nuestro Newsletter</h4>
          <div className="flex">
            <input 
              type="email" 
              placeholder="correo electrónico" 
              className="text-[#7E69AB] placeholder:text-[#7E69AB] bg-transparent outline-none border-none w-full" 
            />
            <Button variant="secondary">Subscribirse</Button>
          </div>
        </div>

        {/* Right Section: Legal Mentions */}
        <div>
          <p className="text-xs text-[#7E69AB]">
            © 2024 Social AI. Todos los derechos reservados.
            <br />
            <a href="#" className="hover:underline">Términos de Servicio</a> | <a href="#" className="hover:underline">Política de Privacidad</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
