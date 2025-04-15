import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SocialCard from '@/components/social/SocialCard';
import StartToday from '@/components/social/StartToday';
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
            <h1 className="text-5xl font-bold leading-tight mb-4 text-left md:text-6xl"> {/* Added text-right class */}
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
                        <AvatarImage alt={card.username} src="/lovable-uploads/5ffcefde-547a-4ded-8190-6bf2ed91ca0c.png" />
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

      {/* Comienza Hoy Section */}
      <div className="bg-[#b762f7] flex flex-row justify-center w-full">
        <div className="w-full max-w-[1920px] min-h-[852px] relative py-16">
          <div className="relative w-full max-w-[1605px] mx-auto px-4">
            {/* Left Section */}
            <div className="flex flex-col max-w-[440px] mt-16">
              <h1 className="font-bold text-white text-[56.9px] tracking-[0] leading-normal whitespace-nowrap uppercase">
                ESTA HECHO PARA VOS
              </h1>

              <Separator className="bg-white/30 h-px my-8" />

              <p className="font-normal text-white text-[28px] md:text-[35px] tracking-[-0.53px] leading-[42.0px] mt-4">
                Registrate y mira cómo crecen tus seguidores y tu comunidad en una semana
              </p>

              <Button className="w-[197px] h-[58px] mt-16 bg-[#4f1092] hover:bg-[#4f1092]/90 rounded-[117.72px]">
                <span className="font-bold text-white text-[25.9px] leading-[25.9px]">comenzar</span>
              </Button>
            </div>

            {/* Right Section - Social Cards */}
            <div className="absolute right-[100px] md:right-[200px] lg:right-[400px] top-0 flex">
              <div className="relative">
                {/* First Card - Left */}
                <div className="absolute top-11 left-0">
                  <SocialCard size="normal" />
                </div>

                {/* Middle Card - Center */}
                <div className="absolute left-[180px] md:left-[250px] top-[79px]">
                  <SocialCard size="large" />
                </div>

                {/* Last Card - Right */}
                <div className="absolute left-[400px] md:left-[565px] top-11">
                  <SocialCard size="normal" />

                  {/* Checkmark Icon */}
                  <div className="absolute w-[180px] h-[180px] md:w-[234px] md:h-[236px] top-[425px] left-[50px]">
                    <div className="relative h-full">
                      <div className="absolute w-[120px] h-[120px] md:w-[148px] md:h-[148px] top-0 left-0 bg-[#4f1092] rounded-[26.76px]" />
                      <div className="absolute w-[160px] h-[160px] md:w-[197px] md:h-[197px] top-[30px] md:top-[39px] left-[30px] md:left-[37px]">
                        <div className="relative w-full h-full -top-0.5 -left-0.5 bg-[#ffffff33] rounded-[26.76px] backdrop-blur-[16.73px] flex items-center justify-center">
                          <svg width="102" height="87" viewBox="0 0 102 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 43.5L36.5 75L97 5" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
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
      

      {/* Call to Action */}
      

      {/* Footer */}
      <Footer />

      {/* Footer Line */}
      <div className="w-full h-2 bg-gradient-to-r from-purple-900 via-orange-500 to-purple-900"></div>
    </div>;
};
export default CaseStudies;
