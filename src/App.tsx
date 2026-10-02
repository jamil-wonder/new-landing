import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import DashboardShowcase from "./components/DashboardShowcase";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import Agents from "./components/Agents";
import HowItWorks from "./components/HowItWorks";
import ReplaceStack from "./components/ReplaceStack";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

export default function App() {
  return (
    <div className="min-h-screen text-[#23211b] bg-[#f8f5ed]">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Stats />
        <DashboardShowcase />
        <Agents />
        <CaseStudies />
        <HowItWorks />
        <ReplaceStack />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
