'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Phone, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function CompleteProfilePage() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const router = useRouter()
  const supabase = createBrowserClient()

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        router.push('/login')
        return
      }

      setUserEmail(session.user.email || '')

      // Check if phone number already exists
      const { data: profile } = await supabase
        .from('users')
        .select('phone_number')
        .eq('id', session.user.id)
        .single()

      if (profile?.phone_number) {
        router.push('/dashboard')
      }
    }

    checkAuth()
  }, [router, supabase])

  const validatePhoneNumber = (phone: string) => {
    // Must be exactly 10 digits
    if (phone.length !== 10) {
      return 'Phone number must be exactly 10 digits'
    }

    // Must start with 6, 7, 8, or 9 (valid Indian mobile numbers)
    if (!/^[6-9]/.test(phone)) {
      return 'Phone number must start with 6, 7, 8, or 9'
    }

    // Must contain only digits
    if (!/^\d{10}$/.test(phone)) {
      return 'Phone number must contain only digits'
    }

    return null // Valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!phoneNumber) {
      setError('Phone number is required')
      return
    }

    // Validate phone number
    const validationError = validatePhoneNumber(phoneNumber)
    if (validationError) {
      setError(validationError)
      return
    }

    try {
      setIsLoading(true)
      setError('')

      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        throw new Error('Not authenticated')
      }

      const formattedPhone = `+91${phoneNumber}`

      // Check if phone number already exists
      const { data: existingPhone } = await supabase
        .from('users')
        .select('phone_number')
        .eq('phone_number', formattedPhone)
        .single()

      if (existingPhone) {
        setError('This phone number is already registered. Try another.')
        setIsLoading(false)
        return
      }

      // Update user profile with phone number
      const { error: updateError } = await supabase
        .from('users')
        .update({
          phone_number: formattedPhone,
          updated_at: new Date().toISOString(),
        })
        .eq('id', session.user.id)

      if (updateError) throw updateError

      // Create initial rewards entry
      const { error: rewardsError } = await supabase
        .from('rewards')
        .upsert({
          user_id: session.user.id,
          points: 100, // Welcome bonus
          cashback: 0,
          referral_code: `REF${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
          referral_count: 0,
        })

      if (rewardsError) {
        console.error('Rewards creation error:', rewardsError)
      }

      // Redirect to dashboard
      router.push('/dashboard')
    } catch (error: any) {
      if (error.message?.includes('already exists') || error.message?.includes('duplicate')) {
        setError('This phone number is already registered. Try another.')
      } else {
        setError(error.message || 'Failed to update profile. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-pink-50 p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded-full bg-orange-600 flex items-center justify-center">
              <Phone className="h-6 w-6 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">One Last Step!</CardTitle>
          <CardDescription className="text-base">
            Add your phone number to complete your profile
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {userEmail && (
            <Alert className="border-blue-500 bg-blue-50">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800">
                Email verified: {userEmail}
              </AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="flex">
                <div className="flex items-center justify-center px-3 border border-r-0 border-input bg-muted rounded-l-md">
                  <span className="text-sm font-medium">+91</span>
                </div>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="9876543210"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  disabled={isLoading}
                  className={`h-12 rounded-l-none ${error && error.includes('phone') ? 'border-red-500' : ''}`}
                  maxLength={10}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                We&apos;ll use this for transaction updates and account security
              </p>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base font-medium"
              disabled={isLoading || phoneNumber.length !== 10}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Completing Profile...
                </>
              ) : (
                <>
                  <Phone className="mr-2 h-5 w-5" />
                  Complete Profile
                </>
              )}
            </Button>
          </form>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-green-900">Welcome Bonus!</p>
                <p className="text-xs text-green-700">
                  Get 100 reward points instantly after completing your profile
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            Your phone number is required for regulatory compliance and account verification
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
