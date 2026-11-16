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
    title: "High-Fashion Owambe Glam",
    category: "owambe",
    image: "https://images.unsplash.com/photo-1773848419719-eff31fedbe82?q=80&w=900&auto=format&fit=crop",
    tag: "Owambe Glam",
    desc: "Striking cut-crease eyeshadow with sweat-proof velvet complexion and contoured cheekbones.",
  },
  {
    id: 3,
    title: "Clean Birthday Glow & Gloss",
    category: "soft",
    image: "https://images.unsplash.com/photo-1632765866070-3fadf25d3d5b?q=80&w=900&auto=format&fit=crop",
    tag: "Soft Studio Glam",
    desc: "Skin-first lightweight coverage, feathered brows, and juicy ombre brown lips for birthday shoots.",
  },
  {
    id: 4,
    title: "Golden Hour Editorial Radiance",
    category: "owambe",
    image: "https://images.unsplash.com/photo-1785088601842-f60c16c7a3b8?q=80&w=900&auto=format&fit=crop",
    tag: "Editorial Glam",
    desc: "Warm bronzed melanin finish with gilded accents, perfect for evening dinners and high-profile galas.",
  },
  {
    id: 5,
    title: "Architectural Gele & Velvet Noir",
    category: "gele",
    image: "https://images.unsplash.com/photo-1785927926340-a81429686417?q=80&w=900&auto=format&fit=crop",
    tag: "Gele Styling",
    desc: "Precision fan-pleated aso-oke gele with comfortable temple framing that stays crisp through the night.",
  },
  {
    id: 6,
    title: "Sun-Kissed Golden Sculpt",
    category: "soft",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=900&auto=format&fit=crop",
    tag: "Sun-Kissed Glow",
    desc: "Zero flashback, true-to-skin match for rich melanin tones with soft smoky eyes and nude lips.",
  },
  {
    id: 7,
    title: "High-Definition Melanin Radiance",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=900&auto=format&fit=crop",
    tag: "HD Bridal Finish",
    desc: "Velvet matte skin preparation tailored to withstand 4K camera lenses and bright outdoor wedding lighting.",
  },
  {
    id: 8,
    title: "Haute Editorial Velvet Glam",
    category: "owambe",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=900&auto=format&fit=crop",
    tag: "Night Gala Look",
    desc: "Deep plum smoky eyes paired with sculpted bronzer and long-wear setting mist for VIP celebrations.",
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
    <section id="lookbook" className="py-20 sm:py-28 bg-[#0B0908] border-b border-[#241F1A] scroll-mt-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#DFC07A] font-bold">
              The Melanin Lookbook
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#FAF7F2]">
              Bold, Radiant & Unapologetic.
            </h2>
            <p className="text-sm text-[#A8A199] font-light leading-relaxed">
              Crafted exclusively for rich African complexions. Zero grey casts, zero heavy masks — just pure, regal radiance.
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
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === tab.id
                    ? "btn-gold-glow text-[#0B0908] font-bold"
                    : "bg-[#171310] text-[#B5ABA0] border border-[#241F1A] hover:border-[#C59A3F]/50 hover:text-white"
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
              className="group relative rounded-3xl overflow-hidden bg-[#141110] border border-[#C59A3F]/25 cursor-pointer shadow-xl hover:border-[#C59A3F]/70 transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Image Container with 4:5 Aspect Ratio */}
              <div className="aspect-[4/5] overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0908]/95 via-[#0B0908]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#141110]/90 backdrop-blur-md text-[#DFC07A] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#C59A3F]/35 shadow-md">
                    {item.tag}
                  </span>
                </div>

                {/* Inspect Icon on Hover */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0B0908]/80 backdrop-blur-md text-[#DFC07A] border border-[#C59A3F]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 shrink-0" />
                </div>

                {/* Bottom Title & Action */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-lg font-bold leading-tight text-[#FAF7F2] group-hover:text-[#DFC07A] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10">
                    <span className="text-[11px] text-[#A8A199] line-clamp-1 font-light">
                      {item.desc}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#DFC07A] shrink-0 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeModalLook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="bg-[#141110] rounded-3xl max-w-2xl w-full overflow-hidden border border-[#C59A3F]/40 shadow-2xl relative">
              {/* Close Button */}
              <button
                onClick={() => setActiveModalLook(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#0B0908] text-[#DFC07A] border border-[#C59A3F]/40 flex items-center justify-center hover:bg-[#C59A3F] hover:text-[#0B0908] transition-colors cursor-pointer"
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
                    <span className="inline-block px-3 py-1 bg-[#1F1A16] border border-[#C59A3F]/35 text-[#DFC07A] text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {activeModalLook.tag}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#FAF7F2]">
                      {activeModalLook.title}
                    </h3>
                    <p className="text-xs text-[#C8C0B5] font-light leading-relaxed">
                      {activeModalLook.desc}
                    </p>
                    <div className="pt-3 border-t border-[#241F1A] space-y-2 text-xs text-[#FAF7F2]">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#DFC07A] shrink-0" />
                        <span>Zero flashback under flash photography</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#DFC07A] shrink-0" />
                        <span>Sweat-resistant 18-hour hold setting lock</span>
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
                      className="w-full inline-flex items-center justify-center gap-2 btn-gold-glow text-[#0B0908] font-bold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4 fill-[#0B0908] shrink-0" />
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
