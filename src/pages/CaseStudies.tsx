
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
                  {[1, 2, 3, 4].map((star) => (
                    <span key={star} className="text-[#ff6200]">
                      ★
                    </span>
                  ))}
                  <span className="text-[#d9d9d9]">★</span>
                </div>

                {/* Profile */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold">Regina Miles</h3>
                    <p className="text-sm text-[#76777e]">Designer</p>
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      alt="Regina Miles"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
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
                  {[1, 2, 3, 4].map((star) => (
                    <span key={star} className="text-[#ff6200]">
                      ★
                    </span>
                  ))}
                  <span className="text-[#d9d9d9]">★</span>
                </div>

                {/* Profile */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold">Regina Miles</h3>
                    <p className="text-sm text-[#76777e]">Designer</p>
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      alt="Regina Miles"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
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
                  {[1, 2, 3, 4].map((star) => (
                    <span key={star} className="text-[#ff6200]">
                      ★
                    </span>
                  ))}
                  <span className="text-[#d9d9d9]">★</span>
                </div>

                {/* Profile */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold">Regina Miles</h3>
                    <p className="text-sm text-[#76777e]">Designer</p>
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      alt="Regina Miles"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
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
                  {[1, 2, 3, 4].map((star) => (
                    <span key={star} className="text-[#ff6200]">
                      ★
                    </span>
                  ))}
                  <span className="text-[#d9d9d9]">★</span>
                </div>

                {/* Profile */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold">Regina Miles</h3>
                    <p className="text-sm text-[#76777e]">Designer</p>
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      alt="Regina Miles"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
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

      {/* Comienza Hoy Section - Added as last section before footer */}
      <div className="min-h-screen bg-[#b762f7] flex flex-col md:flex-row items-center justify-between p-6 md:p-12 overflow-hidden">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-white z-10 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-6">COMIENZA HOY</h1>
          <p className="text-lg md:text-xl font-light leading-relaxed mb-10 max-w-md">
            Registrate y mira cómo crecen tus seguidores y tu comunidad en una semana
          </p>
          <Link
            to="/pricing"
            className="inline-block bg-[#4f1092] hover:bg-[#4f1092]/90 text-white font-medium px-8 py-3 rounded-full transition-colors"
          >
            comenzar
          </Link>
        </div>

        {/* Right Section - Social Media Posts */}
        <div className="relative w-full md:w-1/2 h-[400px] md:h-[500px]">
          {/* Left Post */}
          <div className="absolute left-0 md:left-10 top-20 w-56 rounded-xl overflow-hidden bg-[#141414] shadow-xl z-10">
            <div className="p-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full overflow-hidden relative">
                <img
                  src="/placeholder.svg"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white text-xs font-medium">hawkins360</p>
                <p className="text-gray-400 text-[10px]">New Delhi, India</p>
              </div>
              <div className="ml-auto text-gray-400">
                <span className="text-xs">•••</span>
              </div>
            </div>
            <div className="relative h-48">
              <div className="absolute inset-0">
                <img src="/placeholder.svg" alt="Post content" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="p-2">
              <div className="flex gap-2 mb-1">
                <button className="text-[#f0304e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
                <button className="text-[#76777e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </button>
                <button className="text-[#76777e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
              <p className="text-white text-xs">
                Liked by <span className="font-medium">Nanny</span> and <span className="font-medium">739 others</span>
              </p>
              <p className="text-[#76777e] text-[10px] mt-1">Wed, 26 January 2021</p>
            </div>
          </div>

          {/* Middle Post */}
          <div className="absolute left-20 md:left-32 top-60 w-64 rounded-xl overflow-hidden bg-[#141414] shadow-xl z-20">
            <div className="p-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full overflow-hidden relative">
                <img
                  src="/placeholder.svg"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white text-xs font-medium">hawkins360</p>
                <p className="text-gray-400 text-[10px]">New Delhi, India</p>
              </div>
              <div className="ml-auto text-gray-400">
                <span className="text-xs">•••</span>
              </div>
            </div>
            <div className="relative h-64">
              <div className="absolute inset-0">
                <img src="/placeholder.svg" alt="Post content" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="p-2">
              <div className="flex gap-2 mb-1">
                <button className="text-[#f0304e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
                <button className="text-[#76777e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </button>
                <button className="text-[#76777e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
              <p className="text-white text-xs">
                Liked by <span className="font-medium">Nanny</span> and <span className="font-medium">739 others</span>
              </p>
              <p className="text-[#76777e] text-[10px] mt-1">Wed, 26 January 2021</p>
            </div>
          </div>

          {/* Right Post */}
          <div className="absolute right-0 md:right-0 top-10 w-56 rounded-xl overflow-hidden bg-[#141414] shadow-xl z-10">
            <div className="p-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full overflow-hidden relative">
                <img
                  src="/placeholder.svg"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white text-xs font-medium">hawkins360</p>
                <p className="text-gray-400 text-[10px]">New Delhi, India</p>
              </div>
              <div className="ml-auto text-gray-400">
                <span className="text-xs">•••</span>
              </div>
            </div>
            <div className="relative h-56">
              <div className="absolute inset-0">
                <img src="/placeholder.svg" alt="Post content" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="p-2">
              <div className="flex gap-2 mb-1">
                <button className="text-[#f0304e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
                <button className="text-[#76777e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </button>
                <button className="text-[#76777e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
              <p className="text-white text-xs">
                Liked by <span className="font-medium">Nanny</span> and <span className="font-medium">739 others</span>
              </p>
              <p className="text-[#76777e] text-[10px] mt-1">Wed, 26 January 2021</p>
            </div>
          </div>

          {/* Notification Badge */}
          <div className="absolute right-16 bottom-20 w-14 h-14 bg-[#4f1092]/80 backdrop-blur-sm rounded-xl flex items-center justify-center z-30 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
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
