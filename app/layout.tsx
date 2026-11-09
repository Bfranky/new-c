import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0D0B0A",
};

export const metadata: Metadata = {
  title: "Beauté by Zee | Luxury Makeup & Gele Stylist in Ikorodu (5.0 ★)",
  description:
    "Top-rated 5.0-star professional makeup studio in Eyita, Ikorodu, Lagos. Tailored for rich African complexions: luxury bridal glam, owambe party looks, and couture gele styling.",
  keywords: [
    "makeup artist in ikorodu",
    "beautebyzee",
    "eyita ikorodu makeup studio",
    "black bridal makeup lagos",
    "owambe makeup ikorodu",
    "gele tying ikorodu",
    "lagos luxury beautician",
  ],
  authors: [{ name: "Beauté by Zee" }],
  openGraph: {
    title: "Beauté by Zee | Luxury Makeup & Gele Stylist in Ikorodu",
    description:
      "5.0 Rated Makeup Studio in Eyita, Ikorodu. Flawless melanin artistry that melts into your skin and lasts all day.",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "https://images.unsplash.com/photo-1786529743690-93a4547bc26c?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Beauté by Zee - Luxury African Bridal Makeup",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "beautebyzee_ Makeup Artist in Ikorodu",
    "image": "https://images.unsplash.com/photo-1786529743690-93a4547bc26c",
    "telephone": "+2348138948285",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "24 Oguntuga Street, Eyita",
      "addressLocality": "Ikorodu",
      "addressRegion": "Lagos",
      "postalCode": "104101",
      "addressCountry": "NG",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.6190",
      "longitude": "3.5085",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "11",
      "bestRating": "5",
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        "opens": "08:00",
        "closes": "19:00",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF7F2] text-[#0D0B0A] selection:bg-[#C59A3F] selection:text-white">
        {children}
      </body>
    </html>
  );
}
