"use client";

import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  Copy,
  Check,
  Share2,
  ExternalLink,
  Sparkles,
  CalendarCheck
} from "lucide-react";

export default function LocationHours() {
  const [copied, setCopied] = useState(false);
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);

  const address = "24 Oguntuga Street, Eyita, Ikorodu 104101, Lagos";
  const plusCode = "JGH2+XW Ikorodu";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(plusCode);
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2500);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Beauté by Zee - Makeup Artist in Ikorodu",
          text: "Check out Beauté by Zee (5.0 ★) at 24 Oguntuga St, Eyita, Ikorodu!",
          url: window.location.href,
        });
      } catch {
        // Fallback
        handleCopyAddress();
      }
    } else {
      handleCopyAddress();
    }
  };

  const schedule = [
    { day: "Monday", hours: "8:00 AM – 7:00 PM", status: "Open" },
    { day: "Tuesday", hours: "8:00 AM – 7:00 PM", status: "Open (Popular)" },
    { day: "Wednesday", hours: "8:00 AM – 7:00 PM", status: "Open" },
    { day: "Thursday", hours: "8:00 AM – 7:00 PM", status: "Open" },
    { day: "Friday", hours: "8:00 AM – 7:30 PM", status: "Open (Owambe prep)" },
    { day: "Saturday", hours: "7:00 AM – 8:00 PM", status: "Peak Bridal & Events" },
    { day: "Sunday", hours: "By Appointment", status: "Weddings / VIP" },
  ];

  return (
    <section id="location" className="py-16 sm:py-24 bg-white border-b border-[#E8E2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B88947] font-bold">
            Studio & Directions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#151311]">
            Visit Zee in Eyita, Ikorodu
          </h2>
          <p className="text-sm sm:text-base text-[#48433F]">
            Conveniently located in a calm, private setting in Eyita. Private air-conditioned studio with dedicated ring lighting and comfortable seating.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Address, Google Actions, Schedule */}
          <div className="lg:col-span-7 space-y-6">
            {/* Business Location Info Card */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#E8E2D8] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E2D8] pb-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#151311]">
                    Beauté by Zee Studio
                  </h3>
                  <p className="text-xs text-[#78716A] uppercase tracking-wider font-semibold mt-0.5">
                    Women-Owned Beautician • Plus Code: {plusCode}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E2D8] text-xs font-semibold text-[#151311]">
                    <Clock className="w-3.5 h-3.5 text-[#B88947]" />
                    Opens 8:00 AM
                  </span>
                </div>
              </div>

              {/* Exact Address & Copy */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B88947] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-[#151311]">
                      {address}
                    </p>
                    <p className="text-xs text-[#78716A] mt-0.5">
                      Eyita, Ikorodu 104101, Lagos State, Nigeria
                    </p>
                  </div>
                </div>

                {/* Quick Action Pills (Google Maps style) */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=24+Oguntuga+Street,+Eyita,+Ikorodu,+Lagos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#151311] hover:bg-[#B88947] text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>

                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 bg-white hover:bg-[#F6EFE6] text-[#151311] border border-[#E8E2D8] px-3.5 py-2 rounded-full text-xs font-semibold transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#78716A]" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleCopyPlusCode}
                    className="inline-flex items-center gap-1.5 bg-white hover:bg-[#F6EFE6] text-[#151311] border border-[#E8E2D8] px-3.5 py-2 rounded-full text-xs font-semibold transition-all"
                  >
                    {copiedPlusCode ? (
                      <span className="text-emerald-700">Plus Code Copied!</span>
                    ) : (
                      <span>Code: {plusCode}</span>
                    )}
                  </button>

                  <button
                    onClick={handleShare}
                    className="inline-flex items-center gap-1.5 bg-white hover:bg-[#F6EFE6] text-[#151311] border border-[#E8E2D8] px-3.5 py-2 rounded-full text-xs font-semibold transition-all"
                  >
                    <Share2 className="w-3.5 h-3.5 text-[#78716A]" />
                    <span>Share Location</span>
                  </button>
                </div>
              </div>

              {/* Landmark Guidance */}
              <div className="p-4 bg-white rounded-2xl border border-[#E8E2D8] text-xs text-[#48433F] space-y-1.5">
                <p className="font-bold text-[#151311] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B88947]" />
                  Landmark Tips for Reaching Eyita
                </p>
                <p>
                  From Ikorodu Garage or Benson Bus Stop, take a short ride toward Eyita. Oguntuga Street is accessible with clear bike/keke or car access. Call <strong>0813 894 8285</strong> upon arrival if you need direction guidance.
                </p>
              </div>
            </div>

            {/* Popular Times Heatmap (from Google data) */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-[#E8E2D8]">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-sm text-[#151311] flex items-center gap-2">
                  <CalendarCheck className="w-4 h-4 text-[#B88947]" />
                  Popular Appointment Times (Tuesdays & Weekends)
                </h4>
                <span className="text-[11px] text-[#78716A]">Google Maps Trend</span>
              </div>

              <div className="grid grid-cols-6 gap-2 text-center">
                {[
                  { time: "6 AM", label: "Early", height: "30%" },
                  { time: "9 AM", label: "Busy", height: "70%" },
                  { time: "12 PM", label: "Peak", height: "95%" },
                  { time: "3 PM", label: "Active", height: "85%" },
                  { time: "6 PM", label: "Evening", height: "60%" },
                  { time: "9 PM", label: "Quiet", height: "20%" },
                ].map((slot, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="h-20 w-full bg-white rounded-lg flex items-end justify-center p-1 border border-[#E8E2D8]">
                      <div
                        className="w-full bg-[#B88947] rounded-sm transition-all hover:bg-[#151311]"
                        style={{ height: slot.height }}
                      />
                    </div>
                    <span className="text-xs font-bold text-[#151311] mt-1.5">{slot.time}</span>
                    <span className="text-[10px] text-[#78716A]">{slot.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-[#78716A] text-center mt-3">
                Early slots (6 AM – 9 AM) fill fast on Saturdays. Booking at least 48 hours ahead is recommended.
              </p>
            </div>
          </div>

          {/* Right Column: Weekly Hours & Map Preview */}
          <div className="lg:col-span-5 space-y-6">
            {/* Opening Hours Table */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-[#E8E2D8]">
              <h3 className="font-serif text-xl font-bold text-[#151311] mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#B88947]" />
                Operating Hours
              </h3>

              <div className="divide-y divide-[#E8E2D8]">
                {schedule.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-medium text-[#151311]">{item.day}</span>
                    <div className="text-right">
                      <span className="font-semibold text-[#151311] block">{item.hours}</span>
                      <span className="text-[10px] text-[#78716A]">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E2D8] flex flex-col gap-2">
                <a
                  href="tel:+2348138948285"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#151311] hover:bg-[#B88947] text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call 0813 894 8285
                </a>
              </div>
            </div>

            {/* Visual Map / Location Embed Card */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-[#E8E2D8] space-y-4">
              <div className="flex items-center justify-between">
                <p className="font-bold text-xs uppercase tracking-wider text-[#151311]">
                  Google Maps Location
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=24+Oguntuga+Street,+Eyita,+Ikorodu,+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#B88947] hover:underline inline-flex items-center gap-1"
                >
                  Open Full Map <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Stylized Map View Box */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E8E2D8] bg-[#E8E2D8] aspect-video">
                <iframe
                  title="Google Maps Studio Location"
                  src="https://maps.google.com/maps?q=24%20Oguntuga%20Street,%20Eyita,%20Ikorodu,%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale contrast-125 opacity-90 hover:filter-none transition-all duration-300"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-[#78716A]">
                <span>24 Oguntuga St, Eyita, Ikorodu</span>
                <span className="font-bold text-[#151311]">104101 Lagos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

