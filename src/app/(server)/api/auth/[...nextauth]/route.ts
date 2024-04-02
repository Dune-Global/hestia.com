import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import LandLordModel from "@/app/(server)/models/landLord";
import { monogoConnect } from "@/app/(server)/config/db";
import bcrypt from "bcrypt";
import { data } from "@/app/(client)/landlord/(pages)/(legal-pages)/privacy-policy/content";

export const authOptions: any = {
  // Configure one or more authentication providers
  providers: [
    CredentialProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        userName: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        try {
          await monogoConnect();
          const user = await LandLordModel.findOne({
            userName: credentials.userName,
          });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (user && isPasswordCorrect) {
              return user;
            }
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
  database: process.env.MONGO_URL,
  strategy: "jwt",
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.id = user._id;
        token.role = user.role;
        token.userName = user.userName;
        token.phoneNumber = user.phoneNumber;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user = {
        ...session.user,
        id: token.id,
        role: token.role,
        userName: token.userName,
        phoneNumber: token.phoneNumber,
      };
      return session;
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
