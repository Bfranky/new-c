"use client";

import React, { useState } from "react";
import { MapPin, Clock, Phone, Navigation, Copy, Check, MessageCircle, Sparkles } from "lucide-react";

export default function LocationHours() {
  const [copied, setCopied] = useState(false);
  const studioAddress = "24 Oguntuga Street, Eyita, Ikorodu 104101, Lagos";

  const handleCopy = () => {
    navigator.clipboard.writeText(studioAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 md:py-28 bg-[#090807] border-b border-[#221c17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Studio & Direction Details */}
          <div className="lg:col-span-7 space-y-7">
            <div>
              <span className="gold-tag">Private Eyita Studio &amp; Callouts</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
                Visit Zee in Ikorodu
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed font-light">
                Relax in our private, air-conditioned studio in Eyita, or request an early-morning callout to your hotel or home anywhere across Lagos.
              </p>
            </div>

            <div className="palm-card p-7 sm:p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 text-[#E2B857] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-white">
                    Studio Address
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1 font-light leading-relaxed">
                    {studioAddress}
                  </p>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E2B857] hover:underline mt-2.5 cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> : <Copy className="w-3.5 h-3.5 shrink-0" />}
                    <span>{copied ? "Copied to Clipboard!" : "Copy Address"}</span>
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 border-t border-zinc-800">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 text-[#E2B857] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Studio &amp; Callout Hours
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1 leading-relaxed font-light">
                    <strong className="text-zinc-200">Monday – Saturday:</strong> 8:00 AM – 7:00 PM <br />
                    <strong className="text-zinc-200">Sunday:</strong> VIP Bookings &amp; Weddings Only <br />
                    <span className="text-[#E2B857] font-medium">Sunrise Callouts: Available from 6:00 AM for bridal prep.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="https://maps.google.com/?q=24+Oguntuga+Street+Eyita+Ikorodu+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full sm:w-auto text-center"
              >
                Open in Google Maps
              </a>

              <a
                href="tel:+2348138948285"
                className="btn-outline w-full sm:w-auto text-center"
              >
                Call: 0813 894 8285
              </a>
            </div>
          </div>

          {/* Right Column: High-Fashion Visual & Travel Coverage */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-zinc-900 border border-zinc-800 shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1785927926340-a81429686417?q=80&w=900&auto=format&fit=crop"
                alt="Beauté by Zee Studio Experience"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090807]/90 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-950/90 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider text-[#E2B857] border border-zinc-800">
                  <Sparkles className="w-3.5 h-3.5 text-[#E2B857]" />
                  Private Eyita Vanity Suite • Lagos Callouts
                </span>
              </div>
            </div>

            <div className="palm-card p-7 sm:p-8 space-y-5">
              <h3 className="font-serif text-xl font-bold text-white">
                Travel &amp; Callout Coverage
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Zee travels on-site with full professional vanity lighting, studio chairs, premium makeup kits, and sanitation essentials:
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs text-zinc-200 font-medium">
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <p className="font-bold text-[#E2B857]">Ikorodu Central</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Eyita, Ibeshe, Agric, Ogijo</p>
                </div>
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <p className="font-bold text-[#E2B857]">Lagos Mainland</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Ikeja, Maryland, Surulere</p>
                </div>
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <p className="font-bold text-[#E2B857]">Lagos Island</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Lekki, VI, Ikoyi</p>
                </div>
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <p className="font-bold text-[#E2B857]">Destination</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Interstate &amp; Ogun State</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/2348138948285?text=Hello%20Zee!%20I%20would%20like%20to%20inquire%20about%20a%20hotel%20callout%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full text-center"
                >
                  Inquire Callout Travel Fee
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
