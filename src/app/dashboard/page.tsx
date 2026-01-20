'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  User, 
  CreditCard, 
  Gift, 
  LogOut, 
  Smartphone, 
  Wallet, 
  TrendingUp,
  History,
  Award,
  ChevronRight,
  Zap,
  Phone
} from 'lucide-react'
import Link from 'next/link'

interface UserProfile {
  email: string
  full_name: string | null
  phone_number: string | null
  avatar_url: string | null
}

interface RewardsData {
  points: number
  cashback: number
  referral_code: string
}

interface Transaction {
  id: string
  type: string
  amount: number
  status: string
  created_at: string
  provider: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [rewards, setRewards] = useState<RewardsData | null>(null)
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const supabase = createBrowserClient()

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        router.push('/login')
        return
      }

      // Load user profile
      const { data: profile } = await supabase
        .from('users')
        .select('*')
        .eq('id', session.user.id)
        .single()

      if (profile) {
        setUser(profile)
      }

      // Load rewards
      const { data: rewardsData } = await supabase
        .from('rewards')
        .select('points, cashback, referral_code')
        .eq('user_id', session.user.id)
        .single()

      if (rewardsData) {
        setRewards(rewardsData)
      }

      // Load recent transactions
      const { data: transactions } = await supabase
        .from('transactions')
        .select('*')
        .eq('user_id', session.user.id)
        .order('created_at', { ascending: false })
        .limit(5)

      if (transactions) {
        setRecentTransactions(transactions)
      }
    } catch (error) {
      console.error('Error loading dashboard:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const getInitials = (name: string | null) => {
    if (!name) return 'U'
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={user?.avatar_url || ''} />
                <AvatarFallback className="bg-blue-600 text-white">
                  {getInitials(user?.full_name || user?.email || '')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-lg font-bold">{user?.full_name || 'Welcome'}</h1>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Rewards Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardHeader className="pb-3">
              <CardDescription className="text-blue-100">Total Balance</CardDescription>
              <CardTitle className="text-3xl">₹{(rewards?.cashback || 0).toFixed(2)}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" size="sm" className="w-full">
                <Wallet className="mr-2 h-4 w-4" />
                Add Money
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardHeader className="pb-3">
              <CardDescription className="text-purple-100">Reward Points</CardDescription>
              <CardTitle className="text-3xl">{rewards?.points || 0}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" size="sm" className="w-full" asChild>
                <Link href="/rewards">
                  <Award className="mr-2 h-4 w-4" />
                  View Rewards
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardHeader className="pb-3">
              <CardDescription className="text-green-100">Referral Code</CardDescription>
              <CardTitle className="text-2xl">{rewards?.referral_code || 'N/A'}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" size="sm" className="w-full">
                <Gift className="mr-2 h-4 w-4" />
                Share & Earn
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="mr-2 h-5 w-5 text-yellow-500" />
              Quick Recharge
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button variant="outline" className="h-20 flex-col" asChild>
                <Link href="/rechargepages">
                  <Smartphone className="h-6 w-6 mb-2 text-blue-600" />
                  <span className="text-sm">Mobile</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <CreditCard className="h-6 w-6 mb-2 text-purple-600" />
                <span className="text-sm">DTH</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Zap className="h-6 w-6 mb-2 text-yellow-600" />
                <span className="text-sm">Electricity</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col" asChild>
                <Link href="/buspages">
                  <TrendingUp className="h-6 w-6 mb-2 text-green-600" />
                  <span className="text-sm">Bus Booking</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <History className="mr-2 h-5 w-5" />
                Recent Transactions
              </CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/transactions">
                  View All
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {recentTransactions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <History className="h-12 w-12 mx-auto mb-3 opacity-20" />
                <p>No transactions yet</p>
                <p className="text-sm">Start recharging to see your history</p>
              </div>
            ) : (
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{transaction.provider}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(transaction.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{transaction.amount}</p>
                      <Badge variant={transaction.status === 'success' ? 'default' : 'secondary'}>
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Profile Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/profile">
                <User className="mr-3 h-5 w-5" />
                My Profile
                <ChevronRight className="ml-auto h-5 w-5" />
              </Link>
            </Button>
            <Separator />
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/transactions">
                <History className="mr-3 h-5 w-5" />
                Transaction History
                <ChevronRight className="ml-auto h-5 w-5" />
              </Link>
            </Button>
            <Separator />
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/rewards">
                <Gift className="mr-3 h-5 w-5" />
                Rewards & Offers
                <ChevronRight className="ml-auto h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
