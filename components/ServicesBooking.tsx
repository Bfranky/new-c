"use client";

import React, { useState } from "react";
import { MessageCircle, Check, Sparkles, Clock, MapPin, Calendar, User, Phone, ArrowRight } from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  category: "bridal" | "owambe" | "soft" | "gele";
  price: string;
  duration: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

const services: ServiceItem[] = [
  {
    id: "bridal-glam",
    name: "Luxury Bridal Glam",
    category: "bridal",
    price: "From ₦70,000",
    duration: "2.5 - 3 Hours",
    description: "Full royal bridal transformation crafted to remain immaculate under bright cameras, heat, and all-day celebration.",
    recommended: true,
    features: [
      "In-depth skin preparation & primer lock",
      "Custom waterproof foundation blend",
      "Premium mink lash extensions",
      "Traditional or contemporary gele tying",
      "Emergency touch-up kit included",
      "Studio or home service available",
    ],
  },
  {
    id: "owambe-glam",
    name: "Owambe & Party Guest Glam",
    category: "owambe",
    price: "₦25,000",
    duration: "1.5 Hours",
    description: "Vibrant, head-turning party look with striking eyes, carved brows, sculpted cheekbones, and flawless long wear.",
    features: [
      "HD contour & radiant highlight",
      "Glitter, matte, or cut-crease eyeshadow",
      "Volume lashes included",
      "24-hr transfer-resistant setting",
      "Gele tying available as add-on",
    ],
  },
  {
    id: "soft-glam",
    name: "Studio Soft Glam & Birthday Shoot",
    category: "soft",
    price: "₦20,000",
    duration: "1 Hour 15 Mins",
    description: "Clean, natural 'skin-first' glow designed for birthday photoshoots, graduation portraits, or dinners.",
    features: [
      "Dewy or velvet skin finish",
      "Soft natural eye sculpting",
      "Wispy lashes & glossy ombre lips",
      "Zero flashback guaranteed for photography",
    ],
  },
  {
    id: "gele-styling",
    name: "Professional Gele Styling",
    category: "gele",
    price: "₦8,000",
    duration: "45 Mins",
    description: "Sharp, elegant pleating for aso-oke, sego, velvet, or auto-gele fixing that stays sturdy throughout your event.",
    features: [
      "Traditional pleated gele",
      "Modern fan gele & avant-garde styles",
      "Comfortable, non-tight fitting",
      "Auto-gele fitting and adjustments",
    ],
  },
  {
    id: "bridal-party",
    name: "Bridesmaids & Squad Package",
    category: "bridal",
    price: "Custom Group Rate",
    duration: "Group Booking",
    description: "Harmonious glam for your bridal train or family members with dedicated on-site styling support.",
    features: [
      "Consistent, camera-ready bridal train look",
      "Discounts for groups of 3 or more",
      "Coordinated timeline planning",
      "Optional on-site touchup artist",
    ],
  },
  {
    id: "home-service",
    name: "Home / Hotel Callout Service",
    category: "soft",
    price: "Service + Travel Fee",
    duration: "Tailored",
    description: "Relax in the comfort of your home, bridal suite, or hotel anywhere in Ikorodu, Lagos Island, or Mainland.",
    features: [
      "Zee arrives with full studio lighting & setup",
      "Punctual arrival before your event starts",
      "Available across Ikorodu, Ikeja, Lekki, etc.",
      "Early morning callout option (from 6:00 AM)",
    ],
  },
];

