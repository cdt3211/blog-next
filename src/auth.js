import NextAuth from "next-auth";
import { connectToDb } from "./lib/connectToDb";
import { User } from "./lib/models/user";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";

const login = async (credentials) => {
  try {
    await connectToDb();
    const user = await User.findOne({ username: credentials.username });

    if (!user) {
      throw new Error('user not found');
    }

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

    if (!isPasswordCorrect) {
      throw new Error('password is incorrect');
    }

    return user;
  } catch (err) {
    console.error(err);
    throw new Error('fail to login');
  }
}

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      }
    })
  ],
  callbacks: {
    ...authConfig.callbacks
  }
});