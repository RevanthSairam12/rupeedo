# Database Setup for Recharge Platform

This document contains all the SQL scripts needed to set up your Supabase database tables for the authentication and recharge platform.

## Prerequisites

1. Go to your Supabase Dashboard: https://app.supabase.com
2. Select your project
3. Go to the SQL Editor
4. Run the scripts below in order

---

## 1. Enable UUID Extension

```sql
-- Enable UUID extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

---

## 2. Create Users Table

This extends the default auth.users with additional profile information.

```sql
-- Create users profile table
CREATE TABLE public.users (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  phone_number TEXT,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email_verified BOOLEAN DEFAULT FALSE,
  phone_verified BOOLEAN DEFAULT FALSE,
  CONSTRAINT valid_phone CHECK (phone_number IS NULL OR phone_number ~ '^\+\d{10,15}$')
);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies for users table
-- Users can read their own data
CREATE POLICY "Users can view own profile"
  ON public.users
  FOR SELECT
  USING (auth.uid() = id);

-- Users can insert their own data
CREATE POLICY "Users can insert own profile"
  ON public.users
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Users can update their own data
CREATE POLICY "Users can update own profile"
  ON public.users
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Create index for better performance
CREATE INDEX idx_users_email ON public.users(email);
CREATE INDEX idx_users_phone ON public.users(phone_number);
```

---

## 3. Create Transactions Table

Stores all recharge and payment transactions.

```sql
-- Create transactions table
CREATE TABLE public.transactions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('recharge', 'bill_payment', 'booking')),
  amount DECIMAL(10, 2) NOT NULL CHECK (amount > 0),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'success', 'failed')),
  provider TEXT NOT NULL,
  reference_number TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB DEFAULT '{}'::jsonb
);

-- Enable Row Level Security
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies for transactions
-- Users can view their own transactions
CREATE POLICY "Users can view own transactions"
  ON public.transactions
  FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own transactions
CREATE POLICY "Users can insert own transactions"
  ON public.transactions
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own transactions
CREATE POLICY "Users can update own transactions"
  ON public.transactions
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX idx_transactions_user_id ON public.transactions(user_id);
CREATE INDEX idx_transactions_created_at ON public.transactions(created_at DESC);
CREATE INDEX idx_transactions_status ON public.transactions(status);
CREATE INDEX idx_transactions_reference ON public.transactions(reference_number);
```

---

## 4. Create Rewards Table

Stores user reward points, cashback, and referral information.

```sql
-- Create rewards table
CREATE TABLE public.rewards (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  points INTEGER DEFAULT 0 CHECK (points >= 0),
  cashback DECIMAL(10, 2) DEFAULT 0 CHECK (cashback >= 0),
  referral_code TEXT NOT NULL UNIQUE,
  referral_count INTEGER DEFAULT 0 CHECK (referral_count >= 0),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.rewards ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies for rewards
-- Users can view their own rewards
CREATE POLICY "Users can view own rewards"
  ON public.rewards
  FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own rewards
CREATE POLICY "Users can insert own rewards"
  ON public.rewards
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own rewards
CREATE POLICY "Users can update own rewards"
  ON public.rewards
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create indexes
CREATE INDEX idx_rewards_user_id ON public.rewards(user_id);
CREATE INDEX idx_rewards_referral_code ON public.rewards(referral_code);
```

---

## 5. Create Trigger for Updated_at Timestamp

Automatically update the `updated_at` field when records are modified.

```sql
-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for users table
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON public.users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create trigger for rewards table
CREATE TRIGGER update_rewards_updated_at
  BEFORE UPDATE ON public.rewards
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

---

## 6. Create Function to Auto-create User Profile

Automatically create a user profile when a new user signs up via Supabase Auth.

```sql
-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, full_name, avatar_url, email_verified)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url',
    NEW.email_confirmed_at IS NOT NULL
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
```

---

## 7. Insert Sample Data (Optional - for testing)

```sql
-- Note: Replace 'your-user-id' with an actual user ID from auth.users after signup

-- Insert sample transaction (only after you have a real user)
-- INSERT INTO public.transactions (user_id, type, amount, status, provider, reference_number)
-- VALUES (
--   'your-user-id',
--   'recharge',
--   299.00,
--   'success',
--   'Airtel',
--   'REF' || floor(random() * 1000000)::text
-- );
```

---

## 8. Configure Google OAuth in Supabase

### Steps:

1. **Go to Supabase Dashboard** → Authentication → Providers
2. **Enable Google Provider**
3. **Get Google OAuth Credentials:**
   - Visit: https://console.cloud.google.com/
   - Create a new project (or select existing)
   - Enable Google+ API
   - Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
   - Set Application Type to "Web application"
   - Add Authorized Redirect URI:
     ```
     https://your-project-ref.supabase.co/auth/v1/callback
     ```
   - Copy the Client ID and Client Secret
4. **Add to Supabase:**
   - Paste Client ID and Client Secret in Supabase Google Provider settings
   - Save

---

## 9. Configure Email Templates (Optional)

### For OTP Email:

1. Go to **Authentication** → **Email Templates**
2. Customize the "Magic Link" template:

```html
<h2>Your verification code</h2>
<p>Enter this code to verify your email:</p>
<h1 style="font-size: 32px; letter-spacing: 10px;">{{ .Token }}</h1>
<p>This code will expire in 60 minutes.</p>
```

---

## 10. Verify Setup

After running all scripts, verify your setup:

```sql
-- Check if all tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('users', 'transactions', 'rewards');

-- Check if RLS is enabled
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename IN ('users', 'transactions', 'rewards');
```

---

## Environment Variables Setup

After database setup, configure your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key (optional)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Get these values from:
- Supabase Dashboard → Project Settings → API

---

## Security Notes

1. **Row Level Security (RLS)** is enabled on all tables to ensure users can only access their own data
2. **Phone number validation** ensures proper format (+country code + number)
3. **Amount validation** ensures only positive values
4. **Status validation** ensures only valid statuses ('pending', 'success', 'failed')
5. **Unique constraints** on email, reference_number, and referral_code prevent duplicates

---

## Troubleshooting

### If users table doesn't auto-create on signup:
- Verify the trigger exists: `\df public.handle_new_user`
- Check trigger is attached: `SELECT * FROM pg_trigger WHERE tgname = 'on_auth_user_created'`

### If RLS is blocking queries:
- Verify you're authenticated: Check `auth.uid()` returns a value
- Check policy names: `SELECT * FROM pg_policies WHERE schemaname = 'public'`

### If Google OAuth isn't working:
- Verify redirect URI matches exactly (including https://)
- Check Client ID and Secret are correct
- Enable Google+ API in Google Cloud Console

---

## Next Steps

1. ✅ Run all SQL scripts above in Supabase SQL Editor
2. ✅ Configure Google OAuth provider
3. ✅ Update your `.env.local` with Supabase credentials
4. ✅ Test signup flow: `/signup`
5. ✅ Test login flow: `/login`
6. ✅ Test email OTP verification
7. ✅ Test phone number collection
8. ✅ Test dashboard access

---

## Database Diagram

```
auth.users (Supabase managed)
    ↓
public.users (Profile info)
    ↓
    ├── public.transactions (User transactions)
    └── public.rewards (User rewards & referrals)
```

---

## Support

If you encounter any issues:
1. Check Supabase logs: Dashboard → Logs
2. Check browser console for errors
3. Verify all environment variables are set correctly
4. Ensure all SQL scripts ran without errors
