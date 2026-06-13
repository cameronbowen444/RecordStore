// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import type { ReactNode } from "react";
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
const siteName = "Bowen Records";
const siteDescription =
  "Bowen Records helps music lovers buy vinyl, sell collections, request specific records, and discover classic albums, rare finds, oldies, soul, jazz, funk, rock, R&B, and hip-hop records.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: siteName,

  title: {
    default: "Bowen Records | Vintage Vinyl, Rare Finds & Classic Records",
    template: "%s | Bowen Records",
  },

  description: siteDescription,

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

  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,

  alternates: {
    canonical: "/",
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
    url: "/",
    siteName,
    images: [
      {
        url: "/assets/store.jpg",
        width: 1200,
        height: 630,
        alt: "Bowen Records vintage record shop and vinyl collection",
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
    images: ["/assets/store.jpg"],
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#efe1c6",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      description: siteDescription,
      inLanguage: "en-US",
    },
    {
      "@type": "MusicStore",
      "@id": `${siteUrl}/#business`,
      name: siteName,
      url: siteUrl,
      description: siteDescription,
      image: `${siteUrl}/assets/store.jpg`,
      logo: `${siteUrl}/assets/logo.jpg`,
      areaServed: {
        "@type": "Place",
        name: "Los Angeles, California",
      },
      knowsAbout: [
        "Vinyl records",
        "Vintage records",
        "Rare records",
        "Classic albums",
        "Oldies records",
        "Soul records",
        "Jazz records",
        "Funk records",
        "Rock records",
        "R&B records",
        "Hip-hop records",
        "Record collections",
      ],
      serviceArea: {
        "@type": "Place",
        name: "Los Angeles, California",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Bowen Records Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Buy Vinyl Records",
              description:
                "Browse and buy classic vinyl records, rare finds, oldies, soul, jazz, funk, rock, R&B, and hip-hop albums.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sell Record Collections",
              description:
                "Sell vinyl record collections to Bowen Records for review and possible purchase.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Request Specific Records",
              description:
                "Request specific vinyl records, albums, artists, or genres you are looking for.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#efe1c6] font-body text-[#251d18]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {children}
      </body>
    </html>
  );
}