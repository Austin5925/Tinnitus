import { NextRequest } from 'next/server';
import { Session, User as NextAuthUser } from 'next-auth';
import { JWT } from 'next-auth/jwt';

interface MyUser extends NextAuthUser {
  id: string;
  isAdmin: boolean; // 修改为必需的 boolean 类型
}

interface MyJWT extends JWT {
  id: string;
  isAdmin: boolean;
}

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }: { token: MyJWT; user?: MyUser }) {
      if (user) {
        token.id = user.id || '';
        token.isAdmin = user.isAdmin ?? false; // 确保默认为 false 如果 user.isAdmin 是 undefined
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: MyJWT }) {
      if (token && session.user) {
        session.user.id = token.id || ''; // 确保默认值为空字符串如果 token.id 是 undefined
        session.user.isAdmin = token.isAdmin; // 这里不用处理 undefined，因为 isAdmin 是 boolean
      }
      return session;
    },
    authorized({
      request,
      auth,
    }: {
      request: NextRequest;
      auth: Session | null;
    }) {
      const user = auth?.user as MyUser | undefined;
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
};
