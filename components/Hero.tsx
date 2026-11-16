"use client";

import React from "react";
import { Star, MapPin, Calendar, ArrowRight, Sparkles, Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-28 border-b border-[#241F1A] bg-[#0B0908]">
      {/* Ambient luxury golden glow background lights */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#C59A3F]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-[#C59A3F]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Minimalist Action */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7">
            {/* High-fashion micro badge */}
            <div className="inline-flex items-center gap-2 bg-[#1A1613] border border-[#C59A3F]/35 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFC07A] shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#C59A3F] shrink-0 animate-pulse" />
              <span>Haute Bridal & Gele Atelier • Ikorodu, Lagos</span>
            </div>

            {/* Main Statement */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF7F2] leading-[1.04]">
              Flawless Melanin Artistry.{" "}
              <span className="italic font-normal block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#DFC07A] via-[#C59A3F] to-[#DFBE74]">
                Skin-melted & celebration-proof.
              </span>
            </h1>

            {/* Concise Editorial Copy */}
            <p className="text-base sm:text-lg text-[#C8C0B5] max-w-xl font-light leading-relaxed">
              Tailored specifically for rich African complexions. Zero flashback under bright photography, heat-resistant all-day hold, and regal couture gele sculpting.
            </p>

            {/* Three Refined Gold-Accented Pillars */}
            <div className="flex flex-wrap gap-3 py-1 text-xs text-[#FAF7F2] font-medium">
              <span className="inline-flex items-center gap-2 bg-[#171310] border border-[#C59A3F]/30 px-4 py-2 rounded-full shadow-sm">
                <Check className="w-3.5 h-3.5 text-[#DFC07A] shrink-0" />
                Zero Flashback Guarantee
              </span>
              <span className="inline-flex items-center gap-2 bg-[#171310] border border-[#C59A3F]/30 px-4 py-2 rounded-full shadow-sm">
                <Check className="w-3.5 h-3.5 text-[#DFC07A] shrink-0" />
                Sweat-Proof 18hr Hold
              </span>
              <span className="inline-flex items-center gap-2 bg-[#171310] border border-[#C59A3F]/30 px-4 py-2 rounded-full shadow-sm">
                <Check className="w-3.5 h-3.5 text-[#DFC07A] shrink-0" />
                Eyita Studio & Callouts
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3 w-full sm:w-auto">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-3 btn-gold-glow text-[#0B0908] px-9 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all group shrink-0"
              >
                <Calendar className="w-4 h-4 fill-[#0B0908] shrink-0" />
                <span>Reserve Your Date</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform shrink-0" />
              </a>

              <a
                href="#lookbook"
                className="inline-flex items-center justify-center gap-2 bg-[#171310] hover:bg-[#241F1A] text-[#FAF7F2] border border-[#C59A3F]/40 px-8 py-4 rounded-full font-semibold text-xs uppercase tracking-widest transition-all shrink-0"
              >
                <span>View The Lookbook</span>
              </a>
            </div>

            {/* Social Proof Snippet */}
            <div className="pt-4 border-t border-[#241F1A] w-full max-w-lg">
              <div className="flex items-center gap-3.5">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C59A3F] text-[#C59A3F] shrink-0" />
                  ))}
                </div>
                <div className="text-xs text-[#B5ABA0]">
                  <strong className="text-[#FAF7F2] font-semibold">5.0 Star Rating</strong> — &ldquo;The makeup was super good, blend with my skin and last for the day&rdquo; <span className="text-[#8F877E]">(Vibes Angel)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Full-Color Haute African Bridal Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative golden accent frame */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 border border-[#C59A3F]/40 rounded-3xl -z-10" />

              {/* Main Editorial Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#141110] aspect-[4/5] border border-[#C59A3F]/30 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1632948056627-41482f69c38c?q=80&w=1200&auto=format&fit=crop"
                  alt="Beauté by Zee - Royal Yoruba Bridal Glam with Green Gele"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0908]/90 via-[#0B0908]/20 to-transparent" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 left-5 right-5 gold-card p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-[#DFC07A] uppercase tracking-widest font-bold">
                        Signature Finish
                      </p>
                      <p className="font-serif text-lg font-bold text-[#FAF7F2]">
                        Emerald Yoruba Bridal Glow
                      </p>
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 bg-gradient-to-r from-[#DFC07A] to-[#C59A3F] text-[#0B0908] rounded-full uppercase tracking-wider shadow-sm">
                      100% Skin Match
                    </span>
                  </div>
                </div>
              </div>

              {/* Studio Location Floating Pill */}
              <div className="absolute -top-4 -left-4 bg-[#141110]/95 backdrop-blur-md py-2.5 px-4 rounded-2xl border border-[#C59A3F]/40 shadow-xl flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#DFC07A] shrink-0" />
                <span className="text-xs font-bold text-[#FAF7F2]">
                  Eyita, Ikorodu (Lagos)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
