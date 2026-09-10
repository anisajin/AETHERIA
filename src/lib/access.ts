import type { Access, FieldAccess } from "payload";

/**
 * Checks if the authenticated user has the 'superadmin' role.
 */
export const isSuperAdmin: Access = ({ req: { user } }) => {
  return Boolean(user?.roles?.includes("superadmin"));
};

/**
 * Checks if the user is a superadmin or an editor.
 */
export const isEditorOrSuperAdmin: Access = ({ req: { user } }) => {
  if (!user) return false;
  return Boolean(
    user.roles?.includes("superadmin") || user.roles?.includes("editor")
  );
};

/**
 * Field-level access: Only superadmins can read or mutate sensitive fields (like roles).
 */
export const superAdminFieldAccess: FieldAccess = ({ req: { user } }) => {
  return Boolean(user?.roles?.includes("superadmin"));
};

/**
 * Allows public reading for published content, while editors and superadmins can view drafts.
 */
export const isPublicOrAuthenticated: Access = ({ req: { user } }) => {
  if (user) return true;
  return {
    _status: {
      equals: "published",
    },
  };
};
