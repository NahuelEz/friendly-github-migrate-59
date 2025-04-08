
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import ProfileCard from '@/components/landing/ProfileCard';

const CaseStudies = () => {
  return <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section with gradient background */}
      <div className="relative w-full bg-gradient-to-r from-purple-700 via-orange-500 to-pink-500 py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/41b34e54-7328-4cf4-ba81-2a3f85b0e59d.png" 
            alt="People taking selfie on smartphone" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl ml-auto text-white"> {/* Added ml-auto to push content to the right */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-right"> {/* Added text-right class */}
              HISTORIAS DE CLIENTES QUE DESTACAN SU CRECIMIENTO Y ÉXITO GRACIAS A SOCIAL AI
            </h1>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h2 className="text-purple-800 text-4xl font-bold">24.000 +</h2>
              <div className="w-full h-px bg-gray-200 my-3"></div>
              <p className="text-gray-600 text-sm">Clientes que confían en nosotros</p>
            </div>
            
            {/* Stat Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h2 className="text-purple-800 text-4xl font-bold">75.908,00 +</h2>
              <div className="w-full h-px bg-gray-200 my-3"></div>
              <p className="text-gray-600 text-sm">Nuevos seguidores</p>
            </div>
            
            {/* Stat Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h2 className="text-purple-800 text-4xl font-bold">2 años</h2>
              <div className="w-full h-px bg-gray-200 my-3"></div>
              <p className="text-gray-600 text-sm">De experiencia en redes sociales</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Cases Section */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-5xl font-bold text-purple-900 mb-12">MAS DE X CASOS DE EXITOS</h2>
        
        {/* Carousel with Profile Cards */}
        <div className="relative">
          <Carousel className="w-full">
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white border-none hover:bg-orange-600 z-20" />
            <CarouselContent>
              {/* Profile Card 1 - Purple */}
              <CarouselItem className="md:basis-1/4">
                <ProfileCard 
                  username="nkchaudhary01" 
                  profession="Wildlife Photographer" 
                  followers="511k" 
                  followersGained="39,389" 
                  avgLikes="1,800+" 
                  profileImage=""
                />
              </CarouselItem>
              
              {/* Profile Card 2 - Orange */}
              <CarouselItem className="md:basis-1/4">
                <ProfileCard 
                  username="nkchaudhary01" 
                  profession="Wildlife Photographer" 
                  followers="511k" 
                  followersGained="39,389" 
                  avgLikes="1,800+" 
                />
              </CarouselItem>
              
              {/* Profile Card 3 - Purple */}
              <CarouselItem className="md:basis-1/4">
                <ProfileCard 
                  username="nkchaudhary01" 
                  profession="Wildlife Photographer" 
                  followers="511k" 
                  followersGained="39,389" 
                  avgLikes="1,800+" 
                />
              </CarouselItem>
              
              {/* Profile Card 4 - Purple */}
              <CarouselItem className="md:basis-1/4">
                <ProfileCard 
                  username="nkchaudhary01" 
                  profession="Wildlife Photographer" 
                  followers="511k" 
                  followersGained="39,389" 
                  avgLikes="1,800+" 
                />
              </CarouselItem>
              
              {/* Additional cards for scrolling */}
              <CarouselItem className="md:basis-1/4">
                <ProfileCard 
                  username="nkchaudhary01" 
                  profession="Wildlife Photographer" 
                  followers="511k" 
                  followersGained="39,389" 
                  avgLikes="1,800+" 
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white border-none hover:bg-orange-600 z-20" />
          </Carousel>
        </div>

        {/* Additional Detailed Stats (Below the Carousel) */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="shadow-lg rounded-lg p-8 bg-white">
            <h3 className="text-xl font-bold text-purple-800 mb-4">Crecimiento Orgánico</h3>
            <p className="text-gray-700 mb-6">
              Nuestros clientes experimentan un crecimiento orgánico natural gracias a nuestra estrategia de IA personalizada.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Followers Gained</span>
                <span className="font-semibold">39,389</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Engagement Rate</span>
                <span className="font-semibold">5.7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Account Growth</span>
                <span className="font-semibold">+214%</span>
              </div>
            </div>
          </div>

          <div className="shadow-lg rounded-lg p-8 bg-white">
            <h3 className="text-xl font-bold text-purple-800 mb-4">Engagement Aumentado</h3>
            <p className="text-gray-700 mb-6">
              Aumentamos significativamente la interacción con tu audiencia a través de estrategias de contenido optimizadas.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Avg. Comments</span>
                <span className="font-semibold">215 per post</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avg. Likes</span>
                <span className="font-semibold">1,800+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Story Views</span>
                <span className="font-semibold">7,265 avg.</span>
              </div>
            </div>
          </div>

          <div className="shadow-lg rounded-lg p-8 bg-white">
            <h3 className="text-xl font-bold text-purple-800 mb-4">Resultados Garantizados</h3>
            <p className="text-gray-700 mb-6">
              Ofrecemos resultados garantizados o te devolvemos el dinero - nuestra promesa de confianza total.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Success Rate</span>
                <span className="font-semibold">98.7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Client Retention</span>
                <span className="font-semibold">94.3%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">ROI Average</span>
                <span className="font-semibold">3.5x</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-800 to-purple-900 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para ser nuestro próximo caso de éxito?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Empieza a crecer hoy mismo con nuestra estrategia de IA personalizada para tu cuenta de Instagram
          </p>
          <Link to="/pricing" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300">
            Ver Planes
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Footer Line */}
      <div className="w-full h-2 bg-gradient-to-r from-purple-900 via-orange-500 to-purple-900"></div>
    </div>;
};
export default CaseStudies;
