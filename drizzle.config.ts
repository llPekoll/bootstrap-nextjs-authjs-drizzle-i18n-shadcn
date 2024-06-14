import { defineConfig } from "drizzle-kit";
import { type Config } from "drizzle-kit";
import config from "./src/lib/config";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/lib/schema.ts",
  out: "./src/lib/migrations",
  dbCredentials: {
    url: config.AUTH_DRIZZLE_URL as string,
  },
  verbose: true,
  strict: true,
}) satisfies Config;
