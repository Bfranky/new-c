"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="hidden lg:block fixed bottom-8 right-8 z-40">
      <a
        href="https://wa.me/2348138948285?text=Hello%20Zee!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20makeup%20session."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-[#191512]/95 hover:bg-[#C59A3F] text-[#FAF7F2] hover:text-[#0B0908] pl-4 pr-6 py-3.5 rounded-full border border-[#C59A3F]/50 shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-105"
        aria-label="Direct WhatsApp Chat with Zee"
      >
        <span className="relative flex h-3 w-3 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>
        <MessageCircle className="w-5 h-5 text-[#DFC07A] group-hover:text-[#0B0908] transition-colors shrink-0" />
        <span className="text-xs font-bold tracking-wider uppercase">
          Quick Glam? Chat with Zee
        </span>
      </a>
    </div>
  );
}
