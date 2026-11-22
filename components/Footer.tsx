"use client";

import React from "react";
import { Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#070605] text-zinc-300 pt-20 pb-16 border-t border-[#221c17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-zinc-900">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-white">
              BEAUTÉ BY ZEE
            </span>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm font-light">
              Haute beauty &amp; gele artistry tailored to celebrate bold African queens. Based in Eyita, Ikorodu with studio appointments and nationwide luxury callouts.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-[#E2B857] font-medium">
                Women-Owned Studio • 5.0 Google Rated
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <a href="#services" className="hover:text-[#E2B857] transition-colors">
                  Services &amp; Pricing
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-[#E2B857] transition-colors">
                  Melanin Lookbook
                </a>
              </li>
              <li>
                <a href="#craft" className="hover:text-[#E2B857] transition-colors">
                  The Zee Standard
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#E2B857] transition-colors">
                  Client Reviews (5.0 ★)
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#E2B857] transition-colors">
                  Studio &amp; Callouts
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E2B857] shrink-0 mt-0.5" />
                <span>24 Oguntuga Street, Eyita, Ikorodu 104101, Lagos</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E2B857] shrink-0" />
                <a href="tel:+2348138948285" className="hover:text-[#E2B857] transition-colors font-semibold text-white">
                  0813 894 8285
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#E2B857] shrink-0" />
                <a
                  href="https://wa.me/2348138948285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E2B857] transition-colors"
                >
                  WhatsApp Direct Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Beauté by Zee. All rights reserved.</p>
          <p className="tracking-widest uppercase text-[#E2B857] font-medium text-[11px]">
            Crafted for Extraordinary Queens
          </p>
        </div>
      </div>
    </footer>
  );
}
