import type { CollectionConfig } from "payload";
import { isEditorOrSuperAdmin } from "../lib/access";

export const Chronicles: CollectionConfig = {
  slug: "chronicles",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "sectionType", "sigil", "author", "_status"],
    group: "Grimoire Content",
  },
  // Enables live drafting, versioning, and the Publish button
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
      name: "title",
      type: "text",
      required: true,
      label: "Chronicle / Pillar Title",
    },
    {
      name: "sectionType",
      type: "select",
      required: true,
      defaultValue: "pillar",
      options: [
        { label: "Philosophical Pillar Card", value: "pillar" },
        { label: "Archives Codex Entry", value: "codex" },
      ],
    },
    {
      name: "sigil",
      type: "text",
      required: true,
      defaultValue: "📜",
      label: "Sigil Symbol (e.g. 🏛️, 🌀, 🔮, 📜)",
    },
    {
      name: "excerpt",
      type: "textarea",
      label: "Short Excerpt / Inscribed Quote",
    },
    {
      name: "content",
      type: "textarea",
      required: true,
      label: "Full Lore Narration / Description",
    },
    {
      name: "author",
      type: "text",
      label: "Chronicler / Archmage Attributed",
    },
    {
      name: "order",
      type: "number",
      defaultValue: 1,
      label: "Order Index",
    },
  ],
};
