// import { NextRequest, NextResponse } from 'next/server';
// import { getToken } from 'next-auth/jwt';

export { auth as middleware } from '@/lib/auth';

// // Middleware function to handle authentication
// export async function middleware(request: NextRequest) {
//   const token = await getToken({
//     req: request,
//     secret: process.env.NEXTAUTH_SECRET || 'default-secret',
//     salt: 'default-salt',
//   });

//   const isOnAdminPanel = request.nextUrl.pathname.startsWith('/admin');
//   const isOnLoginPage = request.nextUrl.pathname.startsWith('/login');

//   // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
//   if (isOnAdminPanel && (!token || !token.isAdmin)) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
//   if (isOnLoginPage && token) {
//     return NextResponse.redirect(new URL('/', request.url));
//   }

//   return NextResponse.next();
// }
