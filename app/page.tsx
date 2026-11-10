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
import StickyMobileBar from "@/components/StickyMobileBar";
import ScrollManager from "@/components/ScrollManager";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#0D0B0A] relative">
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
      <StickyMobileBar />
    </main>
  );
}
