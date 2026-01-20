'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  ArrowLeft, 
  Search, 
  Filter,
  Download,
  Phone,
  Zap,
  CreditCard,
  Bus,
  CheckCircle,
  XCircle,
  Clock,
  Calendar
} from 'lucide-react'
import Link from 'next/link'

interface Transaction {
  id: string
  type: 'recharge' | 'bill_payment' | 'booking'
  amount: number
  status: 'pending' | 'success' | 'failed'
  provider: string
  reference_number: string
  created_at: string
  metadata: any
}

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState<string>('all')
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const router = useRouter()
  const supabase = createBrowserClient()

  useEffect(() => {
    loadTransactions()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [transactions, searchQuery, filterType, filterStatus])

  const loadTransactions = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        router.push('/login')
        return
      }

      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .eq('user_id', session.user.id)
        .order('created_at', { ascending: false })

      if (error) throw error

      setTransactions(data || [])
    } catch (error) {
      console.error('Error loading transactions:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const applyFilters = () => {
    let filtered = [...transactions]

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(t => 
        t.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.reference_number.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Type filter
    if (filterType !== 'all') {
      filtered = filtered.filter(t => t.type === filterType)
    }

    // Status filter
    if (filterStatus !== 'all') {
      filtered = filtered.filter(t => t.status === filterStatus)
    }

    setFilteredTransactions(filtered)
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'recharge':
        return <Phone className="h-5 w-5" />
      case 'bill_payment':
        return <Zap className="h-5 w-5" />
      case 'booking':
        return <Bus className="h-5 w-5" />
      default:
        return <CreditCard className="h-5 w-5" />
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-600" />
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-600" />
      default:
        return null
    }
  }

  const getStatusVariant = (status: string): "default" | "secondary" | "destructive" => {
    switch (status) {
      case 'success':
        return 'default'
      case 'failed':
        return 'destructive'
      case 'pending':
        return 'secondary'
      default:
        return 'secondary'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const calculateStats = () => {
    const total = transactions.reduce((sum, t) => sum + t.amount, 0)
    const success = transactions.filter(t => t.status === 'success').length
    const pending = transactions.filter(t => t.status === 'pending').length
    const failed = transactions.filter(t => t.status === 'failed').length

    return { total, success, pending, failed }
  }

  const stats = calculateStats()

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
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div className="flex-1">
              <h1 className="text-xl font-bold">Transaction History</h1>
              <p className="text-sm text-muted-foreground">
                View all your recharges and payments
              </p>
            </div>
            <Button variant="outline" size="sm" disabled>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Spent</CardDescription>
              <CardTitle className="text-2xl">₹{stats.total.toFixed(2)}</CardTitle>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center">
                <CheckCircle className="h-3 w-3 mr-1 text-green-600" />
                Successful
              </CardDescription>
              <CardTitle className="text-2xl text-green-600">{stats.success}</CardTitle>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center">
                <Clock className="h-3 w-3 mr-1 text-yellow-600" />
                Pending
              </CardDescription>
              <CardTitle className="text-2xl text-yellow-600">{stats.pending}</CardTitle>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center">
                <XCircle className="h-3 w-3 mr-1 text-red-600" />
                Failed
              </CardDescription>
              <CardTitle className="text-2xl text-red-600">{stats.failed}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by provider or reference number..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="recharge">Recharge</SelectItem>
                  <SelectItem value="bill_payment">Bill Payment</SelectItem>
                  <SelectItem value="booking">Booking</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="success">Success</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Transactions List */}
        <Card>
          <CardHeader>
            <CardTitle>
              {filteredTransactions.length} Transaction{filteredTransactions.length !== 1 ? 's' : ''}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {filteredTransactions.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <Calendar className="h-16 w-16 mx-auto mb-4 opacity-20" />
                <p className="text-lg font-medium">No transactions found</p>
                <p className="text-sm">
                  {searchQuery || filterType !== 'all' || filterStatus !== 'all'
                    ? 'Try adjusting your filters'
                    : 'Start recharging to see your history'}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        {getTypeIcon(transaction.type)}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <p className="font-semibold">{transaction.provider}</p>
                          {getStatusIcon(transaction.status)}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {transaction.reference_number}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(transaction.created_at)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">₹{transaction.amount.toFixed(2)}</p>
                      <Badge variant={getStatusVariant(transaction.status)}>
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
