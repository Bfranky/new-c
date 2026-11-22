"use client";

import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#090807] pt-20 pb-16"
    >
      {/* Background Image with Cinematic Luxury Dark Overlay */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1632948056627-41482f69c38c?q=80&w=1920&auto=format&fit=crop"
          alt="Beauté by Zee - Haute African Bridal Artistry"
          className="w-full h-full object-cover object-top opacity-35"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090807] via-[#090807]/70 to-[#090807]/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#090807]/50 to-[#090807] opacity-90" />
      </div>

      {/* Centered Editorial Content (Palm Spring Architecture) */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 my-auto">
        <div className="space-y-4">
          <span className="font-serif text-[#E2B857] tracking-[0.25em] md:tracking-[0.35em] text-xs md:text-sm uppercase block font-semibold">
            Haute Bridal &amp; Gele Atelier • Eyita, Ikorodu
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none">
            BEAUTÉ BY ZEE
            <span className="block text-base sm:text-2xl md:text-3xl tracking-[0.3em] sm:tracking-[0.4em] text-[#E2B857] font-sans mt-4 font-semibold uppercase">
              Flawless Melanin Artistry
            </span>
          </h1>
        </div>

        <p className="max-w-2xl mx-auto text-zinc-300 text-sm md:text-lg leading-relaxed font-light">
          Tailored specifically for rich African complexions. Bespoke royal bridal glam, 18-hour celebration-proof hold, and architectural gele sculpting. Guaranteed zero flashback under 4K lenses.
        </p>

        {/* Centered CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a href="#reservation" className="btn-gold w-full sm:w-auto text-center">
            Reserve Your Date
          </a>
          <a href="#services" className="btn-outline w-full sm:w-auto text-center">
            Explore Services
          </a>
        </div>
      </div>

      {/* Discover More Indicator (Matching Palm Spring) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-semibold">
          Discover More
        </span>
        <div className="w-5 h-9 border border-zinc-800 rounded-full p-1 flex justify-center">
          <div className="w-1.5 h-1.5 bg-[#E2B857] rounded-full animate-bounce mt-1" />
        </div>
      </div>
    </section>
  );
}
