"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chimeActive, setChimeActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Web Audio API celestial chime synthesizer
  const playCelestialChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const freqs = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 (Celestial Chord)
      const now = ctx.currentTime;

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.001, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.18, now + idx * 0.08 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 1.6);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 1.8);
      });

      setChimeActive(true);
      setTimeout(() => setChimeActive(false), 2000);
    } catch {
      // Audio playback fails gracefully if user has not interacted
    }
  };

  const navLinks = [
    { label: "Grimoire", href: "#hero" },
    { label: "Chronicles", href: "#about" },
    { label: "Arcane Arts", href: "#features" },
    { label: "Inscribe Spell", href: "#spellcraft-form" },
  ];

  return (
    <header
      id="site-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(7, 6, 18, 0.85)"
          : "linear-gradient(to bottom, rgba(7, 6, 18, 0.7) 0%, transparent 100%)",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(168, 85, 247, 0.2)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 10px 30px rgba(0, 0, 0, 0.5)" : "none",
      }}
    >
      <nav
        id="primary-navigation"
        aria-label="Primary Sanctuary Navigation"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "18px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand Logo & Arcane Sigil */}
        <a
          href="#hero"
          id="brand-logo-link"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "42px",
              height: "42px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(246, 197, 100, 0.25) 0%, rgba(157, 78, 221, 0.15) 70%)",
              border: "1px solid rgba(246, 197, 100, 0.5)",
              boxShadow: "0 0 16px rgba(246, 197, 100, 0.3)",
            }}
          >
            {/* Mystic Sigil Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              style={{ color: "#f6c564" }}
              aria-hidden="true"
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="3" strokeWidth="1.2" stroke="#00f5d4" />
            </svg>
          </div>

          <div>
            <span
              className="font-arcane gold-gradient"
              style={{
                fontSize: "1.35rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                display: "block",
                lineHeight: 1.1,
              }}
            >
              AETHERIA
            </span>
            <span
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                color: "var(--color-purple-light)",
                textTransform: "uppercase",
                display: "block",
              }}
            >
              Luminary Arcane
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul
          style={{
            display: "none",
            alignItems: "center",
            gap: "32px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="desktop-nav-list"
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-arcane"
                style={{
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  fontSize: "0.92rem",
                  letterSpacing: "0.08em",
                  transition: "all 0.25s ease",
                  padding: "6px 0",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-gold-light)";
                  e.currentTarget.style.textShadow = "0 0 10px rgba(246, 197, 100, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-text-muted)";
                  e.currentTarget.style.textShadow = "none";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          {/* Celestial Chime Audio Button */}
          <button
            id="celestial-chime-btn"
            type="button"
            onClick={playCelestialChime}
            aria-label="Awaken celestial harmony chime sound"
            title="Awaken celestial chimes"
            style={{
              background: chimeActive ? "rgba(0, 245, 212, 0.2)" : "rgba(255, 255, 255, 0.05)",
              border: `1px solid ${chimeActive ? "var(--color-cyan)" : "rgba(168, 85, 247, 0.3)"}`,
              color: chimeActive ? "var(--color-cyan)" : "var(--color-gold-light)",
              padding: "9px 14px",
              borderRadius: "50px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.82rem",
              transition: "all 0.3s ease",
              boxShadow: chimeActive ? "0 0 20px var(--color-cyan-glow)" : "none",
            }}
          >
            <span aria-hidden="true" style={{ fontSize: "1rem" }}>
              {chimeActive ? "✨" : "🔔"}
            </span>
            <span style={{ fontWeight: 500 }} className="desktop-only-text">
              {chimeActive ? "Resonating..." : "Harmonize"}
            </span>
          </button>

          {/* Primary CTA button */}
          <a
            href="#spellcraft-form"
            id="nav-inscribe-cta"
            className="btn-magical"
            style={{
              padding: "10px 20px",
              fontSize: "0.82rem",
            }}
          >
            <span>✧ Inscribe</span>
          </a>

          {/* Mobile hamburger toggle */}
          <button
            id="mobile-nav-toggle"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "1px solid var(--border-subtle)",
              color: "var(--color-text-main)",
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            className="mobile-nav-toggle-btn"
          >
            <span style={{ fontSize: "1.2rem" }}>{mobileMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          style={{
            background: "rgba(9, 7, 24, 0.96)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border-subtle)",
            padding: "20px 24px",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: "var(--color-text-main)",
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    fontFamily: "var(--font-serif)",
                    display: "block",
                    padding: "8px 0",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Media query helper styles */}
      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav-list {
            display: flex !important;
          }
          .mobile-nav-toggle-btn {
            display: none !important;
          }
        }
        @media (max-width: 500px) {
          .desktop-only-text {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
