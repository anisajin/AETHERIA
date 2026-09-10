import type { CollectionConfig } from "payload";
import { isSuperAdmin, isEditorOrSuperAdmin, superAdminFieldAccess } from "../lib/access";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    // Hardened security options
    maxLoginAttempts: 5,
    lockTime: 600 * 1000, // 10 minutes lockout after 5 failed attempts
    tokenExpiration: 7200, // 2 hours
    cookies: {
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
    },
  },
  admin: {
    useAsTitle: "email",
    defaultColumns: ["name", "email", "roles"],
    group: "Administration",
  },
  access: {
    // Only users with superadmin or editor roles can enter /admin
    admin: ({ req }) =>
      Boolean(
        req.user?.roles?.includes("superadmin") ||
        req.user?.roles?.includes("editor")
      ),
    // Superadmin can create users; first user is allowed by Payload during init
    create: isSuperAdmin,
    // Users can read themselves, superadmins can read all
    read: ({ req: { user } }) => {
      if (!user) return false;
      if (user.roles?.includes("superadmin")) return true;
      return {
        id: {
          equals: user.id,
        },
      };
    },
    // Users can update themselves, superadmins can update anyone
    update: ({ req: { user } }) => {
      if (!user) return false;
      if (user.roles?.includes("superadmin")) return true;
      return {
        id: {
          equals: user.id,
        },
      };
    },
    // Only superadmin can delete accounts
    delete: isSuperAdmin,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Full / Arcane Name",
    },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      defaultValue: ["editor"],
      required: true,
      saveToJWT: true,
      options: [
        {
          label: "👑 Superadmin (Full Sanctuary Control)",
          value: "superadmin",
        },
        {
          label: "📜 Editor (Grimoire & Content Curator)",
          value: "editor",
        },
      ],
      access: {
        // Only existing superadmins can elevate or demote roles
        create: superAdminFieldAccess,
        update: superAdminFieldAccess,
      },
    },
  ],
};
