import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Link } from 'react-router-dom';
import { ArrowUp } from "lucide-react";
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
      <section className="bg-[#fdfdfd] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/uploads/444ad407-0b2e-40b7-8274-d0fb9db9bb5a.png" alt="Profile" width={80} height={80} className="rounded-full object-cover w-20 h-20" />
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
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
              <div className="mb-6">
                <h3 className="text-[#4f1092] text-xl uppercase font-medium">Crecimiento con</h3>
                <h2 className="text-[#4f1092] text-6xl font-bold uppercase">Pack 1</h2>
              </div>

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
            </div>

            <div className="w-full md:w-1/2 relative">
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
      </section>
      
      <div className="container mx-auto max-w-7xl py-8 px-4">
        <h1 className="text-3xl font-bold text-[#4f1092] mb-8 text-center">Consulta tu Crecimiento</h1>
        <section className="w-full max-w-6xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-[#4f1092] text-5xl font-bold leading-tight">
                CRECIMIENTO CON
                <br />
                PACK 1
              </h1>

              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-[#4f1092] font-medium">Seguidores Reales</h3>
                  <p className="text-gray-600 text-sm">
                    Conseguirás seguidores reales y orgánicos en tu cuenta de Instagram.
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-[#4f1092] font-medium">Crecimiento Constante</h3>
                  <p className="text-gray-600 text-sm">
                    Tu cuenta crecerá de manera constante y natural, sin picos sospechosos.
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-[#4f1092] font-medium">Engagement Auténtico</h3>
                  <p className="text-gray-600 text-sm">
                    Aumentarás el engagement con usuarios interesados en tu contenido.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#b762f7] rounded-3xl p-6 pt-10 pb-16 relative h-[280px]">
                <h3 className="text-white text-xl font-medium mb-4 text-center">Nuestro Crecimiento</h3>

                <svg className="w-full h-[180px]" viewBox="0 0 400 180" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="400" y2="0" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="0" y1="36" x2="400" y2="36" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="0" y1="72" x2="400" y2="72" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="0" y1="108" x2="400" y2="108" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="0" y1="144" x2="400" y2="144" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="0" y1="180" x2="400" y2="180" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

                  <path d="M 20,160 L 80,140 L 140,80 L 200,100 L 260,40 L 320,20 L 380,10" stroke="white" strokeWidth="2" fill="none" />

                  <circle cx="20" cy="160" r="3" fill="white" />
                  <circle cx="80" cy="140" r="3" fill="white" />
                  <circle cx="140" cy="80" r="3" fill="white" />
                  <circle cx="200" cy="100" r="3" fill="white" />
                  <circle cx="260" cy="40" r="3" fill="white" />
                  <circle cx="320" cy="20" r="3" fill="white" />
                  <circle cx="380" cy="10" r="3" fill="white" />
                </svg>

                <div className="text-white text-xs absolute bottom-4 left-6">Pack 1</div>
              </div>

              <div className="absolute right-8 bottom-[-40px] bg-[#4f1092] rounded-xl overflow-hidden shadow-lg w-[180px] z-20">
                <div className="p-3 flex flex-col items-center">
                  <Avatar className="w-14 h-14 border-2 border-white mb-1">
                    <AvatarImage src="/uploads/444ad407-0b2e-40b7-8274-d0fb9db9bb5a.png" alt="Profile" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <h3 className="text-white text-sm font-medium">socialai_user</h3>
                  <p className="text-gray-300 text-xs">Lifestyle Influencer</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-[#b762f7] font-medium text-xs">15.2k</span>
                    <span className="text-gray-300 text-xs">Followers</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 border-t border-purple-light/30">
                  <div className="p-2 text-center border-r border-purple-light/30">
                    <p className="text-white text-base font-bold">12.450</p>
                    <p className="text-gray-300 text-[10px]">Followers Gained</p>
                  </div>
                  <div className="p-2 text-center">
                    <p className="text-white text-base font-bold">
                      850<span className="text-xs">+</span>
                    </p>
                    <p className="text-gray-300 text-[10px]">Avg. Likes/Post</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 1: Growth Pack 2 */}
        <section className="w-full max-w-6xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Chart */}
            <div className="relative">
              {/* Purple background with chart */}
              <div className="bg-[#b762f7] rounded-3xl p-6 pt-10 pb-16 relative h-[280px]">
                <h3 className="text-white text-xl font-medium mb-4 text-center">Our Growth</h3>

                {/* Chart SVG */}
                <svg className="w-full h-[180px]" viewBox="0 0 400 180" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <line x1="0" y1="0" x2="400" y2="0" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="0" y1="36" x2="400" y2="36" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="0" y1="72" x2="400" y2="72" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="0" y1="108" x2="400" y2="108" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="0" y1="144" x2="400" y2="144" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="0" y1="180" x2="400" y2="180" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

                  {/* Chart line */}
                  <path d="M 20,160 L 80,140 L 140,80 L 200,100 L 260,40 L 320,20 L 380,10" stroke="white" strokeWidth="2" fill="none" />

                  {/* Data points */}
                  <circle cx="20" cy="160" r="3" fill="white" />
                  <circle cx="80" cy="140" r="3" fill="white" />
                  <circle cx="140" cy="80" r="3" fill="white" />
                  <circle cx="200" cy="100" r="3" fill="white" />
                  <circle cx="260" cy="40" r="3" fill="white" />
                  <circle cx="320" cy="20" r="3" fill="white" />
                  <circle cx="380" cy="10" r="3" fill="white" />
                </svg>

                <div className="text-white text-xs absolute bottom-4 left-6">Item 1</div>
              </div>

              {/* Stats Card - Positioned on top of chart */}
              <div className="absolute left-8 bottom-4 bg-[#181615] rounded-xl p-4 shadow-lg w-[180px] z-10">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-400 text-xs">Comments liked</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white text-2xl font-bold">7,265</span>
                  <span className="text-green-500 text-xs">+11.01%</span>
                </div>
              </div>

              {/* Profile Card - Positioned on top of chart */}
              <div className="absolute right-8 bottom-[-40px] bg-[#4f1092] rounded-xl overflow-hidden shadow-lg w-[180px] z-20">
                <div className="p-3 flex flex-col items-center">
                  <Avatar className="w-14 h-14 border-2 border-white mb-1">
                    <AvatarImage src="/placeholder.svg?height=56&width=56" alt="Profile" />
                    <AvatarFallback>NK</AvatarFallback>
                  </Avatar>
                  <h3 className="text-white text-sm font-medium">nkchaudhary01</h3>
                  <p className="text-gray-300 text-xs">Wildlife Photographer</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-[#b762f7] font-medium text-xs">61.4k</span>
                    <span className="text-gray-300 text-xs">Followers</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 border-t border-purple-light/30">
                  <div className="p-2 text-center border-r border-purple-light/30">
                    <p className="text-white text-base font-bold">39.389</p>
                    <p className="text-gray-300 text-[10px]">Followers Gained</p>
                  </div>
                  <div className="p-2 text-center">
                    <p className="text-white text-base font-bold">
                      1.880<span className="text-xs">+</span>
                    </p>
                    <p className="text-gray-300 text-[10px]">Avg. Likes/Post</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Text Content */}
            <div className="space-y-6">
              <h1 className="text-[#4f1092] text-5xl font-bold leading-tight">
                CRECIMIENTO CON
                <br />
                PACK 2
              </h1>

              <div className="space-y-6">
                {[1, 2, 3].map(i => <div key={i} className="space-y-1">
                    <h3 className="text-[#4f1092] font-medium">Lorem ipsum</h3>
                    <p className="text-gray-600 text-sm">
                      Dolor sit amet consectetur. Eget faucibus fringilla sed bibendum.
                    </p>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full max-w-6xl mx-auto border-t border-gray-200 my-4"></div>

        {/* Section 2: Growth Pack 3 */}
        <section className="w-full max-w-6xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text Content */}
            <div className="space-y-6">
              <h1 className="text-[#4f1092] text-5xl font-bold leading-tight">
                CRECIMIENTO CON
                <br />
                PACK 3
              </h1>

              <div className="space-y-6">
                {[1, 2, 3].map(i => <div key={i} className="space-y-1">
                    <h3 className="text-[#4f1092] font-medium">Lorem ipsum</h3>
                    <p className="text-gray-600 text-sm">
                      Dolor sit amet consectetur. Eget faucibus fringilla sed bibendum.
                    </p>
                  </div>)}
              </div>
            </div>

            {/* Right side - Chart */}
            <div className="relative">
              {/* Purple background with chart */}
              <div className="bg-[#b762f7] rounded-3xl p-6 pt-10 pb-16 relative h-[280px]">
                <h3 className="text-white text-xl font-medium mb-4 text-center">Our Growth</h3>

                {/* Chart SVG */}
                <svg className="w-full h-[180px]" viewBox="0 0 400 180" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <line x1="0" y1="0" x2="400" y2="0" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="0" y1="36" x2="400" y2="36" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="0" y1="72" x2="400" y2="72" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="0" y1="108" x2="400" y2="108" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="0" y1="144" x2="400" y2="144" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="0" y1="180" x2="400" y2="180" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

                  {/* Chart line */}
                  <path d="M 20,160 L 80,140 L 140,80 L 200,100 L 260,40 L 320,20 L 380,10" stroke="white" strokeWidth="2" fill="none" />

                  {/* Data points */}
                  <circle cx="20" cy="160" r="3" fill="white" />
                  <circle cx="80" cy="140" r="3" fill="white" />
                  <circle cx="140" cy="80" r="3" fill="white" />
                  <circle cx="200" cy="100" r="3" fill="white" />
                  <circle cx="260" cy="40" r="3" fill="white" />
                  <circle cx="320" cy="20" r="3" fill="white" />
                  <circle cx="380" cy="10" r="3" fill="white" />
                </svg>

                <div className="text-white text-xs absolute bottom-4 left-6">Item 3</div>
              </div>

              {/* Stats Card - Positioned on top of chart */}
              <div className="absolute right-8 top-4 bg-[#181615] rounded-xl p-4 shadow-lg w-[180px] z-10">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-400 text-xs">Comments liked</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white text-2xl font-bold">7,265</span>
                  <span className="text-green-500 text-xs">+11.01%</span>
                </div>
              </div>

              {/* Profile Card - Positioned on top of chart */}
              <div className="absolute right-8 bottom-[-40px] bg-[#4f1092] rounded-xl overflow-hidden shadow-lg w-[180px] z-20">
                <div className="p-3 flex flex-col items-center">
                  <Avatar className="w-14 h-14 border-2 border-white mb-1">
                    <AvatarImage src="/placeholder.svg?height=56&width=56" alt="Profile" />
                    <AvatarFallback>NK</AvatarFallback>
                  </Avatar>
                  <h3 className="text-white text-sm font-medium">nkchaudhary01</h3>
                  <p className="text-gray-300 text-xs">Wildlife Photographer</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-[#b762f7] font-medium text-xs">61.4k</span>
                    <span className="text-gray-300 text-xs">Followers</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 border-t border-purple-light/30">
                  <div className="p-2 text-center border-r border-purple-light/30">
                    <p className="text-white text-base font-bold">39.389</p>
                    <p className="text-gray-300 text-[10px]">Followers Gained</p>
                  </div>
                  <div className="p-2 text-center">
                    <p className="text-white text-base font-bold">
                      1.880<span className="text-xs">+</span>
                    </p>
                    <p className="text-gray-300 text-[10px]">Avg. Likes/Post</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pie Chart - Positioned below */}
            
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-[#d9d9d9] py-8 mt-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex gap-2">
                <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 15C15 23.2843 21.7157 30 30 30C38.2843 30 45 23.2843 45 15C45 6.71573 38.2843 0 30 0C21.7157 0 15 6.71573 15 15Z" fill="#FF6200" />
                  <path d="M0 45C0 53.2843 6.71573 60 15 60C23.2843 60 30 53.2843 30 45C30 36.7157 23.2843 30 15 30C6.71573 30 0 36.7157 0 45Z" fill="#FF6200" />
                  <path d="M30 45C30 53.2843 36.7157 60 45 60C53.2843 60 60 53.2843 60 45C60 36.7157 53.2843 30 45 30C36.7157 30 30 36.7157 30 45Z" fill="#FF6200" />
                </svg>
                <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="60" height="60" rx="15" fill="#FF6200" />
                </svg>
              </div>

              <div className="max-w-md">
                <h2 className="text-[#4f1092] text-xl md:text-2xl font-bold leading-tight">
                  HAZ CRECER TU CUENTA EN INSTAGRAM CON MÁS DE 3000 SEGUIDORES AL MES REGISTRANDOTE HOY MISMO
                </h2>
              </div>

              <Button className="bg-[#ff6200] hover:bg-[#ff6200]/90 text-white rounded-full px-6 py-1.5 text-sm">
                comenzar
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>;
};
export default ConsultarMiCrecimiento;