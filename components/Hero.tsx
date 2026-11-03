"use client";

import React from "react";
import { Star, MapPin, Calendar, CheckCircle2, ArrowRight, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-[#E8E2D8]">
      {/* Subtle background ambient warmth */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5EFE6] rounded-full blur-3xl opacity-70 -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 bg-[#F6EFE6] border border-[#E8E2D8] text-[#151311] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <span className="flex items-center text-[#B88947]">
                <Heart className="w-3.5 h-3.5 fill-[#B88947]" />
              </span>
              <span>Women-Owned Makeup Studio • Eyita, Ikorodu</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#151311] leading-[1.12]">
              Makeup that melts into your skin &{" "}
              <span className="italic font-normal text-[#B88947] underline decoration-[#B88947]/30 decoration-2 underline-offset-8">
                lasts the whole day.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#48433F] max-w-xl leading-relaxed">
              Experience flawless, flashback-free beauty by Zee. From royal bridal glam and owambe party looks to clean everyday soft glam, we tailor every shade to match your natural undertone perfectly.
            </p>

            {/* Key Assurance Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full py-1 text-xs sm:text-sm text-[#151311] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B88947] shrink-0" />
                <span>Zero flashback</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B88947] shrink-0" />
                <span>Sweat-resistant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B88947] shrink-0" />
                <span>Studio + Home service</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2.5 bg-[#151311] hover:bg-[#B88947] text-white px-7 py-4 rounded-full font-semibold text-sm tracking-wide transition-all shadow-md hover:shadow-lg group"
              >
                <Calendar className="w-4 h-4 text-[#FAF8F5]" />
                <span>Book Your Session</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 bg-[#FFFFFF] hover:bg-[#F6EFE6] text-[#151311] border border-[#E8E2D8] px-6 py-4 rounded-full font-semibold text-sm transition-all"
              >
                <span>View Real Client Looks</span>
              </a>
            </div>

            {/* Real Review Proof Card */}
            <div className="pt-3 border-t border-[#E8E2D8] w-full max-w-lg">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#B88947] text-white flex items-center justify-center font-bold text-xs">
                    VA
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#2A2623] text-white flex items-center justify-center font-bold text-xs">
                    DA
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#D6CEC4] text-[#151311] flex items-center justify-center font-bold text-xs">
                    GA
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#B88947] text-[#B88947]" />
                      ))}
                    </div>
                    <span className="font-bold text-sm text-[#151311]">5.0 Star Rating</span>
                  </div>
                  <p className="text-xs text-[#78716A]">
                    &ldquo;The makeup was super good, blend with my skin and last for the day&rdquo; — Vibes Angel
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Portrait with Verified Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative border frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 border-2 border-[#B88947]/30 rounded-3xl -z-10" />

              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#E8E2D8] aspect-[4/5] border border-[#E8E2D8]">
                {/* High-quality Nigerian bridal / beauty portrait */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop"
                  alt="Beauté by Zee professional makeup client in Ikorodu"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#151311]/60 via-transparent to-transparent" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F5]/95 backdrop-blur-md p-4 rounded-2xl border border-[#E8E2D8] shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[#78716A] uppercase tracking-wider font-semibold">
                        Signature Finish
                      </p>
                      <p className="font-serif text-lg font-bold text-[#151311]">
                        Skin-Like HD Glow
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-[#151311] text-[#FAF8F5] rounded-full">
                      100% Skin Match
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Google Maps Location Tag */}
              <div className="absolute -top-4 -left-4 bg-[#FAF8F5] p-3 rounded-2xl border border-[#E8E2D8] shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#B88947]/10 flex items-center justify-center text-[#B88947]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-[#78716A] font-semibold uppercase tracking-wider">
                    Studio Address
                  </p>
                  <p className="text-xs font-bold text-[#151311]">
                    Eyita, Ikorodu (Lagos)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

