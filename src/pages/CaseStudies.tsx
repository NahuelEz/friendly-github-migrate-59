import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const CaseStudies = () => {
  const successCards = [{
    id: 1,
    color: "bg-purple-800 text-white",
    username: "nkchaudhary01",
    profession: "Wildlife Photographer",
    followers: "61K",
    followersGained: "39,389",
    avgLikes: "1,800+"
  }, {
    id: 2,
    color: "bg-orange-500 text-white",
    username: "wildexplorer",
    profession: "Travel Influencer",
    followers: "83K",
    followersGained: "52,745",
    avgLikes: "2,400+"
  }, {
    id: 3,
    color: "bg-purple-800 text-white",
    username: "fitnessguru",
    profession: "Fitness Coach",
    followers: "47K",
    followersGained: "31,256",
    avgLikes: "1,650+"
  }, {
    id: 4,
    color: "bg-purple-800 text-white",
    username: "foodielove",
    profession: "Food Blogger",
    followers: "72K",
    followersGained: "45,897",
    avgLikes: "2,100+"
  }, {
    id: 5,
    color: "bg-purple-800 text-white",
    username: "techreview",
    profession: "Tech Reviewer",
    followers: "55K",
    followersGained: "36,743",
    avgLikes: "1,950+"
  }];

  return <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section with gradient background */}
      <div className="relative w-full bg-gradient-to-r from-purple-700 via-orange-500 to-pink-500 py-20">
        <div className="absolute inset-0 z-0">
          <img src="/lovable-uploads/41b34e54-7328-4cf4-ba81-2a3f85b0e59d.png" alt="People taking selfie on smartphone" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl ml-auto text-white">
            <h1 className="text-5xl font-bold leading-tight mb-4 text-left md:text-6xl">
              HISTORIAS DE CLIENTES QUE DESTACAN SU CRECIMIENTO Y ÉXITO GRACIAS A SOCIAL AI
            </h1>
          </div>
        </div>
      </div>

      {/* New section to showcase the uploaded image */}
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">Nuestros Casos de Éxito</h2>
          <p className="text-gray-600 mb-6">
            Descubre cómo nuestros clientes han transformado su presencia en redes sociales con nuestra innovadora plataforma de IA.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="/lovable-uploads/60845a44-9cde-4308-a099-2b9ac4c70d0f.png" 
            alt="Social Media Expert" 
            className="max-w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
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
      <div className="py-16 px-4">
        <h2 className="text-5xl font-bold text-purple-900 mb-12">MAS DE X CASOS DE EXITOS</h2>
        
        {/* Updated card carousel */}
        <div className="relative">
          <Carousel className="w-full">
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white border-none hover:bg-orange-600 z-20 rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </CarouselPrevious>
            
            <CarouselContent className="pl-8 pr-8 md:pl-12 md:pr-12 py-0 px-[210px]">
              {successCards.map(card => <CarouselItem key={card.id} className="md:basis-1/4">
                  <div className={`${card.color} rounded-lg flex-shrink-0 shadow-md overflow-hidden`}>
                    <div className="flex flex-col items-center pt-6 pb-2">
                      <Avatar className="w-20 h-20 bg-white mb-2">
                        <AvatarImage src="/placeholder.svg" alt={card.username} />
                        <AvatarFallback>{card.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <h3 className="font-medium text-lg">{card.username}</h3>
                      <p className="text-white/80 text-sm">{card.profession}</p>
                      <p className="text-orange-300 text-sm mt-1">{card.followers} Followers</p>
                    </div>

                    <div className="grid grid-cols-2 border-t border-white/20">
                      <div className="flex flex-col items-center py-4 px-2 border-r border-white/20">
                        <span className="text-2xl font-bold">{card.followersGained}</span>
                        <span className="text-white/80 text-xs text-center">Followers Gained</span>
                      </div>
                      <div className="flex flex-col items-center py-4 px-2">
                        <span className="text-2xl font-bold">
                          {card.avgLikes.replace('+', '')}<span className="text-lg">+</span>
                        </span>
                        <span className="text-white/80 text-xs text-center">Avg. Likes/Post</span>
                      </div>
                    </div>

                    {[{
                  label: "Followers Gained",
                  value: card.followersGained
                }, {
                  label: "Engagement Rate",
                  value: "5.7%"
                }, {
                  label: "Account Growth",
                  value: "+214%"
                }].map((row, index) => <div key={index} className="grid grid-cols-2 border-t border-white/20">
                        <div className="py-3 px-4 text-white/80 text-sm">{row.label}</div>
                        <div className="py-3 px-4 text-right font-medium">{row.value}</div>
                      </div>)}
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white border-none hover:bg-orange-600 z-20 rounded-full" />
          </Carousel>
        </div>

        {/* Additional Detailed Stats (Below the Carousel) */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          

          

          
        </div>
      </div>

      {/* Esta Hecho Para Vos section */}
      <div className="relative w-full bg-gradient-to-r from-[#4f1092] via-[#d8b8ff] to-[#ff6200] py-12">
        {/* Heading */}
        <div className="container mx-auto px-4">
          <h1 className="text-[#ffffff] text-5xl md:text-6xl lg:text-7xl font-bold mb-16 tracking-tight">
            ESTA HECHO PARA VOS
          </h1>

          {/* Carousel section */}
          <div className="relative h-[450px] max-w-4xl mx-auto">
            {/* Navigation arrows */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-[#ff6200] rounded-full p-3 text-white">
              <ChevronLeft size={24} />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-[#ff6200] rounded-full p-3 text-white">
              <ChevronRight size={24} />
            </button>

            {/* Cards - staggered layout */}
            <div className="relative h-full flex justify-center">
              {/* Card 1 */}
              <div className="absolute left-[calc(50%-320px)] top-0 bg-[#d9d9d9] rounded-lg w-[220px] h-[380px] flex flex-col z-10">
                <div className="p-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img src="/placeholder.svg" alt="Profile" width={24} height={24} className="object-cover" />
                    </div>
                    <div className="text-xs">
                      <div className="font-medium">nicknamehey01</div>
                      <div className="text-[#3c3e40]">Mumbai, India</div>
                    </div>
                  </div>
                  <button>
                    <MoreHorizontal size={16} />
                  </button>
                </div>

                {/* Content area */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#b762f7] to-transparent opacity-80"></div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="absolute left-[calc(50%-180px)] top-0 bg-[#d9d9d9] rounded-lg w-[220px] h-[380px] flex flex-col z-20">
                <div className="p-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img src="/placeholder.svg" alt="Profile" width={24} height={24} className="object-cover" />
                    </div>
                    <div className="text-xs">
                      <div className="font-medium">nicknamehey01</div>
                      <div className="text-[#3c3e40]">Mumbai, India</div>
                    </div>
                  </div>
                  <button>
                    <MoreHorizontal size={16} />
                  </button>
                </div>

                {/* Content area */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#b762f7] to-transparent opacity-80"></div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="absolute left-[calc(50%-40px)] top-0 bg-[#d9d9d9] rounded-lg w-[220px] h-[380px] flex flex-col z-30">
                <div className="p-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img src="/placeholder.svg" alt="Profile" width={24} height={24} className="object-cover" />
                    </div>
                    <div className="text-xs">
                      <div className="font-medium">nicknamehey01</div>
                      <div className="text-[#3c3e40]">Mumbai, India</div>
                    </div>
                  </div>
                  <button>
                    <MoreHorizontal size={16} />
                  </button>
                </div>

                {/* Content area */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#b762f7] to-transparent opacity-80"></div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="absolute left-[calc(50%+100px)] top-0 bg-[#d9d9d9] rounded-lg w-[220px] h-[380px] flex flex-col z-40">
                <div className="p-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img src="/placeholder.svg" alt="Profile" width={24} height={24} className="object-cover" />
                    </div>
                    <div className="text-xs">
                      <div className="font-medium">nicknamehey01</div>
                      <div className="text-[#3c3e40]">Mumbai, India</div>
                    </div>
                  </div>
                  <button>
                    <MoreHorizontal size={16} />
                  </button>
                </div>

                {/* Content area */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#b762f7] to-transparent opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials section with orange decoration */}
      <div className="relative bg-white py-16 overflow-hidden">
        {/* Orange hourglass decoration */}
        <div className="absolute right-0 top-0 w-[400px] h-[800px]">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#ff6200] translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#ff6200] translate-x-1/4 translate-y-1/4"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-12 gap-6">
            {/* First testimonial - small */}
            <div className="col-span-12 md:col-span-4 lg:col-span-3">
              <div className="bg-white rounded-lg p-5 shadow-md">
                {/* Star rating */}
                <div className="flex mb-3">
                  {[1, 2, 3, 4].map(star => <span key={star} className="text-[#ff6200]">
                      ★
                    </span>)}
                  <span className="text-[#d9d9d9]">★</span>
                </div>

                {/* Profile */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold">Regina Miles</h3>
                    <p className="text-sm text-[#76777e]">Designer</p>
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="/placeholder.svg" alt="Regina Miles" width={48} height={48} className="object-cover" />
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="text-xs text-[#3c3e40]">
                  Lorem ipsum dolor sit amet consectetur. Urna dui vulputate sed id. Gravida amet viverra euismod neque
                  elit dictum. Diam nunc eu purus mus nulla dignissim facilisi nec vestibulum. Mauris ornare tempus
                  pellentesque pretium urna magna.
                </p>
              </div>
            </div>

            {/* Second testimonial - medium */}
            <div className="col-span-12 md:col-span-8 lg:col-span-5">
              <div className="bg-white rounded-lg p-5 shadow-md">
                {/* Star rating */}
                <div className="flex mb-3">
                  {[1, 2, 3, 4].map(star => <span key={star} className="text-[#ff6200]">
                      ★
                    </span>)}
                  <span className="text-[#d9d9d9]">★</span>
                </div>

                {/* Profile */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold">Regina Miles</h3>
                    <p className="text-sm text-[#76777e]">Designer</p>
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="/placeholder.svg" alt="Regina Miles" width={48} height={48} className="object-cover" />
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="text-xs text-[#3c3e40]">
                  Lorem ipsum dolor sit amet consectetur. Urna dui vulputate sed id. Gravida amet viverra euismod neque
                  elit dictum. Diam nunc eu purus mus nulla dignissim facilisi nec vestibulum. Mauris ornare tempus
                  pellentesque pretium urna magna. Tellus gravida vitae auctor malesuada vitae sagittis sed ac.
                  Phasellus pellentesque est velit suspendisse pulvinar pharetra. Mauris ullamcorper euismod tellus
                  neque neque. Ante ac tincidunt egestas sem. Adipiscing orci mauris amet eget mi condimentum.
                </p>
              </div>
            </div>

            {/* Third testimonial - small */}
            <div className="col-span-12 md:col-span-4 lg:col-span-3">
              <div className="bg-white rounded-lg p-5 shadow-md">
                {/* Star rating */}
                <div className="flex mb-3">
                  {[1, 2, 3, 4].map(star => <span key={star} className="text-[#ff6200]">
                      ★
                    </span>)}
                  <span className="text-[#d9d9d9]">★</span>
                </div>

                {/* Profile */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold">Regina Miles</h3>
                    <p className="text-sm text-[#76777e]">Designer</p>
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="/placeholder.svg" alt="Regina Miles" width={48} height={48} className="object-cover" />
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="text-xs text-[#3c3e40]">
                  Lorem ipsum dolor sit amet consectetur. Urna dui vulputate sed id. Gravida amet viverra euismod neque
                  elit dictum. Diam nunc eu purus mus nulla dignissim facilisi nec vestibulum. Mauris ornare tempus
                  pellentesque pretium urna magna.
                </p>
              </div>
            </div>

            {/* Fourth testimonial - large */}
            <div className="col-span-12 md:col-span-8 lg:col-span-4 md:col-start-3 lg:col-start-5">
              <div className="bg-white rounded-lg p-5 shadow-md">
                {/* Star rating */}
                <div className="flex mb-3">
                  {[1, 2, 3, 4].map(star => <span key={star} className="text-[#ff6200]">
                      ★
                    </span>)}
                  <span className="text-[#d9d9d9]">★</span>
                </div>

                {/* Profile */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold">Regina Miles</h3>
                    <p className="text-sm text-[#76777e]">Designer</p>
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="/placeholder.svg" alt="Regina Miles" width={48} height={48} className="object-cover" />
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="text-xs text-[#3c3e40]">
                  Lorem ipsum dolor sit amet consectetur. Urna dui vulputate sed id. Gravida amet viverra euismod neque
                  elit dictum. Diam nunc eu purus mus nulla dignissim facilisi nec vestibulum. Mauris ornare tempus
                  pellentesque pretium urna magna. Tellus gravida vitae auctor malesuada vitae sagittis sed ac.
                  Phasellus pellentesque est velit suspendisse pulvinar pharetra. Mauris ullamcorper euismod tellus
                  neque neque. Ante ac tincidunt egestas sem. Adipiscing orci mauris amet eget mi condimentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comienza Hoy Section - Updated to match design */}
      <div className="min-h-screen bg-[#b762f7] relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 flex flex-col md:flex-row items-center">
          {/* Left Section - Text content */}
          <div className="w-full md:w-1/2 text-white mb-16 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-6">COMIENZA HOY</h1>
            <p className="text-lg md:text-xl font-light leading-relaxed mb-10 max-w-md">
              Registrate y mira cómo crecen tus seguidores y tu comunidad en una semana
            </p>
            <Link to="/pricing" className="inline-block bg-[#4f1092] hover:bg-[#4f1092]/90 text-white font-medium px-8 py-3 rounded-full transition-colors">
              comenzar
            </Link>
          </div>
          
          {/* Right Section - Phone mockups with giraffe posts */}
          <div className="w-full md:w-1/2 relative h-[400px] flex justify-center">
            {/* Phone 1 - Back left */}
            <div className="absolute left-4 md:left-20 top-10 w-48 md:w-56 bg-black rounded-2xl overflow-hidden shadow-xl rotate-[-10deg] z-10">
              <div className="px-2 pt-2 pb-1 flex items-center gap-1">
                <div className="w-5 h-5 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
                  <img src="/placeholder.svg" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <p className="text-white text-xs">hawkins360</p>
              </div>
              <div className="h-52 md:h-64 relative">
                <img src="/lovable-uploads/2cbdc6ca-b8b0-432b-834e-8a3a3222abf9.png" alt="Giraffe" className="w-full h-full object-cover" />
              </div>
              <div className="p-1 bg-black">
                <p className="text-white text-[10px]">
                  Liked by <span className="font-medium">Nanny</span> and <span className="font-medium">739 others</span>
                </p>
              </div>
            </div>
            
            {/* Phone 2 - Center */}
            <div className="absolute left-1/2 -translate-x-1/2 w-48 md:w-56 bg-black rounded-2xl overflow-hidden shadow-xl z-20">
              <div className="px-2 pt-2 pb-1 flex items-center gap-1">
                <div className="w-5 h-5 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
                  <img src="/placeholder.svg" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <p className="text-white text-xs">hawkins360</p>
              </div>
              <div className="h-52 md:h-64 relative">
                <img src="/lovable-uploads/2cbdc6ca-b8b0-432b-834e-8a3a3222abf9.png" alt="Giraffe" className="w-full h-full object-cover" />
              </div>
              <div className="p-1 bg-black">
                <p className="text-white text-[10px]">
                  Liked by <span className="font-medium">Nanny</span> and <span className="font-medium">739 others</span>
                </p>
              </div>
            </div>
            
            {/* Phone 3 - Back right */}
            <div className="absolute right-4 md:right-20 top-10 w-48 md:w-56 bg-black rounded-2xl overflow-hidden shadow-xl rotate-[10deg] z-10">
              <div className="px-2 pt-2 pb-1 flex items-center gap-1">
                <div className="w-5 h-5 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
                  <img src="/placeholder.svg" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <p className="text-white text-xs">hawkins360</p>
              </div>
              <div className="h-52 md:h-64 relative">
                <img src="/lovable-uploads/2cbdc6ca-b8b0-432b-834e-8a3a3222abf9.png" alt="Giraffe" className="w-full h-full object-cover" />
              </div>
              <div className="p-1 bg-black">
                <p className="text-white text-[10px]">
                  Liked by <span className="font-medium">Nanny</span> and <span className="font-medium">739 others</span>
                </p>
              </div>
            </div>
            
            {/* Checkmark Badge */}
            <div className="absolute right-16 bottom-10 w-14 h-14 bg-[#4f1092]/80 backdrop-blur-sm rounded-xl flex items-center justify-center z-30 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
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
