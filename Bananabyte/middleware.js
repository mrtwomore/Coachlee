import { NextResponse } from 'next/server';

// Track request counts for rate limiting
const requestCounts = new Map();
const RATE_LIMIT_DURATION = 60 * 1000; // 1 minute
const MAX_REQUESTS = 100; // 100 requests per minute

export function middleware(request) {
  const response = NextResponse.next();
  
  // 1. Force HTTPS in production
  if (process.env.NODE_ENV === 'production' && request.headers.get('x-forwarded-proto') !== 'https') {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    return NextResponse.redirect(url);
  }
  
  // 2. Implement basic rate limiting
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  
  // Clean up old entries
  for (const [storedIp, { timestamp }] of requestCounts.entries()) {
    if (now - timestamp > RATE_LIMIT_DURATION) {
      requestCounts.delete(storedIp);
    }
  }
  
  // Check and update rate limit for current IP
  const rateLimit = requestCounts.get(ip) || { count: 0, timestamp: now };
  if (now - rateLimit.timestamp > RATE_LIMIT_DURATION) {
    // Reset if outside the window
    rateLimit.count = 0;
    rateLimit.timestamp = now;
  }
  
  rateLimit.count++;
  requestCounts.set(ip, rateLimit);
  
  if (rateLimit.count > MAX_REQUESTS) {
    response.headers.set('Retry-After', '60');
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: response.headers,
    });
  }
  
  // 3. Add additional security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  return response;
}

export const config = {
  matcher: ['/((?!api/auth|_next/static|_next/image|favicon.ico).*)'],
}; 