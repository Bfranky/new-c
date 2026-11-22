"use client";

import React, { useState } from "react";
import { MapPin, Clock, ExternalLink, Check, Copy, Car } from "lucide-react";

export default function LocationHours() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText("24 Oguntuga Street, Eyita, Ikorodu 104101, Lagos, Nigeria");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 md:py-32 bg-zinc-950/60 border-b border-[#221c17] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header (Palm Spring Standard) */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="gold-tag">
            PRIVATE EYITA STUDIO &amp; CALLOUTS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Visit Zee in Ikorodu
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
            Relax in our private, air-conditioned studio in Eyita, or request an early-morning luxury callout to your hotel or bridal suite anywhere across Lagos.
          </p>
        </div>

        {/* 2-Column Clean Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Studio Details */}
          <div className="bg-zinc-900/40 border border-zinc-900 rounded-2xl p-8 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 text-[#E2B857] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white mb-1">
                    Studio Address
                  </h3>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    24 Oguntuga Street, Eyita, Ikorodu 104101, Lagos
                  </p>
                  <button
                    type="button"
                    onClick={copyAddress}
                    className="mt-2 text-xs text-[#E2B857] hover:underline inline-flex items-center gap-1.5 cursor-pointer font-medium"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Address Copied!" : "Copy Full Address"}</span>
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-900 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 text-[#E2B857] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-white mb-1">
                    Studio &amp; Callout Hours
                  </h3>
                  <p className="text-xs text-zinc-300">
                    <strong className="text-white">Monday – Saturday:</strong> 8:00 AM – 7:00 PM
                  </p>
                  <p className="text-xs text-zinc-300">
                    <strong className="text-white">Sunday:</strong> VIP Bookings &amp; Weddings Only
                  </p>
                  <p className="text-xs text-[#E2B857] font-medium pt-1">
                    Sunrise Callouts: Available from 6:00 AM for bridal prep.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=24+Oguntuga+Street+Eyita+Ikorodu+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex-1 text-center"
              >
                <ExternalLink className="w-4 h-4 shrink-0" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href="tel:+2348138948285"
                className="btn-outline text-center"
              >
                <span>Call Studio</span>
              </a>
            </div>
          </div>

          {/* Card 2: Travel & Callout Coverage */}
          <div className="bg-zinc-900/40 border border-zinc-900 rounded-2xl p-8 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 text-[#E2B857] flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Travel &amp; Callout Coverage
                  </h3>
                  <p className="text-xs text-zinc-400 font-light">
                    Mobile vanity kit, ring lighting, and sanitation essentials to your venue.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-900">
                  <p className="text-xs font-bold text-white">Ikorodu Central</p>
                  <p className="text-[11px] text-zinc-400 mt-1">Eyita, Ibeshe, Agric, Ogijo</p>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-900">
                  <p className="text-xs font-bold text-white">Lagos Mainland</p>
                  <p className="text-[11px] text-zinc-400 mt-1">Ikeja, Maryland, Surulere</p>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-900">
                  <p className="text-xs font-bold text-white">Lagos Island</p>
                  <p className="text-[11px] text-zinc-400 mt-1">Lekki, VI, Ikoyi</p>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-900">
                  <p className="text-xs font-bold text-white">Destination</p>
                  <p className="text-[11px] text-zinc-400 mt-1">Ogun State &amp; Interstate</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/2348138948285?text=Hello%20Zee!%20I%20would%20like%20to%20inquire%20about%20callout%20travel%20rates%20to%20my%20location."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full text-center"
              >
                <span>Inquire Callout Travel Fee</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
