import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const session = request.cookies.get('session')?.value
 
  const { pathname } = request.nextUrl;

  const isAuthPage = pathname === '/login' || pathname === '/signup';
  const isDashboardPage = pathname.startsWith('/dashboard');
  const isPublicInvoicePage = pathname.startsWith('/invoice/');
  
  // Allow unauthenticated access to public invoice pages
  if (isPublicInvoicePage) {
      return NextResponse.next()
  }

  // Redirect to login if not authenticated and trying to access a protected route
  if (!session && isDashboardPage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
 
  // Redirect to dashboard if authenticated and trying to access login/signup page
  if (session && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
 
  return NextResponse.next()
}
 
// Match all routes except for API, Next.js static files, and image assets.
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
