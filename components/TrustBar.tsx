"use client";

import React from "react";
import { Sparkles, ShieldCheck, Clock, Award, Compass } from "lucide-react";

export default function TrustBar() {
  const highlights = [
    {
      icon: Award,
      title: "5.0 ★ Rated Beautician",
      description: "11 verified Google reviews from happy clients across Lagos.",
    },
    {
      icon: Sparkles,
      title: "Skin-True Color Blending",
      description: "Zero flashback, heat-resistant, and tailored to your undertone.",
    },
    {
      icon: Compass,
      title: "Studio + Home Service",
      description: "Private Eyita studio or we travel directly to your hotel/venue.",
    },
    {
      icon: Clock,
      title: "Early Callouts Available",
      description: "Opens 8:00 AM daily with sunrise bookings for weddings.",
    },
  ];

  return (
    <section className="bg-white border-b border-[#E8E2D8] py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] hover:border-[#B88947]/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F6EFE6] text-[#B88947] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-[#151311] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#78716A] mt-1 leading-relaxed">
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

