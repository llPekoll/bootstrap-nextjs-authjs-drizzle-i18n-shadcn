import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);


const config = {
  AUTH_SECRET: process.env.AUTH_SECRET!,
  AUTH_RESEND_KEY: process.env.AUTH_RESEND_KEY!,
  AUTH_DRIZZLE_URL: process.env.AUTH_DRIZZLE_URL!
}
export default config;
