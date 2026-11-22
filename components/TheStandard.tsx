"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function TheStandard() {
  const stats = [
    { value: "5.0 ★", label: "CUSTOMER RATING" },
    { value: "100%", label: "SKIN-TRUE MATCH" },
    { value: "18hr+", label: "LAGOS-PROOF HOLD" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-zinc-950/60 border-b border-[#221c17] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#E2B857]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Authentic African Bridal Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[380px] sm:h-[460px] md:h-[520px] w-full rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1785927926340-a81429686417?q=80&w=1200&auto=format&fit=crop"
                alt="Beauté by Zee - High-Fashion Melanin Artistry"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090807]/90 via-transparent to-transparent" />

              {/* Floating Bottom Badge (Palm Spring Standard) */}
              <div className="absolute bottom-6 left-6 right-6 bg-zinc-950/90 backdrop-blur-md p-5 rounded-2xl border border-zinc-800">
                <span className="font-serif text-[#E2B857] text-[10px] tracking-[0.25em] uppercase font-bold block mb-1">
                  THE ZEE EXPERIENCE
                </span>
                <p className="text-zinc-300 text-xs leading-relaxed font-light">
                  Bespoke luxury artistry tailored to celebrate and empower bold African queens.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Identity Narrative & Stats */}
          <div className="lg:col-span-7 space-y-6">
            <span className="gold-tag">
              OUR IDENTITY
            </span>

            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              A Melanin Sanctuary in Ikorodu
            </h2>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light mb-4">
              At <strong className="text-white font-semibold">Beauté by Zee</strong>, we believe that makeup is not a mask—it is an intimate ceremony of honoring your natural skin undertones, facial architecture, and cultural royalty.
            </p>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light mb-8">
              Located in the heart of Eyita, Ikorodu, we have crafted a calm, air-conditioned beauty sanctuary. Whether you are walking down the aisle, hosting high-profile owambe celebrations, or stepping into a milestone birthday shoot, Zee guarantees zero grey cast, zero chalky flashback, and 18-hour sweat resistance.
            </p>

            {/* 3 Stats (Palm Spring Standard) */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-900 pb-2">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="font-serif text-2xl sm:text-4xl font-bold text-[#E2B857]">
                    {stat.value}
                  </p>
                  <p className="text-[10px] tracking-widest text-zinc-500 uppercase mt-1 font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a href="#services" className="btn-gold inline-flex">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
