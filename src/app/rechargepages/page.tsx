"use client";

import React from "react";
import Header from "@/components/sections/header";
import ServiceTabs from "./service-tabs";
import RechargeForm from "./recharge-form";
import OperatorSelector from "./operator-selector";
import SeoContent from "./seo-content";
import Footer from "./footer";

export default function RechargePages() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f7fa]">
      <Header />
      <div className="mt-[56px] sm:mt-[64px]">
        <ServiceTabs />
      
        <main className="flex-grow">
          {/* Hero Section */}
          <div className="bg-[#002970] py-12">
            <div className="container mx-auto px-4 max-w-[1200px]">
              <div className="flex justify-center lg:justify-start">
                <RechargeForm />
              </div>
            </div>
          </div>

          <OperatorSelector />
          
          <SeoContent />
        </main>

        <Footer />
      </div>
    </div>
  );
}
