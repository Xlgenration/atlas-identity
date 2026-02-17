import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATLAS — Dein Persönlichkeits-Blueprint",
  description: "Entdecke dein authentisches Selbst durch fortschrittliche Persönlichkeitsanalyse und kosmische Einsichten.",
  keywords: ["Persönlichkeitsanalyse", "Identity Mapping", "Selbstentdeckung", "Astrologie", "Human Design"],
  openGraph: {
    title: "ATLAS — Dein Persönlichkeits-Blueprint",
    description: "Entdecke dein authentisches Selbst durch fortschrittliche Persönlichkeitsanalyse und kosmische Einsichten.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATLAS — Dein Persönlichkeits-Blueprint",
    description: "Entdecke dein authentisches Selbst durch fortschrittliche Persönlichkeitsanalyse und kosmische Einsichten.",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}