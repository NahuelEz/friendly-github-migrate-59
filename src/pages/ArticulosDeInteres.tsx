import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/landing/Header";
import InstagramSearchBar from "@/components/ui/InstagramSearchBar";
import Footer from "@/components/landing/Footer";
import SplitSection from "@/components/landing/SplitSection";
export default function ArticulosDeInteres() {
  return <div className="min-h-screen bg-gradient-to-b from-[#4F1092] to-[#B762F7]">
      <Header />

      

      <SplitSection />
      <Footer />
    </div>;
}