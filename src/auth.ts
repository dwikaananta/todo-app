import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { db } from "./db";
import { accountTable } from "./db/schemas/account";
import { sessionTable } from "./db/schemas/session";
import { userTable } from "./db/schemas/user";
import { verificationTokenTable } from "./db/schemas/verification-token";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: userTable,
    accountsTable: accountTable,
    sessionsTable: sessionTable,
    verificationTokensTable: verificationTokenTable,
  }),
  session: { strategy: "jwt" },
  ...authConfig,
});
