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
      {/* Editorial Top Announcement Ribbon */}
      <div className="bg-[#0D0B0A] text-[#FAF7F2] text-[11px] py-2 px-4 border-b border-[#24201D] tracking-wide">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isOpenNow ? "bg-emerald-400 animate-pulse" : "bg-[#C59A3F]"}`} />
              {isOpenNow ? "Eyita Studio Open Now" : "Studio Opens 8:00 AM"}
            </span>
            <span className="text-[#3A3430] hidden md:inline">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-[#C8C0B5]">
              <MapPin className="w-3 h-3 text-[#C59A3F] shrink-0" />
              24 Oguntuga St, Eyita, Ikorodu
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#C8C0B5]">
            <a
              href="tel:+2348138948285"
              className="inline-flex items-center gap-1 hover:text-[#C59A3F] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C59A3F] shrink-0" />
              <span className="font-semibold text-[#FAF7F2]">0813 894 8285</span>
            </a>
            <span className="text-[#3A3430] hidden sm:inline">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[#FAF7F2]">
              <Star className="w-3 h-3 fill-[#C59A3F] text-[#C59A3F] shrink-0" />
              <span className="font-semibold">5.0</span>
              <span className="text-[#8F877E]">(11 Google Reviews)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Luxury Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E1D5] transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Brand Wordmark */}
          <a href="#" className="flex flex-col group shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#0D0B0A] group-hover:text-[#C59A3F] transition-colors">
                beautebyzee_
              </span>
              <Sparkles className="w-4 h-4 text-[#C59A3F] shrink-0" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.28em] text-[#7A7269] font-medium -mt-0.5">
              Haute Artistry & Gele • Ikorodu
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[12px] font-semibold tracking-wider uppercase text-[#4A433D]">
            <a href="#services" className="hover:text-[#C59A3F] transition-colors">
              Services
            </a>
            <a href="#lookbook" className="hover:text-[#C59A3F] transition-colors">
              Lookbook
            </a>
            <a href="#craft" className="hover:text-[#C59A3F] transition-colors">
              The Standard
            </a>
            <a href="#reviews" className="hover:text-[#C59A3F] transition-colors">
              Reviews
            </a>
            <a href="#location" className="hover:text-[#C59A3F] transition-colors">
              Studio
            </a>
          </nav>

          {/* Right Action: Gold Contrast WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/2348138948285?text=Hello%20Zee!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20makeup%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C59A3F] hover:bg-[#B3872F] text-[#0D0B0A] font-bold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-sm shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-[#0D0B0A] shrink-0" />
              <span>Book on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#0D0B0A] hover:bg-[#F2ECE1] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 shrink-0" /> : <Menu className="w-6 h-6 shrink-0" />}
          </button>
        </div>

        {/* Mobile Slide Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8E1D5] px-6 py-6 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3 text-sm font-semibold tracking-wider uppercase text-[#4A433D]">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E8E1D5]/60 hover:text-[#C59A3F]"
              >
                Services & Pricing
              </a>
              <a
                href="#lookbook"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E8E1D5]/60 hover:text-[#C59A3F]"
              >
                Editorial Lookbook
              </a>
              <a
                href="#craft"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E8E1D5]/60 hover:text-[#C59A3F]"
              >
                The Zee Standard
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E8E1D5]/60 hover:text-[#C59A3F]"
              >
                Client Love (5.0 ★)
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#C59A3F]"
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
                className="w-full flex items-center justify-center gap-2 bg-[#C59A3F] text-[#0D0B0A] py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-[#0D0B0A] shrink-0" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
