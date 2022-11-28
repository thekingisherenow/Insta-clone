import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
   
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      image:"https://iili.io/HK6Iy7V.jpg"
    }),
    
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      image:"https://iili.io/LTkYwN.png"
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  
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