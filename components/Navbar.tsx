"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, MapPin, Menu, X, Star, Sparkles } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    const checkOpen = () => {
      const now = new Date();
      // Lagos is UTC+1
      const lagosHours = (now.getUTCHours() + 1) % 24;
      setIsOpenNow(lagosHours >= 8 && lagosHours < 19);
    };
    checkOpen();
    const interval = setInterval(checkOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Editorial Top Luxury Bar */}
      <div className="bg-[#070605] text-[#D8D0C5] text-xs py-2 px-4 border-b border-[#241F1A]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-[11px] sm:text-xs">
              <span className={`w-2 h-2 rounded-full shrink-0 ${isOpenNow ? "bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" : "bg-[#C59A3F]"}`} />
              <span className="text-[#FAF7F2]">{isOpenNow ? "Studio Open (Eyita)" : "Opens 8:00 AM"}</span>
            </span>
            <span className="text-[#453D35] hidden md:inline">•</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-[#B5ABA0] text-xs">
              <MapPin className="w-3 h-3 text-[#C59A3F] shrink-0" />
              24 Oguntuga St, Eyita, Ikorodu
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 text-[#B5ABA0]">
            <a
              href="tel:+2348138948285"
              className="inline-flex items-center gap-1.5 hover:text-[#DFC07A] transition-colors text-[11px] sm:text-xs"
            >
              <Phone className="w-3 h-3 text-[#C59A3F] shrink-0" />
              <span className="font-semibold text-[#FAF7F2]">0813 894 8285</span>
            </a>
            <span className="text-[#453D35] hidden sm:inline">•</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[#FAF7F2] text-xs">
              <Star className="w-3.5 h-3.5 fill-[#C59A3F] text-[#C59A3F] shrink-0" />
              <span className="font-bold text-[#DFC07A]">5.0</span>
              <span className="text-[#8F877E]">(11 Reviews)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#0B0908]/95 backdrop-blur-xl border-b border-[#C59A3F]/20 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between gap-3">
          {/* Brand Wordmark */}
          <a href="#" className="flex flex-col group shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#FAF7F2] group-hover:text-[#DFC07A] transition-colors">
                beautebyzee_
              </span>
              <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#C59A3F] shrink-0 animate-pulse" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C59A3F] font-semibold -mt-0.5">
              Haute Artistry & Gele • Ikorodu
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-[#D8D0C5]">
            <a href="#services" className="hover:text-[#DFC07A] transition-colors">
              Services
            </a>
            <a href="#lookbook" className="hover:text-[#DFC07A] transition-colors">
              Lookbook
            </a>
            <a href="#craft" className="hover:text-[#DFC07A] transition-colors">
              The Standard
            </a>
            <a href="#reviews" className="hover:text-[#DFC07A] transition-colors">
              Reviews
            </a>
            <a href="#location" className="hover:text-[#DFC07A] transition-colors">
              Studio
            </a>
          </nav>

          {/* Right Action: Shimmering Gold CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/2348138948285?text=Hello%20Zee!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20makeup%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav-whatsapp"
            >
              <MessageCircle className="w-4 h-4 text-[#0A0806] shrink-0 stroke-[2.2]" />
              <span>Book on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#FAF7F2] hover:bg-[#191512] transition-colors shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 shrink-0 text-[#DFC07A]" /> : <Menu className="w-6 h-6 shrink-0 text-[#DFC07A]" />}
          </button>
        </div>

        {/* Mobile Slide Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0F0D0B] border-b border-[#C59A3F]/30 px-6 py-6 space-y-4 shadow-2xl">
            <div className="flex flex-col space-y-3 text-xs font-semibold tracking-widest uppercase text-[#D8D0C5]">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#241F1A] hover:text-[#DFC07A]"
              >
                Services & Pricing
              </a>
              <a
                href="#lookbook"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#241F1A] hover:text-[#DFC07A]"
              >
                Melanin Lookbook
              </a>
              <a
                href="#craft"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#241F1A] hover:text-[#DFC07A]"
              >
                The Zee Standard
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#241F1A] hover:text-[#DFC07A]"
              >
                Client Reviews (5.0 ★)
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 hover:text-[#DFC07A]"
              >
                Studio & Callout
              </a>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/2348138948285?text=Hello%20Zee!%20I%20would%20like%20to%20book%20a%20makeup%20session."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-luxury-primary w-full"
              >
                <MessageCircle className="w-4 h-4 text-[#0A0806] shrink-0 stroke-[2.2]" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
