import { NextResponse } from 'next/server';

export function middleware(request) {
  // Just allow all requests to continue without modification
  return NextResponse.next();
}

// Limit middleware to only run on necessary routes
export const config = {
  matcher: [
    // Skip all internal paths
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
}; 