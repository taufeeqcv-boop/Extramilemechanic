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
  title: {
    default: "Vesani Engineering | Modular Building Solutions",
    template: "%s | Vesani Engineering",
  },
  icons: {
    icon: "/vesani-logo.png",
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  description:
    "Vesani Engineering provides quality design engineering and modular building solutions. Your partner for modern, efficient construction across South Africa and internationally.",
  openGraph: {
    title: "Vesani Engineering | Modular Building Solutions",
    description:
      "Vesani Engineering provides quality design engineering and modular building solutions. www.vesani.co.za",
    url: "https://www.vesani.co.za",
    siteName: "Vesani Engineering",
    images: [
      {
        url: "https://www.vesani.co.za/vesani-logo.png",
        width: 256,
        height: 256,
        alt: "Vesani Engineering cc",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.vesani.co.za/#organization",
      name: "Vesani Engineering cc",
      url: "https://www.vesani.co.za",
      logo: {
        "@type": "ImageObject",
        url: "https://www.vesani.co.za/vesani-logo.png",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.vesani.co.za/#localbusiness",
      name: "Vesani Engineering cc",
      image: "https://www.vesani.co.za/vesani-logo.png",
      url: "https://www.vesani.co.za",
      telephone: "+27215911617",
      email: "info@vesani.co.za",
      address: {
        "@type": "PostalAddress",
        streetAddress: "205 Wallace Street, Glenwood",
        addressLocality: "Cape Town",
        postalCode: "7460",
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
