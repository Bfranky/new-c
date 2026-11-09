"use client";

import React from "react";
import { Sparkles, ShieldCheck, Crown, Flame } from "lucide-react";

export default function TheStandard() {
  const standards = [
    {
      icon: Sparkles,
      title: "Skin-True Melanin Matching",
      description: "Custom pigment blending for deep, warm, and olive African undertones. Zero chalky casts, zero grey flashback in photos.",
    },
    {
      icon: Flame,
      title: "18-Hour Lagos-Proof Hold",
      description: "Waterproof, sweat-resistant primers and setting lock designed to withstand dance floors, heat, and all-day celebration.",
    },
    {
      icon: Crown,
      title: "Couture Gele Sculpting",
      description: "Architectural fan pleating for aso-oke and auto-gele that stays sturdy and regal with comfortable temple pressure.",
    },
    {
      icon: ShieldCheck,
      title: "Private Studio & Callout",
      description: "Private air-conditioned suite in Eyita, Ikorodu or VIP on-location travel with professional ring lighting to your hotel.",
    },
  ];

  return (
    <section id="craft" className="py-16 sm:py-20 bg-white border-b border-[#E8E1D5] scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-[10px] uppercase tracking-[0.28em] text-[#C59A3F] font-bold">
            Uncompromising Quality
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D0B0A]">
            The Zee Standard
          </h2>
          <p className="text-sm text-[#5A534C] font-light">
            Luxury artistry tailored to celebrate and empower bold Black women.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D5] hover:border-[#C59A3F]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white text-[#C59A3F] border border-[#E8E1D5] flex items-center justify-center mb-4 group-hover:bg-[#C59A3F] group-hover:text-white transition-colors duration-300 shrink-0">
                    <Icon className="w-5 h-5 shrink-0" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0D0B0A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5A534C] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
