"use client";

import React from "react";
import Header from "@/components/sections/header";
import UpiStatementBanner from "@/components/sections/upi-statement-banner";
import RechargeServices from "@/components/sections/recharge-services";
import OffersGrid from "@/components/sections/offers-grid";
import FlightSearch from "@/components/sections/flight-search";
import BankTransferPromo from "@/components/sections/bank-transfer-promo";
import CustomerSupportTrust from "@/components/sections/customer-support-trust";
import FinancialServicesGrid from "@/components/sections/financial-services-grid";
import PaytmMoneySection from "@/components/sections/paytm-money";
import PaytmBusiness from "@/components/sections/paytm-business";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-[80px]">
        {/* Top Promotional Banner */}
        <UpiStatementBanner />
        
        {/* Main Service Links (Mobile, DTH, etc.) */}
        <RechargeServices />
        
        {/* Promotional Offers & Features Grid */}
        <OffersGrid />
        
        {/* Flight & Travel Search Widget */}
        <FlightSearch />
        
        {/* Bank Transfer Consumer Promo */}
        <BankTransferPromo />
        
        {/* Customer Support Trust Ribbon */}
        <CustomerSupportTrust />
        
        {/* Financial Services (Credit Cards & Insurance) */}
        <FinancialServicesGrid />
        
        {/* Paytm Money Wealth Management Section */}
        <PaytmMoneySection />
        
        {/* Paytm Business Merchant Section */}
        <PaytmBusiness />
      </main>

      <Footer />
    </div>
  );
}
