"use client";

import React from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Star,
  Heart,
  ArrowUp,
  Sparkles,
  ExternalLink
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#151311] text-[#FAF8F5] pt-16 pb-12 border-t border-[#2A2623]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2A2623]">
          {/* Brand & Women-Owned Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                beautebyzee_
              </span>
              <Sparkles className="w-4 h-4 text-[#B88947]" />
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-[#B88947] font-semibold">
              Makeup Artist & Beautician • Ikorodu, Lagos
            </p>

            <p className="text-xs sm:text-sm text-[#A39E98] max-w-sm leading-relaxed">
              Transformative, skin-melting makeup artistry and gele styling tailored to your skin tone and event. Private studio in Eyita, Ikorodu + on-location bookings throughout Lagos.
            </p>

            <div className="inline-flex items-center gap-2 bg-[#2A2623] px-3.5 py-1.5 rounded-full text-xs text-[#FAF8F5] font-medium border border-[#3E3833]">
              <Heart className="w-3.5 h-3.5 text-[#B88947] fill-[#B88947]" />
              <span>Proudly Women-Owned & Independent</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B88947] font-bold">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#D6CEC4]">
              <li>
                <a href="#services" className="hover:text-[#B88947] transition-colors">
                  Services & Pricing
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#B88947] transition-colors">
                  Book an Appointment
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#B88947] transition-colors">
                  Portfolio & Looks
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#B88947] transition-colors">
                  Verified Google Reviews (5.0 ★)
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#B88947] transition-colors">
                  Studio Location (Eyita)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#B88947] transition-colors">
                  Client FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B88947] font-bold">
              Studio & Direct Inquiries
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm text-[#D6CEC4]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B88947] shrink-0 mt-0.5" />
                <span>
                  24 Oguntuga Street, Eyita, Ikorodu 104101, Lagos
                  <span className="block text-[11px] text-[#A39E98] mt-0.5">
                    Plus Code: JGH2+XW Ikorodu
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B88947] shrink-0" />
                <a href="tel:+2348138948285" className="hover:text-white transition-colors">
                  0813 894 8285
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#B88947] shrink-0" />
                <a
                  href="https://wa.me/2348138948285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  wa.me/2348138948285
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#B88947] shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <a
                  href="https://instagram.com/beautebyzee_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  @beautebyzee_
                  <ExternalLink className="w-3 h-3 text-[#78716A]" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#FAF8F5]">
                <Star className="w-3.5 h-3.5 fill-[#B88947] text-[#B88947]" />
                <strong className="text-white">5.0 Star Rating</strong>
                <span className="text-[#A39E98]">(11 Verified Reviews)</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716A]">
          <p>© {new Date().getFullYear()} Beauté by Zee. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#D6CEC4] hover:text-[#B88947] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
