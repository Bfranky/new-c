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
    <section id="craft" className="py-20 sm:py-24 bg-[#0E0C0A] border-b border-[#241F1A] scroll-mt-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-14 space-y-2.5">
          <span className="text-2xs uppercase tracking-ultra text-[#DFC07A] font-bold">
            Uncompromising Artistry
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF7F2]">
            The Zee Standard
          </h2>
          <p className="text-sm text-[#A8A199] font-light leading-relaxed">
            Every appointment is tailored to celebrate, elevate, and empower bold African queens.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="gold-card p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#28211A] to-[#14100D] text-[#DFC07A] border border-[#C59A3F]/40 flex items-center justify-center mb-6 group-hover:border-[#DFC07A] group-hover:shadow-[0_0_24px_rgba(197,154,63,0.35)] transition-all duration-300 shrink-0 shadow-md">
                    <Icon className="w-6 h-6 text-[#DFC07A] group-hover:scale-110 transition-transform duration-300 shrink-0 stroke-[2]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#FAF7F2] mb-3 group-hover:text-[#DFC07A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#B5ABA0] leading-relaxed font-light">
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
