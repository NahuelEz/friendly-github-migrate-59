
import React from "react";
import { Header } from "@/components/landing/Header";
import ArticlesHero from "@/components/articles/ArticlesHero";
import SplitSection from "@/components/landing/SplitSection";
import Footer from "@/components/landing/Footer";

export default function ArticulosDeInteres() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4F1092] to-[#B762F7]">
      <Header />
      <ArticlesHero />
      <SplitSection />
      <Footer />
    </div>
  );
}
