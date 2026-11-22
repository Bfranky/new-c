"use client";

import React from "react";
import { Star, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 border-b border-[#221c17] bg-[#090807]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#E2B857]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-[#E2B857]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="col-span-1 lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7">
            {/* Overline Tag */}
            <span className="gold-tag">
              Haute Bridal &amp; Gele Atelier • Ikorodu, Lagos
            </span>

            {/* Main Statement */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] break-words">
              Flawless Melanin Artistry.{" "}
              <span className="block text-2xl sm:text-4xl md:text-5xl tracking-[0.15em] sm:tracking-[0.2em] text-[#E2B857] font-sans mt-3 font-semibold">
                SKIN-MELTED &amp; CELEBRATION-PROOF
              </span>
            </h1>

            {/* Concise Editorial Copy */}
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl font-light">
              Bespoke bridal glam and regal gele styling crafted specifically for rich African complexions. Engineered for zero flashback under camera flashes, 18-hour heat resistance, and true-to-skin radiance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#booking"
                className="btn-gold w-full sm:w-auto text-center"
              >
                Reserve Your Date
              </a>

              <a
                href="#lookbook"
                className="btn-outline w-full sm:w-auto text-center"
              >
                Explore Lookbook
              </a>
            </div>

            {/* Three Clean Value Points */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 text-xs text-zinc-400 font-medium">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2B857]" />
                Zero Flashback Guarantee
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2B857]" />
                Sweat-Proof 18hr Hold
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2B857]" />
                Studio &amp; Lagos Callouts
              </span>
            </div>

            {/* Social Proof Snippet */}
            <div className="pt-5 border-t border-[#221c17] w-full max-w-lg flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E2B857] text-[#E2B857] shrink-0" />
                ))}
              </div>
              <p className="text-xs text-zinc-400">
                <strong className="text-white font-semibold">5.0 Star Rating</strong> — &ldquo;The makeup was super good, blend with my skin and last for the day&rdquo; <span className="text-zinc-500">(Vibes Angel)</span>
              </p>
            </div>
          </div>

          {/* Right Column: African Bridal Portrait */}
          <div className="col-span-1 lg:col-span-5 relative w-full">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Outer decorative subtle gold hairline frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 border border-[#E2B857]/30 rounded-3xl -z-10" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#141110] aspect-[4/5] border border-zinc-800 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1632948056627-41482f69c38c?q=80&w=1200&auto=format&fit=crop"
                  alt="Beauté by Zee - Royal Yoruba Bridal Glam with Green Gele"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#090807]/90 via-transparent to-transparent" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 bg-zinc-950/90 backdrop-blur-md p-4 rounded-2xl border border-zinc-800">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[10px] text-[#E2B857] uppercase tracking-widest font-semibold">
                        Signature Finish
                      </p>
                      <p className="font-serif text-base sm:text-lg font-bold text-white">
                        Emerald Yoruba Bridal Glow
                      </p>
                    </div>
                    <span className="text-xs font-medium px-3 py-1 bg-[#E2B857]/15 text-[#E2B857] border border-[#E2B857]/30 rounded-full shrink-0">
                      100% Skin Match
                    </span>
                  </div>
                </div>
              </div>

              {/* Studio Location Floating Pill */}
              <div className="absolute -top-3 sm:-top-4 -left-2 sm:-left-3 bg-zinc-950/95 backdrop-blur-md py-2 px-3.5 rounded-full border border-zinc-800 shadow-xl flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E2B857] shrink-0" />
                <span className="text-xs font-medium text-white">
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
