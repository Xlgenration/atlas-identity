import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ATLAS — Luxury Identity Mapping Platform",
  description: "Premium AI-powered identity mapping combining mystical astrology, human design, and personality science. Discover your authentic self with our luxury platform.",
  keywords: ["luxury astrology", "premium human design", "identity mapping", "AI personality analysis", "mystical self-discovery", "premium astrology app"],
  openGraph: {
    title: "ATLAS — Luxury Identity Mapping Platform",
    description: "Premium AI-powered identity mapping combining mystical astrology, human design, and personality science.",
    type: "website",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ATLAS Identity Platform',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATLAS — Luxury Identity Mapping Platform",
    description: "Premium AI-powered identity mapping combining mystical astrology, human design, and personality science.",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

function StarfieldBackground() {
  return (
    <div className="starfield">
      {/* Static stars */}
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      
      {/* Constellation lines */}
      <div className="constellation-line"></div>
      <div className="constellation-line"></div>
      
      {/* Shooting stars */}
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased text-white`}>
        <StarfieldBackground />
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}