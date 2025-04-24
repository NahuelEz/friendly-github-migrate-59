import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Header } from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Link } from 'react-router-dom';
import { ArrowUp, TrendingUp } from "lucide-react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { LineChart } from "@/components/line-chart";
import { ProfileCard } from "@/components/profile-card";
import { StatsCard } from "@/components/stats-card";
import { GrowthDashboard } from '@/components/growth/GrowthDashboard';
import { InstagramBanner } from '@/components/banners/InstagramBanner';
import { Pack3Dashboard } from '@/components/dashboard/Pack3Dashboard';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const ConsultarMiCrecimiento = () => {
  // Chart configuration
  const chartData = {
    labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    datasets: [{
      data: [16, 25, 22, 32, 36],
      borderColor: "#ffffff",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: "#ffffff"
    }]
  };

  // Fix: Changed font weight from string "bold" to a valid value "bold" (as a literal type)
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Our Growth",
        color: "#ffffff",
        font: {
          size: 24,
          weight: "bold" as "bold" // Explicitly type as "bold" literal
        },
        padding: {
          top: 10,
          bottom: 30
        },
        align: "center" as const
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 40,
        ticks: {
          stepSize: 10,
          color: "#ffffff"
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)"
        }
      },
      x: {
        ticks: {
          color: "#ffffff"
        },
        grid: {
          display: false
        }
      }
    }
  };
  
  return <>
      <Header />
      
      {/* Hero Section with New Background Image */}
      <section className="min-h-[80vh] relative flex items-center" style={{
        backgroundImage: "url('/lovable-uploads/2febf7b5-81a0-4fdf-8844-7a094ef061bf.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight uppercase">
              Proyectemos
              <br />
              tu crecimiento
            </h1>
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

      {/* Growth Section (Pack 1) */}
      <GrowthDashboard />

      {/* Separator */}
      <div className="w-full py-8">
        <hr className="border-gray-300" />
      </div>

      {/* Pack 2 Growth Section */}
      <section className="bg-white py-32 relative">
        <div className="container max-w-[1700px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Primera columna: Gráfico (ocupa 2 de 4 columnas) */}
            <div className="relative md:col-span-2">
              {/* Growth Chart Card */}
              <div className="bg-[#b762f7] rounded-3xl p-6 pb-16 shadow-lg">
                <h2 className="text-white text-2xl font-medium mb-4">Our Growth</h2>
                <div className="relative h-[300px]">
                  <div className="absolute left-0 top-0 h-full w-full">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-white/80 text-sm">
                      <div>40</div>
                      <div>30</div>
                      <div>20</div>
                      <div>10</div>
                      <div>0</div>
                    </div>

                    {/* X-axis labels */}
                    <div className="absolute bottom-[-20px] left-0 w-full flex justify-between text-white/80 text-sm">
                      <div>Item 1</div>
                      <div>Item 2</div>
                      <div>Item 3</div>
                      <div>Item 4</div>
                      <div>Item 5</div>
                    </div>

                    {/* Horizontal grid lines */}
                    <div className="absolute left-[30px] top-0 right-0 h-full flex flex-col justify-between">
                      {[0, 1, 2, 3, 4].map(i => <div key={i} className="border-t border-white/20 w-full h-0"></div>)}
                    </div>

                    {/* Line chart */}
                    <svg className="absolute left-[30px] top-0 right-0 h-full w-[calc(100%-30px)]" viewBox="0 0 400 200" preserveAspectRatio="none">
                      <path d="M0,180 L80,100 L160,140 L240,40 L320,20" fill="none" stroke="white" strokeWidth="2" />
                      {/* Data points */}
                      <circle cx="0" cy="180" r="4" fill="white" />
                      <circle cx="80" cy="100" r="4" fill="white" />
                      <circle cx="160" cy="140" r="4" fill="white" />
                      <circle cx="240" cy="40" r="4" fill="white" />
                      <circle cx="320" cy="20" r="4" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Comments Liked Card */}
              <div className="absolute left-[19%] bottom-[-40px] bg-[#181615] text-white rounded-2xl p-5 shadow-xl w-[280px]">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-300">Comments liked</div>
                  <div className="bg-[#29292e] rounded-full p-1">
                    <TrendingUp size={16} className="text-white" />
                  </div>
                </div>
                <div className="flex justify-between items-end mt-2">
                  <div className="text-4xl font-bold">7,265</div>
                  <div className="text-[#ff6200] font-medium">+11.01%</div>
                </div>
              </div>
            </div>

            {/* Segunda columna: Título (ahora en el medio) */}
            <div className="flex flex-col md:pt-6">
              <div>
                <h1 className="text-[#4f1092] text-3xl md:text-2xl font-bold uppercase scale-y-[1.5]">CRECIMIENTO CON</h1>
                <h1 className="text-[#4f1092] text-8xl md:text-7xl font-bold mt-8 uppercase leading-tight scale-y-[2]">PACK 2</h1>
              </div>
            </div>

            {/* Tercera columna: Lorem Ipsum (ahora al final) */}
            <div className="flex flex-col md:pt-6">
              <div className="space-y-6">
                {[1, 2, 3].map(i => <div key={i} className="max-w-xs">
                    <h3 className="text-[#4f1092] text-lg font-bold">Lorem ipsum</h3>
                    <p className="text-[#4f1092] text-sm">
                      Dolor sit amet consectetur. Eget faucibus fringilla sed bibendum.
                    </p>
                  </div>)}
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="absolute left-[25%] bottom-[70px] md:left-[32%] md:bottom-[-10px] bg-[#4f1092] rounded-3xl overflow-hidden shadow-xl w-[280px] z-10">
            <div className="p-6 flex flex-col items-center">
              <div className="rounded-full overflow-hidden border-2 border-white w-20 h-20 mb-3">
                <img src="/placeholder.svg" alt="Profile" width={80} height={80} className="object-cover" />
              </div>
              <h3 className="text-white text-xl font-medium">nkchaudhary01</h3>
              <p className="text-white/80 text-sm">Wildlife Photographer</p>
              <p className="text-[#ff6200] text-sm mt-1">61K Followers</p>
            </div>

            <div className="grid grid-cols-2 border-t border-white/20">
              <div className="p-4 flex flex-col items-center border-r border-white/20">
                <div className="text-white text-2xl font-bold">39,389</div>
                <div className="text-white/70 text-xs">Followers Gained</div>
              </div>
              <div className="p-4 flex flex-col items-center">
                <div className="text-white text-2xl font-bold">
                  1,000<span className="text-lg">+</span>
                </div>
                <div className="text-white/70 text-xs">Avg. Likes/Post</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full py-8">
        <hr className="border-gray-300" />
      </div>

      {/* Pack 3 Growth Section */}
      <Pack3Dashboard />

      {/* Instagram Banner */}
      <InstagramBanner />
      
      <Footer />
    </>;
};

export default ConsultarMiCrecimiento;
