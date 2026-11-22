"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How early should I book my bridal date?",
      a: "For weddings and high-profile owambe celebrations, we recommend booking 2 to 6 weeks in advance to secure your preferred morning time slot. We also accept short-notice bookings based on weekly studio availability.",
    },
    {
      q: "Do you travel outside Ikorodu for home or hotel callouts?",
      a: "Yes! Zee travels with a complete professional vanity setup, portable lighting, and sanitation essentials to hotels, bridal suites, and residences across Ikorodu, Lagos Mainland, Lagos Island, and interstate destination venues.",
    },
    {
      q: "Will my makeup flashback or look grey in professional photography?",
      a: "Never. We use professional-grade silicone and waterproof formulas matched to warm, deep, golden, and olive African undertones with zero silica-heavy powders, ensuring your skin looks radiant and seamless under 4K lenses and bright studio flash.",
    },
    {
      q: "What is included with the Luxury Royal Bridal Glam?",
      a: "The bridal package includes personalized skin prep, custom waterproof foundation blending, couture gele styling (or bridal hair coordination), premium 3D mink lashes, and an emergency bridal touch-up kit.",
    },
    {
      q: "How do I secure my booking?",
      a: "Click any 'Reserve Your Date' or 'Book on WhatsApp' button to send your date and preferred look directly to Zee. A deposit secures your date on the studio calendar.",
    },
  ];

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#090807] border-b border-[#221c17] relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header (Palm Spring Standard) */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="gold-tag">
            GOT QUESTIONS?
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
            Everything you need to know about bridal dates, callouts, flashback prevention, and studio visits.
          </p>
        </div>

        {/* Accordion Cards */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-zinc-900/40 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-800 transition-all duration-300 shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif text-lg md:text-xl font-bold text-white">
                    {item.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 border-[#E2B857]/40 text-[#E2B857]" : "text-zinc-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-zinc-900/80">
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
