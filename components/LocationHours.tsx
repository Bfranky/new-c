"use client";

import React, { useState } from "react";
import { MapPin, Clock, Phone, Navigation, Copy, Check, MessageCircle } from "lucide-react";

export default function LocationHours() {
  const [copied, setCopied] = useState(false);
  const studioAddress = "24 Oguntuga Street, Eyita, Ikorodu 104101, Lagos";

  const handleCopy = () => {
    navigator.clipboard.writeText(studioAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-white border-b border-[#E8E1D5] scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Studio & Direction Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#C59A3F] font-bold">
                Private Eyita Studio & Callouts
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0B0A]">
                Visit Zee in Ikorodu
              </h2>
              <p className="text-sm text-[#5A534C] font-light">
                Relax in our calm, air-conditioned studio in Eyita, or request an early morning callout to your hotel or home across Lagos.
              </p>
            </div>

            <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#E8E1D5] space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E1D5] text-[#C59A3F] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 shrink-0" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-[#0D0B0A]">
                    Studio Address
                  </h3>
                  <p className="text-xs text-[#5A534C] mt-0.5">
                    {studioAddress}
                  </p>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#C59A3F] hover:underline mt-2 cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> : <Copy className="w-3.5 h-3.5 shrink-0" />}
                    <span>{copied ? "Copied to Clipboard!" : "Copy Address"}</span>
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#E8E1D5]">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E1D5] text-[#C59A3F] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0D0B0A]">
                    Studio & Callout Hours
                  </h3>
                  <p className="text-xs text-[#5A534C] mt-0.5 leading-relaxed">
                    <strong>Monday – Saturday:</strong> 8:00 AM – 7:00 PM <br />
                    <strong>Sunday:</strong> VIP Bookings & Weddings Only <br />
                    <span className="text-[#C59A3F] font-semibold">Sunrise Callouts: Available from 6:00 AM for bridal prep.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://maps.google.com/?q=24+Oguntuga+Street+Eyita+Ikorodu+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0D0B0A] hover:bg-[#C59A3F] text-[#FAF7F2] px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md shrink-0"
              >
                <Navigation className="w-4 h-4 text-[#C59A3F] shrink-0" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href="tel:+2348138948285"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF7F2] text-[#0D0B0A] border border-[#E8E1D5] px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm shrink-0"
              >
                <Phone className="w-4 h-4 text-[#C59A3F] shrink-0" />
                <span>Call: 0813 894 8285</span>
              </a>
            </div>
          </div>

          {/* Right Column: Travel Coverage */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#E8E1D5] space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#0D0B0A]">
                Travel & Callout Coverage
              </h3>
              <p className="text-xs text-[#5A534C] leading-relaxed font-light">
                Zee travels on-site with a complete mobile vanity kit, ring lighting, and sanitation essentials to your venue or suite:
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs text-[#0D0B0A] font-medium">
                <div className="p-3 bg-white rounded-xl border border-[#E8E1D5]">
                  <p className="font-bold text-[#0D0B0A]">Ikorodu Central</p>
                  <p className="text-[10px] text-[#7A7269]">Eyita, Ibeshe, Agric, Ogijo</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E8E1D5]">
                  <p className="font-bold text-[#0D0B0A]">Lagos Mainland</p>
                  <p className="text-[10px] text-[#7A7269]">Ikeja, Maryland, Surulere</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E8E1D5]">
                  <p className="font-bold text-[#0D0B0A]">Lagos Island</p>
                  <p className="text-[10px] text-[#7A7269]">Lekki, VI, Ikoyi</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E8E1D5]">
                  <p className="font-bold text-[#0D0B0A]">Destination</p>
                  <p className="text-[10px] text-[#7A7269]">Ogun State & Interstate</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/2348138948285?text=Hello%20Zee!%20I%20would%20like%20to%20inquire%20about%20a%20hotel%20callout%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#C59A3F] hover:bg-[#B3872F] text-[#0D0B0A] font-bold py-3.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-[#0D0B0A] shrink-0" />
                  <span>Inquire Callout Travel Fee</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
