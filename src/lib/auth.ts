import bcrypt from 'bcryptjs';
import { NextRequest } from 'next/server';
import { Session, User as NextAuthUser } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';

import { authConfig } from './auth.config';
import { User } from './models';
import { connectToDb } from './utils';

interface Credentials {
  username: string;
  password: string;
}

interface MyUser extends NextAuthUser {
  id: string;
  isAdmin: boolean;
}

interface MyJWT extends JWT {
  id: string;
  isAdmin: boolean;
}

interface CustomSession extends Session {
  user: {
    id: string;
    isAdmin: boolean;
  };
}

const login = async (credentials: Credentials): Promise<MyUser> => {
  try {
    await connectToDb();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error('Wrong credentials!');

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error('Wrong credentials!');

    return {
      ...user.toObject(),
      id: user._id.toString(),
      isAdmin: user.isAdmin,
    };
  } catch (err) {
    console.error(err); // 使用 console.error 记录错误
    throw new Error('Failed to login!');
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        if (
          !credentials ||
          typeof credentials.username !== 'string' ||
          typeof credentials.password !== 'string'
        ) {
          throw new Error('Invalid credentials');
        }

        try {
          const user = await login(credentials as unknown as Credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({
      user,
      account,
      profile,
    }: {
      user: MyUser;
      account: any;
      profile: any;
    }) {
      if (account?.provider === 'github' && profile) {
        await connectToDb();
        try {
          const existingUser = await User.findOne({ email: profile.email });

          if (!existingUser) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (err) {
          console.error(err); // 使用 console.error 记录错误
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user }: { token: MyJWT; user?: MyUser }) {
      if (user) {
        const dbUser = await User.findOne({ id: user.id });
        if (dbUser) {
          token.id = dbUser._id.toString();
          token.isAdmin = dbUser.isAdmin ?? false;
        }
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: CustomSession;
      token: MyJWT;
    }) {
      if (token && session.user) {
        session.user.id = token.id ?? '';
        session.user.isAdmin = token.isAdmin ?? false;
      }
      return session;
    },
    authorized({
      request,
      auth,
    }: {
      request: NextRequest;
      auth: CustomSession | null;
    }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl.pathname.startsWith('/admin');
      const isOnLoginPage = request.nextUrl.pathname.startsWith('/login');

      // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
      if (isOnAdminPanel && (!user || !user.isAdmin)) {
        return false;
      }

      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
      if (isOnLoginPage && user) {
        return Response.redirect(new URL('/', request.nextUrl));
      }

      return true;
    },
  },
});
