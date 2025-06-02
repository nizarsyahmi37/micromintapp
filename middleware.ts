import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if user is authenticated (in a real app, this would check session/token)
  const isAuthenticated = request.cookies.get('auth');
  
  // Protected routes that require authentication
  const protectedPaths = ['/dashboard'];
  
  // Check if the requested path is protected
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedPath && !isAuthenticated) {
    // Redirect to login page if not authenticated
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*']
};