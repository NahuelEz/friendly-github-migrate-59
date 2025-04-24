import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Link } from 'react-router-dom';
import { ArrowUp, TrendingUp } from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { LineChart } from "@/components/line-chart";
import { ProfileCard } from "@/components/profile-card";
import { StatsCard } from "@/components/stats-card";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ConsultarMiCrecimiento = () => {
  // Chart configuration
  const chartData = {
    labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    datasets: [
      {
        data: [16, 25, 22, 32, 36],
        borderColor: "#ffffff",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#ffffff",
      },
    ],
  };

  // Fix: Changed font weight from string "bold" to a valid value "bold" (as a literal type)
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Our Growth",
        color: "#ffffff",
        font: {
          size: 24,
          weight: "bold" as "bold", // Explicitly type as "bold" literal
        },
        padding: {
          top: 10,
          bottom: 30,
        },
        align: "center" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 40,
        ticks: {
          stepSize: 10,
          color: "#ffffff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      x: {
        ticks: {
          color: "#ffffff",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            {/* Column 1: Title */}
            <div>
              <h1 className="text-[#4f1092] text-5xl md:text-6xl font-bold leading-tight">
                CRECIMIENTO CON
                <br />
                <span className="text-7xl md:text-8xl">PACK 1</span>
              </h1>
            </div>

            {/* Column 2: Lorem Ipsum content */}
            <div className="space-y-8">
              {[1, 2, 3].map((index) => (
                <div key={index} className="space-y-1">
                  <h3 className="text-[#4f1092] text-xl font-semibold">Lorem ipsum</h3>
                  <p className="text-[#4f1092]">Dolor sit amet consectetur. Eget faucibus fringilla sed bibendum.</p>
                </div>
              ))}
            </div>

            {/* Column 3: Chart */}
            <div className="relative">
              <div className="bg-[#b762f7] rounded-3xl p-6 h-[400px] w-full">
                <div className="h-full">
                  <Line data={chartData} options={chartOptions} />
                </div>
              </div>

              {/* Live reactions overlay */}
              <div className="absolute -bottom-6 right-4 bg-[#181615] text-white p-4 rounded-xl shadow-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-300">Live Reactions</p>
                    <p className="text-4xl font-bold">7,265</p>
                  </div>
                  <div className="flex items-center gap-1 text-green-400 ml-4">
                    <TrendingUp size={16} />
                    <span className="font-medium">+11.01%</span>
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

      {/* Pack 3 Growth Section */}
      <section className="w-full bg-white">
        <div className="container mx-auto px-4 py-16">
          <img 
            src="/lovable-uploads/d268f405-2cbc-44a8-8e2f-7e7edc03f0ec.png"
            alt="Growth Pack 3 Statistics"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ConsultarMiCrecimiento;
