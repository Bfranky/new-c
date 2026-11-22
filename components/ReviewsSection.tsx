"use client";

import React from "react";
import { Star, CheckCircle } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      author: "Bukola Adeyemi",
      role: "Traditional Wedding Bride",
      text: "Zee was at my hotel in Ikorodu by 6:30am sharp for my traditional wedding. My makeup didn't budge despite all the dancing and heat. Zee is the only artist I trust in Ikorodu!",
      tag: "Punctual Bride Glam",
    },
    {
      author: "Vibes Angel",
      role: "Verified Google Review",
      text: "The makeup was super good, blend with my skin and last for the day.",
      tag: "Skin-True Match",
    },
    {
      author: "Gift Anyanwu",
      role: "Owambe Event Guest",
      text: "Exceptional service! Very gentle with the face and polite. The eye makeup and gele tying were top tier. Got so many compliments at the event.",
      tag: "Gentle Artistry & Gele",
    },
    {
      author: "Dewunmi Arike",
      role: "Verified Client",
      text: "Own one zee of Lagos ❤️ she is the best 🔥🤍 Never disappoints with my glam.",
      tag: "Celebrity Touch",
    },
  ];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#0B0908] border-b border-[#241F1A] scroll-mt-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-14">
          <span className="text-2xs uppercase tracking-ultra text-[#DFC07A] font-bold">
            100% 5-Star Reputation
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#FAF7F2]">
            Words From Our Queens
          </h2>
          <p className="text-sm text-[#A8A199] font-light leading-relaxed">
            Every review is unedited from our Google Business Profile in Eyita, Ikorodu.
          </p>

          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C59A3F] text-[#C59A3F] shrink-0" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#DFC07A] ml-1">5.0 / 5.0 Google Rating</span>
          </div>
        </div>

        {/* Minimalist Editorial Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="gold-card rounded-3xl p-8 sm:p-9 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="text-3xs font-bold uppercase tracking-wider px-3 py-1 bg-[#241F1A] border border-[#C59A3F]/30 rounded-full text-[#DFC07A]">
                    {rev.tag}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C59A3F] text-[#C59A3F] shrink-0" />
                    ))}
                  </div>
                </div>

                <p className="font-serif text-xl sm:text-2xl text-[#FAF7F2] leading-relaxed italic mb-8">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between pt-5 border-t border-[#241F1A]">
                <div>
                  <h4 className="font-bold text-sm text-[#FAF7F2]">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-[#8F877E]">
                    {rev.role}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-3xs font-bold uppercase tracking-wider shrink-0">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Google Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
