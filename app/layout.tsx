import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.extramilemechanic.co.za"),
  title: {
    default: "Extra Mile Mechanic | Honest Mechanical Services",
    template: "%s | Extra Mile Mechanic",
  },
  icons: {
    icon: "/images/extra-mile-logo.png",
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  description:
    "Cape Town's honest mechanic. Reliable servicing, diagnostics and repairs with free extra checks after every job.",
  openGraph: {
    title: "Extra Mile Mechanic | Honest Mechanical Services",
    description:
      "Reliable mechanic services built on integrity, clear pricing and long-term customer relationships.",
    url: "https://www.facebook.com/julian.hartzenberg",
    siteName: "Extra Mile Mechanic",
    images: [
      {
        url: "/images/extra-mile-logo.png",
        width: 500,
        height: 200,
        alt: "Extra Mile Mechanic",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.facebook.com/julian.hartzenberg#organization",
      name: "Extra Mile Mechanic",
      url: "https://www.facebook.com/julian.hartzenberg",
      logo: {
        "@type": "ImageObject",
        url: "/images/extra-mile-logo.png",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.facebook.com/julian.hartzenberg#localbusiness",
      name: "Extra Mile Mechanic",
      image: "/images/extra-mile-logo.png",
      url: "https://www.facebook.com/julian.hartzenberg",
      telephone: "+27650034437",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Cape Town",
        addressLocality: "Cape Town",
        postalCode: "8000",
        addressRegion: "Western Cape",
        addressCountry: "ZA",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-brand focus:px-3 focus:py-2 focus:text-sm focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        <LoadingScreen />
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
