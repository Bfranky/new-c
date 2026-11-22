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
    <section id="location" className="py-20 sm:py-28 bg-[#0E0C0A] border-b border-[#241F1A] scroll-mt-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Studio & Direction Details */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-3">
              <span className="text-2xs uppercase tracking-ultra text-[#DFC07A] font-bold">
                Private Eyita Studio & Callouts
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#FAF7F2]">
                Visit Zee in Ikorodu
              </h2>
              <p className="text-sm text-[#A8A199] font-light leading-relaxed">
                Relax in our calm, air-conditioned studio in Eyita, or request an early morning callout to your hotel or home across Lagos.
              </p>
            </div>

            <div className="gold-card rounded-3xl p-7 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#241F1A] border border-[#C59A3F]/35 text-[#DFC07A] flex items-center justify-center shrink-0 shadow-inner">
                  <MapPin className="w-6 h-6 shrink-0" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold text-[#FAF7F2]">
                    Studio Address
                  </h3>
                  <p className="text-xs text-[#C8C0B5] mt-1 font-light">
                    {studioAddress}
                  </p>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DFC07A] hover:underline mt-2.5 cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> : <Copy className="w-3.5 h-3.5 shrink-0" />}
                    <span>{copied ? "Copied to Clipboard!" : "Copy Address"}</span>
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 border-t border-[#241F1A]">
                <div className="w-12 h-12 rounded-2xl bg-[#241F1A] border border-[#C59A3F]/35 text-[#DFC07A] flex items-center justify-center shrink-0 shadow-inner">
                  <Clock className="w-6 h-6 shrink-0" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#FAF7F2]">
                    Studio & Callout Hours
                  </h3>
                  <p className="text-xs text-[#C8C0B5] mt-1 leading-relaxed font-light">
                    <strong className="text-white">Monday – Saturday:</strong> 8:00 AM – 7:00 PM <br />
                    <strong className="text-white">Sunday:</strong> VIP Bookings & Weddings Only <br />
                    <span className="text-[#DFC07A] font-semibold">Sunrise Callouts: Available from 6:00 AM for bridal prep.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="https://maps.google.com/?q=24+Oguntuga+Street+Eyita+Ikorodu+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-primary w-full sm:w-auto"
              >
                <Navigation className="w-4 h-4 fill-[#0B0908] shrink-0" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href="tel:+2348138948285"
                className="btn-luxury-secondary w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 text-[#DFC07A] shrink-0" />
                <span>Call: 0813 894 8285</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Fashion Visual & Travel Coverage */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden aspect-[16/11] bg-[#141110] border border-[#C59A3F]/30 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1785927926340-a81429686417?q=80&w=900&auto=format&fit=crop"
                alt="Beauté by Zee Studio Experience"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0908]/90 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0B0908]/90 backdrop-blur-md rounded-full text-3xs font-bold uppercase tracking-widest text-[#DFC07A] border border-[#C59A3F]/35">
                  <Sparkles className="w-3.5 h-3.5 text-[#C59A3F] shrink-0" />
                  Private Eyita Vanity Suite • Lagos Callouts
                </span>
              </div>
            </div>

            <div className="gold-card rounded-3xl p-7 sm:p-8 space-y-5 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-[#FAF7F2]">
                Travel & Callout Coverage
              </h3>
              <p className="text-xs text-[#A8A199] leading-relaxed font-light">
                Zee travels on-site with full professional vanity lighting, premium makeup kits, and sanitation essentials:
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs text-[#FAF7F2] font-medium">
                <div className="p-3 bg-[#1D1814] rounded-2xl border border-[#C59A3F]/25">
                  <p className="font-bold text-[#DFC07A]">Ikorodu Central</p>
                  <p className="text-3xs text-[#A8A199] mt-0.5">Eyita, Ibeshe, Agric, Ogijo</p>
                </div>
                <div className="p-3 bg-[#1D1814] rounded-2xl border border-[#C59A3F]/25">
                  <p className="font-bold text-[#DFC07A]">Lagos Mainland</p>
                  <p className="text-3xs text-[#A8A199] mt-0.5">Ikeja, Maryland, Surulere</p>
                </div>
                <div className="p-3 bg-[#1D1814] rounded-2xl border border-[#C59A3F]/25">
                  <p className="font-bold text-[#DFC07A]">Lagos Island</p>
                  <p className="text-3xs text-[#A8A199] mt-0.5">Lekki, VI, Ikoyi</p>
                </div>
                <div className="p-3 bg-[#1D1814] rounded-2xl border border-[#C59A3F]/25">
                  <p className="font-bold text-[#DFC07A]">Destination</p>
                  <p className="text-3xs text-[#A8A199] mt-0.5">Interstate & Ogun State</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/2348138948285?text=Hello%20Zee!%20I%20would%20like%20to%20inquire%20about%20a%20hotel%20callout%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-primary w-full"
                >
                  <MessageCircle className="w-4 h-4 fill-[#0B0908] shrink-0" />
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
