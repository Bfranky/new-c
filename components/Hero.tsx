"use client";

import React from "react";
import { Star, MapPin, Calendar, ArrowRight, Sparkles, Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E8E1D5]">
      {/* Subtle ambient luxury warmth */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-[#F2ECE1] rounded-full blur-3xl opacity-60 -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Minimalist Action */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* High-fashion micro badge */}
            <div className="inline-flex items-center gap-2 bg-[#F2ECE1] border border-[#E8E1D5] px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0D0B0A]">
              <Sparkles className="w-3.5 h-3.5 text-[#C59A3F]" />
              <span>Haute Bridal & Gele Atelier • Ikorodu, Lagos</span>
            </div>

            {/* Main Statement */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0D0B0A] leading-[1.08]">
              Flawless Melanin Artistry.{" "}
              <span className="italic font-normal text-[#C59A3F] block mt-1">
                Skin-melted & celebration-proof.
              </span>
            </h1>

            {/* Concise Editorial Copy - Less Text */}
            <p className="text-base sm:text-lg text-[#5A534C] max-w-xl font-light leading-relaxed">
              Tailored specifically for rich African complexions. Zero flashback under bright photography, heat-resistant long wear, and sharp royal gele sculpting.
            </p>

            {/* Three Refined Pillars */}
            <div className="flex flex-wrap gap-3 py-1 text-xs text-[#0D0B0A] font-medium">
              <span className="inline-flex items-center gap-1.5 bg-white border border-[#E8E1D5] px-3 py-1.5 rounded-full">
                <Check className="w-3.5 h-3.5 text-[#C59A3F]" />
                Zero Flashback
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white border border-[#E8E1D5] px-3 py-1.5 rounded-full">
                <Check className="w-3.5 h-3.5 text-[#C59A3F]" />
                Sweat-Proof 18hr Hold
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white border border-[#E8E1D5] px-3 py-1.5 rounded-full">
                <Check className="w-3.5 h-3.5 text-[#C59A3F]" />
                Studio & Hotel Callout
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2.5 bg-[#0D0B0A] hover:bg-[#C59A3F] text-[#FAF7F2] px-8 py-4 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                <Calendar className="w-4 h-4 text-[#C59A3F]" />
                <span>Reserve Your Date</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#lookbook"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F2ECE1] text-[#0D0B0A] border border-[#E8E1D5] px-7 py-4 rounded-full font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <span>View The Lookbook</span>
              </a>
            </div>

            {/* Subtle Social Proof Pill */}
            <div className="pt-4 border-t border-[#E8E1D5] w-full max-w-lg">
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C59A3F] text-[#C59A3F]" />
                  ))}
                </div>
                <div className="text-xs text-[#5A534C]">
                  <strong className="text-[#0D0B0A] font-semibold">5.0 Star Rating</strong> — &ldquo;The makeup was super good, blend with my skin and last for the day&rdquo; <span className="text-[#8F877E]">(Vibes Angel)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stunning Bold Black Woman Editorial Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative golden accent frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 border border-[#C59A3F]/40 rounded-3xl -z-10" />

              {/* Main Editorial Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#141110] aspect-[4/5] border border-[#E8E1D5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1786529743690-93a4547bc26c?q=80&w=1000&auto=format&fit=crop"
                  alt="Beauté by Zee - High-fashion African bridal beauty"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A]/75 via-transparent to-transparent" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/95 backdrop-blur-md p-4 rounded-2xl border border-[#E8E1D5] shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-[#7A7269] uppercase tracking-wider font-semibold">
                        Signature Finish
                      </p>
                      <p className="font-serif text-lg font-bold text-[#0D0B0A]">
                        Skin-True Radiant Glow
                      </p>
                    </div>
                    <span className="text-[11px] font-semibold px-3 py-1 bg-[#0D0B0A] text-[#FAF7F2] rounded-full">
                      100% Skin Match
                    </span>
                  </div>
                </div>
              </div>

              {/* Studio Location Floating Pill */}
              <div className="absolute -top-3 -left-3 bg-[#FAF7F2] py-2 px-3.5 rounded-xl border border-[#E8E1D5] shadow-md flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C59A3F]" />
                <span className="text-xs font-semibold text-[#0D0B0A]">
                  Eyita, Ikorodu
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
