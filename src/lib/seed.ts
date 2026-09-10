import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function seedDatabase() {
  try {
    const payload = await getPayload({ config: configPromise });

    // 1. Check & Seed Disciplines
    const existingDisciplines = await payload.find({
      collection: "disciplines",
      limit: 1,
      draft: true,
    });

    if (existingDisciplines.totalDocs === 0) {
      console.log("Seeding initial published Disciplines...");
      const disciplinesData = [
        {
          name: "Chrono-Weaving Dilator",
          category: "Temporal Sorcery",
          icon: "⌛",
          description: "Dilates subjective perception, allowing complex multi-layered incantations to be cast in fractions of a heartbeat.",
          incantation: "Tempus aevum retorquet, aetheria filum nectit.",
          manaCost: "65 Lumens / sec",
          rarity: "Archmage" as const,
          color: "#00f5d4",
          order: 1,
          _status: "published" as const,
        },
        {
          name: "Bioluminescent Glyphs",
          category: "Luminescent Geometry",
          icon: "✨",
          description: "Inscribed runes that awaken upon presence of living soul essence, offering perpetual navigation through shadowed planes.",
          incantation: "Lux perpetua in tenebris resplendeat.",
          manaCost: "12 Lumens / cycle",
          rarity: "Apprentice" as const,
          color: "#f6c564",
          order: 2,
          _status: "published" as const,
        },
        {
          name: "Aura Harmonizer Matrix",
          category: "Spiritual Alchemy",
          icon: "💎",
          description: "A hexagonal array of quartz prisms that purges discord, shielding the caster from psychic fatigue and hex resonance.",
          incantation: "Anima serena, discordia evanescit.",
          manaCost: "35 Lumens / ward",
          rarity: "Magister" as const,
          color: "#c77dff",
          order: 3,
          _status: "published" as const,
        },
        {
          name: "Starlight Crystallization",
          category: "Celestial Crafting",
          icon: "⭐",
          description: "Captures midnight cosmic rays and condenses photons into durable gems capable of powering ancient talisman engines.",
          incantation: "Astralis radius in solidum crystallum vertitur.",
          manaCost: "80 Lumens / gem",
          rarity: "Archmage" as const,
          color: "#ffdf8d",
          order: 4,
          _status: "published" as const,
        },
        {
          name: "Telepathic Parchment",
          category: "Arcane Inscription",
          icon: "📜",
          description: "Twin parchment sheets that mirror hand-inscribed runes instantaneously across realms, unhindered by dimensional barriers.",
          incantation: "Scriptum trans dimensio fideliter transfertur.",
          manaCost: "20 Lumens / dispatch",
          rarity: "Magister" as const,
          color: "#38bdf8",
          order: 5,
          _status: "published" as const,
        },
        {
          name: "Aetherial Void Shield",
          category: "Abjuration Ward",
          icon: "🛡️",
          description: "Generates an impenetrable spherical forcefield calibrated against chaotic anomalies, curses, and kinetic intrusions.",
          incantation: "Murus aetherius contra omne malum erigitur.",
          manaCost: "50 Lumens / pulse",
          rarity: "Archmage" as const,
          color: "#ec4899",
          order: 6,
          _status: "published" as const,
        },
      ];

      for (const item of disciplinesData) {
        await payload.create({
          collection: "disciplines",
          data: item,
        });
      }
    }

    // 2. Check & Seed Chronicles
    const existingChronicles = await payload.find({
      collection: "chronicles",
      limit: 1,
      draft: true,
    });

    if (existingChronicles.totalDocs === 0) {
      console.log("Seeding initial published Chronicles...");
      const chroniclesData = [
        {
          title: "The Astral Spire",
          sectionType: "pillar" as const,
          sigil: "🏛️",
          content: "Constructed from fallen star-stone, the Great Spire acts as an interstellar antenna, capturing cosmic radio frequencies and transmuting them into tangible luminous energy.",
          order: 1,
          _status: "published" as const,
        },
        {
          title: "Chrono-Aether Weaving",
          sectionType: "pillar" as const,
          sigil: "🌀",
          content: "By decelerating subjective temporal currents, our adepts cultivate centuries of erudition within fleeting celestial moments, preserving lost arts from forgotten ages.",
          order: 2,
          _status: "published" as const,
        },
        {
          title: "Harmonic Resonance",
          sectionType: "pillar" as const,
          sigil: "🔮",
          content: "Every spell is a symphony. Through crystal attunement, students calibrate their mental frequencies to harmonize effortlessly with the vital rhythm of natural realms.",
          order: 3,
          _status: "published" as const,
        },
        {
          title: "The Celestial Covenant",
          sectionType: "codex" as const,
          sigil: "📜",
          excerpt: "Inscribed in the First Era beneath the raining shards of the Shattered Moon.",
          content: "Before mortal tongues learned the dialect of starlight, three archmages anchored the celestial leylines upon the summit of Mount Aetheria. By binding their life-force with fallen meteorites of pure lumite, they forged the eternal sanctuary where any seeker of pure intent might attune themselves to cosmic balance.",
          author: "Archmage Vespera, Chrono-Keeper of the 1st Cycle",
          order: 4,
          _status: "published" as const,
        },
        {
          title: "The Ley Line Cartography",
          sectionType: "codex" as const,
          sigil: "🧭",
          excerpt: "Subterranean rivers of radiant mana that pulse synchronously with the eclipses.",
          content: "Our cartographers have charted eight prime meridians connecting ancient stone circles across seven continents. When tapped through resonant obsidian focus rods, these channels replenish drained talismans and amplify enchantments beyond ordinary boundaries.",
          author: "Master Geometer Orion Val",
          order: 5,
          _status: "published" as const,
        },
        {
          title: "The Archmage's Vow",
          sectionType: "codex" as const,
          sigil: "⚖️",
          excerpt: "The sacred oath sworn by all disciples before touching the Grimoire of Aetheria.",
          content: "Magic is not a weapon of dominance, but an orchestra of light. Every rune engraved upon the ether ripples through eternity. We vow never to bend natural vitality to selfish tyranny, but to illuminate darkness, nurture sanctuary, and elevate mortal consciousness.",
          author: "Council of the Seven Luminaries",
          order: 6,
          _status: "published" as const,
        },
      ];

      for (const item of chroniclesData) {
        await payload.create({
          collection: "chronicles",
          data: item,
        });
      }
    }

    // 3. Check & Seed SiteSettings Global
    const settings = await payload.findGlobal({
      slug: "site-settings",
      draft: true,
    });

    if (!settings.solsticeAnnouncement) {
      await payload.updateGlobal({
        slug: "site-settings",
        data: {
          solsticeAnnouncement: "The Solstice Ley Line Convergence",
          currentMoonPhase: "Waxing Gibbous",
          lunarLuminance: "84.6%",
          leylineFrequency: "432.8 Hz",
          activeWardsCount: "8,490",
          _status: "published" as const,
        },
      });
    }

    console.log("Database verification and initial seed check completed.");
  } catch (err) {
    console.error("Seed execution skipped or completed:", err);
  }
}
