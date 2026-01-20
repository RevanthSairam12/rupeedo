'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Mail, Loader2, AlertCircle, CheckCircle, ArrowLeft, Lock } from 'lucide-react'

const MAX_OTP_ATTEMPTS = 3
const LOCKOUT_DURATION = 15 * 60 * 1000 // 15 minutes in milliseconds
const OTP_EXPIRY_TIME = 10 * 60 * 1000 // 10 minutes in milliseconds

export default function VerifyEmailPage() {
  const [otp, setOtp] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [countdown, setCountdown] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [isLocked, setIsLocked] = useState(false)
  const [lockoutEnd, setLockoutEnd] = useState<number | null>(null)
  const [otpSentTime, setOtpSentTime] = useState<number>(Date.now())
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get('email') || ''
  const fullName = searchParams.get('name') || ''
  const supabase = createBrowserClient()

  useEffect(() => {
    // Check for existing lockout
    const storedLockout = localStorage.getItem(`otp_lockout_${email}`)
    if (storedLockout) {
      const lockoutTime = parseInt(storedLockout)
      if (Date.now() < lockoutTime) {
        setIsLocked(true)
        setLockoutEnd(lockoutTime)
      } else {
        localStorage.removeItem(`otp_lockout_${email}`)
        localStorage.removeItem(`otp_attempts_${email}`)
      }
    }

    // Check stored attempts
    const storedAttempts = localStorage.getItem(`otp_attempts_${email}`)
    if (storedAttempts) {
      setAttempts(parseInt(storedAttempts))
    }

    // Countdown timer
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }

    // Lockout countdown
    if (isLocked && lockoutEnd) {
      const remaining = Math.ceil((lockoutEnd - Date.now()) / 1000)
      if (remaining <= 0) {
        setIsLocked(false)
        setLockoutEnd(null)
        setAttempts(0)
        localStorage.removeItem(`otp_lockout_${email}`)
        localStorage.removeItem(`otp_attempts_${email}`)
      } else {
        const timer = setTimeout(() => setCountdown(remaining), 1000)
        return () => clearTimeout(timer)
      }
    }
  }, [countdown, email, isLocked, lockoutEnd])

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isLocked) {
      setError('Too many failed attempts. Please wait before trying again.')
      return
    }

    if (!otp || otp.length !== 6) {
      setError('Please enter a valid 6-digit code')
      return
    }

    // Check if OTP is expired (10 minutes)
    const otpAge = Date.now() - otpSentTime
    if (otpAge > OTP_EXPIRY_TIME) {
      setError('OTP expired. Please request a new one.')
      setOtp('')
      return
    }

    try {
      setIsLoading(true)
      setError('')

      // Verify the OTP
      const { data, error: verifyError } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: 'email',
      })

      if (verifyError) {
        // Increment attempts
        const newAttempts = attempts + 1
        setAttempts(newAttempts)
        localStorage.setItem(`otp_attempts_${email}`, newAttempts.toString())

        // Check if max attempts reached
        if (newAttempts >= MAX_OTP_ATTEMPTS) {
          const lockoutTime = Date.now() + LOCKOUT_DURATION
          setIsLocked(true)
          setLockoutEnd(lockoutTime)
          localStorage.setItem(`otp_lockout_${email}`, lockoutTime.toString())
          setError(`Too many failed attempts. Try again in 15 minutes.`)
          setOtp('')
        } else {
          const remainingAttempts = MAX_OTP_ATTEMPTS - newAttempts
          setError(`Invalid verification code. ${remainingAttempts} attempt${remainingAttempts > 1 ? 's' : ''} remaining.`)
          setOtp('')
        }
        
        setIsLoading(false)
        return
      }

      if (data.user) {
        // Reset attempts on success
        localStorage.removeItem(`otp_attempts_${email}`)
        localStorage.removeItem(`otp_lockout_${email}`)

        // Create or update user profile
        const { error: profileError } = await supabase
          .from('users')
          .upsert({
            id: data.user.id,
            email: data.user.email!,
            full_name: fullName || data.user.user_metadata?.full_name || null,
            avatar_url: data.user.user_metadata?.avatar_url || null,
            email_verified: true,
            updated_at: new Date().toISOString(),
          })

        if (profileError) {
          console.error('Profile creation error:', profileError)
        }

        // Check if phone number is present
        const { data: profile } = await supabase
          .from('users')
          .select('phone_number')
          .eq('id', data.user.id)
          .single()

        if (!profile?.phone_number) {
          // Redirect to phone number collection
          router.push('/complete-profile')
        } else {
          // Redirect to dashboard
          router.push('/dashboard')
        }
      }
    } catch (error: any) {
      setError(error.message || 'Failed to verify code. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendOTP = async () => {
    if (!email) {
      setError('Email not found. Please go back and try again.')
      return
    }

    if (countdown > 0) {
      return
    }

    if (isLocked) {
      setError('Too many failed attempts. Please wait before trying again.')
      return
    }

    try {
      setIsResending(true)
      setError('')
      setMessage('')

      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error

      setMessage('New verification code sent!')
      setCountdown(60) // 60 seconds cooldown
      setOtpSentTime(Date.now()) // Reset OTP sent time
      setOtp('') // Clear current OTP input
    } catch (error: any) {
      if (error.message?.includes('rate limit')) {
        setError('Too many requests. Please wait a few minutes before requesting a new code.')
      } else {
        setError(error.message || 'Failed to resend code')
      }
    } finally {
      setIsResending(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded-full bg-green-600 flex items-center justify-center">
              <Mail className="h-6 w-6 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">Verify Your Email</CardTitle>
          <CardDescription className="text-base">
            We sent a 6-digit code to
            <br />
            <span className="font-semibold text-foreground">{email}</span>
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

          {isLocked && lockoutEnd && (
            <Alert variant="destructive">
              <Lock className="h-4 w-4" />
              <AlertDescription>
                Too many failed attempts. Locked for {Math.ceil((lockoutEnd - Date.now()) / 60000)} minutes.
              </AlertDescription>
            </Alert>
          )}

          {attempts > 0 && attempts < MAX_OTP_ATTEMPTS && !isLocked && (
            <Alert className="border-yellow-500 bg-yellow-50">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-yellow-800">
                {MAX_OTP_ATTEMPTS - attempts} attempt{MAX_OTP_ATTEMPTS - attempts > 1 ? 's' : ''} remaining before 15-minute lockout
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleVerifyOTP} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp">Verification Code</Label>
              <Input
                id="otp"
                type="text"
                placeholder="000000"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                disabled={isLoading}
                className="h-14 text-center text-2xl font-bold tracking-widest"
                maxLength={6}
                autoComplete="one-time-code"
              />
              <p className="text-xs text-muted-foreground text-center">
                Enter the 6-digit code from your email
              </p>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base font-medium"
              disabled={isLoading || otp.length !== 6 || isLocked}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Verifying...
                </>
              ) : (
                'Verify Email'
              )}
            </Button>
          </form>

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Didn&apos;t receive the code?
            </p>
            <Button
              type="button"
              variant="ghost"
              onClick={handleResendOTP}
              disabled={isResending || countdown > 0 || isLocked}
              className="text-blue-600 hover:text-blue-700"
            >
              {isResending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : countdown > 0 ? (
                `Resend in ${countdown}s`
              ) : (
                'Resend Code'
              )}
            </Button>
          </div>

          <Button
            type="button"
            variant="ghost"
            onClick={() => router.back()}
            className="w-full"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
