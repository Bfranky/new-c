"use client";

import React, { useState } from "react";
import { X, ArrowUpRight, Sparkles, MessageCircle } from "lucide-react";

interface LookItem {
  id: number;
  title: string;
  category: "bridal" | "owambe" | "soft" | "gele";
  image: string;
  tag: string;
  desc: string;
}

const portfolioLooks: LookItem[] = [
  {
    id: 1,
    title: "Royal Yoruba Traditional Bride",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1632948056627-41482f69c38c?q=80&w=900&auto=format&fit=crop",
    tag: "Traditional Bridal",
    desc: "Emerald and coral aso-oke styling with flawless warm undertone match, sculpted lips, and royal gele pleating.",
  },
  {
    id: 2,
    title: "High-Fashion Owambe Glam",
    category: "owambe",
    image: "https://images.unsplash.com/photo-1773848419719-eff31fedbe82?q=80&w=900&auto=format&fit=crop",
    tag: "Owambe Glam",
    desc: "Striking cut-crease eyeshadow with rhinestone accents, sweat-proof velvet complexion, and contoured cheekbones.",
  },
  {
    id: 3,
    title: "Clean Birthday Glow & Gloss",
    category: "soft",
    image: "https://images.unsplash.com/photo-1632765866070-3fadf25d3d5b?q=80&w=900&auto=format&fit=crop",
    tag: "Soft Studio Glam",
    desc: "Skin-first lightweight coverage, feathered brows, and juicy ombré brown lips for milestone birthday shoots.",
  },
  {
    id: 4,
    title: "Golden Hour Editorial Radiance",
    category: "owambe",
    image: "https://images.unsplash.com/photo-1785088601842-f60c16c7a3b8?q=80&w=900&auto=format&fit=crop",
    tag: "Editorial Glam",
    desc: "Warm bronzed melanin finish with gilded accents, tailored for evening dinners, awards galas, and celebrations.",
  },
  {
    id: 5,
    title: "Architectural Gele & Velvet Noir",
    category: "gele",
    image: "https://images.unsplash.com/photo-1785927926340-a81429686417?q=80&w=900&auto=format&fit=crop",
    tag: "Gele Styling",
    desc: "Precision fan-pleated aso-oke gele with comfortable temple framing that stays crisp through 18 hours of dancing.",
  },
  {
    id: 6,
    title: "Skin-True Melanin Bridal Finish",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1632948056627-41482f69c38c?q=80&w=900&auto=format&fit=crop",
    tag: "HD Bridal Finish",
    desc: "Velvet skin preparation tailored to withstand 4K cameras, intense venue lighting, and tropical Lagos humidity.",
  },
];

export default function PortfolioGallery() {
  const [filter, setFilter] = useState<string>("all");
  const [activeModalLook, setActiveModalLook] = useState<LookItem | null>(null);

  const displayedLooks =
    filter === "all"
      ? portfolioLooks
      : portfolioLooks.filter((look) => look.category === filter);

  return (
    <section id="lookbook" className="py-24 md:py-32 bg-zinc-950/60 border-b border-[#221c17] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header (Palm Spring Standard) */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="gold-tag">
            VISUAL PORTFOLIO
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            The Melanin Lookbook
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
            Crafted exclusively for rich African complexions. Zero grey casts, zero heavy masks — pure, regal radiance.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 pt-6">
            {[
              { id: "all", label: "All Looks" },
              { id: "bridal", label: "Bridal" },
              { id: "owambe", label: "Owambe" },
              { id: "soft", label: "Soft Glam" },
              { id: "gele", label: "Gele" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                  filter === tab.id
                    ? "bg-gradient-to-r from-[#B88B35] to-[#E2B857] text-zinc-950 border-[#E2B857] font-bold shadow-md"
                    : "bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 hover:text-white border-zinc-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lookbook Grid (Palm Spring Gallery Architecture) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedLooks.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalLook(item)}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-900 hover:border-zinc-800 transition-all duration-500 shadow-xl cursor-pointer bg-zinc-950"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-zinc-950/85 backdrop-blur-md text-[#E2B857] text-[10px] font-bold uppercase tracking-wider rounded-full border border-zinc-800">
                  {item.tag}
                </span>
              </div>

              {/* Top Right Zoom Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-950/80 backdrop-blur-md text-[#E2B857] border border-zinc-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h3 className="font-serif text-xl font-bold leading-tight group-hover:text-[#E2B857] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-1 font-light mt-1.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeModalLook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="bg-[#12100E] rounded-3xl max-w-2xl w-full overflow-hidden border border-zinc-800 shadow-2xl relative">
              <button
                type="button"
                onClick={() => setActiveModalLook(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-zinc-950 text-zinc-300 border border-zinc-800 flex items-center justify-center hover:text-white transition-colors cursor-pointer"
                aria-label="Close lookbook modal"
              >
                <X className="w-4 h-4 shrink-0" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-[4/5] bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeModalLook.image}
                    alt={activeModalLook.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="p-7 sm:p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 text-[#E2B857] text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {activeModalLook.tag}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {activeModalLook.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {activeModalLook.desc}
                    </p>
                    <div className="pt-3 border-t border-zinc-900 space-y-2 text-xs text-zinc-300">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#E2B857] shrink-0" />
                        <span>Zero flashback under 4K camera flashes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#E2B857] shrink-0" />
                        <span>18-hour sweat-resistant setting lock</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <a
                      href={`https://wa.me/2348138948285?text=${encodeURIComponent(
                        `Hello Zee! I love this look from your lookbook: "${activeModalLook.title}". Could you check availability for my date?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold w-full text-center"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>Request on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
