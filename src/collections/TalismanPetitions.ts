import type { CollectionConfig } from "payload";
import { isEditorOrSuperAdmin } from "../lib/access";

export const TalismanPetitions: CollectionConfig = {
  slug: "talisman-petitions",
  admin: {
    useAsTitle: "sigilCode",
    defaultColumns: ["sigilCode", "seekerName", "school", "catalyst", "status", "createdAt"],
    group: "Seeker Submissions",
  },
  access: {
    // Anyone can inscribe a petition via the website form
    create: () => true,
    // Only superadmin and editors can review submitted petitions
    read: isEditorOrSuperAdmin,
    update: isEditorOrSuperAdmin,
    delete: isEditorOrSuperAdmin,
  },
  fields: [
    {
      name: "sigilCode",
      type: "text",
      required: true,
      label: "Consecrated Sigil Code (e.g. SIGIL-AST-8832)",
    },
    {
      name: "seekerName",
      type: "text",
      required: true,
      label: "Seeker Name",
    },
    {
      name: "realmAddress",
      type: "email",
      required: true,
      label: "Realm Email Address",
    },
    {
      name: "school",
      type: "text",
      required: true,
      label: "Requested Arcane School",
    },
    {
      name: "catalyst",
      type: "text",
      required: true,
      label: "Chosen Focus Catalyst",
    },
    {
      name: "intensityLevel",
      type: "number",
      required: true,
      label: "Mana Tier Intensity (1-5)",
    },
    {
      name: "intention",
      type: "textarea",
      required: true,
      label: "Sacred Petition / Intention",
    },
    {
      name: "status",
      type: "select",
      defaultValue: "consecrated",
      options: [
        { label: "⏳ Pending Consecration", value: "pending" },
        { label: "✨ Consecrated & Sealed", value: "consecrated" },
        { label: "📜 Archived to Grimoire", value: "archived" },
      ],
      label: "Magisterium Review Status",
    },
    {
      name: "magisterNotes",
      type: "textarea",
      label: "Internal Archmage Notes (Private)",
    },
  ],
};
