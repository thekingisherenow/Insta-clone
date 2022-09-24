import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })
  ],
  pages:{
    signIn: "/auth/signin"
  },
  callbacks:{
      async session({session,token,user}) {
        session.user.username = session.user.name.split(" ").join("").toLowerCase();
        session.user.uid = token.sub;
        return session;
      }
  }
}
export default NextAuth(authOptions)