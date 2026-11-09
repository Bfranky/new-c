"use client";

import React from "react";
import { Star, CheckCircle, Heart, Quote } from "lucide-react";

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
    <section id="reviews" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8E1D5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <span className="text-[10px] uppercase tracking-[0.28em] text-[#C59A3F] font-bold">
            100% 5-Star Reputation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0B0A]">
            Words From Our Queens
          </h2>
          <p className="text-sm text-[#5A534C] font-light">
            Every quote is authentic and unedited from our Google Business Profile in Eyita, Ikorodu.
          </p>

          <div className="flex items-center justify-center gap-1.5 pt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#C59A3F] text-[#C59A3F]" />
            ))}
            <span className="text-xs font-bold text-[#0D0B0A] ml-1">5.0 / 5.0 Rating</span>
          </div>
        </div>

        {/* Minimalist Editorial Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-[#E8E1D5] hover:border-[#C59A3F]/50 transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#FAF7F2] border border-[#E8E1D5] rounded-full text-[#C59A3F]">
                    {rev.tag}
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C59A3F] text-[#C59A3F]" />
                    ))}
                  </div>
                </div>

                <p className="font-serif text-lg text-[#0D0B0A] leading-relaxed italic mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#E8E1D5]">
                <div>
                  <h4 className="font-semibold text-xs text-[#0D0B0A]">
                    {rev.author}
                  </h4>
                  <p className="text-[11px] text-[#7A7269]">
                    {rev.role}
                  </p>
                </div>
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
