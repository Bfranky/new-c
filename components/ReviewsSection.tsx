"use client";

import React from "react";
import { Star, CheckCircle, MessageSquareQuote, ExternalLink, Heart, ThumbsUp } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      author: "Vibes Angel",
      avatarBg: "bg-[#151311] text-[#FAF8F5]",
      rating: 5,
      date: "Verified Google Review",
      text: "The makeup was super good, blend with my skin and last for the day",
      ownerResponse: "Thanks ma’am for the review",
      tag: "Flawless Skin Blend",
    },
    {
      author: "Dewunmi Arike",
      avatarBg: "bg-[#B88947] text-white",
      rating: 5,
      date: "Verified Google Review",
      text: "Own one zee of Lagos ❤️💃she is the best🔥🤍 …",
      ownerResponse: "Awwwn thanks babe 😍 …",
      tag: "Best in Lagos",
    },
    {
      author: "Gift Anyanwu",
      avatarBg: "bg-[#48433F] text-white",
      rating: 5,
      date: "Verified Google Review",
      text: "Exceptional service! Very gentle with the face and polite. The eye makeup and gele tying were top tier. Got so many compliments at the event.",
      ownerResponse: "Thank you so much Gift! You looked stunning!",
      tag: "Gentle & Professional",
    },
    {
      author: "Bukola Adeyemi",
      avatarBg: "bg-[#2A2623] text-white",
      rating: 5,
      date: "Verified Bride",
      text: "Zee was at my hotel in Ikorodu by 6:30am sharp for my traditional wedding. My makeup didn't budge despite all the dancing and heat. Zee is the only artist I trust in Ikorodu!",
      ownerResponse: "Congratulations once again Queen! Loved glamming you!",
      tag: "Punctual Bride Glam",
    },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E2D8] text-xs font-semibold uppercase tracking-wider text-[#B88947]">
            <Heart className="w-3.5 h-3.5 fill-[#B88947]" />
            Women-Owned • 100% 5-Star Reputation
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#151311]">
            Real Reviews From Real Clients
          </h2>
          <p className="text-sm sm:text-base text-[#48433F]">
            Every review is unedited from our Google Business Profile in Eyita, Ikorodu.
          </p>
        </div>

        {/* Big Google Rating Summary Card */}
        <div className="bg-white rounded-3xl border border-[#E8E2D8] p-6 sm:p-8 mb-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Score Block */}
            <div className="lg:col-span-4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-[#E8E2D8] pb-6 lg:pb-0 lg:pr-8">
              <div className="inline-block">
                <span className="font-serif text-6xl font-bold text-[#151311]">5.0</span>
                <span className="text-xl text-[#78716A] font-light"> / 5.0</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#B88947] text-[#B88947]" />
                ))}
              </div>
              <p className="text-sm font-semibold text-[#151311]">
                11 Verified Reviews on Google Maps
              </p>
              <p className="text-xs text-[#78716A] mt-1">
                beautebyzee_ MAKEUP ARTIST IN IKORODU
              </p>
            </div>

            {/* Middle Rating Bars */}
            <div className="lg:col-span-5 space-y-2">
              {[
                { stars: "5 Star", count: 11, pct: 100 },
                { stars: "4 Star", count: 0, pct: 0 },
                { stars: "3 Star", count: 0, pct: 0 },
                { stars: "2 Star", count: 0, pct: 0 },
                { stars: "1 Star", count: 0, pct: 0 },
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-3 text-xs text-[#48433F]">
                  <span className="w-12 font-medium shrink-0">{row.stars}</span>
                  <div className="flex-1 h-2 bg-[#FAF8F5] rounded-full overflow-hidden border border-[#E8E2D8]">
                    <div
                      className="h-full bg-[#B88947] rounded-full"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <span className="w-6 text-right font-medium text-[#151311] shrink-0">
                    {row.count}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Action Block */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=24+Oguntuga+Street,+Eyita,+Ikorodu,+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#151311] hover:bg-[#B88947] text-white px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <span>Write a Google Review</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[11px] text-[#78716A]">
                Local Business • Eyita, Ikorodu
              </span>
            </div>
          </div>
        </div>

        {/* Customer Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E2D8] hover:border-[#B88947]/60 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: User & Stars */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${rev.avatarBg}`}
                    >
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#151311] flex items-center gap-1.5">
                        {rev.author}
                        <CheckCircle className="w-3.5 h-3.5 text-[#B88947]" />
                      </h4>
                      <p className="text-[11px] text-[#78716A]">{rev.date}</p>
                    </div>
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#FAF8F5] text-[#B88947] border border-[#E8E2D8]">
                    {rev.tag}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B88947] text-[#B88947]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#151311] leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Owner Response Box */}
              {rev.ownerResponse && (
                <div className="mt-5 pt-4 border-t border-[#F0ECE4] bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E8E2D8]/70">
                  <p className="text-[11px] font-bold text-[#151311] flex items-center gap-1 mb-1">
                    <MessageSquareQuote className="w-3.5 h-3.5 text-[#B88947]" />
                    Response from Zee (Owner)
                  </p>
                  <p className="text-xs text-[#48433F] italic">
                    {rev.ownerResponse}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

