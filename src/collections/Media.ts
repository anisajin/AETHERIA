import type { CollectionConfig } from "payload";
import { isEditorOrSuperAdmin } from "../lib/access";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: "public/media",
    mimeTypes: ["image/*"],
  },
  admin: {
    useAsTitle: "alt",
    defaultColumns: ["filename", "alt", "mimeType", "filesize"],
    group: "Media Assets",
  },
  access: {
    read: () => true,
    create: isEditorOrSuperAdmin,
    update: isEditorOrSuperAdmin,
    delete: isEditorOrSuperAdmin,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      label: "Alt Text / Sigil Description",
    },
    {
      name: "caption",
      type: "text",
      label: "Caption / Inscription",
    },
  ],
};
