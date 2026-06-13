// src/app/layout.tsx
import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const siteUrl = "https://bowenrecords.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: "Bowen Records",

  title: {
    default: "Bowen Records | Vintage Vinyl, Rare Finds & Classic Records",
    template: "%s | Bowen Records",
  },

  description:
    "Bowen Records helps music lovers buy vinyl, sell collections, request specific records, and discover classic albums, rare finds, oldies, soul, jazz, funk, rock, R&B, and hip-hop records.",

  keywords: [
    "Bowen Records",
    "vinyl records",
    "record collection",
    "sell records",
    "buy vinyl records",
    "rare records",
    "classic albums",
    "vintage records",
    "used records",
    "record shop",
    "Los Angeles records",
    "Los Angeles vinyl",
    "Discogs record seller",
    "oldies records",
    "soul records",
    "jazz records",
    "funk records",
    "rock records",
    "R&B records",
    "hip-hop records",
  ],

  authors: [{ name: "Bowen Records" }],
  creator: "Bowen Records",
  publisher: "Bowen Records",

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: [
      {
        url: "/assets/logo.jpg",
        type: "image/jpeg",
      },
    ],
    shortcut: "/assets/logo.jpg",
    apple: "/assets/logo.jpg",
  },

  openGraph: {
    title: "Bowen Records | Vintage Vinyl, Rare Finds & Classic Records",
    description:
      "Buy vinyl, sell collections, request specific records, and discover classic albums through Bowen Records.",
    url: siteUrl,
    siteName: "Bowen Records",
    images: [
      {
        url: "/assets/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bowen Records vintage vinyl record shop logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bowen Records | Vintage Vinyl, Rare Finds & Classic Records",
    description:
      "A throwback record shop experience for vinyl lovers, collectors, DJs, and music fans.",
    images: ["/assets/logo.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "MusicStore",
    name: "Bowen Records",
    url: siteUrl,
    description:
      "Bowen Records helps music lovers buy vinyl, sell collections, request specific records, and discover classic albums, rare finds, oldies, soul, jazz, funk, rock, R&B, and hip-hop records.",
    image: `${siteUrl}/assets/logo.jpg`,
    sameAs: [],
    areaServed: {
      "@type": "Place",
      name: "Los Angeles, California",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Vinyl Records",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Record Collection Buying",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Specific Record Requests",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${bebas.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#efe1c6] font-body text-[#251d18]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />

        {children}
      </body>
    </html>
  );
}