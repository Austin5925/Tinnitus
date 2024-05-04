export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [],
  callbacks: {
    // https://next-auth.js.org/configuration/callbacks
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith('/admin');
      const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');

      // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD

      if (isOnAdminPanel && !user?.isAdmin) {
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

// import { Session } from 'next-auth';
// import { JWT } from 'next-auth/jwt';

// interface MyUser extends Session {
//   id?: string;
//   isAdmin?: boolean;
// }

// interface MyJWT extends JWT {
//   id?: string;
//   isAdmin?: boolean;
// }

// export const authConfig = {
//   pages: {
//     signIn: '/login',
//   },
//   providers: [],
//   callbacks: {
//     async jwt({ token, user }: { token: MyJWT; user?: MyUser }) {
//       if (user) {
//         token.id = user.id;
//         token.isAdmin = user.isAdmin ?? false; // 确保默认为 false 如果 user.isAdmin 是 undefined
//       }
//       return token;
//     },
//     async session({ session, token }: { session: Session; token: MyJWT }) {
//       if (token && session.user) {
//         (session.user as MyUser).id = token.id ?? ''; // 确保默认值为空字符串如果 token.id 是 undefined
//         (session.user as MyUser).isAdmin = token.isAdmin ?? false; // 确保默认为 false 如果 token.isAdmin 是 undefined
//       }
//       return session;
//     },
//   },
// };
