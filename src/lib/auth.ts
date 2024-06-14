import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import Resend from "next-auth/providers/resend"
import { db } from "./db"
import config from "./config"

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: config.AUTH_SECRET,
  pages: {
    signIn: "/dash",
  },
  adapter: DrizzleAdapter(db),
  providers: [Resend({
    apiKey: config.AUTH_RESEND_KEY,
    from: "yohann@ymepa.me"
  })],
})
