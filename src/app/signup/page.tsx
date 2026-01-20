'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createBrowserClient } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { Mail, Chrome, Loader2, AlertCircle, CheckCircle } from 'lucide-react'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()
  const supabase = createBrowserClient()

  const handleGoogleSignup = async () => {
    try {
      setIsGoogleLoading(true)
      setError('')

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      })

      if (error) throw error

      // Redirect happens automatically
    } catch (error: any) {
      // Handle specific error cases
      if (error.message?.includes('cancelled') || error.message?.includes('closed')) {
        setError('Google sign-up was cancelled. Please try again.')
      } else if (error.message?.includes('already registered') || error.message?.includes('already exists')) {
        setError('This email is already registered. Please login instead.')
      } else if (error.message?.includes('network')) {
        setError('Network error. Please check your connection and try again.')
      } else {
        setError(error.message || 'Failed to sign up with Google. Please try again.')
      }
      setIsGoogleLoading(false)
    }
  }

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setError('Please enter your email')
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    if (!fullName || fullName.trim().length < 2) {
      setError('Please enter your full name (at least 2 characters)')
      return
    }

    try {
      setIsLoading(true)
      setError('')
      setMessage('')

      // Check if email already exists
      const { data: existingUser } = await supabase
        .from('users')
        .select('email')
        .eq('email', email)
        .single()

      if (existingUser) {
        setError('This email is already registered. Please login instead.')
        setIsLoading(false)
        return
      }

      // Send OTP to email
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: {
            full_name: fullName,
          },
        },
      })

      if (error) throw error

      setMessage('Verification email sent! Check your inbox.')
      
      // Redirect to OTP verification page
      router.push(`/verify-email?email=${encodeURIComponent(email)}&name=${encodeURIComponent(fullName)}`)
    } catch (error: any) {
      // Handle specific error cases
      if (error.message?.includes('rate limit')) {
        setError('Too many attempts. Please wait a few minutes and try again.')
      } else if (error.message?.includes('already registered') || error.message?.includes('already exists')) {
        setError('This email is already registered. Please login instead.')
      } else {
        setError(error.message || 'Failed to create account. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center">
              <Mail className="h-6 w-6 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">Create Account</CardTitle>
          <CardDescription className="text-base">
            Sign up to start recharging and earning rewards
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {message && (
            <Alert className="border-green-500 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">{message}</AlertDescription>
            </Alert>
          )}

          {/* Google Sign Up */}
          <Button
            type="button"
            variant="outline"
            className="w-full h-12 text-base font-medium"
            onClick={handleGoogleSignup}
            disabled={isGoogleLoading || isLoading}
          >
            {isGoogleLoading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Chrome className="mr-2 h-5 w-5" />
            )}
            Continue with Google
          </Button>

          <div className="relative">
            <Separator />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-muted-foreground">
              OR
            </span>
          </div>

          {/* Email Signup */}
          <form onSubmit={handleEmailSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={isLoading || isGoogleLoading}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading || isGoogleLoading}
                className="h-12"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base font-medium"
              disabled={isLoading || isGoogleLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Creating Account...
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-5 w-5" />
                  Sign Up with Email
                </>
              )}
            </Button>
          </form>

          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link
              href="/login"
              className="font-semibold text-purple-600 hover:text-purple-700 hover:underline"
            >
              Log in
            </Link>
          </div>

          <p className="text-xs text-center text-muted-foreground mt-4">
            By signing up, you agree to our{' '}
            <Link href="/terms" className="underline hover:text-foreground">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="underline hover:text-foreground">
              Privacy Policy
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
