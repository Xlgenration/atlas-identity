import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ATLAS — Know Yourself. Understand Others.",
  description: "AI-powered identity mapping combining astrology, human design, personality science",
  keywords: ["astrology", "human design", "personality", "identity", "self-discovery"],
  openGraph: {
    title: "ATLAS — Know Yourself. Understand Others.",
    description: "AI-powered identity mapping combining astrology, human design, personality science",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATLAS — Know Yourself. Understand Others.",
    description: "AI-powered identity mapping combining astrology, human design, personality science",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-[#0a0a0f] text-white`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}