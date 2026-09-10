import type { GlobalConfig } from "payload";
import { isSuperAdmin } from "../lib/access";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  admin: {
    group: "Sanctuary Settings",
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
    update: isSuperAdmin,
  },
  fields: [
    {
      name: "solsticeAnnouncement",
      type: "text",
      defaultValue: "The Solstice Ley Line Convergence",
      label: "Hero Badge Announcement",
    },
    {
      name: "currentMoonPhase",
      type: "text",
      defaultValue: "Waxing Gibbous",
      label: "Current Moon Phase Name",
    },
    {
      name: "lunarLuminance",
      type: "text",
      defaultValue: "84.6%",
      label: "Lunar Luminance Percentage",
    },
    {
      name: "leylineFrequency",
      type: "text",
      defaultValue: "432.8 Hz",
      label: "Ley Line Harmonic Frequency",
    },
    {
      name: "activeWardsCount",
      type: "text",
      defaultValue: "8,490",
      label: "Active Sanctuary Shield Count",
    },
  ],
};
