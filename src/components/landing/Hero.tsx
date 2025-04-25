
import React from "react";
import CTAButton from "@/components/ui/CTAButton";

export const Hero: React.FC = () => {
  return (
    <div className="hero-section container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Crece tus seguidores en Instagram</h1>
        <p className="text-xl mb-8">Simplifica tu estrategia de crecimiento con nuestra plataforma</p>
        <CTAButton>Comenzar Ahora</CTAButton>
      </div>
    </div>
  );
};

export default Hero;
