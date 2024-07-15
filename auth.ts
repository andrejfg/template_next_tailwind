import NextAuth, { Account, Profile, Session, User } from "next-auth"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { firestore } from "@/src/lib/firestore"
import Credentials from "next-auth/providers/credentials"
import { JWT } from "next-auth/jwt"

 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: FirestoreAdapter({
    firestore
  }),
  providers: [
    Credentials({
        credentials: {
          username: { label: "Username" },
          password: { label: "Password", type: "password" },
        },
        // TODO: implements your rule for validation
        async authorize(credentials, req) {
          console.log(credentials)
          const { username, password } = credentials;
  
          if (!username || !password) {
            return null
          }

          return {
            id: "1",
            name: username as string,
          };
        },
      }),
  ],
  session: {
    strategy:"jwt",
    maxAge: 1 * 24 * 60 * 60, // 1 day
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User; account?: Account | null; profile?: Profile; isNewUser?: boolean }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if(session?.user?.id) session.user.id = token.id as string
      return session;
    },
  },
})