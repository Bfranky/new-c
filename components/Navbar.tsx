"use client";

import React, { useState } from "react";
import { MessageCircle, Menu, X, Sparkles, Phone, MapPin } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Subtle Luxury Notice Bar */}
      <div className="bg-[#0c0a09] text-zinc-400 text-xs py-2 px-4 border-b border-[#221c17] tracking-wider">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-zinc-200 font-medium">Eyita Studio Open Daily</span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-zinc-400">24 Oguntuga St, Eyita, Ikorodu</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+2348138948285"
              className="hover:text-[#E2B857] transition-colors text-zinc-300 font-semibold inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#E2B857]" />
              <span>0813 894 8285</span>
            </a>
            <span className="text-zinc-600 hidden md:inline">•</span>
            <span className="hidden md:inline text-zinc-400">5.0 ★ (11 Google Reviews)</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#090807]/95 backdrop-blur-xl border-b border-[#221c17] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Brand Wordmark */}
          <a href="#" className="flex flex-col group shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#E2B857] transition-colors">
                BEAUTÉ BY ZEE
              </span>
            </div>
            <span className="text-[10px] tracking-[0.35em] text-[#E2B857] uppercase font-sans mt-0.5 font-medium">
              HAUTE BRIDAL &amp; GELE ATELIER
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-zinc-300">
            <a href="#services" className="hover:text-[#E2B857] transition-colors">
              Services
            </a>
            <a href="#lookbook" className="hover:text-[#E2B857] transition-colors">
              Lookbook
            </a>
            <a href="#craft" className="hover:text-[#E2B857] transition-colors">
              The Standard
            </a>
            <a href="#reviews" className="hover:text-[#E2B857] transition-colors">
              Reviews
            </a>
            <a href="#location" className="hover:text-[#E2B857] transition-colors">
              Studio
            </a>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/2348138948285?text=Hello%20Zee!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20makeup%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav"
            >
              <span>Book on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-zinc-300 hover:text-[#E2B857] transition-colors shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slide Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0c0a09] border-b border-[#28221B] px-6 py-6 space-y-4 shadow-2xl">
            <div className="flex flex-col space-y-3 text-sm font-medium tracking-wide text-zinc-300">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#221c17] hover:text-[#E2B857]"
              >
                Services &amp; Pricing
              </a>
              <a
                href="#lookbook"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#221c17] hover:text-[#E2B857]"
              >
                Melanin Lookbook
              </a>
              <a
                href="#craft"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#221c17] hover:text-[#E2B857]"
              >
                The Zee Standard
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#221c17] hover:text-[#E2B857]"
              >
                Client Reviews (5.0 ★)
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 hover:text-[#E2B857]"
              >
                Studio &amp; Callouts
              </a>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/2348138948285?text=Hello%20Zee!%20I%20would%20like%20to%20book%20a%20makeup%20session."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-gold w-full text-center"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
