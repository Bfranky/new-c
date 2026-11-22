"use client";

import React, { useState } from "react";
import { MessageCircle, Check, Sparkles, Clock, Phone, ArrowRight } from "lucide-react";

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
    <section id="services" className="py-20 sm:py-28 bg-[#0E0C0A] border-b border-[#241F1A] scroll-mt-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-2xs uppercase tracking-ultra text-[#DFC07A] font-bold">
            Transparent Luxury Pricing
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#FAF7F2]">
            Curated Services
          </h2>
          <p className="text-sm text-[#A8A199] font-light leading-relaxed">
            Every session begins with bespoke skin hydration and concludes with our proprietary 18-hour Lagos-proof setting lock.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: "all", label: "All Services" },
              { id: "bridal", label: "Bridal" },
              { id: "owambe", label: "Owambe" },
              { id: "soft", label: "Soft Glam" },
              { id: "gele", label: "Gele Styling" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? "btn-gold-glow text-[#0B0908] font-bold"
                    : "bg-[#171310] text-[#B5ABA0] border border-[#241F1A] hover:border-[#C59A3F]/50 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`rounded-3xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between relative gold-card hover:-translate-y-1.5 shadow-xl ${
                service.featured
                  ? "border-[#C59A3F]/60 ring-1 ring-[#C59A3F]/40 shadow-[0_10px_30px_-5px_rgba(197,154,63,0.2)]"
                  : ""
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3.5 left-7 btn-gold-glow text-[#0B0908] text-[10px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3 h-3 shrink-0" />
                  Client Favorite
                </div>
              )}

              <div>
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className="font-serif text-2xl font-bold text-[#FAF7F2]">
                    {service.name}
                  </h3>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#DFC07A] to-[#C59A3F]">
                    {service.price}
                  </span>
                  <span className="text-2xs text-[#A8A199] flex items-center gap-1.5 bg-[#191512] px-3 py-1 rounded-full border border-[#C59A3F]/25">
                    <Clock className="w-3 h-3 text-[#DFC07A] shrink-0" />
                    {service.duration}
                  </span>
                </div>

                <p className="text-xs text-[#C8C0B5] leading-relaxed mb-6 font-light">
                  {service.tagline}
                </p>

                <div className="space-y-2.5 mb-7 pt-4 border-t border-[#241F1A]">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#FAF7F2]">
                      <Check className="w-3.5 h-3.5 text-[#DFC07A] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleSelectService(service.name)}
                className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  selectedService === service.name
                    ? "btn-gold-glow text-[#0B0908]"
                    : "bg-[#171310] text-[#FAF7F2] hover:bg-[#241F1A] border border-[#C59A3F]/40"
                }`}
              >
                {selectedService === service.name ? "Selected for Booking" : "Select Look"}
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>
            </div>
          ))}
        </div>

        {/* Streamlined Interactive Booking Suite */}
        <div
          id="booking"
          className="gold-card rounded-3xl p-7 sm:p-12 shadow-2xl scroll-mt-24 max-w-3xl mx-auto"
        >
          <div className="text-center mb-8 space-y-2">
            <span className="inline-flex items-center gap-1.5 text-2xs uppercase tracking-ultra text-[#DFC07A] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#C59A3F] shrink-0" />
              Direct WhatsApp Reservation
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF7F2]">
              Reserve Your Date with Zee
            </h3>
            <p className="text-xs text-[#C8C0B5] font-light max-w-md mx-auto">
              Select your appointment preferences to launch an instant message directly to Zee on WhatsApp at <strong className="text-[#DFC07A]">0813 894 8285</strong>.
            </p>
          </div>

          <div className="space-y-5">
            {/* Row 1: Chosen Service & Location Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#D8D0C5] mb-2">
                  Chosen Look
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-[#191512] border border-[#C59A3F]/35 rounded-2xl px-4 py-3.5 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#DFC07A]"
                >
                  {serviceCatalog.map((s) => (
                    <option key={s.id} value={s.name} className="bg-[#191512] text-white">
                      {s.name} ({s.price})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#D8D0C5] mb-2">
                  Location Preference
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setLocationType("In-Studio (Eyita, Ikorodu)")}
                    className={`px-3 py-3 rounded-2xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                      locationType.includes("In-Studio")
                        ? "btn-gold-glow text-[#0B0908] border-transparent"
                        : "bg-[#191512] text-[#B5ABA0] border-[#C59A3F]/30 hover:border-[#C59A3F]"
                    }`}
                  >
                    Eyita Studio
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocationType("Home / Hotel Callout Service")}
                    className={`px-3 py-3 rounded-2xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                      locationType.includes("Home")
                        ? "btn-gold-glow text-[#0B0908] border-transparent"
                        : "bg-[#191512] text-[#B5ABA0] border-[#C59A3F]/30 hover:border-[#C59A3F]"
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
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#D8D0C5] mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#191512] border border-[#C59A3F]/35 rounded-2xl px-4 py-3.5 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#DFC07A]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#D8D0C5] mb-2">
                  Preferred Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-[#191512] border border-[#C59A3F]/35 rounded-2xl px-4 py-3.5 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#DFC07A]"
                >
                  <option value="Sunrise Callout (6:00 AM - 8:00 AM)" className="bg-[#191512] text-white">
                    Sunrise Callout (6:00 AM - 8:00 AM) • Weddings
                  </option>
                  <option value="Morning (8:00 AM - 11:00 AM)" className="bg-[#191512] text-white">
                    Morning (8:00 AM - 11:00 AM)
                  </option>
                  <option value="Afternoon (12:00 PM - 3:00 PM)" className="bg-[#191512] text-white">
                    Afternoon (12:00 PM - 3:00 PM)
                  </option>
                  <option value="Evening (3:30 PM - 6:30 PM)" className="bg-[#191512] text-white">
                    Evening (3:30 PM - 6:30 PM)
                  </option>
                </select>
              </div>
            </div>

            {/* Row 3: Name */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#D8D0C5] mb-2">
                Your Name (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Bukola, Queen, or Sarah"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-[#191512] border border-[#C59A3F]/35 rounded-2xl px-4 py-3.5 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#DFC07A]"
              />
            </div>

            {/* Direct 1-Tap Booking CTA */}
            <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={getWhatsAppBookingLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-primary w-full flex-1"
              >
                <MessageCircle className="w-4 h-4 fill-[#0B0908] shrink-0" />
                <span>Book on WhatsApp (0813 894 8285)</span>
              </a>

              <a
                href="tel:+2348138948285"
                className="btn-luxury-secondary w-full sm:w-auto"
              >
                <Phone className="w-3.5 h-3.5 text-[#DFC07A] shrink-0" />
                <span>Call Studio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
