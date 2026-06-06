import type { Metadata, Viewport } from "next";
import "./globals.css";
import AppShell from "@/components/AppShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://chiranperera.com"),
  title: {
    default: "Chiran Perera — Studio",
    template: "%s — Chiran Perera",
  },
  description:
    "Chiran Perera is a designer, developer and brand & AI studio in Colombo. I design, build and brand cinematic, AI-native websites — engineered to be the source ChatGPT, Claude and Perplexity cite.",
  keywords: [
    "Chiran Perera", "web design", "web development", "brand identity",
    "AI search optimization", "Colombo", "Sri Lanka", "studio portfolio",
  ],
  authors: [{ name: "Chiran Perera" }],
  openGraph: {
    type: "website",
    title: "Chiran Perera — Studio",
    description:
      "I design, build and brand cinematic, AI-native websites — engineered to be cited by ChatGPT, Claude and Perplexity.",
    siteName: "Chiran Perera",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiran Perera — Studio",
    description:
      "I design, build and brand cinematic, AI-native websites — engineered to be cited by AI.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Stolzl — Adobe Fonts / Typekit (domain-locked: authorize this domain in Adobe Fonts) */}
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/uqp8dyo.css" />
        {/* Space Mono — Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
