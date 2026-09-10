"use client";

import React, { useState } from "react";

export default function Footer() {
  const [dispatchEmail, setDispatchEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dispatchEmail) return;
    setSubscribed(true);
  };

  return (
    <footer
      id="site-footer"
      role="contentinfo"
      style={{
        position: "relative",
        background: "linear-gradient(to bottom, #070612 0%, #030208 100%)",
        borderTop: "1px solid rgba(168, 85, 247, 0.2)",
        padding: "80px 24px 40px",
        zIndex: 2,
        overflow: "hidden",
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "250px",
          background: "radial-gradient(ellipse at bottom, rgba(112, 0, 255, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "48px",
          position: "relative",
          zIndex: 1,
          marginBottom: "60px",
        }}
      >
        {/* Column 1: Brand & Lore */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(246, 197, 100, 0.3) 0%, rgba(157, 78, 221, 0.2) 80%)",
                border: "1px solid rgba(246, 197, 100, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#f6c564",
                fontSize: "1.2rem",
              }}
            >
              ✧
            </div>
            <span
              className="font-arcane gold-gradient"
              style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "0.15em" }}
            >
              AETHERIA
            </span>
          </div>

          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.9rem",
              lineHeight: 1.65,
              marginBottom: "20px",
            }}
          >
            The primordial sanctuary for seekers of the celestial unknown.
            Preserving sacred astronomy, talismanic alchemy, and chrono-weaving across 
            the mortal and astral spheres.
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "50px",
              background: "rgba(0, 245, 212, 0.08)",
              border: "1px solid rgba(0, 245, 212, 0.25)",
              color: "var(--color-cyan)",
              fontSize: "0.78rem",
            }}
          >
            <span>🌕 Current Phase:</span>
            <span style={{ fontWeight: 600 }}>Waxing Moon 84%</span>
          </div>
        </div>

        {/* Column 2: Sanctuary Navigation */}
        <nav aria-label="Footer Sanctuary Navigation">
          <h3
            className="font-arcane"
            style={{
              fontSize: "1.1rem",
              color: "#ffffff",
              marginBottom: "20px",
              letterSpacing: "0.08em",
            }}
          >
            Sanctuary Sectors
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Grand Celestial Spire", href: "#hero" },
              { label: "Chronicles & Lore", href: "#about" },
              { label: "Arcane Disciplines", href: "#features" },
              { label: "Inscribe Talisman", href: "#spellcraft-form" },
              { label: "High Magisterium Council", href: "#about" },
              { label: "👑 High Magister Admin Portal", href: "/admin" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{
                    color: "var(--color-text-muted)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-gold-light)";
                    e.currentTarget.style.paddingLeft = "4px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-muted)";
                    e.currentTarget.style.paddingLeft = "0px";
                  }}
                >
                  ✦ {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3: The 4 Great Colleges */}
        <div>
          <h3
            className="font-arcane"
            style={{
              fontSize: "1.1rem",
              color: "#ffffff",
              marginBottom: "20px",
              letterSpacing: "0.08em",
            }}
          >
            The Four Colleges
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            <li style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
              <span style={{ color: "var(--color-gold)" }}>⭐</span> College of Astromancy
            </li>
            <li style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
              <span style={{ color: "var(--color-cyan)" }}>⏳</span> Order of Chrono-Weavers
            </li>
            <li style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
              <span style={{ color: "#ff7b72" }}>☀️</span> Pyromancer Solar Guild
            </li>
            <li style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
              <span style={{ color: "var(--color-purple-light)" }}>🔮</span> Void Warden Sentinels
            </li>
          </ul>
        </div>

        {/* Column 4: Raven Post Newsletter */}
        <div>
          <h3
            className="font-arcane"
            style={{
              fontSize: "1.1rem",
              color: "#ffffff",
              marginBottom: "20px",
              letterSpacing: "0.08em",
            }}
          >
            The Raven Post Dispatch
          </h3>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.88rem",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}
          >
            Receive celestial eclipse warnings, rare grimoire transmutations, 
            and solstice invitations directly to your mental realm.
          </p>

          {subscribed ? (
            <div
              style={{
                padding: "14px",
                background: "rgba(0, 245, 212, 0.12)",
                border: "1px solid var(--color-cyan)",
                borderRadius: "10px",
                color: "var(--color-cyan)",
                fontSize: "0.85rem",
                textAlign: "center",
              }}
            >
              ✨ Raven dispatched. Your frequency has been tethered!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input
                type="email"
                required
                placeholder="Enter realm address..."
                value={dispatchEmail}
                onChange={(e) => setDispatchEmail(e.target.value)}
                className="form-input"
                style={{ padding: "10px 14px", fontSize: "0.88rem" }}
              />
              <button
                type="submit"
                className="btn-magical"
                style={{ padding: "10px 18px", fontSize: "0.82rem" }}
              >
                <span>Dispatch Raven</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Bar: Copyright & Covenant Notice */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingTop: "24px",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          color: "var(--color-text-dim)",
          fontSize: "0.82rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div>
          © {new Date().getFullYear()} Aetheria Sanctum. Consecrated under the Eternal Astral Covenant.
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <span>Sanctuary Seal #7792</span>
          <span>•</span>
          <span>Crafted with Starlight & Next.js</span>
        </div>
      </div>
    </footer>
  );
}
