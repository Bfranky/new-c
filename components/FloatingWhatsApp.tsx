"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Floating Tooltip Pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#151311] py-2 px-3.5 rounded-full border border-[#E8E2D8] shadow-xl text-xs font-semibold animate-in fade-in slide-in-from-right-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Need quick glam? Chat with Zee</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#78716A] hover:text-[#151311] ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        href="https://wa.me/2348138948285?text=Hello%20Zee!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20makeup%20appointment%20in%20Ikorodu."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with Zee"
        className="w-14 h-14 rounded-full bg-[#151311] hover:bg-[#B88947] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ring-4 ring-white/60"
      >
        <MessageCircle className="w-7 h-7 text-[#FAF8F5]" />
      </a>
    </div>
  );
}

