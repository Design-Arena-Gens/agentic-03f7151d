import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mithila Makhana | Artisanal Fox Nuts from Bihar",
  description:
    "Discover premium Mithila Makhana sourced from the sacred ponds of Darbhanga. Stone-roasted, hand-sorted, and packaged for discerning palates.",
  metadataBase: new URL("https://agentic-03f7151d.vercel.app"),
  openGraph: {
    title: "Mithila Makhana | Artisanal Fox Nuts from Bihar",
    description:
      "Taste heritage with nutrient-rich Mithila Makhana. Sustainably harvested, slow roasted, and infused with Mithila artistry.",
    url: "https://agentic-03f7151d.vercel.app",
    siteName: "Mithila Makhana",
    images: [
      {
        url: "/logo.svg",
        width: 160,
        height: 48,
        alt: "Mithila Makhana wordmark"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mithila Makhana | Artisanal Fox Nuts from Bihar",
    description:
      "Nutrient-dense, hand-harvested Mithila Makhana for mindful snacking. Discover our heritage ingredients and farm-to-table craftsmanship.",
    images: ["/logo.svg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">{children}</div>
      </body>
    </html>
  );
}
