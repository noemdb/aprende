import NextAuth from 'next-auth';
import { authConfig } from './src/auth.config';

const authMiddleware = NextAuth(authConfig).auth;

export default async function middleware(req: any) {
  // console.log('Middleware hit:', req.nextUrl.pathname);
  if (req.nextUrl.pathname.includes('/api/')) {
    return;
  }
  return (authMiddleware as any)(req);
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
