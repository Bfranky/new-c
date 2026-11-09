"use client";

import React from "react";
import { MessageCircle, Phone } from "lucide-react";

export default function StickyMobileBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#0D0B0A]/95 backdrop-blur-md border-t border-[#2A2521] shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Quick Call */}
        <a
          href="tel:+2348138948285"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1C1816] hover:bg-[#2A2521] text-[#FAF7F2] py-3.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#3A332E] transition-colors"
          aria-label="Call Beauté by Zee"
        >
          <Phone className="w-3.5 h-3.5 text-[#C59A3F]" />
          <span>Call Zee</span>
        </a>

        {/* 1-Tap WhatsApp Booking */}
        <a
          href="https://wa.me/2348138948285?text=Hello%20Zee!%20I%20would%20like%20to%20book%20a%20makeup%20session."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] inline-flex items-center justify-center gap-2 bg-[#C59A3F] hover:bg-[#B3872F] text-[#0D0B0A] py-3.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-transform active:scale-95"
          aria-label="Book on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-[#0D0B0A]" />
          <span>Book on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

