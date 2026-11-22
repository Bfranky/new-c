import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheStandard from "@/components/TheStandard";
import ServicesBooking from "@/components/ServicesBooking";
import PortfolioGallery from "@/components/PortfolioGallery";
import ReviewsSection from "@/components/ReviewsSection";
import LocationHours from "@/components/LocationHours";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollManager from "@/components/ScrollManager";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090807] text-[#FAF7F2] relative selection:bg-[#E2B857] selection:text-zinc-950">
      <ScrollManager />
      <Navbar />
      <Hero />
      <TheStandard />
      <PortfolioGallery />
      <ServicesBooking />
      <ReviewsSection />
      <LocationHours />
      <FAQSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
