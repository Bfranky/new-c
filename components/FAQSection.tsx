"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

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
    <section id="faqs" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8E1D5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-12">
          <span className="text-[10px] uppercase tracking-[0.28em] text-[#C59A3F] font-bold">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D0B0A]">
            Frequently Asked
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8E1D5] overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif text-lg font-bold text-[#0D0B0A]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E8E1D5] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#0D0B0A] text-white border-[#0D0B0A]" : "text-[#7A7269]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#5A534C] font-light leading-relaxed border-t border-[#F2ECE1] pt-4">
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
