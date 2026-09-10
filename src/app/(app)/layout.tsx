import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AETHERIA | The Luminary Arcane Academy & Celestial Grimoire",
  description: "Enter Aetheria, a sanctuary of ancient astral sorcery, celestial alchemy, and chrono-weaving. Unleash your arcane potential through starlight enchantments and mystical lore.",
  keywords: [
    "magic",
    "arcane academy",
    "celestial sorcery",
    "grimoire",
    "astral magic",
    "spells",
    "enchantments",
    "aetheria",
    "payload cms",
  ],
  authors: [{ name: "The High Magisterium" }],
  openGraph: {
    title: "AETHERIA | Luminary Arcane Academy",
    description: "Step into an ethereal realm of star-forged sorcery, arcane sigils, and celestial wisdom.",
    type: "website",
    locale: "en_US",
  },
};

export default function PublicAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${jakarta.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
