"use client";

import React, { useState, useId } from "react";

interface TalismanReceipt {
  sigilCode: string;
  seekerName: string;
  realmAddress: string;
  school: string;
  catalyst: string;
  intensityLevel: number;
  intention: string;
  timestamp: string;
}

const catalysts = [
  { id: "starfall", name: "Starfall Crystal", icon: "⭐", desc: "Pure starlight luminescence" },
  { id: "phoenix", name: "Phoenix Core", icon: "🔥", desc: "Solar rebirth energy" },
  { id: "obsidian", name: "Obsidian Prism", icon: "🔮", desc: "Void shielding & depth" },
  { id: "moonstone", name: "Moonstone Bead", icon: "🌙", desc: "Lunar ebb and flow" },
];

export default function FormSection() {
  const [seekerName, setSeekerName] = useState("");
  const [realmAddress, setRealmAddress] = useState("");
  const [school, setSchool] = useState("Astral Starlight");
  const [catalyst, setCatalyst] = useState("Starfall Crystal");
  const [intensity, setIntensity] = useState(3);
  const [intention, setIntention] = useState("");
  const [covenantAgreed, setCovenantAgreed] = useState(false);
  const [isCasting, setIsCasting] = useState(false);
  const [talisman, setTalisman] = useState<TalismanReceipt | null>(null);

  const nameId = useId();
  const addressId = useId();
  const schoolId = useId();
  const intensityId = useId();
  const intentionId = useId();
  const covenantId = useId();

  const handleCast = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!covenantAgreed) return;

    setIsCasting(true);

    const randomCode = `SIGIL-${school.slice(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

    // Submit petition to Payload CMS database
    try {
      await fetch("/api/talisman-petitions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sigilCode: randomCode,
          seekerName: seekerName || "Anonymous Seeker",
          realmAddress: realmAddress || "celestial@aetheria.sanctum",
          school,
          catalyst,
          intensityLevel: intensity,
          intention: intention || "To bring harmony and illuminate the path of truth.",
          status: "consecrated",
        }),
      });
    } catch {
      // Graceful fallback if offline
    }

    setTalisman({
      sigilCode: randomCode,
      seekerName: seekerName || "Anonymous Seeker",
      realmAddress: realmAddress || "celestial@aetheria.sanctum",
      school,
      catalyst,
      intensityLevel: intensity,
      intention: intention || "To bring harmony and illuminate the path of truth.",
      timestamp: new Date().toLocaleTimeString(),
    });
    setIsCasting(false);
  };

  const handleReset = () => {
    setTalisman(null);
    setSeekerName("");
    setRealmAddress("");
    setIntention("");
    setCovenantAgreed(false);
  };

  const getTierName = (lvl: number) => {
    switch (lvl) {
      case 1: return "Novice Luminary";
      case 2: return "Adept Practitioner";
      case 3: return "Magister High Tier";
      case 4: return "Sovereign Enchanter";
      case 5: return "Archmage Primus";
      default: return "Adept";
    }
  };

  return (
    <section
      id="spellcraft-form"
      aria-labelledby="form-heading"
      style={{
        padding: "100px 24px",
        position: "relative",
        zIndex: 2,
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
      {/* Section Header */}
      <header
        style={{
          textAlign: "center",
          maxWidth: "720px",
          margin: "0 auto 50px",
        }}
      >
        <div className="arcane-badge" style={{ marginBottom: "16px" }}>
          <span>✧ Sacred Petition ✧</span>
        </div>
        <h2
          id="form-heading"
          className="font-arcane heading-gradient"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            marginBottom: "16px",
          }}
        >
          Inscribe Your Arcane Talisman
        </h2>
        <p
          id="form-desc"
          style={{
            color: "var(--color-text-muted)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
        >
          Submit your spiritual intent to the High Magisterium. Our enchanted forge 
          will weave your frequencies into an eternal celestial seal.
        </p>
      </header>

      {/* Main Container */}
      <div className="glass-panel" style={{ padding: "40px 36px", position: "relative" }}>
        {talisman ? (
          /* Enchanted Parchment Receipt Card */
          <div
            id="talisman-result-card"
            style={{
              textAlign: "center",
              padding: "36px 24px",
              background: "radial-gradient(circle at 50% 50%, rgba(36, 26, 68, 0.9) 0%, rgba(14, 10, 30, 0.95) 100%)",
              border: "2px solid var(--color-gold)",
              borderRadius: "16px",
              boxShadow: "0 0 50px rgba(246, 197, 100, 0.35)",
              animation: "float 6s ease-in-out infinite",
            }}
          >
            {/* Seal Sigil */}
            <div
              style={{
                width: "80px",
                height: "80px",
                margin: "0 auto 20px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #ffd166 0%, #d49826 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 30px var(--color-gold-glow)",
                color: "#070612",
                fontSize: "2.2rem",
                fontWeight: "bold",
              }}
            >
              ✧
            </div>

            <span
              style={{
                color: "var(--color-gold)",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontSize: "0.85rem",
                fontWeight: 600,
              }}
            >
              Consecrated by the High Magisterium
            </span>

            <h3
              className="font-arcane"
              style={{
                fontSize: "2.2rem",
                color: "#ffffff",
                margin: "12px 0",
              }}
            >
              Talisman of {talisman.seekerName}
            </h3>

            <div
              style={{
                display: "inline-block",
                padding: "6px 18px",
                borderRadius: "20px",
                background: "rgba(0, 245, 212, 0.15)",
                border: "1px solid var(--color-cyan)",
                color: "var(--color-cyan)",
                fontSize: "0.9rem",
                fontFamily: "monospace",
                letterSpacing: "0.15em",
                marginBottom: "28px",
              }}
            >
              {talisman.sigilCode}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "16px",
                textAlign: "left",
                maxWidth: "600px",
                margin: "0 auto 30px",
                background: "rgba(0, 0, 0, 0.3)",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div>
                <span style={{ fontSize: "0.78rem", color: "var(--color-text-dim)", display: "block" }}>
                  School of Sorcery
                </span>
                <span style={{ color: "var(--color-gold-light)", fontWeight: 600 }}>
                  {talisman.school}
                </span>
              </div>

              <div>
                <span style={{ fontSize: "0.78rem", color: "var(--color-text-dim)", display: "block" }}>
                  Core Catalyst
                </span>
                <span style={{ color: "var(--color-cyan)", fontWeight: 600 }}>
                  {talisman.catalyst}
                </span>
              </div>

              <div>
                <span style={{ fontSize: "0.78rem", color: "var(--color-text-dim)", display: "block" }}>
                  Potency Rank
                </span>
                <span style={{ color: "var(--color-purple-light)", fontWeight: 600 }}>
                  Tier {talisman.intensityLevel} • {getTierName(talisman.intensityLevel)}
                </span>
              </div>

              <div>
                <span style={{ fontSize: "0.78rem", color: "var(--color-text-dim)", display: "block" }}>
                  Sanctuary Timestamp
                </span>
                <span style={{ color: "#ffffff", fontWeight: 600 }}>
                  {talisman.timestamp}
                </span>
              </div>
            </div>

            <p
              style={{
                fontStyle: "italic",
                color: "var(--color-text-muted)",
                maxWidth: "520px",
                margin: "0 auto 32px",
                fontSize: "0.98rem",
              }}
            >
              &ldquo;{talisman.intention}&rdquo;
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="btn-magical"
            >
              <span>✧ Inscribe Another Talisman</span>
            </button>
          </div>
        ) : (
          /* Semantic HTML5 Form */
          <form
            id="enchantment-form"
            onSubmit={handleCast}
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {/* Fieldset 1: Seeker Identity */}
            <fieldset
              style={{
                border: "1px solid var(--border-subtle)",
                borderRadius: "14px",
                padding: "24px",
                background: "rgba(10, 8, 22, 0.4)",
              }}
            >
              <legend
                className="font-arcane"
                style={{
                  color: "var(--color-gold)",
                  padding: "0 12px",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                }}
              >
                1. Seeker Identity
              </legend>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "20px",
                  marginTop: "12px",
                }}
              >
                <div>
                  <label
                    htmlFor={nameId}
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      marginBottom: "8px",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    Mortal or Arcane Name <span style={{ color: "var(--color-gold)" }}>*</span>
                  </label>
                  <input
                    id={nameId}
                    type="text"
                    required
                    placeholder="e.g. Aurelia Nightshade"
                    value={seekerName}
                    onChange={(e) => setSeekerName(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor={addressId}
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      marginBottom: "8px",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    Astral Coordinates / Realm Email <span style={{ color: "var(--color-gold)" }}>*</span>
                  </label>
                  <input
                    id={addressId}
                    type="email"
                    required
                    placeholder="e.g. aurelia@realm.sanctum"
                    value={realmAddress}
                    onChange={(e) => setRealmAddress(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>
            </fieldset>

            {/* Fieldset 2: Arcane Mechanics */}
            <fieldset
              style={{
                border: "1px solid var(--border-subtle)",
                borderRadius: "14px",
                padding: "24px",
                background: "rgba(10, 8, 22, 0.4)",
              }}
            >
              <legend
                className="font-arcane"
                style={{
                  color: "var(--color-gold)",
                  padding: "0 12px",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                }}
              >
                2. Spell Formulation & Catalyst
              </legend>

              <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "22px" }}>
                {/* Select School */}
                <div>
                  <label
                    htmlFor={schoolId}
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      marginBottom: "8px",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    Arcane Discipline / School
                  </label>
                  <select
                    id={schoolId}
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    className="form-select"
                  >
                    <option value="Astral Starlight">Astral Starlight (Constellation & Light)</option>
                    <option value="Celestial Pyromancy">Celestial Pyromancy (Solar Radiance)</option>
                    <option value="Chrono-Weaving">Chrono-Weaving (Temporal Mechanics)</option>
                    <option value="Void Resonance">Void Resonance (Deep Space Wards)</option>
                    <option value="Floramancy Alchemy">Floramancy Alchemy (Nature Vitality)</option>
                  </select>
                </div>

                {/* Focus Catalyst Selector (Radio Group) */}
                <div>
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      marginBottom: "12px",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    Choose Resonant Catalyst Focus
                  </span>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                      gap: "12px",
                    }}
                  >
                    {catalysts.map((cat) => {
                      const isSelected = catalyst === cat.name;
                      return (
                        <div
                          key={cat.id}
                          onClick={() => setCatalyst(cat.name)}
                          style={{
                            padding: "14px",
                            borderRadius: "12px",
                            border: `1px solid ${isSelected ? "var(--color-gold)" : "var(--border-subtle)"}`,
                            background: isSelected ? "rgba(246, 197, 100, 0.12)" : "rgba(255, 255, 255, 0.02)",
                            boxShadow: isSelected ? "0 0 16px var(--color-gold-glow)" : "none",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          <span style={{ fontSize: "1.4rem" }}>{cat.icon}</span>
                          <div>
                            <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#ffffff" }}>
                              {cat.name}
                            </div>
                            <div style={{ fontSize: "0.72rem", color: "var(--color-text-dim)" }}>
                              {cat.desc}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Potency Range Slider */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <label
                      htmlFor={intensityId}
                      style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}
                    >
                      Potency & Mana Threshold
                    </label>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--color-cyan)",
                        fontWeight: 600,
                        fontFamily: "var(--font-serif)",
                      }}
                    >
                      Tier {intensity} — {getTierName(intensity)}
                    </span>
                  </div>
                  <input
                    id={intensityId}
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={intensity}
                    onChange={(e) => setIntensity(Number(e.target.value))}
                    style={{
                      width: "100%",
                      accentColor: "var(--color-gold)",
                      cursor: "pointer",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.72rem",
                      color: "var(--color-text-dim)",
                      marginTop: "4px",
                    }}
                  >
                    <span>1 (Novice)</span>
                    <span>3 (Magister)</span>
                    <span>5 (Archmage)</span>
                  </div>
                </div>
              </div>
            </fieldset>

            {/* Fieldset 3: Inscription Intent */}
            <fieldset
              style={{
                border: "1px solid var(--border-subtle)",
                borderRadius: "14px",
                padding: "24px",
                background: "rgba(10, 8, 22, 0.4)",
              }}
            >
              <legend
                className="font-arcane"
                style={{
                  color: "var(--color-gold)",
                  padding: "0 12px",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                }}
              >
                3. The Inscription Prayer
              </legend>

              <div style={{ marginTop: "12px" }}>
                <label
                  htmlFor={intentionId}
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    marginBottom: "8px",
                    color: "var(--color-text-muted)",
                  }}
                >
                  Describe your sacred intention / petition to be sealed upon parchment:
                </label>
                <textarea
                  id={intentionId}
                  rows={4}
                  required
                  placeholder="I seek guidance through the labyrinth of the astral winds, to protect my kin and illuminate..."
                  value={intention}
                  onChange={(e) => setIntention(e.target.value)}
                  className="form-textarea"
                />
              </div>
            </fieldset>

            {/* Covenant Agreement Checkbox */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <input
                id={covenantId}
                type="checkbox"
                required
                checked={covenantAgreed}
                onChange={(e) => setCovenantAgreed(e.target.checked)}
                style={{
                  width: "20px",
                  height: "20px",
                  accentColor: "var(--color-gold)",
                  marginTop: "2px",
                  cursor: "pointer",
                }}
              />
              <label
                htmlFor={covenantId}
                style={{
                  fontSize: "0.88rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.5,
                  cursor: "pointer",
                }}
              >
                I solemnly swear by the <em>Celestial Covenant of Aetheria</em> never to misuse 
                this talisman for malignant curses or dark dimensional tampering.
              </label>
            </div>

            {/* Submit Button */}
            <div style={{ textAlign: "center" }}>
              <button
                id="submit-spell-btn"
                type="submit"
                disabled={isCasting || !covenantAgreed}
                className="btn-magical"
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  padding: "16px 32px",
                  fontSize: "1.05rem",
                  opacity: covenantAgreed ? 1 : 0.6,
                  cursor: covenantAgreed ? "pointer" : "not-allowed",
                }}
              >
                {isCasting ? (
                  <span>⚡ Weaving Starlight Leylines...</span>
                ) : (
                  <span>✧ Consecrate & Inscribe Talisman</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
