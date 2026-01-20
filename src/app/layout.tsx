import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { AuthProvider } from "@/components/providers/auth-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rupeedo - Mobile Recharge, DTH & Bill Payments | No App | 1% Cashback",
  description: "Recharge mobile, DTH, pay bills with 1% cashback. No app download, no bank linking. Pay via Google Pay, PhonePe, Paytm. 120K+ users trust Rupeedo!",
  keywords: "mobile recharge without app, UPI recharge, no bank linking recharge, web recharge platform, DTH recharge online, bill payment with cashback, FASTag recharge, metro recharge online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          {children}
          <VisualEditsMessenger />
        </AuthProvider>
      </body>
    </html>
  );
}
