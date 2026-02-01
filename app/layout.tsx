import type { Metadata } from "next";
import { Bricolage_Grotesque, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage-grotesque",
  weight: ["400", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif-4",
  weight: ["400", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "CampCheck - Dein Guide für Camping & Outdoor",
    template: "%s | CampCheck",
  },
  description:
    "Entdecke die besten Camping-Tipps, Ausrüstungsguides und Campingplatz-Empfehlungen für unvergessliche Outdoor-Abenteuer.",
  keywords: ["camping", "outdoor", "zelten", "campingplatz", "ausrüstung"],
  authors: [{ name: "CampCheck Team" }],
  creator: "CampCheck",
  publisher: "CampCheck",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://campcheck.de",
    siteName: "CampCheck",
    title: "CampCheck - Dein Guide für Camping & Outdoor",
    description:
      "Entdecke die besten Camping-Tipps, Ausrüstungsguides und Campingplatz-Empfehlungen für unvergessliche Outdoor-Abenteuer.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CampCheck",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CampCheck - Dein Guide für Camping & Outdoor",
    description:
      "Entdecke die besten Camping-Tipps, Ausrüstungsguides und Campingplatz-Empfehlungen für unvergessliche Outdoor-Abenteuer.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${bricolage.variable} ${sourceSerif.variable} ${jetbrains.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
