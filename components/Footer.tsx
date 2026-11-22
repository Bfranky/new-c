"use client";

import React from "react";
import { MessageCircle, Phone, MapPin, Sparkles, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#070605] text-[#FAF7F2] pt-20 pb-28 lg:pb-20 border-t border-[#241F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#241F1A]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-3xl font-bold tracking-tight text-[#FAF7F2]">
                beautebyzee_
              </span>
              <Sparkles className="w-4 h-4 text-[#DFC07A] shrink-0" />
            </div>
            <p className="text-xs text-[#A8A199] leading-relaxed max-w-sm font-light">
              Haute beauty & gele artistry tailored to celebrate bold African queens. Based in Eyita, Ikorodu with studio appointments and nationwide luxury callouts.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#171310] border border-[#C59A3F]/30 text-3xs uppercase tracking-wider text-[#DFC07A] font-bold">
                <Heart className="w-3 h-3 fill-[#DFC07A] shrink-0" />
                Women-Owned Studio • 5.0 Google Rated
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-ultra text-[#DFC07A] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C8C0B5]">
              <li>
                <a href="#services" className="hover:text-[#DFC07A] transition-colors">
                  Services & Pricing
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-[#DFC07A] transition-colors">
                  Melanin Lookbook
                </a>
              </li>
              <li>
                <a href="#craft" className="hover:text-[#DFC07A] transition-colors">
                  The Zee Standard
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#DFC07A] transition-colors">
                  Client Reviews (5.0 ★)
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#DFC07A] transition-colors">
                  Studio & Callouts
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-ultra text-[#DFC07A] font-bold">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-[#C8C0B5]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DFC07A] shrink-0 mt-0.5" />
                <span>24 Oguntuga Street, Eyita, Ikorodu 104101, Lagos</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DFC07A] shrink-0" />
                <a href="tel:+2348138948285" className="hover:text-[#DFC07A] transition-colors font-bold text-white">
                  0813 894 8285
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#DFC07A] shrink-0" />
                <a
                  href="https://wa.me/2348138948285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#DFC07A] transition-colors"
                >
                  WhatsApp Direct Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-2xs text-[#7A7269]">
          <p>© {new Date().getFullYear()} Beauté by Zee. All rights reserved.</p>
          <p className="tracking-widest uppercase text-[#DFC07A] font-semibold text-3xs">
            Crafted for Extraordinary Queens
          </p>
        </div>
      </div>
    </footer>
  );
}
