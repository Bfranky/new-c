"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How early should I book my bridal date?",
      a: "For weddings and high-profile owambe celebrations, we recommend booking 2 to 6 weeks in advance to secure your preferred morning time slot. We also accept short-notice bookings based on weekly studio availability.",
    },
    {
      q: "Do you travel outside Ikorodu for home or hotel callouts?",
      a: "Yes! Zee frequently travels across Lagos Island (Lekki, VI, Ikoyi), Lagos Mainland (Ikeja, Surulere, Magodo), and interstate destinations. Travel fees are calculated transparently based on your venue location.",
    },
    {
      q: "Will my makeup flashback or look grey in professional photography?",
      a: "Never. We specialize exclusively in rich melanin complexions. Every foundation, concealer, and setting formula is color-tested under high-powered flash and camera lighting to guarantee a flawless, skin-like golden radiance.",
    },
    {
      q: "What is included with the Luxury Royal Bridal Glam?",
      a: "Our bridal package includes intensive skin prep, waterproof HD foundation blend, sculpted contours, premium mink lashes, royal gele tying (traditional or contemporary), an emergency touch-up kit, and dedicated timeline support.",
    },
    {
      q: "How do I secure my booking?",
      a: "Once you select your look and preferred time, tap the WhatsApp button to message Zee directly. Your date is locked in upon confirmation of your date and booking deposit.",
    },
  ];

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#0c0a09] border-b border-[#221c17] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="gold-tag">Got Questions?</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="palm-card overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#E2B857] text-zinc-950 border-transparent" : "text-zinc-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 text-sm text-zinc-400 font-light leading-relaxed border-t border-zinc-800 pt-5">
                    {faq.a}
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
