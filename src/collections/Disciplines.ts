import type { CollectionConfig } from "payload";
import { isEditorOrSuperAdmin } from "../lib/access";

export const Disciplines: CollectionConfig = {
  slug: "disciplines",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "rarity", "manaCost", "_status"],
    group: "Grimoire Content",
  },
  // Enables live drafting, autosaving, and the Publish button
  versions: {
    drafts: true,
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true;
      return {
        _status: {
          equals: "published",
        },
      };
    },
    create: isEditorOrSuperAdmin,
    update: isEditorOrSuperAdmin,
    delete: isEditorOrSuperAdmin,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Discipline Name",
    },
    {
      name: "category",
      type: "text",
      required: true,
      label: "Arcane School / Category",
    },
    {
      name: "icon",
      type: "text",
      required: true,
      defaultValue: "✨",
      label: "Sigil Glyph / Icon (e.g. ⌛, ✨, 💎)",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "Description",
    },
    {
      name: "incantation",
      type: "text",
      required: true,
      label: "Sacred Incantation (Latin/Arcane formula)",
    },
    {
      name: "manaCost",
      type: "text",
      required: true,
      defaultValue: "30 Lumens / sec",
      label: "Mana Drain Metric",
    },
    {
      name: "rarity",
      type: "select",
      required: true,
      defaultValue: "Magister",
      options: [
        { label: "Apprentice Tier", value: "Apprentice" },
        { label: "Magister High Tier", value: "Magister" },
        { label: "Archmage Sovereign", value: "Archmage" },
      ],
    },
    {
      name: "color",
      type: "text",
      defaultValue: "#00f5d4",
      label: "Aura Accent Color (Hex)",
    },
    {
      name: "order",
      type: "number",
      defaultValue: 1,
      label: "Display Order Priority",
    },
  ],
};
