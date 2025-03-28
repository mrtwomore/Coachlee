import { NextResponse } from 'next/server';

export function middleware(request) {
  // Just allow the request to continue without any checks
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api/auth|_next/static|_next/image|images|favicon.ico).*)'],
}; 