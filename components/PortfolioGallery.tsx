"use client";

import React, { useState } from "react";
import { Sparkles, MessageCircle, Eye, X, ArrowUpRight } from "lucide-react";

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
    desc: "Emerald aso-oke styling with flawless warm undertone match, sculpted lips, and royal gele pleating.",
  },
  {
    id: 2,
    title: "Couture White Wedding Bride",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1786529743690-93a4547bc26c?q=80&w=900&auto=format&fit=crop",
    tag: "White Wedding",
    desc: "Pearl-embellished bridal glow with luminous glass skin that looks breathtaking under church lights and flash.",
  },
  {
    id: 3,
    title: "High-Fashion Owambe Glam",
    category: "owambe",
    image: "https://images.unsplash.com/photo-1773848419719-eff31fedbe82?q=80&w=900&auto=format&fit=crop",
    tag: "Owambe Glam",
    desc: "Striking cut-crease eyeshadow with sweat-proof velvet complexion and contoured cheekbones.",
  },
  {
    id: 4,
    title: "Clean Birthday Glow & Gloss",
    category: "soft",
    image: "https://images.unsplash.com/photo-1632765866070-3fadf25d3d5b?q=80&w=900&auto=format&fit=crop",
    tag: "Soft Studio Glam",
    desc: "Skin-first lightweight coverage, feathered brows, and juicy ombre brown lips for shoots and birthdays.",
  },
  {
    id: 5,
    title: "Golden Hour Editorial Radiance",
    category: "owambe",
    image: "https://images.unsplash.com/photo-1785088601842-f60c16c7a3b8?q=80&w=900&auto=format&fit=crop",
    tag: "Editorial Glam",
    desc: "Warm bronzed melanin finish with gilded accents, perfect for evening dinners and high-profile galas.",
  },
  {
    id: 6,
    title: "Architectural Gele & Velvet Noir",
    category: "gele",
    image: "https://images.unsplash.com/photo-1785927926340-a81429686417?q=80&w=900&auto=format&fit=crop",
    tag: "Gele Styling",
    desc: "Precision fan-pleated aso-oke gele with comfortable temple framing that stays crisp through the night.",
  },
  {
    id: 7,
    title: "Pearl Crown Bridal Train",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1786529744126-c15f03a46300?q=80&w=900&auto=format&fit=crop",
    tag: "Bridal Train",
    desc: "Harmonious braided bridal look with dewy skin finish, designed for bridesmaids and court weddings.",
  },
  {
    id: 8,
    title: "Sun-Kissed Golden Sculpt",
    category: "soft",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=900&auto=format&fit=crop",
    tag: "Sun-Kissed Glow",
    desc: "Zero flashback, true-to-skin match for rich melanin tones with soft smoky eyes and nude lips.",
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
    <section id="lookbook" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8E1D5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#C59A3F] font-bold">
              The Melanin Lookbook
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0B0A]">
              Bold, Radiant & Unapologetic.
            </h2>
            <p className="text-sm text-[#5A534C] font-light">
              Crafted exclusively for African skin tones. No grey casts, no heavy masks — just pure, regal radiance.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Looks" },
              { id: "bridal", label: "Bridal" },
              { id: "owambe", label: "Owambe" },
              { id: "soft", label: "Soft Glam" },
              { id: "gele", label: "Gele" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${filter === tab.id
                    ? "bg-[#0D0B0A] text-[#FAF7F2] shadow-sm"
                    : "bg-white text-[#5A534C] border border-[#E8E1D5] hover:border-[#C59A3F]"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedLooks.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalLook(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#141110] border border-[#E8E1D5] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image Container with 4:5 Aspect Ratio */}
              <div className="aspect-[4/5] overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A]/85 via-[#0D0B0A]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-[#FAF7F2]/90 backdrop-blur-md text-[#0D0B0A] text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                    {item.tag}
                  </span>
                </div>

                {/* Inspect Icon on Hover */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-[#FAF7F2]" />
                </div>

                {/* Bottom Title & Action */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif text-lg font-bold leading-tight group-hover:text-[#DFBE74] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/15">
                    <span className="text-[11px] text-[#D8D0C3] line-clamp-1">
                      {item.desc}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#C59A3F] shrink-0 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeModalLook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full overflow-hidden border border-[#E8E1D5] shadow-2xl relative">
              {/* Close Button */}
              <button
                onClick={() => setActiveModalLook(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#0D0B0A] text-white flex items-center justify-center hover:bg-[#C59A3F] transition-colors cursor-pointer"
                aria-label="Close lookbook modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-[4/5] bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeModalLook.image}
                    alt={activeModalLook.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 bg-[#F2ECE1] border border-[#E8E1D5] text-[#0D0B0A] text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {activeModalLook.tag}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#0D0B0A]">
                      {activeModalLook.title}
                    </h3>
                    <p className="text-sm text-[#5A534C] font-light leading-relaxed">
                      {activeModalLook.desc}
                    </p>
                    <div className="pt-2 border-t border-[#E8E1D5] space-y-2 text-xs text-[#0D0B0A]">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#C59A3F]" />
                        <span>Zero flashback guaranteed under flash</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#C59A3F]" />
                        <span>Sweat-resistant 18-hour setting mist</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <a
                      href={`https://wa.me/2348138948285?text=${encodeURIComponent(
                        `Hello Zee! I love this look: "${activeModalLook.title}". Could you check availability for my date?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#0D0B0A] hover:bg-[#C59A3F] text-[#FAF7F2] py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 text-[#C59A3F]" />
                      <span>Request This Look on WhatsApp</span>
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
