import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { fileURLToPath } from "url";

import { Users } from "./collections/Users";
import { Disciplines } from "./collections/Disciplines";
import { Chronicles } from "./collections/Chronicles";
import { TalismanPetitions } from "./collections/TalismanPetitions";
import { Media } from "./collections/Media";
import { SiteSettings } from "./globals/SiteSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const databaseUri = process.env.DATABASE_URI || "file:./payload.db";
const isPostgres = databaseUri.startsWith("postgres");

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Disciplines, Chronicles, TalismanPetitions, Media],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "aetheria_celestial_sanctum_superadmin_secret_key_8841920394857",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: isPostgres
    ? postgresAdapter({
        pool: {
          connectionString: databaseUri,
        },
      })
    : sqliteAdapter({
        client: {
          url: databaseUri,
        },
      }),
});
