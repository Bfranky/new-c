"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="hidden lg:block fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/2348138948285?text=Hello%20Zee!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20makeup%20session."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#0D0B0A] hover:bg-[#C59A3F] text-[#FAF7F2] pl-4 pr-5 py-3 rounded-full border border-[#2A2521] shadow-2xl transition-all duration-300 hover:scale-105"
        aria-label="Direct WhatsApp Chat with Zee"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>
        <MessageCircle className="w-4 h-4 text-[#C59A3F] group-hover:text-white transition-colors" />
        <span className="text-xs font-semibold tracking-wider uppercase">
          Quick Glam? Chat with Zee
        </span>
      </a>
    </div>
  );
}
