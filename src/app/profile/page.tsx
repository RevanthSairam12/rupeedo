'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { 
  User, 
  Mail, 
  Phone, 
  ArrowLeft, 
  Loader2, 
  CheckCircle,
  AlertCircle,
  Camera,
  Edit2
} from 'lucide-react'
import Link from 'next/link'

interface UserProfile {
  id: string
  email: string
  full_name: string | null
  phone_number: string | null
  avatar_url: string | null
  created_at: string
  email_verified: boolean
  phone_verified: boolean
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [fullName, setFullName] = useState('')
  const router = useRouter()
  const supabase = createBrowserClient()

  useEffect(() => {
    loadProfile()
  }, [])

  const loadProfile = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        router.push('/login')
        return
      }

      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', session.user.id)
        .single()

      if (error) throw error

      setProfile(data)
      setFullName(data.full_name || '')
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSave = async () => {
    if (!fullName.trim()) {
      setError('Name cannot be empty')
      return
    }

    try {
      setIsSaving(true)
      setError('')
      setMessage('')

      const { data: { session } } = await supabase.auth.getSession()
      if (!session) throw new Error('Not authenticated')

      const { error } = await supabase
        .from('users')
        .update({
          full_name: fullName,
          updated_at: new Date().toISOString(),
        })
        .eq('id', session.user.id)

      if (error) throw error

      setMessage('Profile updated successfully!')
      setIsEditing(false)
      await loadProfile()
    } catch (error: any) {
      setError(error.message || 'Failed to update profile')
    } finally {
      setIsSaving(false)
    }
  }

  const getInitials = (name: string | null) => {
    if (!name) return 'U'
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-bold">My Profile</h1>
              <p className="text-sm text-muted-foreground">Manage your account information</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
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

        {/* Profile Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Profile Information</CardTitle>
              {!isEditing && (
                <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Avatar Section */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profile?.avatar_url || ''} />
                  <AvatarFallback className="bg-blue-600 text-white text-2xl">
                    {getInitials(profile?.full_name || profile?.email || '')}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute bottom-0 right-0 h-8 w-8 rounded-full"
                  disabled
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Member since {formatDate(profile?.created_at || '')}
              </p>
            </div>

            <Separator />

            {/* Profile Fields */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                {isEditing ? (
                  <Input
                    id="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                  />
                ) : (
                  <div className="flex items-center space-x-2 p-3 border rounded-md bg-muted/50">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>{profile?.full_name || 'Not set'}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="flex items-center space-x-2 p-3 border rounded-md bg-muted/50">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{profile?.email}</span>
                  {profile?.email_verified && (
                    <CheckCircle className="h-4 w-4 text-green-600 ml-auto" />
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="flex items-center space-x-2 p-3 border rounded-md bg-muted/50">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{profile?.phone_number || 'Not set'}</span>
                  {profile?.phone_verified && (
                    <CheckCircle className="h-4 w-4 text-green-600 ml-auto" />
                  )}
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="flex space-x-3">
                <Button onClick={handleSave} disabled={isSaving} className="flex-1">
                  {isSaving ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    'Save Changes'
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false)
                    setFullName(profile?.full_name || '')
                    setError('')
                  }}
                  disabled={isSaving}
                >
                  Cancel
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Account Status Card */}
        <Card>
          <CardHeader>
            <CardTitle>Account Status</CardTitle>
            <CardDescription>Your account verification status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-md">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Email Verification</p>
                  <p className="text-sm text-muted-foreground">Your email is verified</p>
                </div>
              </div>
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>

            <div className="flex items-center justify-between p-3 border rounded-md">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="font-medium">Phone Verification</p>
                  <p className="text-sm text-muted-foreground">
                    {profile?.phone_number ? 'Phone number added' : 'No phone number'}
                  </p>
                </div>
              </div>
              {profile?.phone_number ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <AlertCircle className="h-5 w-5 text-yellow-600" />
              )}
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="text-red-600">Danger Zone</CardTitle>
            <CardDescription>Irreversible account actions</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="destructive" disabled>
              Delete Account
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              Contact support to delete your account
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
