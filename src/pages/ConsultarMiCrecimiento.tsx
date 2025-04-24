import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Link } from 'react-router-dom';
import { ArrowUp } from "lucide-react";
import { LineChart } from "@/components/line-chart";
import { ProfileCard } from "@/components/profile-card";
import { StatsCard } from "@/components/stats-card";
const ConsultarMiCrecimiento = () => {
  return <>
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="min-h-[80vh] relative flex items-center" style={{
      backgroundImage: "url('/uploads/c01c6e3d-0dfc-4182-af71-88efc4879bab.png')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight uppercase">
              Proyectemos
              <br />
              tu crecimiento
            </h1>

            <div className="relative mt-8 md:mt-0 md:absolute md:right-40 md:top-60">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl w-56 h-56 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-2 border-white flex items-center justify-center">
                  <ArrowUp className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-8 bg-[D9D9D9] bg-[#d1d1d1]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center gap-4">
              <img alt="Profile" width={80} height={80} className="rounded-full object-cover w-20 h-20" src="/lovable-uploads/10c9cb7c-f217-47ed-a9b4-fd116a7171e0.png" />
              <div>
                <h3 className="text-[#4f1092] text-xl font-bold">cameron_will</h3>
                <p className="text-gray-600">New Delhi, India</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-8 mx-8 border-x border-gray-300 px-8">
              <div className="text-center">
                <p className="text-[#4f1092] text-3xl font-bold">98</p>
                <p className="text-gray-600 text-sm">Posts</p>
              </div>
              <div className="text-center">
                <p className="text-[#4f1092] text-3xl font-bold">3.5k</p>
                <p className="text-gray-600 text-sm">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-[#4f1092] text-3xl font-bold">900</p>
                <p className="text-gray-600 text-sm">Followings</p>
              </div>
            </div>

            <button className="bg-[#ff6200] text-white px-8 py-3 rounded-full font-medium">comenzar</button>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="bg-[#fdfdfd] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Column 1: Title */}
            <div>
              <div className="mb-6">
                <h3 className="text-[#4f1092] text-xl uppercase font-medium">Crecimiento con</h3>
                <h2 className="text-[#4f1092] text-6xl font-bold uppercase">Pack 1</h2>
              </div>
            </div>

            {/* Column 2: Lorem Ipsum content */}
            <div className="space-y-6">
              <div>
                <p className="text-[#4f1092] font-medium">Lorem ipsum</p>
                <p className="text-gray-600">Dolor sit amet consectetur. Eget faucibus fringilla sed bibendum.</p>
              </div>
              <div>
                <p className="text-[#4f1092] font-medium">Lorem ipsum</p>
                <p className="text-gray-600">Dolor sit amet consectetur. Eget faucibus fringilla sed bibendum.</p>
              </div>
              <div>
                <p className="text-[#4f1092] font-medium">Lorem ipsum</p>
                <p className="text-gray-600">Dolor sit amet consectetur. Eget faucibus fringilla sed bibendum.</p>
              </div>
            </div>

            {/* Column 3: Chart */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#b762f7] to-[#4f1092] rounded-3xl p-6 relative">
                <h3 className="text-white text-xl mb-4">Our Growth</h3>

                  <div className="h-64 relative">
                    {/* Simple chart representation */}
                    <div className="absolute inset-0 flex items-end">
                      <div className="w-full h-full flex items-end">
                        <div className="flex-1 flex items-end justify-center">
                          <div className="w-1 bg-white h-[10%]"></div>
                        </div>
                        <div className="flex-1 flex items-end justify-center">
                          <div className="w-1 bg-white h-[30%]"></div>
                        </div>
                        <div className="flex-1 flex items-end justify-center">
                          <div className="w-1 bg-white h-[20%]"></div>
                        </div>
                        <div className="flex-1 flex items-end justify-center">
                          <div className="w-1 bg-white h-[35%]"></div>
                        </div>
                        <div className="flex-1 flex items-end justify-center">
                          <div className="w-1 bg-white h-[40%]"></div>
                        </div>
                      </div>

                      {/* Line chart overlay */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,90 L20,70 L40,80 L60,65 L80,60" fill="none" stroke="white" strokeWidth="1" />
                      </svg>
                    </div>

                    <div className="absolute bottom-0 w-full flex justify-between text-white text-xs">
                      <span>Item 1</span>
                      <span>Item 2</span>
                      <span>Item 3</span>
                      <span>Item 4</span>
                      <span>Item 5</span>
                    </div>

                    <div className="absolute left-0 h-full flex flex-col justify-between text-white text-xs">
                      <span>40</span>
                      <span>30</span>
                      <span>20</span>
                      <span>10</span>
                      <span>0</span>
                    </div>
                  </div>

                  {/* Live reactions card */}
                  <div className="absolute -bottom-10 right-10 bg-black text-white rounded-lg p-4 shadow-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs">Live Reactions</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold">7,265</span>
                      <span className="text-green-400 text-xs">+11.01%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* New Advanced Growth Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative">
            <div className="bg-[#b762f7] rounded-3xl p-6 shadow-lg">
              <h2 className="text-white text-2xl font-medium mb-4">Our Growth</h2>
              <LineChart />
            </div>

            <div className="absolute left-32 bottom-16 z-10">
              <StatsCard title="Comments liked" value="7,265" percentage="+11.01%" />
            </div>

            <div className="absolute right-8 bottom-[-100px] z-20">
              <ProfileCard username="nkchaudhary01" profession="Wildlife Photographer" followers="61K Followers" followersGained="39,389" avgLikes="1,800+" />
            </div>
          </div>

          <div className="pt-16 lg:pt-24">
            <div className="space-y-6">
              <div>
                <h2 className="text-[#4f1092] text-2xl md:text-4xl font-bold uppercase">Crecimiento con</h2>
                <h1 className="text-[#4f1092] text-6xl md:text-8xl font-bold uppercase">Pack 2</h1>
              </div>

              <div className="space-y-8 mt-8">
                {[1, 2, 3].map(item => <div key={item} className="space-y-1">
                    <h3 className="text-[#4f1092] text-xl font-medium">Lorem ipsum</h3>
                    <p className="text-[#4f1092]">Dolor sit amet consectetur. Eget faucibus fringilla sed bibendum.</p>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>;
};
export default ConsultarMiCrecimiento;
