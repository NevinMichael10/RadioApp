import { NextAuthOptions } from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  debug: true,
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
        name: "Credentials",
        credentials: {
            username: {
                label: "Username:",
                type: "text",
                placeholder: "Enter User Name"
            },
            password: {
                label: "Password:",
                type: "password",
                placeholder: "*********"
            }
        },
        async authorize(credentials) {
            // Docs: https://next-auth.js.org/configuration/providers/credentials

            // const res = await fetch("/your/endpoint", {
            //     method: 'POST',
            //     body: JSON.stringify(credentials),
            //     headers: { "Content-Type": "application/json" }
            // })
            // const user = await res.json()

            // // If no error and we have user data, return it
            // if (res.ok && user) {
            //     return user
            // }
            // // Return null if user data could not be retrieved
            // return null

            //For Testing
            const user = { id: "01", name: "nevin", password: "nevin" }

            if (credentials?.username === user.name && credentials?.password === user.password) {
                return user
            } else {
                return null
            }
        }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string | undefined;
      session.idToken = token.idToken as string | undefined;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};