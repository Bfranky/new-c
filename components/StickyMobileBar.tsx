"use client";

import React from "react";
import { MessageCircle, Phone } from "lucide-react";

export default function StickyMobileBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#0B0908]/95 backdrop-blur-xl border-t border-[#C59A3F]/30 shadow-2xl">
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <a
          href="tel:+2348138948285"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1C1816] hover:bg-[#2A2521] text-[#FAF7F2] py-3.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider border border-[#C59A3F]/35 transition-colors shrink-0"
          aria-label="Call Beauté by Zee"
        >
          <Phone className="w-4 h-4 text-[#DFC07A] shrink-0" />
          <span>Call Zee</span>
        </a>

        <a
          href="https://wa.me/2348138948285?text=Hello%20Zee!%20I%20would%20like%20to%20book%20a%20makeup%20session."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] inline-flex items-center justify-center gap-2 btn-gold-glow text-[#0B0908] py-3.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg active:scale-95 transition-all shrink-0"
          aria-label="Book on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-[#0B0908] shrink-0" />
          <span>Book on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
