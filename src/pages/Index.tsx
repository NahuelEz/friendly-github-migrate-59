
import React from 'react';
import Hero from '../components/landing/Hero';
import StatsSection from '../components/landing/StatsSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import ResultsSection from '../components/landing/ResultsSection';
import ComparisonSection from '../components/landing/ComparisonSection';
import FAQSection from '../components/landing/FAQSection';
import ClientsSection from '../components/landing/ClientsSection';
import Footer from '../components/landing/Footer';
import Header from '../components/landing/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <Header />
      
      <Hero />
      
      <div id="stats-section" className="section-container bg-[#0a0a0a]">
        <StatsSection />
      </div>
      
      <div id="how-it-works-section" className="section-container bg-[#070707]">
        <HowItWorksSection />
      </div>
      
      <div id="testimonials-section" className="section-container bg-[#0a0a0a]">
        <TestimonialsSection />
      </div>
      
      <div id="results-section" className="section-container bg-[#070707]">
        <ResultsSection />
      </div>
      
      <div id="comparison-section" className="section-container bg-[#0a0a0a]">
        <ComparisonSection />
      </div>
      
      <div id="faq-section" className="section-container bg-[#070707]">
        <FAQSection />
      </div>
      
      <div id="clients-section" className="section-container bg-[#0a0a0a]">
        <ClientsSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
