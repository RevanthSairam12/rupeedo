import { createServerClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = await createServerClient()
    await supabase.auth.exchangeCodeForSession(code)
  }

  // Redirect to dashboard or complete profile
  return NextResponse.redirect(new URL('/dashboard', request.url))
}
