import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {   } from '@supabase/auth-helpers-nextjs'

// Define public routes that don't require authentication
const publicRoutes = ['/', '/login', '/signup', '/verify-email']

// Define routes that require phone number verification
const phoneRequiredRoutes = ['/dashboard', '/profile', '/transactions', '/rewards']

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Get the current session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  const path = req.nextUrl.pathname

  // If user is not logged in and trying to access protected route
  if (!session && !publicRoutes.includes(path)) {
    const redirectUrl = new URL('/login', req.url)
    redirectUrl.searchParams.set('redirect', path)
    return NextResponse.redirect(redirectUrl)
  }

  // If user is logged in
  if (session) {
    // Get user profile to check phone number
    const { data: profile } = await supabase
      .from('users')
      .select('phone_number, email_verified')
      .eq('id', session.user.id)
      .single()

    // Redirect to email verification if not verified
    if (!profile?.email_verified && path !== '/verify-email') {
      return NextResponse.redirect(new URL('/verify-email', req.url))
    }

    // Redirect to complete profile if no phone number
    if (profile?.email_verified && !profile?.phone_number && path !== '/complete-profile') {
      return NextResponse.redirect(new URL('/complete-profile', req.url))
    }

    // Redirect away from auth pages if already logged in and verified
    if (
      profile?.email_verified &&
      profile?.phone_number &&
      (path === '/login' || path === '/signup' || path === '/verify-email' || path === '/complete-profile')
    ) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
  }

  return res
}

// Configure which routes use this middleware
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|public|api).*)',
  ],
}
