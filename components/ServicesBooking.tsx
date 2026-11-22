"use client";

import React, { useState } from "react";
import { Sparkles, Clock, ArrowRight } from "lucide-react";

export interface ServiceItem {
  id: string;
  name: string;
  category: "bridal" | "owambe" | "soft" | "gele";
  price: string;
  duration: string;
  badge?: string;
  tagline: string;
  image: string;
}

export const serviceCatalog: ServiceItem[] = [
  {
    id: "luxury-bridal",
    name: "Luxury Royal Bridal Glam",
    category: "bridal",
    price: "From ₦70,000",
    duration: "2.5 – 3 Hours",
    badge: "BRIDE FAVORITE",
    tagline: "Our signature royal bridal transformation. Engineered to look immaculate under 4K lenses, bright flashes, and endure all-day heat.",
    image: "https://images.unsplash.com/photo-1632948056627-41482f69c38c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "owambe-radiance",
    name: "Owambe & Party Radiance",
    category: "owambe",
    price: "₦25,000",
    duration: "1.5 Hours",
    badge: "PARTY ESSENTIAL",
    tagline: "Head-turning event glam with high-definition brows, sculpted cheekbones, and sweat-resistant velvet skin.",
    image: "https://images.unsplash.com/photo-1773848419719-eff31fedbe82?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "studio-soft",
    name: "Studio Soft & Birthday Glow",
    category: "soft",
    price: "₦20,000",
    duration: "1 Hour 15 Mins",
    badge: "STUDIO SPECIAL",
    tagline: "Skin-first minimalist glam for birthday photoshoots, graduation portraits, and romantic evening dinners.",
    image: "https://images.unsplash.com/photo-1632765866070-3fadf25d3d5b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "couture-gele",
    name: "Couture Gele Styling",
    category: "gele",
    price: "₦8,000",
    duration: "45 Mins",
    badge: "ARTISANAL GELE",
    tagline: "Sharp, architectural pleating for aso-oke, sego, or auto-gele fixing with comfortable, gentle temple framing.",
    image: "https://images.unsplash.com/photo-1785927926340-a81429686417?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "bridal-squad",
    name: "Bridal Train & Squad Rate",
    category: "bridal",
    price: "Custom Group Rate",
    duration: "Group Booking",
    badge: "SQUAD PACKAGE",
    tagline: "Harmonious, camera-ready glam for bridesmaids, mother of the bride, and sisters with coordinated scheduling.",
    image: "https://images.unsplash.com/photo-1785088601842-f60c16c7a3b8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "callout-service",
    name: "Home & Hotel Callout Service",
    category: "soft",
    price: "Service + Travel Fee",
    duration: "VIP On-Location",
    badge: "VIP CALLOUT",
    tagline: "Enjoy full luxury artistry in your home, hotel, or bridal suite anywhere in Ikorodu or across Lagos.",
    image: "https://images.unsplash.com/photo-1632948056627-41482f69c38c?q=80&w=800&auto=format&fit=crop",
  },
];

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export default function ServicesBooking({ onSelectService }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices =
    activeCategory === "all"
      ? serviceCatalog
      : serviceCatalog.filter((s) => s.category === activeCategory);

  const handleSelect = (name: string) => {
    if (onSelectService) {
      onSelectService(name);
    }
    const resEl = document.getElementById("reservation");
    if (resEl) {
      resEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#090807] border-b border-[#221c17] relative">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#E2B857]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header (Palm Spring Standard) */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="gold-tag">
            HAUTE GLAM MENU
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Curated Services &amp; Pricing
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
            Every appointment begins with personalized skin hydration and concludes with our signature 18-hour Lagos-proof lock.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 pt-6">
            {[
              { id: "all", label: "All Services" },
              { id: "bridal", label: "Bridal" },
              { id: "owambe", label: "Owambe" },
              { id: "soft", label: "Soft Glam" },
              { id: "gele", label: "Gele Styling" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                  activeCategory === tab.id
                    ? "bg-gradient-to-r from-[#B88B35] to-[#E2B857] text-zinc-950 border-[#E2B857] font-bold shadow-md"
                    : "bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 hover:text-white border-zinc-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Services Grid (Exact Palm Spring Food Card Standard) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-zinc-900/40 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-800 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col h-full hover:shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Card Image Header with Gold Badge */}
              <div className="relative h-56 w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                {service.badge && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#B88B35] to-[#E2B857] text-zinc-950 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {service.badge}
                  </div>
                )}
              </div>

              {/* Card Content Area */}
              <div className="p-6 md:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-serif text-lg md:text-xl font-bold text-white group-hover:text-[#E2B857] transition-colors duration-300">
                      {service.name}
                    </h3>
                    <span className="font-serif text-[#E2B857] font-bold text-lg whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                    {service.tagline}
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 font-medium flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#E2B857]" />
                    {service.duration}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleSelect(service.name)}
                    className="text-xs font-bold text-[#E2B857] hover:text-[#F3D78E] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Reserve Look</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
