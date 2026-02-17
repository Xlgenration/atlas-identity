import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATLAS — Premium Identity Mapping",
  description: "Discover your authentic self through advanced personality mapping and cosmic insights.",
  keywords: ["identity mapping", "personality analysis", "self-discovery", "astrology", "human design"],
  openGraph: {
    title: "ATLAS — Premium Identity Mapping",
    description: "Discover your authentic self through advanced personality mapping and cosmic insights.",
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
    title: "ATLAS — Premium Identity Mapping",
    description: "Discover your authentic self through advanced personality mapping and cosmic insights.",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}