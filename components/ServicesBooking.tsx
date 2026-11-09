"use client";

import React, { useState } from "react";
import { MessageCircle, Check, Sparkles, Clock, MapPin, Calendar, Phone, ArrowRight } from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  category: "bridal" | "owambe" | "soft" | "gele";
  price: string;
  duration: string;
  tagline: string;
  highlights: string[];
  featured?: boolean;
}

const serviceCatalog: ServiceItem[] = [
  {
    id: "luxury-bridal",
    name: "Luxury Royal Bridal Glam",
    category: "bridal",
    price: "From ₦70,000",
    duration: "2.5 – 3 Hours",
    tagline: "Our signature royal bridal transformation. Engineered to look immaculate under 4K lenses and endure all-day heat.",
    featured: true,
    highlights: [
      "Custom skin prep & waterproof foundation blend",
      "Traditional or contemporary gele pleating included",
      "Emergency touch-up kit & premium mink lashes",
    ],
  },
  {
    id: "owambe-radiance",
    name: "Owambe & Party Radiance",
    category: "owambe",
    price: "₦25,000",
    duration: "1.5 Hours",
    tagline: "Head-turning event glam with high-definition brows, sculpted cheekbones, and sweat-resistant velvet skin.",
    highlights: [
      "Contoured cheekbones & radiant collarbone glow",
      "Cut-crease or smokey eye with gold foil pigments",
      "Transfer-proof 18hr setting spray",
    ],
  },
  {
    id: "studio-soft",
    name: "Studio Soft & Birthday Glow",
    category: "soft",
    price: "₦20,000",
    duration: "1 Hour 15 Mins",
    tagline: "Skin-first minimalist glam for birthday photoshoots, graduation portraits, and romantic evening dinners.",
    highlights: [
      "Dewy glass-skin or soft velvet skin finish",
      "Feathered brows with ombre glossy lips",
      "Zero flashback under photography lighting",
    ],
  },
  {
    id: "couture-gele",
    name: "Couture Gele Styling",
    category: "gele",
    price: "₦8,000",
    duration: "45 Mins",
    tagline: "Sharp, architectural pleating for aso-oke, sego, or auto-gele fixing with comfortable temple framing.",
    highlights: [
      "Traditional fan pleats or modern avant-garde styles",
      "Sturdy structure that won't loosen or drop",
      "Gentle fit with zero temple tension",
    ],
  },
  {
    id: "bridal-squad",
    name: "Bridal Train & Squad Rate",
    category: "bridal",
    price: "Custom Group Rate",
    duration: "Group Booking",
    tagline: "Harmonious, camera-ready glam for bridesmaids, mother of the bride, and sisters with coordinated timing.",
    highlights: [
      "Uniform elegance tailored to wedding palette",
      "Discounted group pricing for 3+ clients",
      "Dedicated on-site schedule management",
    ],
  },
  {
    id: "callout-service",
    name: "Home & Hotel Callout Service",
    category: "soft",
    price: "Service + Travel Fee",
    duration: "VIP On-Location",
    tagline: "Enjoy full luxury artistry in your home, hotel, or bridal suite anywhere in Ikorodu or across Lagos.",
    highlights: [
      "Zee arrives with studio lighting & professional chair",
      "Punctual sunrise arrival (from 6:00 AM)",
      "Available across Ikorodu, Ikeja, Lekki & Mainland",
    ],
  },
];

