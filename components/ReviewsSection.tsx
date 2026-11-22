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
      text: "The makeup was super good, blend with my skin and last for the day. Zero flashback in all my professional photos.",
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
    <section id="reviews" className="py-24 md:py-32 bg-[#090807] border-b border-[#221c17] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header (Palm Spring Standard) */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="gold-tag">
            TESTIMONIALS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Words From Our Queens
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
            Every quote is authentic and unedited from our verified Google Business Profile in Eyita, Ikorodu.
          </p>

          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#E2B857] text-[#E2B857] shrink-0" />
              ))}
            </div>
            <span className="text-xs font-bold text-white tracking-wider ml-1">
              5.0 / 5.0 RATING
            </span>
          </div>
        </div>

        {/* 2x2 Clean Spacious Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/40 border border-zinc-900 rounded-2xl p-8 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E2B857] text-[#E2B857]" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#E2B857] font-semibold bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                    {rev.tag}
                  </span>
                </div>

                <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light italic mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#E2B857] transition-colors">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-zinc-500 font-light mt-0.5">
                    {rev.role}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
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
