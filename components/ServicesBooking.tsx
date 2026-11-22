"use client";

import React, { useState } from "react";
import { Check, Sparkles, Clock } from "lucide-react";

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
    tagline: "Our signature royal bridal transformation. Engineered to look immaculate under 4K lenses, bright flashes, and endure all-day heat.",
    featured: true,
    highlights: [
      "Custom skin hydration & waterproof foundation blend",
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
      "Transfer-proof 18-hour setting spray lock",
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
      "Feathered brows with ombre glossy brown lips",
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
    <section id="services" className="py-20 md:py-28 bg-[#090807] border-b border-[#221c17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="gold-tag">Transparent Luxury Pricing</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Curated Services &amp; Glam Menu
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed font-light">
            Every appointment begins with personalized skin hydration and concludes with our signature 18-hour Lagos-proof lock.
          </p>

          {/* Filter Pills (Palm Spring Standard) */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
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
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-gradient-to-r from-[#B88B35] to-[#E2B857] text-zinc-950 shadow-md font-bold"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-[#E2B857]/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (Palm Spring Food Card Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`palm-card p-7 sm:p-8 flex flex-col justify-between relative group ${
                selectedService === service.name
                  ? "border-[#E2B857] shadow-[0_0_25px_rgba(226,184,87,0.15)]"
                  : ""
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-[#B88B35] to-[#E2B857] text-zinc-950 text-[10px] font-bold rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  Client Favorite
                </div>
              )}

              <div>
                {/* Title & Price Header */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#E2B857] transition-colors">
                    {service.name}
                  </h3>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif text-xl font-bold text-[#E2B857]">
                    {service.price}
                  </span>
                  <span className="text-xs text-zinc-400 flex items-center gap-1.5 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                    <Clock className="w-3 h-3 text-[#E2B857]" />
                    {service.duration}
                  </span>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                  {service.tagline}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-8 pt-4 border-t border-zinc-800">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-[#E2B857] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Standardized Button on Every Card */}
              <button
                onClick={() => handleSelectService(service.name)}
                className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedService === service.name
                    ? "bg-gradient-to-r from-[#B88B35] to-[#E2B857] text-zinc-950 shadow-md"
                    : "bg-zinc-900 text-white hover:text-[#E2B857] border border-zinc-800 hover:border-[#E2B857]/40"
                }`}
              >
                {selectedService === service.name ? "Selected for Booking ✓" : "Select This Look"}
              </button>
            </div>
          ))}
        </div>

        {/* WhatsApp Reservation Suite (Clean Palm Spring Booking Architecture) */}
        <div
          id="booking"
          className="palm-card p-8 sm:p-12 max-w-3xl mx-auto border border-[#E2B857]/30 shadow-2xl"
        >
          <div className="text-center mb-10 space-y-2">
            <span className="gold-tag">Direct WhatsApp Reservation</span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Reserve Your Date with Zee
            </h3>
            <p className="text-zinc-400 text-sm font-light max-w-md mx-auto leading-relaxed">
              Select your appointment preferences below. It prepares an instant, courteous message sent directly to Zee at <strong className="text-[#E2B857]">0813 894 8285</strong>.
            </p>
          </div>

          <div className="space-y-5">
            {/* Row 1: Chosen Service & Location Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Chosen Look
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-[#E2B857]"
                >
                  {serviceCatalog.map((s) => (
                    <option key={s.id} value={s.name} className="bg-zinc-900 text-white">
                      {s.name} ({s.price})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Location Preference
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setLocationType("In-Studio (Eyita, Ikorodu)")}
                    className={`py-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      locationType.includes("In-Studio")
                        ? "bg-gradient-to-r from-[#B88B35] to-[#E2B857] text-zinc-950 font-bold"
                        : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
                    }`}
                  >
                    Eyita Studio
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocationType("Home / Hotel Callout Service")}
                    className={`py-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      locationType.includes("Home")
                        ? "bg-gradient-to-r from-[#B88B35] to-[#E2B857] text-zinc-950 font-bold"
                        : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
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
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-[#E2B857]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Preferred Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-[#E2B857]"
                >
                  <option value="Sunrise Callout (6:00 AM - 8:00 AM)" className="bg-zinc-900 text-white">
                    Sunrise Callout (6:00 AM - 8:00 AM) • Weddings
                  </option>
                  <option value="Morning (8:00 AM - 11:00 AM)" className="bg-zinc-900 text-white">
                    Morning (8:00 AM - 11:00 AM)
                  </option>
                  <option value="Afternoon (12:00 PM - 3:00 PM)" className="bg-zinc-900 text-white">
                    Afternoon (12:00 PM - 3:00 PM)
                  </option>
                  <option value="Evening (3:30 PM - 6:30 PM)" className="bg-zinc-900 text-white">
                    Evening (3:30 PM - 6:30 PM)
                  </option>
                </select>
              </div>
            </div>

            {/* Row 3: Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Your Name (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Bukola, Queen, or Sarah"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-[#E2B857]"
              />
            </div>

            {/* Two Consistent Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={getWhatsAppBookingLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full sm:flex-1 text-center"
              >
                Book on WhatsApp (0813 894 8285)
              </a>

              <a
                href="tel:+2348138948285"
                className="btn-outline w-full sm:w-auto text-center"
              >
                Call Studio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
