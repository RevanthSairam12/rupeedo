'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { 
  ArrowLeft, 
  Gift, 
  Award,
  Star,
  Copy,
  CheckCircle,
  Sparkles,
  Users,
  Wallet,
  TrendingUp,
  Share2
} from 'lucide-react'
import Link from 'next/link'

interface RewardsData {
  id: string
  points: number
  cashback: number
  referral_code: string
  referral_count: number
  user_id: string
}

export default function RewardsPage() {
  const [rewards, setRewards] = useState<RewardsData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [copied, setCopied] = useState(false)
  const router = useRouter()
  const supabase = createBrowserClient()

  useEffect(() => {
    loadRewards()
  }, [])

  const loadRewards = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        router.push('/login')
        return
      }

      const { data, error } = await supabase
        .from('rewards')
        .select('*')
        .eq('user_id', session.user.id)
        .single()

      if (error) {
        // Create rewards entry if it doesn't exist
        const { data: newRewards, error: createError } = await supabase
          .from('rewards')
          .insert({
            user_id: session.user.id,
            points: 100,
            cashback: 0,
            referral_code: `REF${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
            referral_count: 0,
          })
          .select()
          .single()

        if (!createError && newRewards) {
          setRewards(newRewards)
        }
      } else {
        setRewards(data)
      }
    } catch (error) {
      console.error('Error loading rewards:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopyReferral = async () => {
    if (rewards?.referral_code) {
      await navigator.clipboard.writeText(rewards.referral_code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const getRewardTier = (points: number) => {
    if (points >= 10000) return { name: 'Diamond', color: 'text-cyan-600', progress: 100 }
    if (points >= 5000) return { name: 'Platinum', color: 'text-purple-600', progress: 75 }
    if (points >= 1000) return { name: 'Gold', color: 'text-yellow-600', progress: 50 }
    if (points >= 500) return { name: 'Silver', color: 'text-gray-600', progress: 25 }
    return { name: 'Bronze', color: 'text-orange-600', progress: 10 }
  }

  const tier = rewards ? getRewardTier(rewards.points) : null

  const rewardOffers = [
    {
      id: 1,
      title: 'Mobile Recharge Cashback',
      description: 'Get 2% cashback on all mobile recharges',
      points: 0,
      icon: <Gift className="h-6 w-6" />,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'DTH Recharge Bonus',
      description: 'Earn 50 points on DTH recharges above ₹500',
      points: 50,
      icon: <Star className="h-6 w-6" />,
      color: 'bg-purple-500'
    },
    {
      id: 3,
      title: 'Bill Payment Rewards',
      description: 'Get 3% cashback on electricity bill payments',
      points: 0,
      icon: <Award className="h-6 w-6" />,
      color: 'bg-green-500'
    },
    {
      id: 4,
      title: 'Referral Bonus',
      description: 'Earn 100 points for each friend you refer',
      points: 100,
      icon: <Users className="h-6 w-6" />,
      color: 'bg-orange-500'
    },
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-bold">Rewards & Offers</h1>
              <p className="text-sm text-muted-foreground">
                Earn points and cashback on every transaction
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Rewards Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardHeader>
              <CardDescription className="text-purple-100 flex items-center">
                <Award className="h-4 w-4 mr-2" />
                Reward Points
              </CardDescription>
              <CardTitle className="text-4xl font-bold">{rewards?.points || 0}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-purple-100">Current Tier</span>
                  <span className={`font-bold ${tier?.color.replace('text-', 'text-white')}`}>
                    {tier?.name}
                  </span>
                </div>
                <Progress value={tier?.progress || 0} className="h-2 bg-purple-400" />
                <p className="text-xs text-purple-100">
                  {10000 - (rewards?.points || 0)} points to Diamond tier
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardHeader>
              <CardDescription className="text-green-100 flex items-center">
                <Wallet className="h-4 w-4 mr-2" />
                Cashback Balance
              </CardDescription>
              <CardTitle className="text-4xl font-bold">
                ₹{(rewards?.cashback || 0).toFixed(2)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full" disabled>
                <TrendingUp className="mr-2 h-4 w-4" />
                Redeem Cashback
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Referral Card */}
        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Users className="mr-3 h-6 w-6 text-blue-600" />
              Refer & Earn
            </CardTitle>
            <CardDescription>
              Share your referral code and earn 100 points for each friend who signs up!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Input
                value={rewards?.referral_code || ''}
                readOnly
                className="h-14 text-center text-2xl font-bold tracking-wider bg-white"
              />
              <Button size="lg" onClick={handleCopyReferral} className="h-14 px-6">
                {copied ? (
                  <>
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-5 w-5 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
              <div>
                <p className="text-sm text-muted-foreground">Friends Referred</p>
                <p className="text-2xl font-bold">{rewards?.referral_count || 0}</p>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="bg-blue-100 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <Sparkles className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-blue-900">How it works:</p>
                  <ol className="text-sm text-blue-800 space-y-1 mt-2 list-decimal list-inside">
                    <li>Share your referral code with friends</li>
                    <li>They sign up and complete their first recharge</li>
                    <li>You both get 100 reward points!</li>
                  </ol>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Offers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Gift className="mr-2 h-5 w-5 text-purple-600" />
              Active Offers
            </CardTitle>
            <CardDescription>
              Exclusive rewards and cashback offers for you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rewardOffers.map((offer) => (
                <div
                  key={offer.id}
                  className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className={`${offer.color} p-3 rounded-lg text-white`}>
                    {offer.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{offer.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {offer.description}
                    </p>
                    {offer.points > 0 && (
                      <div className="flex items-center mt-2 text-sm font-medium text-purple-600">
                        <Award className="h-4 w-4 mr-1" />
                        +{offer.points} Points
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Points History */}
        <Card>
          <CardHeader>
            <CardTitle>Points Activity</CardTitle>
            <CardDescription>Your recent points transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Welcome Bonus</p>
                    <p className="text-sm text-muted-foreground">Account creation</p>
                  </div>
                </div>
                <p className="font-bold text-green-600">+100</p>
              </div>

              <div className="text-center py-8 text-muted-foreground">
                <Award className="h-12 w-12 mx-auto mb-3 opacity-20" />
                <p>Start recharging to earn more points!</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
