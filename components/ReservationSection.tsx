"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, Calendar, Clock, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

interface ReservationProps {
  initialService?: string;
}

export default function ReservationSection({ initialService }: ReservationProps) {
  const [selectedService, setSelectedService] = useState<string>(
    initialService || "Luxury Royal Bridal Glam (From ₦70,000)"
  );
  const [locationType, setLocationType] = useState<"studio" | "callout">("studio");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>("Morning (8:00 AM – 11:00 AM)");
  const [clientName, setClientName] = useState<string>("");

  const buildWhatsAppUrl = () => {
    const text = [
      "✨ *BEAUTÉ BY ZEE — RESERVATION INQUIRY*",
      "─────────────────────────",
      `👑 *Chosen Look:* ${selectedService}`,
      `📍 *Location Preference:* ${
        locationType === "studio"
          ? "Eyita Studio, Ikorodu (Private Vanity Suite)"
          : "On-Location / Hotel Callout (Lagos / Interstate)"
      }`,
      selectedDate ? `📅 *Preferred Date:* ${selectedDate}` : null,
      `⏰ *Time Slot:* ${timeSlot}`,
      clientName ? `👤 *Client Name:* ${clientName}` : null,
      "─────────────────────────",
      "Hello Zee! I would love to check availability for my glam appointment. Please share available slots!",
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/2348138948285?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="reservation" className="py-24 md:py-32 bg-[#090807] border-b border-[#221c17] relative overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#E2B857]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E2B857]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header (Palm Spring Standard) */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="gold-tag">
            DIRECT RESERVATIONS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Reserve Your Date with Zee
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
            Secure your spot in our private Eyita studio or request VIP callout artistry anywhere in Lagos. Prepares an instant, courteous consultation message sent directly to Zee.
          </p>
        </div>

        {/* 2-Column Luxury Container (Exact Palm Spring Reservation Layout) */}
        <div className="bg-zinc-950/80 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Reservation Policies */}
          <div className="lg:col-span-4 bg-zinc-950/60 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-white font-bold text-xl mb-4">
                Booking Policies
              </h3>
              <ul className="text-zinc-400 text-xs space-y-4 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E2B857] mt-0.5">✦</span>
                  <span>A deposit is required to lock your wedding morning or sunrise callout date.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E2B857] mt-0.5">✦</span>
                  <span>Sunrise callouts start from 6:00 AM for early church weddings.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E2B857] mt-0.5">✦</span>
                  <span>Studio visits are strictly by appointment to guarantee unhurried privacy.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E2B857] mt-0.5">✦</span>
                  <span>For destination weddings outside Lagos, travel and lodging apply.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-8 border-t border-zinc-900">
              <p className="text-zinc-500 text-xs mb-3 font-medium">Need immediate assistance?</p>
              <a
                href="tel:+2348138948285"
                className="w-full py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-[#E2B857] text-xs font-semibold rounded-xl border border-zinc-800 hover:border-[#E2B857]/30 transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer no-underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Studio (0813 894 8285)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-8 p-8 md:p-10 space-y-6">
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 max-w-xs mx-auto">
              <div className="flex items-center flex-1">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-[#E2B857] text-zinc-950 shadow-[0_0_10px_rgba(226,184,87,0.4)]">
                  1
                </div>
                <div className="h-0.5 flex-1 mx-2 bg-zinc-800" />
              </div>
              <div className="flex items-center flex-1">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-zinc-800 text-zinc-300">
                  2
                </div>
                <div className="h-0.5 flex-1 mx-2 bg-zinc-800" />
              </div>
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-zinc-800 text-zinc-300">
                3
              </div>
            </div>

            {/* Field 1: Location Toggle */}
            <div>
              <label className="block text-zinc-300 text-xs font-bold uppercase tracking-wider mb-2.5">
                Location Preference
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setLocationType("studio")}
                  className={`py-3 px-4 rounded-xl text-xs font-bold tracking-wide transition-all border cursor-pointer ${
                    locationType === "studio"
                      ? "bg-gradient-to-r from-[#B88B35] to-[#E2B857] text-zinc-950 border-[#E2B857] shadow-md"
                      : "bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 border-zinc-800"
                  }`}
                >
                  Eyita Studio (Ikorodu)
                </button>
                <button
                  type="button"
                  onClick={() => setLocationType("callout")}
                  className={`py-3 px-4 rounded-xl text-xs font-bold tracking-wide transition-all border cursor-pointer ${
                    locationType === "callout"
                      ? "bg-gradient-to-r from-[#B88B35] to-[#E2B857] text-zinc-950 border-[#E2B857] shadow-md"
                      : "bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 border-zinc-800"
                  }`}
                >
                  On-Location / Hotel Callout
                </button>
              </div>
            </div>

            {/* Field 2: Select Service */}
            <div>
              <label className="block text-zinc-300 text-xs font-bold uppercase tracking-wider mb-2.5">
                Chosen Service
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-100 text-sm focus:outline-none focus:border-[#E2B857]/60 transition-colors"
              >
                <option value="Luxury Royal Bridal Glam (From ₦70,000)">
                  Luxury Royal Bridal Glam (From ₦70,000)
                </option>
                <option value="Owambe & Party Radiance (₦25,000)">
                  Owambe &amp; Party Radiance (₦25,000)
                </option>
                <option value="Studio Soft & Birthday Glow (₦20,000)">
                  Studio Soft &amp; Birthday Glow (₦20,000)
                </option>
                <option value="Couture Gele Styling (₦8,000)">
                  Couture Gele Styling (₦8,000)
                </option>
                <option value="Bridal Train & Squad Rate (Custom Group Rate)">
                  Bridal Train &amp; Squad Rate (Custom Group Rate)
                </option>
                <option value="Home & Hotel Callout Service (Service + Travel Fee)">
                  Home &amp; Hotel Callout Service (Service + Travel Fee)
                </option>
              </select>
            </div>

            {/* Field 3 & 4: Date & Time Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-zinc-300 text-xs font-bold uppercase tracking-wider mb-2.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-100 text-sm focus:outline-none focus:border-[#E2B857]/60 transition-colors"
                />
              </div>

              <div>
                <label className="block text-zinc-300 text-xs font-bold uppercase tracking-wider mb-2.5">
                  Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-100 text-sm focus:outline-none focus:border-[#E2B857]/60 transition-colors"
                >
                  <option value="Sunrise (6:00 AM – 8:00 AM)">Sunrise (6:00 AM – 8:00 AM)</option>
                  <option value="Morning (8:00 AM – 11:00 AM)">Morning (8:00 AM – 11:00 AM)</option>
                  <option value="Afternoon (12:00 PM – 3:00 PM)">Afternoon (12:00 PM – 3:00 PM)</option>
                  <option value="Evening (4:00 PM – 7:00 PM)">Evening (4:00 PM – 7:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Field 5: Client Name */}
            <div>
              <label className="block text-zinc-300 text-xs font-bold uppercase tracking-wider mb-2.5">
                Your Name <span className="text-zinc-500 font-normal lowercase">(optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Bukola Adeyemi"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none focus:border-[#E2B857]/60 transition-colors"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex-1 text-center"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Book on WhatsApp (0813 894 8285)</span>
              </a>

              <a
                href="tel:+2348138948285"
                className="btn-outline text-center"
              >
                <span>Call Studio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
