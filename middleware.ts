import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Placeholder for server-side auth check
    // For Phase 1, we rely on client-side protection in Layout/Page
    // as the auth state uses localStorage (client-only).

    return NextResponse.next();
}

export const config = {
    matcher: ['/estudiantes/:path*'],
};
