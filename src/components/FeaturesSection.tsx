"use client";

import React, { useState } from "react";

interface FeatureItem {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  incantation: string;
  manaCost: string;
  rarity: "Apprentice" | "Magister" | "Archmage";
  color: string;
}

const featuresList: FeatureItem[] = [
  {
    id: "chrono",
    name: "Chrono-Weaving Dilator",
    category: "Temporal Sorcery",
    icon: "⌛",
    description: "Dilates subjective perception, allowing complex multi-layered incantations to be cast in fractions of a heartbeat.",
    incantation: "Tempus aevum retorquet, aetheria filum nectit.",
    manaCost: "65 Lumens / sec",
    rarity: "Archmage",
    color: "#00f5d4",
  },
  {
    id: "runes",
    name: "Bioluminescent Glyphs",
    category: "Luminescent Geometry",
    icon: "✨",
    description: "Inscribed runes that awaken upon presence of living soul essence, offering perpetual navigation through shadowed planes.",
    incantation: "Lux perpetua in tenebris resplendeat.",
    manaCost: "12 Lumens / cycle",
    rarity: "Apprentice",
    color: "#f6c564",
  },
  {
    id: "aura",
    name: "Aura Harmonizer Matrix",
    category: "Spiritual Alchemy",
    icon: "💎",
    description: "A hexagonal array of quartz prisms that purges discord, shielding the caster from psychic fatigue and hex resonance.",
    incantation: "Anima serena, discordia evanescit.",
    manaCost: "35 Lumens / ward",
    rarity: "Magister",
    color: "#c77dff",
  },
  {
    id: "starlight",
    name: "Starlight Crystallization",
    category: "Celestial Crafting",
    icon: "⭐",
    description: "Captures midnight cosmic rays and condenses photons into durable gems capable of powering ancient talisman engines.",
    incantation: "Astralis radius in solidum crystallum vertitur.",
    manaCost: "80 Lumens / gem",
    rarity: "Archmage",
    color: "#ffdf8d",
  },
  {
    id: "parchment",
    name: "Telepathic Parchment",
    category: "Arcane Inscription",
    icon: "📜",
    description: "Twin parchment sheets that mirror hand-inscribed runes instantaneously across realms, unhindered by dimensional barriers.",
    incantation: "Scriptum trans dimensio fideliter transfertur.",
    manaCost: "20 Lumens / dispatch",
    rarity: "Magister",
    color: "#38bdf8",
  },
  {
    id: "ward",
    name: "Aetherial Void Shield",
    category: "Abjuration Ward",
    icon: "🛡️",
    description: "Generates an impenetrable spherical forcefield calibrated against chaotic anomalies, curses, and kinetic intrusions.",
    incantation: "Murus aetherius contra omne malum erigitur.",
    manaCost: "50 Lumens / pulse",
    rarity: "Archmage",
    color: "#ec4899",
  },
];

export default function FeaturesSection({ items }: { items?: FeatureItem[] }) {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);
  const displayFeatures = items && items.length > 0 ? items : featuresList;

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
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
          margin: "0 auto 64px",
        }}
      >
        <div className="arcane-badge" style={{ marginBottom: "16px" }}>
          <span>✧ Specialized Arcana ✧</span>
        </div>
        <h2
          id="features-heading"
          className="font-arcane heading-gradient"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            marginBottom: "18px",
          }}
        >
          Special Features & High Disciplines
        </h2>
        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
        >
          Equipped with state-of-the-art arcane instruments, our adepts harness 
          celestial phenomena to deliver unparalleled enchantments.
        </p>
      </header>

      {/* Feature Articles Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "28px",
        }}
      >
        {displayFeatures.map((item) => (
          <article
            key={item.id}
            className="glass-panel"
            style={{
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top Row: Icon & Rarity Badge */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: `rgba(255, 255, 255, 0.05)`,
                    border: `1px solid ${item.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    boxShadow: `0 0 16px ${item.color}30`,
                  }}
                >
                  {item.icon}
                </div>

                <span
                  style={{
                    fontSize: "0.74rem",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    background: "rgba(0, 0, 0, 0.4)",
                    border: `1px solid ${item.color}60`,
                    color: item.color,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {item.rarity}
                </span>
              </div>

              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--color-text-dim)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                {item.category}
              </span>

              <h3
                className="font-arcane"
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "12px",
                }}
              >
                {item.name}
              </h3>

              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.93rem",
                  lineHeight: 1.6,
                  marginBottom: "24px",
                }}
              >
                {item.description}
              </p>
            </div>

            {/* Bottom Row: Mana metric & Inspect button */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "16px",
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              <span style={{ fontSize: "0.82rem", color: "var(--color-gold-light)" }}>
                ⚡ {item.manaCost}
              </span>

              <button
                id={`inspect-feature-${item.id}`}
                type="button"
                onClick={() => setSelectedFeature(item)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--color-cyan)",
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.textShadow = "0 0 8px var(--color-cyan)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-cyan)";
                  e.currentTarget.style.textShadow = "none";
                }}
              >
                <span>Examine Rune</span>
                <span>→</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal / Grimoire Codex Inspector */}
      {selectedFeature && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(5, 3, 14, 0.8)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            zIndex: 1000,
          }}
          onClick={() => setSelectedFeature(null)}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: "520px",
              width: "100%",
              padding: "36px",
              background: "linear-gradient(135deg, rgba(24, 18, 50, 0.95) 0%, rgba(13, 9, 30, 0.98) 100%)",
              border: `1px solid ${selectedFeature.color}`,
              boxShadow: `0 0 50px ${selectedFeature.color}40`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "2rem" }}>{selectedFeature.icon}</span>
                <div>
                  <h3
                    id="modal-title"
                    className="font-arcane"
                    style={{ fontSize: "1.35rem", color: "#ffffff" }}
                  >
                    {selectedFeature.name}
                  </h3>
                  <span style={{ fontSize: "0.78rem", color: selectedFeature.color }}>
                    {selectedFeature.category}
                  </span>
                </div>
              </div>

              <button
                type="button"
                aria-label="Close Codex modal"
                onClick={() => setSelectedFeature(null)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--color-text-muted)",
                  fontSize: "1.4rem",
                  cursor: "pointer",
                  padding: "4px",
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ margin: "20px 0" }}>
              <span
                style={{
                  fontSize: "0.78rem",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                Sacred Incantation Formulation:
              </span>
              <div
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  border: "1px dashed var(--border-subtle)",
                  borderRadius: "10px",
                  padding: "16px",
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  color: "var(--color-gold-light)",
                  fontSize: "1rem",
                }}
              >
                &ldquo;{selectedFeature.incantation}&rdquo;
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
                margin: "24px 0",
              }}
            >
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                <span style={{ fontSize: "0.75rem", color: "var(--color-text-dim)" }}>
                  Mana Drain:
                </span>
                <div style={{ color: "#ffffff", fontWeight: 600, fontSize: "0.95rem" }}>
                  {selectedFeature.manaCost}
                </div>
              </div>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                <span style={{ fontSize: "0.75rem", color: "var(--color-text-dim)" }}>
                  Attunement Rank:
                </span>
                <div style={{ color: selectedFeature.color, fontWeight: 600, fontSize: "0.95rem" }}>
                  {selectedFeature.rarity}
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn-magical"
              style={{ width: "100%" }}
              onClick={() => setSelectedFeature(null)}
            >
              <span>Affirm Attunement</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
