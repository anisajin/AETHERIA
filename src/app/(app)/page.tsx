import StarfieldCanvas from "@/components/StarfieldCanvas";
import MagicalCursor from "@/components/MagicalCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";
import CelestialFamiliar from "@/components/CelestialFamiliar";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let liveDisciplines;

  try {
    const payload = await getPayload({ config: configPromise });
    const res = await payload.find({
      collection: "disciplines",
      where: {
        _status: {
          equals: "published",
        },
      },
      sort: "order",
      limit: 12,
    });

    if (res.docs && res.docs.length > 0) {
      liveDisciplines = res.docs.map((doc) => ({
        id: String(doc.id),
        name: doc.name,
        category: doc.category,
        icon: doc.icon,
        description: doc.description,
        incantation: doc.incantation,
        manaCost: doc.manaCost,
        rarity: doc.rarity as "Apprentice" | "Magister" | "Archmage",
        color: doc.color || "#00f5d4",
      }));
    }
  } catch {
    // Fall back smoothly to default grimoire
  }

  return (
    <>
      {/* Custom Magical Celestial Cursor */}
      <MagicalCursor />

      {/* Interactive Cute Celestial Creature Familiar */}
      <CelestialFamiliar />

      {/* Background Interactive Celestial Canvas */}
      <StarfieldCanvas />

      {/* Primary Semantic Header & Navigation */}
      <Navbar />

      {/* Main Semantic Content Outline */}
      <main id="main-content">
        {/* First Section: Hero Section */}
        <HeroSection />

        {/* Second Section: About / Lore Chronicles */}
        <AboutSection />

        {/* Third Section: Special Arcane Features (Live from Payload CMS) */}
        <FeaturesSection items={liveDisciplines} />

        {/* Fourth Section: Interactive Spellcraft Form */}
        <FormSection />
      </main>

      {/* Semantic Footer */}
      <Footer />
    </>
  );
}
