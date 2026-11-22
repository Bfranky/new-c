"use client";

import React from "react";
import { Star, MapPin, Calendar, ArrowRight, Sparkles, Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-28 border-b border-[#241F1A] bg-[#0B0908]">
      {/* Ambient luxury golden glow background lights */}
      <div className="absolute top-1/4 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#C59A3F]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#C59A3F]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Minimalist Action */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8">
            {/* High-fashion micro badge */}
            <div className="badge-gold max-w-full">
              <Sparkles className="w-3.5 h-3.5 text-[#C59A3F] shrink-0 animate-pulse" />
              <span className="truncate sm:whitespace-normal">Haute Bridal & Gele Atelier • Ikorodu</span>
            </div>

            {/* Main Statement */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#FAF7F2] leading-[1.1] sm:leading-[1.05] break-words">
              Flawless Melanin Artistry.{" "}
              <span className="italic font-normal block mt-1.5 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#DFC07A] via-[#C59A3F] to-[#DFBE74]">
                Skin-melted & celebration-proof.
              </span>
            </h1>

            {/* Concise Editorial Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-[#C8C0B5] max-w-xl font-light leading-relaxed">
              Tailored specifically for rich African complexions. Zero flashback under bright photography, heat-resistant all-day hold, and regal couture gele sculpting.
            </p>

            {/* Three Refined Gold-Accented Pillars */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 py-1 text-xs text-[#FAF7F2] font-medium w-full">
              <span className="pill-feature">
                <Check className="w-3.5 h-3.5 text-[#DFC07A] shrink-0" />
                Zero Flashback Guarantee
              </span>
              <span className="pill-feature">
                <Check className="w-3.5 h-3.5 text-[#DFC07A] shrink-0" />
                Sweat-Proof 18hr Hold
              </span>
              <span className="pill-feature">
                <Check className="w-3.5 h-3.5 text-[#DFC07A] shrink-0" />
                Eyita Studio & Callouts
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#booking"
                className="btn-luxury-primary w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4 fill-[#0B0908] shrink-0" />
                <span>Reserve Your Date</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="#lookbook"
                className="btn-luxury-secondary w-full sm:w-auto"
              >
                <span>View The Lookbook</span>
              </a>
            </div>

            {/* Social Proof Snippet */}
            <div className="pt-5 border-t border-[#241F1A] w-full max-w-lg">
              <div className="flex flex-wrap items-center gap-3">
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
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Outer decorative golden accent frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 border border-[#C59A3F]/40 rounded-3xl -z-10" />

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
                <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 gold-card p-3.5 sm:p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[10px] text-[#DFC07A] uppercase tracking-widest font-bold">
                        Signature Finish
                      </p>
                      <p className="font-serif text-base sm:text-lg font-bold text-[#FAF7F2]">
                        Emerald Yoruba Bridal Glow
                      </p>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 bg-gradient-to-r from-[#DFC07A] to-[#C59A3F] text-[#0B0908] rounded-full uppercase tracking-wider shadow-sm shrink-0">
                      100% Skin Match
                    </span>
                  </div>
                </div>
              </div>

              {/* Studio Location Floating Pill */}
              <div className="absolute -top-3 sm:-top-4 -left-2 sm:-left-4 bg-[#141110]/95 backdrop-blur-md py-2 px-3 sm:px-4 rounded-2xl border border-[#C59A3F]/40 shadow-xl flex items-center gap-2">
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
