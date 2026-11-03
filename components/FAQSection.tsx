"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I secure my appointment slot with Zee?",
    answer:
      "Simply choose your preferred service above and click 'Book on WhatsApp' or chat with Zee at 0813 894 8285. A commitment deposit of 40% confirms your exclusive time slot on the studio calendar, with the balance due on the day of glam.",
  },
  {
    question: "Do you travel for home or hotel service outside Ikorodu?",
    answer:
      "Yes! While our private studio is located at 24 Oguntuga Street, Eyita, Ikorodu, Zee travels across Lagos (Ikeja, Mainland, Lekki, Victoria Island, Ajah) and Ogun State for bridal parties, VIPs, and photoshoot sessions.",
  },
  {
    question: "Will my makeup stay intact in humid Lagos weather and dancing?",
    answer:
      "Absolutely. As highlighted in our 5-star client reviews, we specialize in sweat-resistant, waterproof techniques. We use oil-controlling skin prep, high-grade setting powders, and transfer-resistant sealers that keep your look fresh from 8 AM into the night.",
  },
  {
    question: "How should I prepare my skin before arrival?",
    answer:
      "Please arrive with a clean, cleansed face free of makeup or heavy heavy oils. Gently groom your eyebrows if needed, keep lips well hydrated with lip balm, and drink plenty of water. We will handle all professional toning, priming, and skin-prepping on your arrival.",
  },
  {
    question: "Does the booking include lashes and gele tying?",
    answer:
      "High-grade mink lashes and customized brow sculpting are included in all our full glam packages. Gele tying (aso-oke, sego, or fan pleating) is included in Bridal packages and can be added to any regular session for a small fee.",
  },
  {
    question: "Can I book very early in the morning for a wedding?",
    answer:
      "Yes. Our regular doors open at 8:00 AM, but we cater to early-bird wedding and photoshoot callouts as early as 5:30 AM or 6:00 AM upon advance request.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E2D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B88947] font-bold">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#151311]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#48433F]">
            Everything you need to know about our studio process, payments, and event day prep.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8E2D8] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#151311] hover:text-[#B88947] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#B88947] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#78716A] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#B88947]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#48433F] leading-relaxed border-t border-[#F0ECE4]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 bg-white rounded-2xl border border-[#E8E2D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg font-bold text-[#151311]">
              Have a special request or date in mind?
            </h4>
            <p className="text-xs text-[#78716A] mt-0.5">
              Zee is available on WhatsApp to answer your custom inquiries directly.
            </p>
          </div>
          <a
            href="https://wa.me/2348138948285?text=Hello%20Zee!%20I%20have%20a%20question%20about%20booking%20my%20session."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#151311] hover:bg-[#B88947] text-white px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Directly With Zee</span>
          </a>
        </div>
      </div>
    </section>
  );
}

