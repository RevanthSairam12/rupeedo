# 🚀 Paytm-UI - Complete Recharge Platform with Authentication

A modern, secure, and feature-rich recharge platform built with **Next.js 15**, **Supabase**, and **TypeScript**. Features include Gmail OAuth, email OTP verification, mandatory phone collection, user dashboard, transaction tracking, and rewards system.

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Latest-green)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC)](https://tailwindcss.com/)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Authentication Flow](#-authentication-flow)
- [Error Handling](#-error-handling)
- [Pages Overview](#-pages-overview)
- [Database Schema](#-database-schema)
- [Project Structure](#-project-structure)
- [Security Features](#-security-features)
- [Deployment](#-deployment)

---

## ✨ Features

### 🔐 **Advanced Authentication System**
- ✅ **Dual Authentication**: Google OAuth + Email OTP
- ✅ **Email Verification**: 6-digit OTP with 10-minute expiry
- ✅ **Rate Limiting**: 3 OTP attempts with 15-minute lockout
- ✅ **Mandatory Phone**: +91 Indian phone number validation
- ✅ **Session Management**: Auto-refresh tokens with persistent sessions
- ✅ **Protected Routes**: Middleware-based route protection

### 👤 **User Management**
- ✅ Profile editing with avatar support
- ✅ Email & phone verification status
- ✅ Transaction history tracking
- ✅ Rewards and cashback system

### 💰 **Transaction System**
- ✅ Complete transaction history
- ✅ Advanced search and filters
- ✅ Real-time status updates
- ✅ Statistics dashboard

### 🎁 **Rewards System**
- ✅ Points-based rewards (Bronze → Platinum tiers)
- ✅ Cashback tracking
- ✅ Referral program with unique codes
- ✅ Active offers and promotions

### 🎨 **Modern UI/UX**
- ✅ Fully responsive design
- ✅ Beautiful gradient themes
- ✅ shadcn/ui components
- ✅ Loading states and animations
- ✅ Comprehensive error handling

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI Components** | shadcn/ui |
| **Icons** | Lucide React |
| **Backend** | Supabase (PostgreSQL) |
| **Authentication** | Supabase Auth (OAuth + OTP) |
| **Deployment** | Vercel |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20.3+ (or compatible version)
- npm 9.6+
- Supabase account
- Google OAuth credentials (optional)

### 1. Clone & Install
\`\`\`bash
git clone https://github.com/yourusername/paytm-ui.git
cd paytm-ui
npm install
\`\`\`

### 2. Configure Environment
Create \`.env.local\`:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
\`\`\`

**Get credentials:** Supabase Dashboard → Settings → API

### 3. Set Up Database
Run SQL scripts from \`DATABASE_SETUP.md\` in Supabase SQL Editor:
- Section 1: Enable UUID extension
- Section 2: Create users table
- Section 3: Create transactions table
- Section 4: Create rewards table
- Section 5: Create triggers
- Section 6: Create auto-profile function

### 4. Configure Google OAuth (Optional)
1. Supabase Dashboard → Authentication → Providers → Enable Google
2. Google Cloud Console → Create OAuth credentials
3. Add redirect URI: \`https://your-project.supabase.co/auth/v1/callback\`
4. Add Client ID & Secret to Supabase

### 5. Run Development Server
\`\`\`bash
npm run dev
\`\`\`

Visit **http://localhost:3000**

---

## 🔄 Authentication Flow

### 🆕 New User Signup
\`\`\`
/signup → Google/Email → /verify-email (OTP) → /complete-profile (Phone) → /dashboard
\`\`\`

### 🔑 Existing User Login
\`\`\`
/login → Google/Email → /verify-email (if email) → /dashboard
\`\`\`

### 🛡️ Route Protection
- **Not authenticated** → `/login`
- **Email not verified** → `/verify-email`
- **Phone not set** → `/complete-profile`
- **Complete profile** → Access granted

---

## ⚠️ Error Handling

### Comprehensive Error Messages

| Scenario | Error Message | Action |
|----------|---------------|--------|
| **Email exists** | "This email is already registered. Please login instead." | Show "Go to Login" button |
| **Phone exists** | "This phone number is already registered. Try another." | Allow re-entry |
| **Invalid phone** | "Phone number must be exactly 10 digits" | Highlight field in red |
| **OTP expired** | "OTP expired. Please request a new one." | Show "Resend OTP" button |
| **3 wrong OTPs** | "Too many failed attempts. Try again in 15 minutes." | Lock form for 15 min |
| **OAuth cancelled** | "Google sign-in was cancelled. Please try again." | Allow retry |
| **Rate limit** | "Too many attempts. Please wait a few minutes." | Show cooldown |

### 🔒 Security Features
- ✅ **3 OTP attempts max** → 15-minute lockout
- ✅ **10-minute OTP expiry**
- ✅ **60-second resend cooldown**
- ✅ **LocalStorage attempt tracking**
- ✅ **Visual remaining attempts counter**

---

## 📄 Pages Overview

### Public Pages

| Page | Route | Description | Theme |
|------|-------|-------------|-------|
| **Login** | `/login` | Google OAuth + Email OTP | Blue gradient |
| **Signup** | `/signup` | Registration with name | Purple gradient |
| **Verify Email** | `/verify-email` | 6-digit OTP entry | Green gradient |
| **Complete Profile** | `/complete-profile` | Phone number (mandatory) | Orange gradient |

### Protected Pages

| Page | Route | Description | Features |
|------|-------|-------------|----------|
| **Dashboard** | `/dashboard` | Main user hub | Balance, points, quick actions |
| **Profile** | `/profile` | User details | Edit name, view status |
| **Transactions** | `/transactions` | Payment history | Search, filter, stats |
| **Rewards** | `/rewards` | Points & cashback | Tiers, referrals, offers |

---

## 🗄️ Database Schema

### Tables

#### **users**
\`\`\`sql
id: UUID (primary key)
email: TEXT (unique, not null)
phone_number: TEXT (unique, +91xxxxxxxxxx format)
full_name: TEXT
avatar_url: TEXT
email_verified: BOOLEAN
phone_verified: BOOLEAN
created_at, updated_at: TIMESTAMP
\`\`\`

#### **transactions**
\`\`\`sql
id: UUID (primary key)
user_id: UUID (foreign key)
type: TEXT (recharge | bill_payment | booking)
amount: DECIMAL(10,2)
status: TEXT (pending | success | failed)
provider: TEXT
reference_number: TEXT (unique)
metadata: JSONB
created_at: TIMESTAMP
\`\`\`

#### **rewards**
\`\`\`sql
id: UUID (primary key)
user_id: UUID (unique foreign key)
points: INTEGER (default 0)
cashback: DECIMAL(10,2) (default 0)
referral_code: TEXT (unique)
referral_count: INTEGER (default 0)
created_at, updated_at: TIMESTAMP
\`\`\`

### Security
- ✅ **Row Level Security (RLS)** enabled on all tables
- ✅ Users can only access their own data
- ✅ Automatic triggers for timestamps
- ✅ Auto-create profile on signup

---

## 📂 Project Structure

\`\`\`
paytm-ui/
├── src/
│   ├── app/
│   │   ├── login/page.tsx              # Login page
│   │   ├── signup/page.tsx             # Signup page
│   │   ├── verify-email/page.tsx       # OTP verification
│   │   ├── complete-profile/page.tsx   # Phone collection
│   │   ├── dashboard/page.tsx          # User dashboard
│   │   ├── profile/page.tsx            # Profile management
│   │   ├── transactions/page.tsx       # Transaction history
│   │   ├── rewards/page.tsx            # Rewards page
│   │   ├── auth/callback/route.ts      # OAuth callback
│   │   └── layout.tsx                  # Root layout
│   ├── components/
│   │   ├── providers/
│   │   │   └── auth-provider.tsx       # Auth context
│   │   └── ui/                         # shadcn components
│   └── lib/
│       ├── supabase.ts                 # Supabase client
│       └── utils.ts                    # Utilities
├── middleware.ts                       # Route protection
├── .env.local                          # Environment variables
├── DATABASE_SETUP.md                   # SQL scripts & setup
├── IMPLEMENTATION_GUIDE.md             # Detailed guide
└── README.md                           # This file
\`\`\`

---

## 🔒 Security Features

### Authentication
- ✅ Row Level Security on all tables
- ✅ Session-based auth with auto-refresh
- ✅ Protected routes via middleware
- ✅ Email & phone verification required
- ✅ OAuth with PKCE flow
- ✅ OTP expiry and rate limiting

### Data Protection
- ✅ Server-side session validation
- ✅ SQL injection prevention (Supabase)
- ✅ XSS protection (Next.js)
- ✅ CSRF protection (SameSite cookies)

---

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
\`\`\`bash
git push origin main
\`\`\`

2. **Deploy to Vercel**
   - Import repository at https://vercel.com
   - Add environment variables
   - Deploy

3. **Update OAuth Redirects**
   - Supabase: Add \`https://your-app.vercel.app/auth/callback\`
   - Google Console: Add same URL

### Environment Variables
\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
\`\`\`

---

## 🧪 Testing Checklist

### Authentication
- [ ] Google OAuth signup
- [ ] Email signup with OTP
- [ ] OTP expiry (10 min)
- [ ] Wrong OTP (3 attempts → lockout)
- [ ] Resend OTP (60s cooldown)
- [ ] Duplicate email detection
- [ ] Phone number validation
- [ ] Duplicate phone detection
- [ ] Google OAuth login
- [ ] Email login
- [ ] Logout

### Pages
- [ ] Dashboard loads correctly
- [ ] Profile editing works
- [ ] Transactions display
- [ ] Rewards tracking
- [ ] Referral code copy

---

## 📊 Stats

- **Total Files**: 50+
- **Lines of Code**: 5000+
- **Components**: 40+ (shadcn/ui)
- **Pages**: 8 (4 public + 4 protected)
- **Database Tables**: 3
- **Authentication Methods**: 2 (OAuth + OTP)
- **Error Scenarios**: 8+ handled

---

## 📝 Documentation

- **[DATABASE_SETUP.md](DATABASE_SETUP.md)** - Complete SQL scripts and database setup
- **[IMPLEMENTATION_GUIDE.md](IMPLEMENTATION_GUIDE.md)** - Detailed implementation guide
- **[.env.local.example](.env.local.example)** - Environment variables template

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: \`git checkout -b feature/name\`
3. Commit changes: \`git commit -m 'Add feature'\`
4. Push to branch: \`git push origin feature/name\`
5. Create Pull Request

---

## 🎯 Roadmap

### ✅ Phase 1 (Completed)
- Authentication system with OAuth + OTP
- User dashboard and profile
- Transaction tracking
- Rewards system with tiers

### 🚧 Phase 2 (In Progress)
- Actual recharge integration
- Payment gateway (Razorpay/Stripe)
- SMS notifications
- Email notifications

### 📅 Phase 3 (Planned)
- Admin dashboard
- Analytics and reports
- Multi-language support
- Mobile app (React Native)

---

## 📧 Support

- 📫 Email: support@yourapp.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/paytm-ui/issues)
- 📖 Docs: See \`DATABASE_SETUP.md\` and \`IMPLEMENTATION_GUIDE.md\`

---

## 📄 License

MIT License - See LICENSE file for details

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Supabase](https://supabase.com/) - Backend infrastructure
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons

---

**Built with ❤️ using Next.js 15 and Supabase**

*Last Updated: January 19, 2026*

---

### Quick Links

- 📖 [Full Setup Guide](IMPLEMENTATION_GUIDE.md)
- 🗄️ [Database Setup](DATABASE_SETUP.md)
- 🚀 [Live Demo](#) (Coming soon)
- 📺 [Video Tutorial](#) (Coming soon)
