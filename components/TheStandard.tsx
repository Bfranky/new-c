"use client";

import React from "react";
import { Sparkles, ShieldCheck, Crown, Flame } from "lucide-react";

export default function TheStandard() {
  const stats = [
    { value: "5.0 ★", label: "GOOGLE RATING" },
    { value: "100%", label: "MELANIN MATCH ACCURACY" },
    { value: "18hr+", label: "LAGOS-PROOF HOLD" },
  ];

  const standards = [
    {
      icon: Sparkles,
      title: "Skin-True Melanin Matching",
      description:
        "Bespoke shade matching for deep, warm, golden, and olive undertones. Guaranteed zero chalky casts, zero ashy undertones, and zero camera flashback.",
    },
    {
      icon: Flame,
      title: "18-Hour Lagos-Proof Lock",
      description:
        "Waterproof and humidity-resistant setting technique that keeps your glam immaculate through intense celebration, dance floors, and tropical weather.",
    },
    {
      icon: Crown,
      title: "Couture Gele Sculpting",
      description:
        "Architectural fan pleating for aso-oke, sego, and auto-gele that stays sturdy and majestic all day with comfortable, gentle temple pressure.",
    },
    {
      icon: ShieldCheck,
      title: "Private Studio & Callout",
      description:
        "Relax in our private, air-conditioned vanity suite in Eyita, Ikorodu, or request an early-morning VIP hotel callout anywhere across Lagos.",
    },
  ];

  return (
    <section id="craft" className="py-20 md:py-28 bg-[#090807] border-b border-[#221c17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="gold-tag">Our Craft &amp; Standards</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            The Zee Standard of Melanin Artistry
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed font-light">
            Every session is a bespoke, unhurried transformation tailored to celebrate, elevate, and empower extraordinary African queens.
          </p>

          {/* Stats Row (Palm Spring Inspired) */}
          <div className="grid grid-cols-3 gap-4 pt-10 border-t border-[#221c17] mt-10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-serif text-2xl sm:text-4xl font-bold text-[#E2B857]">
                  {stat.value}
                </p>
                <p className="text-[10px] sm:text-xs text-zinc-400 tracking-widest uppercase mt-1 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="palm-card p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 text-[#E2B857] flex items-center justify-center mb-6 group-hover:border-[#E2B857]/40 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#E2B857] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">
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
