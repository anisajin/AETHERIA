# ✧ A E T H E R I A ✧
> *The Primordial Celestial Sanctuary for Seekers of the Arcane Unknown*

Aetheria is an immersive, mystical web experience engineered with **Next.js (App Router)**, **Vanilla CSS**, and **Payload CMS 3.0** powered by **Neon Serverless PostgreSQL**.

---

## 🌟 Features

- **Interactive Arcane Catalyst**: 3D orb rendered with smooth multi-layer CSS animations, aspect resonance switching, and celestial audio feedback.
- **Interactive Lumie Familiar**: An adorable celestial star creature that chirps with Web Audio synthesis, gives celestial wisdom, and can follow your cursor or dock in the corner.
- **Astral Void (Custom 404)**: Immersive void journey featuring Lumie as your spirit guide and cosmic return portals.
- **Full Payload CMS 3.0 Integration**:
  - Superadmin RBAC with account lockout protection.
  - Live draft and publishing system for Disciplines, Chronicles, and Site Settings.
  - Media asset management and Talisman petitions registry.
- **Database Backend**: Connected to high-performance, autoscaling **Neon PostgreSQL**.
- **Celestial Sound Synthesis**: Pure Web Audio API chimes and mystical frequencies without external audio asset dependencies.

---

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **CMS Engine**: Payload CMS 3.0
- **Database**: Neon Serverless PostgreSQL (`@payloadcms/db-postgres`)
- **Styling**: Vanilla CSS Design System (Aetheria Theme: Deep Obsidian, Starlight Gold, Celestial Violet)
- **Audio**: Web Audio API Chime & Particle Synthesizers

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/anisajin/AETHERIA.git
   cd AETHERIA
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure `.env`:
   ```env
   PAYLOAD_SECRET=your_secret_key
   DATABASE_URI=postgresql://neondb_owner:password@ep-xyz.aws.neon.tech/neondb?sslmode=require
   PORT=3000
   ```

4. Run the local development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) for the Sanctum, and [http://localhost:3000/admin](http://localhost:3000/admin) for the Payload CMS Admin Dashboard.

---

*Inscribed under the watchful gaze of the Outer Spheres.*
