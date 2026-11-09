"use client";

import React from "react";
import { MessageCircle, Phone, MapPin, Sparkles, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D0B0A] text-[#FAF7F2] pt-16 pb-24 lg:pb-16 border-t border-[#24201D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#24201D]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-3xl font-bold tracking-tight text-[#FAF7F2]">
                beautebyzee_
              </span>
              <Sparkles className="w-4 h-4 text-[#C59A3F]" />
            </div>
            <p className="text-xs text-[#9B938A] leading-relaxed max-w-sm font-light">
              Haute beauty & gele artistry tailored to celebrate bold African women. Based in Eyita, Ikorodu with studio appointments and nationwide luxury callouts.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181513] border border-[#2A2521] text-[10px] uppercase tracking-wider text-[#C59A3F] font-semibold">
                <Heart className="w-3 h-3 fill-[#C59A3F]" />
                Women-Owned Studio • 5.0 Google Rated
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C59A3F] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#C8C0B5]">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services & Pricing
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-white transition-colors">
                  Melanin Lookbook
                </a>
              </li>
              <li>
                <a href="#craft" className="hover:text-white transition-colors">
                  The Zee Standard
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Client Reviews (5.0 ★)
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Studio & Callouts
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C59A3F] font-bold">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#C8C0B5]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59A3F] shrink-0 mt-0.5" />
                <span>24 Oguntuga Street, Eyita, Ikorodu 104101, Lagos</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C59A3F] shrink-0" />
                <a href="tel:+2348138948285" className="hover:text-white transition-colors font-semibold">
                  0813 894 8285
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#C59A3F] shrink-0" />
                <a
                  href="https://wa.me/2348138948285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Consultation Available
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7A7269]">
          <p>© {new Date().getFullYear()} Beauté by Zee. All rights reserved.</p>
          <p className="tracking-wider uppercase">
            Crafted for Extraordinary Queens
          </p>
        </div>
      </div>
    </footer>
  );
}
