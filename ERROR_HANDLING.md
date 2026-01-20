# 🛡️ Error Handling Documentation

## Overview

This document details all the error handling implementations across the authentication system, including specific error messages, rate limiting, validation, and user feedback mechanisms.

---

## 📋 Error Scenarios & Messages

### 1. **Login Page** (`/login`)

| Scenario | Error Message | User Action | Technical Implementation |
|----------|---------------|-------------|-------------------------|
| **Email already exists** | "This email is already registered. Please login instead." | Show link to login | Database query check |
| **Invalid email format** | "Please enter a valid email address" | Allow re-entry | Regex validation |
| **Google OAuth cancelled** | "Google sign-in was cancelled. Please try again." | Show retry button | OAuth error detection |
| **Network error** | "Network error. Please check your connection and try again." | Show retry button | Network error detection |
| **Rate limit exceeded** | "Too many attempts. Please wait a few minutes and try again." | Show cooldown timer | Supabase rate limit |
| **User not found** | "This email is not registered. Please sign up first." | Show signup link | Auth error handling |

#### Implementation Details

**Email Validation:**
\`\`\`typescript
const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
if (!emailRegex.test(email)) {
  setError('Please enter a valid email address')
  return
}
\`\`\`

**OAuth Error Detection:**
\`\`\`typescript
if (error.message?.includes('cancelled') || error.message?.includes('closed')) {
  setError('Google sign-in was cancelled. Please try again.')
} else if (error.message?.includes('network')) {
  setError('Network error. Please check your connection and try again.')
}
\`\`\`

---

### 2. **Signup Page** (`/signup`)

| Scenario | Error Message | User Action | Technical Implementation |
|----------|---------------|-------------|-------------------------|
| **Email already exists** | "This email is already registered. Please login instead." | Redirect to login | Pre-signup DB check |
| **Invalid email format** | "Please enter a valid email address" | Highlight field | Regex validation |
| **Name too short** | "Please enter your full name (at least 2 characters)" | Allow re-entry | Length validation |
| **Google OAuth cancelled** | "Google sign-up was cancelled. Please try again." | Show retry button | OAuth error detection |
| **Rate limit exceeded** | "Too many attempts. Please wait a few minutes and try again." | Show cooldown timer | Supabase rate limit |

#### Implementation Details

**Duplicate Email Check:**
\`\`\`typescript
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
\`\`\`

**Name Validation:**
\`\`\`typescript
if (!fullName || fullName.trim().length < 2) {
  setError('Please enter your full name (at least 2 characters)')
  return
}
\`\`\`

---

### 3. **Email Verification** (`/verify-email`)

| Scenario | Error Message | User Action | Technical Implementation |
|----------|---------------|-------------|-------------------------|
| **OTP expired (>10 min)** | "OTP expired. Please request a new one." | Show "Resend OTP" button | Timestamp comparison |
| **Invalid OTP** | "Invalid verification code. X attempts remaining." | Show attempt counter | Attempt tracking |
| **3 failed attempts** | "Too many failed attempts. Try again in 15 minutes." | Lock form, show timer | LocalStorage + lockout |
| **Resend too soon (<60s)** | Button disabled with countdown | Wait for countdown | Timer state |
| **Rate limit on resend** | "Too many requests. Please wait a few minutes before requesting a new code." | Show wait message | Supabase rate limit |

#### Implementation Details

**Constants:**
\`\`\`typescript
const MAX_OTP_ATTEMPTS = 3
const LOCKOUT_DURATION = 15 * 60 * 1000 // 15 minutes
const OTP_EXPIRY_TIME = 10 * 60 * 1000 // 10 minutes
\`\`\`

**OTP Expiry Check:**
\`\`\`typescript
const otpAge = Date.now() - otpSentTime
if (otpAge > OTP_EXPIRY_TIME) {
  setError('OTP expired. Please request a new one.')
  setOtp('')
  return
}
\`\`\`

**Attempt Tracking:**
\`\`\`typescript
const newAttempts = attempts + 1
setAttempts(newAttempts)
localStorage.setItem(\`otp_attempts_\${email}\`, newAttempts.toString())

if (newAttempts >= MAX_OTP_ATTEMPTS) {
  const lockoutTime = Date.now() + LOCKOUT_DURATION
  setIsLocked(true)
  setLockoutEnd(lockoutTime)
  localStorage.setItem(\`otp_lockout_\${email}\`, lockoutTime.toString())
  setError(\`Too many failed attempts. Try again in 15 minutes.\`)
}
\`\`\`

**Lockout Check:**
\`\`\`typescript
useEffect(() => {
  const storedLockout = localStorage.getItem(\`otp_lockout_\${email}\`)
  if (storedLockout) {
    const lockoutTime = parseInt(storedLockout)
    if (Date.now() < lockoutTime) {
      setIsLocked(true)
      setLockoutEnd(lockoutTime)
    } else {
      // Clear lockout
      localStorage.removeItem(\`otp_lockout_\${email}\`)
      localStorage.removeItem(\`otp_attempts_\${email}\`)
    }
  }
}, [email])
\`\`\`

**Visual Feedback:**
\`\`\`typescript
{attempts > 0 && attempts < MAX_OTP_ATTEMPTS && !isLocked && (
  <Alert className="border-yellow-500 bg-yellow-50">
    <AlertCircle className="h-4 w-4 text-yellow-600" />
    <AlertDescription className="text-yellow-800">
      {MAX_OTP_ATTEMPTS - attempts} attempt{MAX_OTP_ATTEMPTS - attempts > 1 ? 's' : ''} remaining before 15-minute lockout
    </AlertDescription>
  </Alert>
)}
\`\`\`

---

### 4. **Complete Profile** (`/complete-profile`)

| Scenario | Error Message | User Action | Technical Implementation |
|----------|---------------|-------------|-------------------------|
| **Phone already exists** | "This phone number is already registered. Try another." | Allow re-entry | Pre-submit DB check |
| **Phone not 10 digits** | "Phone number must be exactly 10 digits" | Highlight field in red | Length validation |
| **Invalid phone start** | "Phone number must start with 6, 7, 8, or 9" | Highlight field | Pattern validation |
| **Non-numeric phone** | "Phone number must contain only digits" | Highlight field | Regex validation |
| **Empty phone** | "Phone number is required" | Highlight field | Required check |

#### Implementation Details

**Phone Validation Function:**
\`\`\`typescript
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
  if (!/^\\d{10}$/.test(phone)) {
    return 'Phone number must contain only digits'
  }

  return null // Valid
}
\`\`\`

**Duplicate Phone Check:**
\`\`\`typescript
const formattedPhone = \`+91\${phoneNumber}\`

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
\`\`\`

**Visual Error Feedback:**
\`\`\`typescript
<Input
  className={\`h-12 rounded-l-none \${error && error.includes('phone') ? 'border-red-500' : ''}\`}
/>
\`\`\`

---

## 🔒 Security Features

### 1. **Rate Limiting**

| Feature | Limit | Duration | Storage |
|---------|-------|----------|---------|
| **OTP Attempts** | 3 | 15 minutes | LocalStorage |
| **Resend Cooldown** | 1 | 60 seconds | State |
| **Supabase API** | Built-in | Variable | Server |

### 2. **Data Validation**

| Field | Validation | Error Message |
|-------|-----------|---------------|
| **Email** | Regex pattern | "Please enter a valid email address" |
| **Phone** | 10 digits, starts with 6-9 | "Phone number must be exactly 10 digits" |
| **Name** | Min 2 characters | "Please enter your full name (at least 2 characters)" |
| **OTP** | 6 digits | "Please enter a valid 6-digit code" |

### 3. **Session Security**

- ✅ **Auto-refresh tokens**: Prevents session expiry
- ✅ **Server-side validation**: All auth checks on server
- ✅ **Secure cookies**: HTTPOnly, SameSite
- ✅ **Row Level Security**: Database-level protection

---

## 🎨 User Experience Patterns

### 1. **Error Display**

**Visual Hierarchy:**
\`\`\`typescript
// Destructive errors (red)
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertDescription>{error}</AlertDescription>
</Alert>

// Warning (yellow)
<Alert className="border-yellow-500 bg-yellow-50">
  <AlertCircle className="h-4 w-4 text-yellow-600" />
  <AlertDescription className="text-yellow-800">
    {warningMessage}
  </AlertDescription>
</Alert>

// Success (green)
<Alert className="border-green-500 bg-green-50">
  <CheckCircle className="h-4 w-4 text-green-600" />
  <AlertDescription className="text-green-800">
    {successMessage}
  </AlertDescription>
</Alert>
\`\`\`

### 2. **Loading States**

**Button Disabled with Spinner:**
\`\`\`typescript
<Button disabled={isLoading}>
  {isLoading ? (
    <>
      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
      Loading...
    </>
  ) : (
    'Submit'
  )}
</Button>
\`\`\`

### 3. **Countdown Timers**

**Resend Cooldown:**
\`\`\`typescript
{countdown > 0 ? (
  \`Resend in \${countdown}s\`
) : (
  'Resend Code'
)}
\`\`\`

**Lockout Timer:**
\`\`\`typescript
{isLocked && lockoutEnd && (
  <Alert variant="destructive">
    <Lock className="h-4 w-4" />
    <AlertDescription>
      Too many failed attempts. Locked for {Math.ceil((lockoutEnd - Date.now()) / 60000)} minutes.
    </AlertDescription>
  </Alert>
)}
\`\`\`

---

## 📊 Error Tracking

### LocalStorage Keys

| Key | Purpose | Value Type | Cleanup |
|-----|---------|-----------|---------|
| **otp_attempts_{email}** | Track OTP failures | Number (0-3) | On success or after lockout |
| **otp_lockout_{email}** | Store lockout end time | Timestamp | After 15 minutes |

### State Management

\`\`\`typescript
// Error states
const [error, setError] = useState('')
const [message, setMessage] = useState('')

// Loading states
const [isLoading, setIsLoading] = useState(false)
const [isResending, setIsResending] = useState(false)

// Security states
const [attempts, setAttempts] = useState(0)
const [isLocked, setIsLocked] = useState(false)
const [lockoutEnd, setLockoutEnd] = useState<number | null>(null)

// Timer states
const [countdown, setCountdown] = useState(0)
const [otpSentTime, setOtpSentTime] = useState<number>(Date.now())
\`\`\`

---

## 🧪 Testing Error Scenarios

### Manual Testing Checklist

#### OTP Verification
- [ ] Enter wrong OTP → See "1 attempt remaining"
- [ ] Enter wrong OTP 3 times → See 15-minute lockout
- [ ] Wait 10 minutes → See "OTP expired" error
- [ ] Click resend → See 60-second countdown
- [ ] Try resend during cooldown → Button disabled
- [ ] Wait 15 minutes after lockout → Form unlocked

#### Phone Validation
- [ ] Enter 9 digits → See "must be exactly 10 digits"
- [ ] Enter phone starting with 5 → See "must start with 6, 7, 8, or 9"
- [ ] Enter letters → Automatically filtered out
- [ ] Enter duplicate phone → See "already registered"

#### Email Validation
- [ ] Enter "test" → See "invalid email address"
- [ ] Enter "test@" → See "invalid email address"
- [ ] Enter valid email → No error

#### OAuth Flow
- [ ] Click Google, then close popup → See "cancelled" message
- [ ] Disconnect internet, click Google → See "network error"

---

## 🛠️ Error Recovery

### Automatic Recovery

| Scenario | Auto-Recovery | Manual Required |
|----------|---------------|-----------------|
| **Network error** | ✅ Retry button shown | Click retry |
| **OTP expired** | ✅ Resend button shown | Click resend |
| **Lockout expired** | ✅ Auto-unlock after 15 min | Page refresh |
| **Cooldown expired** | ✅ Auto-enable resend | Wait for timer |

### Manual Interventions

1. **Clear lockout manually:**
\`\`\`javascript
localStorage.removeItem('otp_lockout_your-email@example.com')
localStorage.removeItem('otp_attempts_your-email@example.com')
\`\`\`

2. **Reset session:**
\`\`\`javascript
await supabase.auth.signOut()
\`\`\`

---

## 📝 Best Practices

### For Developers

1. **Always validate client-side first**
   - Prevent unnecessary API calls
   - Provide immediate feedback

2. **Implement server-side validation**
   - Never trust client data
   - Use database constraints

3. **Provide specific error messages**
   - Help users understand what went wrong
   - Suggest corrective actions

4. **Track error attempts**
   - Prevent brute-force attacks
   - Implement progressive delays

5. **Clear error states**
   - Remove errors on input change
   - Reset on successful operations

### For Users

1. **Check email format** before submitting
2. **Use valid phone numbers** (10 digits, starts with 6-9)
3. **Wait for cooldowns** to expire before retrying
4. **Request new OTP** if expired
5. **Contact support** if repeatedly locked out

---

## 🐛 Common Issues & Solutions

### Issue: "OTP never arrives"
**Solutions:**
- Check spam folder
- Verify email address is correct
- Wait 60 seconds and resend
- Check Supabase email logs

### Issue: "Locked out for 15 minutes"
**Solutions:**
- Wait for timer to expire
- Clear browser cache/localStorage
- Use different email temporarily
- Contact support if urgent

### Issue: "Phone already registered"
**Solutions:**
- Use different phone number
- Login instead of signup
- Contact support to unlink old account

### Issue: "Google sign-in cancelled"
**Solutions:**
- Try again
- Check popup blockers
- Use email signup instead
- Clear browser cookies

---

## 📞 Support

If users encounter persistent errors:
1. Check [troubleshooting guide](DATABASE_SETUP.md#troubleshooting)
2. Review [implementation guide](IMPLEMENTATION_GUIDE.md)
3. Contact support: support@yourapp.com
4. Open GitHub issue with error details

---

**Last Updated: January 19, 2026**
