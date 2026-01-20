import { createClient } from '@supabase/supabase-js'
import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env.local file.')
}

// Client-side Supabase client (for use in Client Components)
export const createBrowserClient = () => {
  return createClientComponentClient()
}

// Server-side Supabase client (for use in Server Components, API routes)
export const createServerClient = async () => {
  const cookieStore = await cookies()
  return createServerComponentClient({ cookies: () => cookieStore })
}

// Simple client for use in API routes or server actions
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Database types (extend as needed)
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          phone_number: string | null
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
          email_verified: boolean
          phone_verified: boolean
        }
        Insert: {
          id: string
          email: string
          phone_number?: string | null
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
          email_verified?: boolean
          phone_verified?: boolean
        }
        Update: {
          id?: string
          email?: string
          phone_number?: string | null
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
          email_verified?: boolean
          phone_verified?: boolean
        }
      }
      transactions: {
        Row: {
          id: string
          user_id: string
          type: 'recharge' | 'bill_payment' | 'booking'
          amount: number
          status: 'pending' | 'success' | 'failed'
          provider: string
          reference_number: string
          created_at: string
          metadata: any
        }
        Insert: {
          id?: string
          user_id: string
          type: 'recharge' | 'bill_payment' | 'booking'
          amount: number
          status?: 'pending' | 'success' | 'failed'
          provider: string
          reference_number: string
          created_at?: string
          metadata?: any
        }
        Update: {
          id?: string
          user_id?: string
          type?: 'recharge' | 'bill_payment' | 'booking'
          amount?: number
          status?: 'pending' | 'success' | 'failed'
          provider?: string
          reference_number?: string
          created_at?: string
          metadata?: any
        }
      }
      rewards: {
        Row: {
          id: string
          user_id: string
          points: number
          cashback: number
          referral_code: string
          referral_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          points?: number
          cashback?: number
          referral_code: string
          referral_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          points?: number
          cashback?: number
          referral_code?: string
          referral_count?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
