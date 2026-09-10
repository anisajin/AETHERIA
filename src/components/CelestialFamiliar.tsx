"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface FamiliarProps {
  initialMessage?: string;
  floatingMode?: "docked" | "center" | "interactive";
}

const familiarQuotes = [
  "Pipi! You touched my starlight fur! ✨",
  "The celestial ley lines are tingling! 🌌",
  "Need help inscribing a spell? I can guide you!",
  "Purrr... the astral mana feels so warm! 💖",
  "Beware of chaotic void rifts, Seeker!",
  "Stars shine brightest when your heart is pure! ⭐",
];

export default function CelestialFamiliar({
  initialMessage = "Greetings, Seeker! I'm Lumie, your astral familiar! ✦",
  floatingMode = "docked",
}: FamiliarProps) {
  const [message, setMessage] = useState(initialMessage);
  const [showMessage, setShowMessage] = useState(true);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [heartBurst, setHeartBurst] = useState<{ id: number; x: number; y: number }[]>([]);
  const [followingCursor, setFollowingCursor] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const mouseTarget = useRef({ x: 0, y: 0 });

  // Web Audio chime for cute squeak/purr
  const playCuteChirp = (type: "pet" | "unfollow" = "pet") => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;

      const freqs = type === "unfollow" ? [1046.5, 783.99, 523.25] : [880, 1174.66, 1318.51];

      freqs.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + i * 0.07);

        gain.gain.setValueAtTime(0.001, now + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.14, now + i * 0.07 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.07 + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.07);
        osc.stop(now + i * 0.07 + 0.28);
      });
    } catch {
      // Audio fallback gracefully
    }
  };

  // Cursor following loop if enabled
  useEffect(() => {
    if (!followingCursor) return;

    // Initial positioning near center on start
    mouseTarget.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const onMouseMove = (e: MouseEvent) => {
      // Keep slightly offset so it doesn't obstruct clicks
      mouseTarget.current = { x: e.clientX + 24, y: e.clientY + 24 };
    };

    window.addEventListener("mousemove", onMouseMove);

    let animId: number;
    const followLoop = () => {
      setPosition((prev) => ({
        x: prev.x + (mouseTarget.current.x - prev.x) * 0.09,
        y: prev.y + (mouseTarget.current.y - prev.y) * 0.09,
      }));
      animId = requestAnimationFrame(followLoop);
    };

    animId = requestAnimationFrame(followLoop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [followingCursor]);

  const handlePet = () => {
    playCuteChirp("pet");
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 800);

    const nextIdx = (quoteIdx + 1) % familiarQuotes.length;
    setQuoteIdx(nextIdx);
    setMessage(familiarQuotes[nextIdx]);
    setShowMessage(true);

    // Spawn sparkles
    const newHearts = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 60,
      y: -20 - Math.random() * 40,
    }));
    setHeartBurst((prev) => [...prev, ...newHearts]);
    setTimeout(() => {
      setHeartBurst((prev) => prev.slice(5));
    }, 1000);
  };

  const handleStartFollow = () => {
    playCuteChirp("pet");
    setFollowingCursor(true);
    setMessage("Wheee! I'm flying right with you! 🐾");
    setShowMessage(true);
  };

  const handleStopFollow = () => {
    playCuteChirp("unfollow");
    setFollowingCursor(false);
    setMessage("Resting safely back in my cozy sanctuary corner! ✨");
    setShowMessage(true);
  };

  const isDocked = floatingMode === "docked" && !followingCursor;

  return (
    <>
      {/* Main Familiar Companion Container */}
      <aside
        id="celestial-familiar-companion"
        aria-label="Lumie the Starlight Familiar"
        style={{
          position: isDocked ? "fixed" : followingCursor ? "fixed" : "relative",
          bottom: isDocked ? "32px" : "auto",
          right: isDocked ? "32px" : "auto",
          left: followingCursor ? `${position.x}px` : "auto",
          top: followingCursor ? `${position.y}px` : "auto",
          zIndex: 9000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pointerEvents: "auto",
          transition: followingCursor ? "none" : "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Interactive Speech Bubble */}
        {showMessage && (
          <div
            role="status"
            style={{
              position: "relative",
              marginBottom: "12px",
              background: "rgba(18, 14, 42, 0.94)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(246, 197, 100, 0.55)",
              borderRadius: "16px",
              padding: "10px 16px",
              maxWidth: "230px",
              color: "#ffffff",
              fontSize: "0.82rem",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6), 0 0 15px rgba(246, 197, 100, 0.25)",
              textAlign: "center",
              animation: "float 4s ease-in-out infinite",
            }}
          >
            <p style={{ margin: 0, lineHeight: 1.4 }}>{message}</p>
            {/* Arrow */}
            <div
              style={{
                position: "absolute",
                bottom: "-6px",
                left: "50%",
                transform: "translateX(-50%) rotate(45deg)",
                width: "12px",
                height: "12px",
                background: "rgba(18, 14, 42, 0.94)",
                borderRight: "1px solid rgba(246, 197, 100, 0.55)",
                borderBottom: "1px solid rgba(246, 197, 100, 0.55)",
              }}
            />
          </div>
        )}

        {/* Floating Sparkles & Hearts */}
        {heartBurst.map((h) => (
          <span
            key={h.id}
            style={{
              position: "absolute",
              left: `calc(50% + ${h.x}px)`,
              top: `${h.y}px`,
              pointerEvents: "none",
              fontSize: "1.2rem",
              animation: "pulseGlow 1s forwards ease-out",
              filter: "drop-shadow(0 0 6px #ffd166)",
            }}
          >
            ✨
          </span>
        ))}

        {/* Cute Creature Body with Aura & Hover Effects */}
        <div
          role="button"
          tabIndex={0}
          onClick={handlePet}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handlePet();
          }}
          aria-label="Pet Lumie the celestial creature familiar"
          style={{
            position: "relative",
            width: "96px",
            height: "96px",
            cursor: "pointer",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            transform: isSpinning ? "rotate(360deg) scale(1.18)" : "scale(1)",
          }}
          className="animate-float"
          onMouseEnter={() => setShowMessage(true)}
        >
          {/* Glowing Astral Aura Ring */}
          <div
            style={{
              position: "absolute",
              width: "105px",
              height: "105px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(246, 197, 100, 0.35) 0%, rgba(157, 78, 221, 0.3) 60%, transparent 80%)",
              filter: "blur(10px)",
              animation: "pulseGlow 3s ease-in-out infinite",
            }}
          />

          {/* Outer Starlight Orbiting Particles */}
          <div
            className="animate-spin-slow"
            style={{
              position: "absolute",
              width: "115px",
              height: "115px",
              borderRadius: "50%",
              border: "1px dashed rgba(0, 245, 212, 0.4)",
              pointerEvents: "none",
            }}
          />

          {/* Creature Image Avatar */}
          <div
            style={{
              position: "relative",
              width: "88px",
              height: "88px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid #ffd166",
              boxShadow: "0 0 25px rgba(246, 197, 100, 0.5), inset 0 0 10px rgba(0, 245, 212, 0.3)",
            }}
          >
            <Image
              src="/creatures/celestial-familiar.jpg"
              alt="Lumie the Celestial Star Fox Familiar"
              fill
              sizes="96px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        {/* Attached Control Pill (Only visible when docked in corner; when following, Lumie floats cleanly without extra pills) */}
        {!followingCursor && (
          <div
            style={{
              marginTop: "8px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(10, 7, 24, 0.9)",
              padding: "5px 12px",
              borderRadius: "50px",
              border: "1px solid var(--border-subtle)",
              backdropFilter: "blur(8px)",
            }}
          >
            <button
              type="button"
              onClick={handlePet}
              title="Pet Lumie"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--color-gold-light)",
                fontSize: "0.76rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "3px",
                padding: "2px 4px",
                fontWeight: 500,
              }}
            >
              <span>✨ Pet</span>
            </button>

            <span style={{ color: "rgba(255, 255, 255, 0.25)" }}>|</span>

            <button
              id="lumie-follow-btn"
              type="button"
              onClick={handleStartFollow}
              title="Have Lumie follow your cursor"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--color-cyan)",
                fontSize: "0.76rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "3px",
                padding: "2px 4px",
                fontWeight: 500,
              }}
            >
              <span>🌟 Follow</span>
            </button>
          </div>
        )}
      </aside>

      {/* Persistent Dock Bar Anchor (Only visible when Lumie is following cursor, gives a clear target to return Lumie to the corner) */}
      {followingCursor && (
        <div
          style={{
            position: "fixed",
            bottom: "32px",
            right: "32px",
            zIndex: 8999,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(18, 14, 42, 0.95)",
            backdropFilter: "blur(14px)",
            border: "1.5px dashed var(--color-cyan)",
            borderRadius: "50px",
            padding: "10px 18px",
            boxShadow: "0 0 20px rgba(0, 245, 212, 0.3)",
            animation: "pulseGlow 2.5s ease-in-out infinite",
          }}
        >
          <span style={{ fontSize: "1rem" }}>🐾</span>
          <span style={{ fontSize: "0.82rem", color: "#ffffff" }}>
            Lumie is currently following you!
          </span>
          <button
            id="dock-corner-unfollow-btn"
            type="button"
            onClick={handleStopFollow}
            className="btn-magical"
            style={{
              padding: "6px 14px",
              fontSize: "0.74rem",
              borderRadius: "50px",
            }}
          >
            <span>🛑 Unfollow & Dock</span>
          </button>
        </div>
      )}
    </>
  );
}
