import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF8F5",
};

export const metadata: Metadata = {
  title: "Beauté by Zee | Makeup Artist in Ikorodu (5.0 ★)",
  description:
    "Top-rated 5.0-star professional beautician & makeup artist in Eyita, Ikorodu, Lagos. Flawless bridal glam, owambe party looks, photoshoot makeup, gele styling & home service.",
  keywords: [
    "makeup artist in ikorodu",
    "beautebyzee",
    "eyita ikorodu makeup studio",
    "bridal makeup lagos",
    "owambe makeup ikorodu",
    "gele tying ikorodu",
    "lagos beautician",
  ],
  authors: [{ name: "Beauté by Zee" }],
  openGraph: {
    title: "Beauté by Zee | Makeup Artist in Ikorodu",
    description:
      "5.0 Rated Makeup Studio in Eyita, Ikorodu. Flawless skin-blend makeup that lasts all day.",
    type: "website",
    locale: "en_NG",
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
    "image": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
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
      <body className="min-h-screen bg-[#FAF8F5] text-[#151311] selection:bg-[#B88947] selection:text-white">
        {children}
      </body>
    </html>
  );
}