export default function ServicesBooking() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<string>("Luxury Royal Bridal Glam");
  const [locationType, setLocationType] = useState<string>("In-Studio (Eyita, Ikorodu)");
  const [date, setDate] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>("Morning (8:00 AM - 11:00 AM)");
  const [clientName, setClientName] = useState<string>("");

  const filteredServices =
    activeCategory === "all"
      ? serviceCatalog
      : serviceCatalog.filter((s) => s.category === activeCategory);

  const handleSelectService = (name: string) => {
    setSelectedService(name);
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getWhatsAppBookingLink = () => {
    const text = [
      `Hello Zee! I would like to book an appointment:`,
      `• Look: ${selectedService}`,
      `• Location: ${locationType}`,
      date ? `• Preferred Date: ${date}` : `• Date: (To discuss)`,
      `• Time: ${timeSlot}`,
      clientName ? `• My Name: ${clientName}` : ``,
      `Could you please confirm availability? Thank you!`,
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/2348138948285?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-[#E8E1D5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-[10px] uppercase tracking-[0.28em] text-[#C59A3F] font-bold">
            Transparent Pricing & Craft
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0B0A]">
            Curated Services
          </h2>
          <p className="text-sm text-[#5A534C] font-light">
            Every appointment begins with skin hydration and ends with our signature Lagos-proof setting lock.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: "all", label: "All Craft" },
              { id: "bridal", label: "Bridal" },
              { id: "owambe", label: "Owambe" },
              { id: "soft", label: "Soft Glam" },
              { id: "gele", label: "Gele Styling" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-[#0D0B0A] text-[#FAF7F2] shadow-sm"
                    : "bg-[#FAF7F2] text-[#5A534C] border border-[#E8E1D5] hover:border-[#C59A3F]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (Clean, classic, less text) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between relative bg-[#FAF7F2] ${
                service.featured
                  ? "border-[#C59A3F] ring-1 ring-[#C59A3F]/30 shadow-md"
                  : "border-[#E8E1D5] hover:border-[#C59A3F]/60"
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-6 bg-[#C59A3F] text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-3 h-3" />
                  Client Favorite
                </div>
              )}

              <div>
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className="font-serif text-xl font-bold text-[#0D0B0A]">
                    {service.name}
                  </h3>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="font-bold text-lg text-[#0D0B0A]">
                    {service.price}
                  </span>
                  <span className="text-[11px] text-[#7A7269] flex items-center gap-1 bg-white px-2.5 py-0.5 rounded-full border border-[#E8E1D5]">
                    <Clock className="w-3 h-3 text-[#C59A3F]" />
                    {service.duration}
                  </span>
                </div>

                <p className="text-xs text-[#5A534C] leading-relaxed mb-5 font-light">
                  {service.tagline}
                </p>

                <div className="space-y-2 mb-6 pt-3 border-t border-[#E8E1D5]">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#0D0B0A]">
                      <Check className="w-3.5 h-3.5 text-[#C59A3F] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleSelectService(service.name)}
                className={`w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  selectedService === service.name
                    ? "bg-[#C59A3F] text-white shadow-sm"
                    : "bg-white text-[#0D0B0A] hover:bg-[#0D0B0A] hover:text-white border border-[#E8E1D5]"
                }`}
              >
                {selectedService === service.name ? "Selected for Booking" : "Select Look"}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Streamlined Interactive Booking Module (No cluttered preview) */}
        <div
          id="booking"
          className="bg-[#FAF7F2] rounded-3xl border border-[#E8E1D5] p-6 sm:p-10 shadow-sm scroll-mt-24 max-w-3xl mx-auto"
        >
          <div className="text-center mb-8 space-y-1.5">
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-[#C59A3F] font-bold">
              <Sparkles className="w-3 h-3" />
              Seamless WhatsApp Booking
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D0B0A]">
              Reserve Your Date with Zee
            </h3>
            <p className="text-xs text-[#5A534C] font-light">
              Select your preferences below to launch a direct booking message to Zee at <strong className="text-[#0D0B0A]">0813 894 8285</strong>.
            </p>
          </div>

          <div className="space-y-5">
            {/* Row 1: Chosen Service & Location Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#0D0B0A] mb-1.5">
                  Chosen Look
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-white border border-[#E8E1D5] rounded-xl px-4 py-3 text-xs text-[#0D0B0A] focus:outline-none focus:border-[#C59A3F]"
                >
                  {serviceCatalog.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.price})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#0D0B0A] mb-1.5">
                  Location Preference
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setLocationType("In-Studio (Eyita, Ikorodu)")}
                    className={`px-3 py-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                      locationType.includes("In-Studio")
                        ? "bg-[#0D0B0A] text-white border-[#0D0B0A]"
                        : "bg-white text-[#5A534C] border-[#E8E1D5] hover:border-[#C59A3F]"
                    }`}
                  >
                    Eyita Studio
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocationType("Home / Hotel Callout Service")}
                    className={`px-3 py-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                      locationType.includes("Home")
                        ? "bg-[#0D0B0A] text-white border-[#0D0B0A]"
                        : "bg-white text-[#5A534C] border-[#E8E1D5] hover:border-[#C59A3F]"
                    }`}
                  >
                    Hotel / Callout
                  </button>
                </div>
              </div>
            </div>

            {/* Row 2: Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#0D0B0A] mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white border border-[#E8E1D5] rounded-xl px-4 py-3 text-xs text-[#0D0B0A] focus:outline-none focus:border-[#C59A3F]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#0D0B0A] mb-1.5">
                  Preferred Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-white border border-[#E8E1D5] rounded-xl px-4 py-3 text-xs text-[#0D0B0A] focus:outline-none focus:border-[#C59A3F]"
                >
                  <option value="Sunrise Callout (6:00 AM - 8:00 AM)">
                    Sunrise Callout (6:00 AM - 8:00 AM) • Weddings
                  </option>
                  <option value="Morning (8:00 AM - 11:00 AM)">
                    Morning (8:00 AM - 11:00 AM)
                  </option>
                  <option value="Afternoon (12:00 PM - 3:00 PM)">
                    Afternoon (12:00 PM - 3:00 PM)
                  </option>
                  <option value="Evening (3:30 PM - 6:30 PM)">
                    Evening (3:30 PM - 6:30 PM)
                  </option>
                </select>
              </div>
            </div>

            {/* Row 3: Name */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#0D0B0A] mb-1.5">
                Your Name (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Bukola, Queen, or Sarah"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-white border border-[#E8E1D5] rounded-xl px-4 py-3 text-xs text-[#0D0B0A] focus:outline-none focus:border-[#C59A3F]"
              />
            </div>

            {/* Direct 1-Tap Booking CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={getWhatsAppBookingLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex-1 inline-flex items-center justify-center gap-2.5 bg-[#0D0B0A] hover:bg-[#C59A3F] text-[#FAF7F2] py-4 px-8 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-[#C59A3F]" />
                <span>Book on WhatsApp (0813 894 8285)</span>
              </a>

              <a
                href="tel:+2348138948285"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0D0B0A] hover:text-[#C59A3F] px-4 py-3 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C59A3F]" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
