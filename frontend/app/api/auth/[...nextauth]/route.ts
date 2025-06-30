import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("--- SIGNIN CALLBACK ---");
      console.log("User:", user);
      console.log("Account:", account);
      console.log("Profile:", profile);
      // You can add logic here to allow or deny sign-in
      // For now, we'll just log and allow it to proceed
      return true;
    },
    async jwt({ token, user, account }) {
      console.log("--- JWT CALLBACK ---");
      console.log("Token:", token);
      console.log("User:", user);
      console.log("Account:", account);
      return token;
    },
    async session({ session, token }) {
      console.log("--- SESSION CALLBACK ---");
      console.log("Session:", session);
      console.log("Token:", token);
      return session;
    },
  },
});

export { handler as GET, handler as POST };