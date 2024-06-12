import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/prisma";
import { getUserById } from "./data/user";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async session({ token, session }: any) {
      token.member = "ive";
      // console.log("SESSION", session);
      // console.log("TOKEN SESSION", token);

      if (token.sub && session.user) {
        session.user.id = token.sub;
        session.user.memberApaHayooo = token.member;
        session.user.role = token.role;
        session.user.image = token.picture; 
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return null;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      token.picture = existingUser.image;
      token.role = existingUser.role;
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
