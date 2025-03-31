
import React from "react";
import { ArrowUp, ChevronRight } from "lucide-react";
import { Header } from "../components/landing/Header";
import { Footer } from "../components/landing/Footer";

const ConsultarMiCrecimiento = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation - using existing Header component */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4f1092] via-[#b762f7] to-[#fe6202] pt-16 pb-32">
        <div className="container mx-auto px-8">
          <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight max-w-2xl">
            PROYECTEMOS
            <br />
            TU CRECIMIENTO
          </h1>

          <div className="absolute right-[20%] top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-xl p-8 w-48 h-48 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center">
              <ArrowUp className="text-white w-12 h-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="bg-gray-100 py-6">
        <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/placeholder.svg"
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
            <div>
              <h2 className="text-[#4f1092] text-xl font-bold">cameron_will</h2>
              <p className="text-gray-600">New Delhi, India</p>
            </div>
          </div>

          <div className="flex items-center gap-12 my-6 md:my-0">
            <div className="text-center">
              <p className="text-[#4f1092] text-3xl font-bold">98</p>
              <p className="text-gray-600">Posts</p>
            </div>
            <div className="text-center">
              <p className="text-[#4f1092] text-3xl font-bold">3.5k</p>
              <p className="text-gray-600">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-[#4f1092] text-3xl font-bold">900</p>
              <p className="text-gray-600">Followings</p>
            </div>
          </div>

          <button className="bg-[#fe6202] text-white px-8 py-3 rounded-full hover:bg-[#fe6202]/90 transition-colors">
            comenzar
          </button>
        </div>
      </section>

      {/* Growth Section */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[#4f1092] text-2xl font-bold mb-2">CRECIMIENTO CON</h2>
              <h3 className="text-[#4f1092] text-7xl font-bold mb-8">PACK 1</h3>

              <div className="space-y-8">
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

            <div className="relative">
              <div className="bg-[#b762f7] rounded-3xl p-6 h-full">
                <h3 className="text-white text-xl mb-4">Our Growth</h3>
                <div className="h-[300px] relative">
                  {/* Chart lines */}
                  <div className="absolute left-0 right-0 h-px bg-white/20 top-0"></div>
                  <div className="absolute left-0 right-0 h-px bg-white/20 top-1/4"></div>
                  <div className="absolute left-0 right-0 h-px bg-white/20 top-2/4"></div>
                  <div className="absolute left-0 right-0 h-px bg-white/20 top-3/4"></div>
                  <div className="absolute left-0 right-0 h-px bg-white/20 bottom-0"></div>

                  {/* Y-axis labels */}
                  <div className="absolute -left-6 top-0 text-white text-xs">40</div>
                  <div className="absolute -left-6 top-1/4 text-white text-xs">30</div>
                  <div className="absolute -left-6 top-2/4 text-white text-xs">20</div>
                  <div className="absolute -left-6 top-3/4 text-white text-xs">10</div>
                  <div className="absolute -left-6 bottom-0 text-white text-xs">0</div>

                  {/* X-axis labels */}
                  <div className="absolute bottom-[-20px] left-[10%] text-white text-xs">Item 1</div>
                  <div className="absolute bottom-[-20px] left-[30%] text-white text-xs">Item 2</div>
                  <div className="absolute bottom-[-20px] left-[50%] text-white text-xs">Item 3</div>
                  <div className="absolute bottom-[-20px] left-[70%] text-white text-xs">Item 4</div>
                  <div className="absolute bottom-[-20px] left-[90%] text-white text-xs">Item 5</div>

                  {/* Chart line */}
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,80 L20,70 L40,50 L60,60 L80,30 L100,20" fill="none" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Live Reactions Widget */}
              <div className="absolute -bottom-10 right-10 bg-black text-white p-4 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm">Live Reactions</p>
                  <ChevronRight className="w-4 h-4" />
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-2xl font-bold">7,265</p>
                  <p className="text-green-500 text-sm">+11.01%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - using existing Footer component */}
      <Footer />
    </div>
  );
};

export default ConsultarMiCrecimiento;
