import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import LandLordModel from "@/app/(server)/models/landLord";
import WardenModel from "@/app/(server)/models/warden";
import AdminModel from "@/app/(server)/models/admin";
import StudentModel from "@/app/(server)/models/student";
import { monogoConnect } from "@/app/(server)/config/db";
import bcrypt from "bcrypt";

export const authOptions: any = {
  providers: [
    CredentialProvider({
      id: "credentialsLandLord",
      name: "CredentialsLandLord",
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
    CredentialProvider({
      id: "credentialWarden",
      name: "CredentialWarden",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        try {
          await monogoConnect();
          const user = await WardenModel.findOne({
            email: credentials.email,
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
    CredentialProvider({
      id: "credentialsAdmin",
      name: "CredentialsAdmin",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        try {
          await monogoConnect();
          const user = await AdminModel.findOne({
            email: credentials.email,
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
    CredentialProvider({
      id: "credentialsStudent",
      name: "credentialsStudent",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        try {
          await monogoConnect();
          const user = await StudentModel.findOne({
            email: credentials.email,
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