export default function ServicesBooking() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<string>("Luxury Bridal Glam");
  const [locationType, setLocationType] = useState<string>("In-Studio (Eyita, Ikorodu)");
  const [date, setDate] = useState<string>("");
  const [timePreference, setTimePreference] = useState<string>("Morning (8:00 AM - 11:00 AM)");
  const [clientName, setClientName] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const filteredServices = activeCategory === "all"
    ? services
    : services.filter((s) => s.category === activeCategory);

  const handleSelectService = (name: string) => {
    setSelectedService(name);
    // Smooth scroll to the booking form
    const bookingElement = document.getElementById("booking");
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const generateWhatsAppLink = () => {
    const lines = [
      `Hello Zee! I would like to book a makeup appointment:`,
      `• Service: ${selectedService}`,
      `• Location: ${locationType}`,
      date ? `• Preferred Date: ${date}` : `• Date: Flexible / Needs discussion`,
      `• Time Slot: ${timePreference}`,
      clientName ? `• My Name: ${clientName}` : ``,
      notes ? `• Special Notes: ${notes}` : ``,
      `Please let me know if this slot is available and the total quote. Thank you!`,
    ].filter(Boolean);

    const message = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/2348138948285?text=${message}`;
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B88947] font-bold">
            Transparent Pricing & Craftsmanship
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#151311]">
            Curated Services for Every Occasion
          </h2>
          <p className="text-sm sm:text-base text-[#48433F]">
            Every session begins with personalized skin preparation and ends with long-wear setting mist tailored to Nigerian weather.
          </p>

          {/* Category Filter Pills (concise, 2-3 colors) */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: "all", label: "All Services" },
              { id: "bridal", label: "Bridal" },
              { id: "owambe", label: "Owambe & Party" },
              { id: "soft", label: "Studio Soft Glam" },
              { id: "gele", label: "Gele Styling" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === tab.id
                    ? "bg-[#151311] text-white shadow-sm"
                    : "bg-white text-[#48433F] border border-[#E8E2D8] hover:border-[#B88947]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`relative bg-white rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                service.recommended
                  ? "border-[#B88947] shadow-md ring-1 ring-[#B88947]/30"
                  : "border-[#E8E2D8] hover:border-[#B88947]/60 hover:shadow-sm"
              }`}
            >
              {service.recommended && (
                <div className="absolute -top-3 left-6 bg-[#B88947] text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-3 h-3" />
                  Client Favorite
                </div>
              )}

              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-serif text-xl font-bold text-[#151311]">
                    {service.name}
                  </h3>
                  <div className="text-right shrink-0">
                    <span className="font-bold text-lg text-[#151311] block">
                      {service.price}
                    </span>
                    <span className="text-[11px] text-[#78716A] inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {service.duration}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#48433F] mt-2 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6 pt-4 border-t border-[#F0ECE4]">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#151311]">
                      <Check className="w-3.5 h-3.5 text-[#B88947] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleSelectService(service.name)}
                className={`w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  selectedService === service.name
                    ? "bg-[#B88947] text-white"
                    : "bg-[#FAF8F5] text-[#151311] hover:bg-[#151311] hover:text-white border border-[#E8E2D8]"
                }`}
              >
                {selectedService === service.name ? "Selected for Booking" : "Select Service"}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Booking Wizard: "Better Human Experience" */}
        <div
          id="booking"
          className="bg-white rounded-3xl border border-[#E8E2D8] p-6 sm:p-10 shadow-sm scroll-mt-24"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#B88947] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                Easy 1-Click WhatsApp Booking
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#151311]">
                Book Zee for Your Date in Seconds
              </h3>
              <p className="text-xs sm:text-sm text-[#48433F]">
                Fill in your preferred details below. It prepares an instant, polite message sent directly to Zee on WhatsApp at <strong className="text-[#151311]">0813 894 8285</strong>.
              </p>
            </div>

            <div className="space-y-6">
              {/* Row 1: Chosen Service & Location Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#151311] mb-2">
                    Chosen Service
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl px-4 py-3 text-sm text-[#151311] focus:outline-none focus:border-[#B88947]"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.price})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#151311] mb-2">
                    Location Preference
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setLocationType("In-Studio (Eyita, Ikorodu)")}
                      className={`px-3 py-3 rounded-xl text-xs font-medium border text-center transition-all ${
                        locationType.includes("In-Studio")
                          ? "bg-[#151311] text-white border-[#151311]"
                          : "bg-[#FAF8F5] text-[#48433F] border-[#E8E2D8] hover:border-[#B88947]"
                      }`}
                    >
                      Studio (Eyita)
                    </button>
                    <button
                      type="button"
                      onClick={() => setLocationType("Home / Hotel Callout Service")}
                      className={`px-3 py-3 rounded-xl text-xs font-medium border text-center transition-all ${
                        locationType.includes("Home")
                          ? "bg-[#151311] text-white border-[#151311]"
                          : "bg-[#FAF8F5] text-[#48433F] border-[#E8E2D8] hover:border-[#B88947]"
                      }`}
                    >
                      Home Service
                    </button>
                  </div>
                </div>
              </div>

              {/* Row 2: Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#151311] mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl px-4 py-3 text-sm text-[#151311] focus:outline-none focus:border-[#B88947]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#151311] mb-2">
                    Preferred Time of Day
                  </label>
                  <select
                    value={timePreference}
                    onChange={(e) => setTimePreference(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl px-4 py-3 text-sm text-[#151311] focus:outline-none focus:border-[#B88947]"
                  >
                    <option value="Early Bird (6:00 AM - 8:00 AM)">
                      Early Bird (6:00 AM - 8:00 AM) • Weddings
                    </option>
                    <option value="Morning (8:00 AM - 11:00 AM)">
                      Morning (8:00 AM - 11:00 AM)
                    </option>
                    <option value="Afternoon (12:00 PM - 3:00 PM)">
                      Afternoon (12:00 PM - 3:00 PM)
                    </option>
                    <option value="Evening (3:30 PM - 6:30 PM)">
                      Evening (3:30 PM - 6:30 PM)
                    </option>
                  </select>
                </div>
              </div>

              {/* Row 3: Name & Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#151311] mb-2">
                    Your Name (Optional)
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#78716A] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. Bukola or Sarah"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl pl-10 pr-4 py-3 text-sm text-[#151311] focus:outline-none focus:border-[#B88947]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#151311] mb-2">
                    Event Type / Notes (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Traditional wedding, sensitive skin, gele needed"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl px-4 py-3 text-sm text-[#151311] focus:outline-none focus:border-[#B88947]"
                  />
                </div>
              </div>

              {/* Live Preview Box */}
              <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-[#E8E2D8]">
                <p className="text-[11px] uppercase tracking-wider font-bold text-[#78716A] mb-1">
                  Message Preview for Zee:
                </p>
                <p className="text-xs text-[#151311] font-mono whitespace-pre-wrap leading-relaxed">
                  {`Hello Zee! I would like to book a makeup appointment:\n• Service: ${selectedService}\n• Location: ${locationType}\n• Date: ${date || "(Not specified yet)"}\n• Time: ${timePreference}${clientName ? `\n• Name: ${clientName}` : ""}${notes ? `\n• Notes: ${notes}` : ""}`}
                </p>
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 bg-[#151311] hover:bg-[#B88947] text-white py-4 px-8 rounded-full font-semibold text-sm tracking-wide transition-all shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 text-[#FAF8F5]" />
                  <span>Send Request to WhatsApp (0813 894 8285)</span>
                </a>

                <a
                  href="tel:+2348138948285"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#151311] hover:text-[#B88947] py-2 px-4 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#B88947]" />
                  <span>Prefer Calling? 0813 894 8285</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

