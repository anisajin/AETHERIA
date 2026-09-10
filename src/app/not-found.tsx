import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import StarfieldCanvas from "@/components/StarfieldCanvas";
import MagicalCursor from "@/components/MagicalCursor";

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

export default function RootNotFound() {
  return (
    <html lang="en" className={`${cinzel.variable} ${jakarta.variable}`}>
      <body className="antialiased" style={{ backgroundColor: "#070612", color: "#f0eef9" }}>
        <MagicalCursor />
        <StarfieldCanvas />

        <main
          id="main-content"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 24px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: "680px",
              width: "100%",
              textAlign: "center",
              padding: "50px 36px",
              background: "radial-gradient(circle at 50% 40%, rgba(32, 22, 60, 0.9) 0%, rgba(10, 7, 22, 0.95) 100%)",
              border: "1px solid rgba(246, 197, 100, 0.4)",
              boxShadow: "0 0 60px rgba(157, 78, 221, 0.35)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Ambient Rift Glow */}
            <div
              style={{
                position: "absolute",
                top: "20%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "350px",
                height: "350px",
                background: "radial-gradient(circle, rgba(0, 245, 212, 0.25) 0%, rgba(168, 85, 247, 0.15) 50%, transparent 75%)",
                filter: "blur(50px)",
                pointerEvents: "none",
              }}
            />

            {/* Cute Creature Familiar in the Void */}
            <div
              style={{
                position: "relative",
                width: "140px",
                height: "140px",
                margin: "0 auto 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="animate-float"
            >
              {/* Pulsing Aura */}
              <div
                style={{
                  position: "absolute",
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(246, 197, 100, 0.4) 0%, rgba(0, 245, 212, 0.2) 60%, transparent 80%)",
                  filter: "blur(12px)",
                }}
              />

              {/* Rotating Star Ring */}
              <div
                className="animate-spin-slow"
                style={{
                  position: "absolute",
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  border: "1px dashed rgba(246, 197, 100, 0.5)",
                }}
              />

              {/* Creature Avatar */}
              <div
                style={{
                  position: "relative",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "3px solid #ffd166",
                  boxShadow: "0 0 30px rgba(246, 197, 100, 0.6)",
                }}
              >
                <Image
                  src="/creatures/celestial-familiar.jpg"
                  alt="Lumie the Celestial Familiar navigating the Void"
                  fill
                  sizes="140px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>

            {/* Badge */}
            <div className="arcane-badge" style={{ marginBottom: "16px" }}>
              <span>✧ Dimensional Fracture Detected ✧</span>
            </div>

            {/* Heading */}
            <h1
              className="font-arcane heading-gradient"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            >
              404 - Lost in the Astral Void
            </h1>

            {/* Creature Message */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px dashed rgba(0, 245, 212, 0.35)",
                borderRadius: "14px",
                padding: "16px 20px",
                maxWidth: "500px",
                margin: "0 auto 28px",
                color: "var(--color-cyan)",
                fontStyle: "italic",
                fontSize: "0.95rem",
                lineHeight: 1.6,
              }}
            >
              &ldquo;Pipi! The coordinates you seek have vanished into the dark void rifts. 
              Fear not, traveler! Take my paw and I will guide you safely back to Aetheria.&rdquo;
              <div style={{ fontStyle: "normal", fontSize: "0.78rem", color: "var(--color-gold-light)", marginTop: "6px" }}>
                — Lumie, Guardian Starlight Familiar
              </div>
            </div>

            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.95rem",
                marginBottom: "36px",
                lineHeight: 1.6,
              }}
            >
              The scroll or manuscript you requested could not be channeled through the celestial leylines.
            </p>

            {/* Navigation Action Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                justifyContent: "center",
              }}
            >
              <Link
                href="/"
                className="btn-magical"
                style={{
                  textDecoration: "none",
                  padding: "12px 28px",
                  fontSize: "0.9rem",
                }}
              >
                <span>✧ Return to Sanctuary</span>
              </Link>

              <Link
                href="/#spellcraft-form"
                className="btn-ethereal"
                style={{
                  textDecoration: "none",
                  padding: "12px 24px",
                  fontSize: "0.9rem",
                }}
              >
                <span>Inscribe New Spell</span>
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
