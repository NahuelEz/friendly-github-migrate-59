
import React from 'react';

const ImageFooterSection = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#1A1F2C] to-[#221F26]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Nuestros estudios de casos en imágenes
          </h2>
          
          <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-xl">
            <div className="relative pb-[56.25%] h-0">
              {/* Aquí puedes colocar tu imagen */}
              <img 
                src="/lovable-uploads/10c9cb7c-f217-47ed-a9b4-fd116a7171e0.png" 
                alt="Estudio de casos" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Overlay con texto */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Resultados reales
                  </h3>
                  <p className="text-lg text-white max-w-2xl">
                    Miles de influencers han aumentado sus seguidores de manera orgánica con nuestras estrategias
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/2cbdc6ca-b8b0-432b-834e-8a3a3222abf9.png" 
                alt="Estudio de caso 1" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/10c9cb7c-f217-47ed-a9b4-fd116a7171e0.png" 
                alt="Estudio de caso 2" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/2cbdc6ca-b8b0-432b-834e-8a3a3222abf9.png" 
                alt="Estudio de caso 3" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageFooterSection;
