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
      a: "Never. We specialize exclusively in rich melanin complexions. Every foundation, concealer, and powder formula is color-tested under high-powered flash and camera lighting to guarantee a flawless, skin-like golden radiance.",
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
    <section id="faqs" className="py-20 sm:py-28 bg-[#0B0908] border-b border-[#241F1A] scroll-mt-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center space-y-3 mb-14">
          <span className="text-2xs uppercase tracking-ultra text-[#DFC07A] font-bold">
            Got Questions?
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#FAF7F2]">
            Frequently Asked
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="gold-card rounded-2xl overflow-hidden transition-all duration-300 shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#FAF7F2]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 btn-gold-glow text-[#0B0908] border-transparent"
                        : "bg-[#191512] text-[#DFC07A] border-[#C59A3F]/35"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 shrink-0" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 text-xs sm:text-sm text-[#C8C0B5] font-light leading-relaxed border-t border-[#241F1A] pt-5">
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
