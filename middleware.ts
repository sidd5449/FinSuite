import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const session = request.cookies.get('session')?.value

  const isLoginPage = request.nextUrl.pathname === '/login';
 
  // Redirect to login if not authenticated and trying to access a protected route (anything other than login).
  if (!session && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
 
  // Redirect to dashboard if authenticated and trying to access login page.
  if (session && isLoginPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
 
  return NextResponse.next()
}
 
// Match all routes except for API, Next.js static files, and image assets.
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
