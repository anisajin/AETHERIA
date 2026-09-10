"use client";

import React, { useState } from "react";

interface ElementSchool {
  name: string;
  glyph: string;
  color: string;
  glow: string;
  quote: string;
}

const elementalSchools: ElementSchool[] = [
  {
    name: "Astral Starlight",
    glyph: "✧",
    color: "#f6c564",
    glow: "rgba(246, 197, 100, 0.6)",
    quote: "Channels celestial constellations to pierce veil of ignorance.",
  },
  {
    name: "Ethereal Chrono",
    glyph: "⏳",
    color: "#00f5d4",
    glow: "rgba(0, 245, 212, 0.6)",
    quote: "Weaves temporal ribbons to bend seconds into infinities.",
  },
  {
    name: "Void Resonator",
    glyph: "🔮",
    color: "#c77dff",
    glow: "rgba(199, 125, 255, 0.6)",
    quote: "Harnesses the silent dark aether between newborn galaxies.",
  },
  {
    name: "Solar Pyromancy",
    glyph: "☀️",
    color: "#ff7b72",
    glow: "rgba(255, 123, 114, 0.6)",
    quote: "Kindles primordial starfire to burn away decay.",
  },
];

export default function HeroSection() {
  const [currentElementIdx, setCurrentElementIdx] = useState(0);
  const [pulseKey, setPulseKey] = useState(0);

  const currentSchool = elementalSchools[currentElementIdx];

  const handleOrbClick = () => {
    setCurrentElementIdx((prev) => (prev + 1) % elementalSchools.length);
    setPulseKey((prev) => prev + 1);
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "130px 24px 70px",
        overflow: "hidden",
      }}
    >
      {/* Mystical Radial Background Aura */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: `radial-gradient(circle, ${currentSchool.glow} 0%, rgba(157, 78, 221, 0.12) 40%, transparent 70%)`,
          filter: "blur(70px)",
          opacity: 0.8,
          pointerEvents: "none",
          transition: "background 0.8s ease",
          zIndex: 1,
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          alignItems: "center",
          gap: "48px",
          position: "relative",
          zIndex: 2,
        }}
        className="hero-grid"
      >
        {/* Left / Top Text Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          {/* Solstice Badge */}
          <div className="arcane-badge" style={{ marginBottom: "20px" }}>
            <span style={{ color: currentSchool.color }}>✦</span>
            <span>The Solstice Ley Line Convergence</span>
            <span style={{ color: currentSchool.color }}>✦</span>
          </div>

          {/* Primary H1 Heading */}
          <h1
            id="hero-heading"
            className="font-arcane heading-gradient"
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "22px",
              letterSpacing: "0.02em",
            }}
          >
            Awaken the Ancient Arts of Celestial Sorcery
          </h1>

          {/* Lore Description */}
          <p
            style={{
              fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
              marginBottom: "36px",
              maxWidth: "680px",
            }}
          >
            Step through the threshold of <strong>Aetheria</strong>. Inscribe starfall 
            sigils, weave chronological currents, and bend primordial aether 
            into wondrous reality.
          </p>

          {/* Hero Action Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
              marginBottom: "48px",
            }}
          >
            <a
              href="#spellcraft-form"
              id="hero-inscribe-btn"
              className="btn-magical"
            >
              <span>✧ Inscribe Your Spell</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#features"
              id="hero-explore-btn"
              className="btn-ethereal"
            >
              <span>Explore Sanctum Features</span>
            </a>
          </div>

          {/* Interactive Arcane Catalyst Orb */}
          <div
            style={{
              position: "relative",
              width: "240px",
              height: "240px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              margin: "0 auto 30px",
            }}
            onClick={handleOrbClick}
            title="Click to awaken next elemental resonance"
            role="button"
            tabIndex={0}
            aria-label={`Current arcane focus: ${currentSchool.name}. Click to cycle element.`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleOrbClick();
              }
            }}
          >
            {/* Outer Rune Ring 1 */}
            <div
              className="animate-spin-slow"
              style={{
                position: "absolute",
                width: "230px",
                height: "230px",
                borderRadius: "50%",
                border: "1px dashed rgba(246, 197, 100, 0.4)",
                boxShadow: `0 0 20px ${currentSchool.glow}`,
                transition: "all 0.5s ease",
              }}
            />

            {/* Inner Rune Ring 2 */}
            <div
              className="animate-spin-reverse-slow"
              style={{
                position: "absolute",
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                border: "1px dotted rgba(0, 245, 212, 0.45)",
              }}
            />

            {/* Glowing Core Sphere */}
            <div
              key={pulseKey}
              style={{
                width: "115px",
                height: "115px",
                borderRadius: "50%",
                background: `radial-gradient(circle at 35% 30%, #ffffff 0%, ${currentSchool.color} 50%, #150a30 100%)`,
                boxShadow: `0 0 45px ${currentSchool.glow}, 0 0 90px ${currentSchool.glow}, inset 0 0 20px rgba(255, 255, 255, 0.6)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.5s ease",
                transform: "scale(1)",
                animation: "float 4s ease-in-out infinite",
              }}
            >
              <span
                style={{
                  fontSize: "2.4rem",
                  filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.9))",
                }}
              >
                {currentSchool.glyph}
              </span>
            </div>

            {/* Orbiting Satellite Particle */}
            <div
              className="animate-spin-slow"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: currentSchool.color,
                  boxShadow: `0 0 12px ${currentSchool.color}`,
                }}
              />
            </div>
          </div>

          {/* Elemental Feedback Bar */}
          <div
            style={{
              background: "rgba(22, 16, 44, 0.6)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "50px",
              padding: "8px 20px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span style={{ fontSize: "0.82rem", color: "var(--color-text-dim)" }}>
              Resonating Focus:
            </span>
            <span
              className="font-arcane"
              style={{
                color: currentSchool.color,
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              {currentSchool.name}
            </span>
            <span style={{ fontSize: "0.75rem", color: "var(--color-text-dim)" }}>
              (Tap orb to change aspect)
            </span>
          </div>
        </div>

        {/* Live Arcane Status Metrics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "18px",
            width: "100%",
            marginTop: "16px",
          }}
        >
          <div className="glass-panel" style={{ padding: "20px", textAlign: "center" }}>
            <span style={{ color: "var(--color-gold)", fontSize: "1.2rem", display: "block" }}>
              🌔
            </span>
            <div className="font-arcane" style={{ fontSize: "1.25rem", fontWeight: 700, margin: "6px 0 2px" }}>
              Waxing Gibbous
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--color-text-dim)" }}>
              Lunar Luminance: 84.6%
            </p>
          </div>

          <div className="glass-panel" style={{ padding: "20px", textAlign: "center" }}>
            <span style={{ color: "var(--color-cyan)", fontSize: "1.2rem", display: "block" }}>
              ⚡
            </span>
            <div className="font-arcane" style={{ fontSize: "1.25rem", fontWeight: 700, margin: "6px 0 2px" }}>
              432.8 Hz
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--color-text-dim)" }}>
              Ley Line Harmonic Frequency
            </p>
          </div>

          <div className="glass-panel" style={{ padding: "20px", textAlign: "center" }}>
            <span style={{ color: "var(--color-purple-light)", fontSize: "1.2rem", display: "block" }}>
              🛡️
            </span>
            <div className="font-arcane" style={{ fontSize: "1.25rem", fontWeight: 700, margin: "6px 0 2px" }}>
              8,490
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--color-text-dim)" }}>
              Sanctuary Wards Active
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
