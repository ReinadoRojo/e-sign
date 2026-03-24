import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./auth-schema";

// TODO: Move this database init to another file
const db = drizzle(new Pool({ connectionString: process.env.DATABASE_URL }), {
  schema,
});

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: "pg", schema }),
  appName: "e-Sign",
  baseURL: "http://localhost:3000/",
  emailAndPassword: { enabled: true },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
    microsoft: {
      clientId: process.env.MICROSOFT_CLIENT_ID!,
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET!,
    },
  },
  session: {
    freshAge: 60,
  },
  rateLimit: {
    enabled: true,
    max: 50,
  },
  advanced: {
    cookiePrefix: "esauth",
  },
  plugins: [],
  telemetry: {
    enabled: false,
    debug: false,
  },
});
