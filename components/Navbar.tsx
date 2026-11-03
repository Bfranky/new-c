"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, MapPin, Menu, X, Clock, Star, Sparkles } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [currentTimeStr, setCurrentTimeStr] = useState("");

  useEffect(() => {
    // Check if open (Lagos is UTC+1, opens 8:00 AM to 7:00 PM)
    const checkOpenStatus = () => {
      const now = new Date();
      // Lagos time (UTC+1)
      const utcHours = now.getUTCHours();
      const lagosHours = (utcHours + 1) % 24;
      const isOpen = lagosHours >= 8 && lagosHours < 19;
      setIsOpenNow(isOpen);
      
      const timeFormatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Lagos",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTimeStr(timeFormatter.format(now));
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top Banner: Concise Contact & Address */}
      <div className="bg-[#151311] text-[#FAF8F5] text-xs py-2 px-4 border-b border-[#2A2623]">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? "bg-emerald-400 animate-pulse" : "bg-[#B88947]"}`} />
              {isOpenNow ? "Studio Open Now (Closes 7 PM)" : "Closed · Opens 8:00 AM"}
              {currentTimeStr && <span className="text-[#A39E98] hidden sm:inline">({currentTimeStr} WAT)</span>}
            </span>
            <span className="text-[#48433F] hidden md:inline">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-[#D6CEC4]">
              <MapPin className="w-3.5 h-3.5 text-[#B88947]" />
              24 Oguntuga St, Eyita, Ikorodu
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#D6CEC4]">
            <a
              href="tel:+2348138948285"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B88947]" />
              <span className="font-medium">0813 894 8285</span>
            </a>
            <span className="text-[#48433F]">•</span>
            <span className="inline-flex items-center gap-1 text-[#F6EFE6]">
              <Star className="w-3.5 h-3.5 fill-[#B88947] text-[#B88947]" />
              <span className="font-semibold text-white">5.0</span>
              <span className="text-[#A39E98]">(11 Google Reviews)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D8] transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex flex-col group">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#151311] group-hover:text-[#B88947] transition-colors">
                beautebyzee_
              </span>
              <Sparkles className="w-4 h-4 text-[#B88947]" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#78716A] font-medium -mt-1">
              Makeup Artist & Gele Stylist • Ikorodu
            </span>
          </a>

          {/* Desktop Navigation Links (Concise, 4 items only) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#48433F]">
            <a href="#services" className="hover:text-[#B88947] transition-colors">
              Services & Pricing
            </a>
            <a href="#portfolio" className="hover:text-[#B88947] transition-colors">
              Lookbook
            </a>
            <a href="#reviews" className="hover:text-[#B88947] transition-colors">
              Client Reviews
            </a>
            <a href="#location" className="hover:text-[#B88947] transition-colors">
              Studio & Hours
            </a>
            <a href="#faq" className="hover:text-[#B88947] transition-colors">
              FAQs
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/2348138948285?text=Hello%20Zee!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20makeup%20session%20in%20Ikorodu."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#151311] hover:bg-[#B88947] text-white text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow"
            >
              <MessageCircle className="w-4 h-4 text-[#FAF8F5]" />
              Book on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#151311] hover:bg-[#E8E2D8]/50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E2D8] px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-4 text-base font-medium text-[#151311]">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E8E2D8]/50 hover:text-[#B88947]"
              >
                Services & Pricing
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E8E2D8]/50 hover:text-[#B88947]"
              >
                Lookbook & Portfolio
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E8E2D8]/50 hover:text-[#B88947]"
              >
                Client Reviews (5.0 ★)
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E8E2D8]/50 hover:text-[#B88947]"
              >
                Studio Location (Eyita, Ikorodu)
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#B88947]"
              >
                Booking FAQs
              </a>

              <div className="pt-4 flex flex-col gap-2.5">
                <a
                  href="https://wa.me/2348138948285?text=Hello%20Zee!%20I%20would%20like%20to%20book%20a%20makeup%20session%20in%20Ikorodu."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#151311] text-white py-3 rounded-full text-sm font-semibold tracking-wide"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+2348138948285"
                  className="w-full inline-flex items-center justify-center gap-2 border border-[#151311] text-[#151311] py-3 rounded-full text-sm font-semibold tracking-wide"
                >
                  <Phone className="w-4 h-4" />
                  Call 0813 894 8285
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

