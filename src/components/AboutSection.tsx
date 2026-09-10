"use client";

import React, { useState } from "react";

interface LoreCodex {
  id: string;
  title: string;
  sigil: string;
  excerpt: string;
  fullStory: string;
  author: string;
}

const loreEntries: LoreCodex[] = [
  {
    id: "covenant",
    title: "The Celestial Covenant",
    sigil: "📜",
    excerpt: "Inscribed in the First Era beneath the raining shards of the Shattered Moon.",
    fullStory: "Before mortal tongues learned the dialect of starlight, three archmages anchored the celestial leylines upon the summit of Mount Aetheria. By binding their life-force with fallen meteorites of pure lumite, they forged the eternal sanctuary where any seeker of pure intent might attune themselves to cosmic balance.",
    author: "Archmage Vespera, Chrono-Keeper of the 1st Cycle",
  },
  {
    id: "leylines",
    title: "The Ley Line Cartography",
    sigil: "🧭",
    excerpt: "Subterranean rivers of radiant mana that pulse synchronously with the eclipses.",
    fullStory: "Our cartographers have charted eight prime meridians connecting ancient stone circles across seven continents. When tapped through resonant obsidian focus rods, these channels replenish drained talismans and amplify enchantments beyond ordinary boundaries.",
    author: "Master Geometer Orion Val",
  },
  {
    id: "disciplines",
    title: "The Archmage's Vow",
    sigil: "⚖️",
    excerpt: "The sacred oath sworn by all disciples before touching the Grimoire of Aetheria.",
    fullStory: "Magic is not a weapon of dominance, but an orchestra of light. Every rune engraved upon the ether ripples through eternity. We vow never to bend natural vitality to selfish tyranny, but to illuminate darkness, nurture sanctuary, and elevate mortal consciousness.",
    author: "Council of the Seven Luminaries",
  },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(loreEntries[0].id);

  const selectedLore = loreEntries.find((l) => l.id === activeTab) || loreEntries[0];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{
        padding: "100px 24px",
        position: "relative",
        zIndex: 2,
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      {/* Section Header */}
      <header
        style={{
          textAlign: "center",
          maxWidth: "780px",
          margin: "0 auto 60px",
        }}
      >
        <div className="arcane-badge" style={{ marginBottom: "16px" }}>
          <span>✧ The Genesis of Magic ✧</span>
        </div>
        <h2
          id="about-heading"
          className="font-arcane heading-gradient"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            marginBottom: "18px",
          }}
        >
          Chronicles of the Luminary Order
        </h2>
        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
        >
          For over twelve centuries, Aetheria has safeguarded the primordial secrets 
          of astral alchemy, providing shelter and initiation to all who seek harmony 
          with cosmic forces.
        </p>
      </header>

      {/* 3 Core Philosophical Pillars (Semantic Articles) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          marginBottom: "60px",
        }}
      >
        {/* Article 1 */}
        <article className="glass-panel" style={{ padding: "32px", position: "relative" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: "rgba(246, 197, 100, 0.12)",
              border: "1px solid rgba(246, 197, 100, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.6rem",
              marginBottom: "20px",
              boxShadow: "0 0 16px var(--color-gold-glow)",
            }}
          >
            🏛️
          </div>
          <h3
            className="font-arcane"
            style={{
              fontSize: "1.35rem",
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: "12px",
            }}
          >
            The Astral Spire
          </h3>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.65 }}>
            Constructed from fallen star-stone, the Great Spire acts as an interstellar antenna,
            capturing cosmic radio frequencies and transmuting them into tangible luminous energy.
          </p>
        </article>

        {/* Article 2 */}
        <article className="glass-panel" style={{ padding: "32px", position: "relative" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: "rgba(0, 245, 212, 0.12)",
              border: "1px solid rgba(0, 245, 212, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.6rem",
              marginBottom: "20px",
              boxShadow: "0 0 16px var(--color-cyan-glow)",
            }}
          >
            🌀
          </div>
          <h3
            className="font-arcane"
            style={{
              fontSize: "1.35rem",
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: "12px",
            }}
          >
            Chrono-Aether Weaving
          </h3>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.65 }}>
            By decelerating subjective temporal currents, our adepts cultivate centuries of 
            erudition within fleeting celestial moments, preserving lost arts from forgotten ages.
          </p>
        </article>

        {/* Article 3 */}
        <article className="glass-panel" style={{ padding: "32px", position: "relative" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: "rgba(157, 78, 221, 0.12)",
              border: "1px solid rgba(168, 85, 247, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.6rem",
              marginBottom: "20px",
              boxShadow: "0 0 16px var(--color-purple-glow)",
            }}
          >
            🔮
          </div>
          <h3
            className="font-arcane"
            style={{
              fontSize: "1.35rem",
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: "12px",
            }}
          >
            Harmonic Resonance
          </h3>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.65 }}>
            Every spell is a symphony. Through crystal attunement, students calibrate their 
            mental frequencies to harmonize effortlessly with the vital rhythm of natural realms.
          </p>
        </article>
      </div>

      {/* Interactive Lore Codex Parchment Reader */}
      <div
        className="glass-panel"
        style={{
          padding: "36px",
          background: "linear-gradient(135deg, rgba(20, 14, 42, 0.75) 0%, rgba(11, 8, 24, 0.85) 100%)",
          border: "1px solid rgba(246, 197, 100, 0.25)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            borderBottom: "1px solid var(--border-subtle)",
            paddingBottom: "20px",
            marginBottom: "24px",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "0.78rem",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontWeight: 600,
              }}
            >
              The Archives of Whispering Stone
            </span>
            <h3 className="font-arcane" style={{ fontSize: "1.45rem", color: "#ffffff", marginTop: "4px" }}>
              The Sacred Codex
            </h3>
          </div>

          {/* Codex Tab Switcher */}
          <div
            role="tablist"
            aria-label="Archive Manuscripts"
            style={{
              display: "flex",
              gap: "8px",
              background: "rgba(10, 8, 20, 0.6)",
              padding: "4px",
              borderRadius: "50px",
              border: "1px solid var(--border-subtle)",
            }}
          >
            {loreEntries.map((entry) => {
              const isActive = activeTab === entry.id;
              return (
                <button
                  key={entry.id}
                  id={`tab-${entry.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${entry.id}`}
                  onClick={() => setActiveTab(entry.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    borderRadius: "50px",
                    border: "none",
                    background: isActive ? "rgba(246, 197, 100, 0.18)" : "transparent",
                    color: isActive ? "var(--color-gold-light)" : "var(--color-text-muted)",
                    boxShadow: isActive ? "0 0 14px var(--color-gold-glow)" : "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-serif)",
                    fontSize: "0.85rem",
                    transition: "all 0.25s ease",
                  }}
                >
                  <span>{entry.sigil}</span>
                  <span>{entry.title.split(" ")[1]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Panel Content */}
        <div
          id={`panel-${selectedLore.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${selectedLore.id}`}
          style={{
            minHeight: "130px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{
                fontStyle: "italic",
                color: "var(--color-cyan)",
                fontSize: "1rem",
                marginBottom: "14px",
              }}
            >
              &ldquo;{selectedLore.excerpt}&rdquo;
            </p>
            <p
              style={{
                color: "var(--color-text-main)",
                fontSize: "1.02rem",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              {selectedLore.fullStory}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "var(--color-text-dim)",
              fontSize: "0.84rem",
              borderTop: "1px dashed rgba(255, 255, 255, 0.08)",
              paddingTop: "14px",
            }}
          >
            <span>🖋️ Recorded by:</span>
            <span style={{ color: "var(--color-gold-light)", fontWeight: 500 }}>
              {selectedLore.author}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
