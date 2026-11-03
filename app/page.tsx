import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesBooking from "@/components/ServicesBooking";
import PortfolioGallery from "@/components/PortfolioGallery";
import ReviewsSection from "@/components/ReviewsSection";
import LocationHours from "@/components/LocationHours";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#151311]">
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesBooking />
      <PortfolioGallery />
      <ReviewsSection />
      <LocationHours />
      <FAQSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

