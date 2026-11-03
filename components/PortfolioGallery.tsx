"use client";

import React, { useState } from "react";
import { MessageCircle, Eye, X, Sparkles } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  category: "bridal" | "owambe" | "soft" | "gele";
  image: string;
  tag: string;
  desc: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Radiant Yoruba Traditional Bride",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop",
    tag: "Traditional Bridal",
    desc: "Warm honey undertone match with high-definition brows, sculpted lips, and emerald aso-oke styling.",
  },
  {
    id: 2,
    title: "Velvet Matte Owambe Glam",
    category: "owambe",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop",
    tag: "Owambe Guest",
    desc: "Sweat-proof velvet skin, cut crease eyeshadow with gold foil pigments, and structured nude lips.",
  },
  {
    id: 3,
    title: "Minimalist 'Clean Girl' Birthday Glow",
    category: "soft",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=900&auto=format&fit=crop",
    tag: "Soft Studio Glam",
    desc: "Skin-like lightweight coverage, feathery brows, soft peach blush, and high-shine gloss.",
  },
  {
    id: 4,
    title: "Pleated Auto-Gele & Royal Blue Finish",
    category: "gele",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=900&auto=format&fit=crop",
    tag: "Gele Styling",
    desc: "Architectural fan-pleated aso-oke gele with sturdy framing and comfortable temple pressure.",
  },
  {
    id: 5,
    title: "White Wedding Pearl Bridal Look",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop",
    tag: "White Wedding",
    desc: "Timeless, luminous bridal aesthetic that looks ethereal under bright church flash and camera lights.",
  },
  {
    id: 6,
    title: "Golden Hour Photoshoot Glam",
    category: "soft",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=900&auto=format&fit=crop",
    tag: "Photoshoot",
    desc: "Warm bronze sculpting with bronzed collarbone highlight, perfect for outdoor evening parties.",
  },
];

export default function PortfolioGallery() {
  const [filter, setFilter] = useState<string>("all");
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const displayedItems = filter === "all"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-white border-b border-[#E8E2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B88947] font-bold">
              The Zee Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#151311]">
              Flawless Skin In Person & On Camera
            </h2>
            <p className="text-sm sm:text-base text-[#48433F]">
              Real work on Nigerian skin tones. No heavy filters, no unnatural grey casts — just breathtaking dimension.
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
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                  filter === btn.id
                    ? "bg-[#151311] text-white"
                    : "bg-[#FAF8F5] text-[#48433F] border border-[#E8E2D8] hover:border-[#B88947]"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#E8E2D8] hover:border-[#B88947]/70 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E8E2D8]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#151311]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setActiveModalItem(item)}
                    className="p-3 bg-white text-[#151311] rounded-full hover:bg-[#B88947] hover:text-white transition-colors shadow-lg"
                    aria-label="View look details"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <a
                    href={`https://wa.me/2348138948285?text=${encodeURIComponent(`Hello Zee! I love this look on your portfolio: "${item.title}". Can we do this for my event?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#151311] text-white rounded-full hover:bg-[#B88947] transition-colors shadow-lg"
                    aria-label="Request this look on WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>

                <div className="absolute top-3 left-3 bg-[#151311]/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {item.tag}
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#151311] group-hover:text-[#B88947] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#78716A] mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E8E2D8] flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalItem(item)}
                    className="text-xs font-semibold text-[#151311] hover:text-[#B88947] transition-colors"
                  >
                    View Details
                  </button>
                  <a
                    href={`https://wa.me/2348138948285?text=${encodeURIComponent(`Hello Zee! I would like to book this look: "${item.title}".`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#B88947] hover:underline inline-flex items-center gap-1"
                  >
                    Request Look →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for look details */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 bg-[#151311]/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#FAF8F5] rounded-3xl max-w-xl w-full border border-[#E8E2D8] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95">
              <div className="relative aspect-[4/3] bg-[#E8E2D8]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-cover object-top"
                />
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B88947]">
                    {activeModalItem.tag}
                  </span>
                  <span className="text-xs text-[#78716A]">Beauté by Zee Portfolio</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#151311]">
                  {activeModalItem.title}
                </h3>
                <p className="text-sm text-[#48433F] leading-relaxed">
                  {activeModalItem.desc}
                </p>

                <div className="pt-4 border-t border-[#E8E2D8] flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/2348138948285?text=${encodeURIComponent(`Hello Zee! I want to book this exact style: "${activeModalItem.title}". What is the availability?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#151311] hover:bg-[#B88947] text-white py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book This Look on WhatsApp
                  </a>
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="border border-[#E8E2D8] text-[#151311] py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

