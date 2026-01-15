"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ChevronDown, User, ChevronRight, LayoutGrid } from 'lucide-react';

/**
 * Airtel Prepaid Recharge Page Clone
 * Built with Next.js 15, TypeScript, and Tailwind CSS.
 * Theme: Light
 */

export const AirtelPricingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const navItems = [
    { label: 'Wi-Fi', href: '#' },
    { label: 'Postpaid', href: '#' },
    { label: 'Prepaid', href: '#' },
    { label: 'DTH', href: '#' },
    { label: 'Airtel Black', href: '#' },
    { label: 'Bank', href: '#' },
    { label: 'Airtel Finance', href: '#' },
  ];

  const faqs = [
    {
      question: "How to make prepaid recharge online?",
      answer: "There are 2 options to choose from. You can download the Airtel Thanks App or visit make the recharge on airtel.in."
    },
    {
      question: "Do you know the charges for digital payment? Are there any additional charges?",
      answer: "No, there are no hidden or extra charges. Your validity recharge is including Tax and Talk time is excluding Tax"
    },
    {
      question: "Is it possible to upgrade your existing prepaid plan?",
      answer: "Of course, you can. Airtel has a wide range of plans with various benefits, offers, and much more. Please download and login to the Airtel Thanks App for more features."
    },
    {
      question: "How can I see the available offers on prepaid plans?",
      answer: "Kindly login to the Airtel Thanks app and browse Prepaid Plans. Alternatively you may see all the latest available plans with all details once you proceed to select your plans on airtel.in."
    },
    {
      question: "Will I get the balance and data rollover, if I recharge my prepaid number before the validity expires?",
      answer: "The plan will only be activated once you have exhausted your current plan. To know the plan expiry kindly login into the Airtel Thanks app. However, the data rollover feature is only available on our postpaid plans."
    },
    {
      question: "How can I top up my mobile number?",
      answer: "Airtel provides a wide range of top-up plans. Kindly login to Airtel Thanks app to view them. Alternatively, you may see all the latest available plans with all details once you proceed to select your plans on airtel.in."
    },
    {
      question: "Can I recharge my number while the prepaid balance is not exhausted?",
      answer: "You can always recharge your number before your prepaid balance is exhausted. This ensures that your mobile phone experience isn’t affected. Your new prepaid balance will get activated only when the duration of the previous prepaid pack is completed."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f7f7fa] font-sans antialiased text-[#000000]">
      {/* Global Header */}
      <header className="w-full bg-white border-b border-[#d2d2d2] sticky top-0 z-50">
        {/* Top Utility Bar */}
        <div className="border-b border-[#f0f0f0]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 h-10 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <a href="#" className="text-[10px] font-bold text-[#e40000] border-b-2 border-[#e40000] h-10 flex items-center">INDIVIDUAL</a>
              <a href="#" className="text-[10px] font-bold text-[#767676] hover:text-[#000000] transition-colors">BUSINESS</a>
              <a href="#" className="text-[10px] font-bold text-[#767676] hover:text-[#000000] transition-colors">INVESTOR</a>
            </div>
            <div className="flex items-center text-[11px] text-[#333333] cursor-pointer group">
              <LayoutGrid size={14} className="mr-1 text-[#e40000]" />
              <span>Explore Airtel</span>
              <ChevronDown size={12} className="ml-1 transition-transform group-hover:rotate-180" />
            </div>
          </div>
        </div>

        {/* Main Nav Bar */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 h-[72px] flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="mr-12">
              <svg width="84" height="30" viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4 11.2c-5.8 0-10.4 4.7-10.4 10.4s4.7 10.4 10.4 10.4c2.8 0 5.3-1.1 7.2-2.9l4.5 4.5c-3 3.1-7.1 5-11.7 5C5.5 33.6 0 28.1 0 21.6S5.5 9.6 12.4 9.6c4.6 0 8.7 1.9 11.7 5l-4.5 4.5c-1.9-1.8-4.4-2.9-7.2-2.9z" fill="#E40000"/>
                <path d="M36.8 9.6h4.8v24h-4.8z" fill="#E40000"/>
                <path d="M51.2 16.8V10h4.8v6.8c0 3.8 2.3 6.4 5.6 6.4 3.3 0 5.6-2.6 5.6-6.4V10h4.8v6.8c0 6.6-4.5 10.8-10.4 10.8s-10.4-4.2-10.4-10.8z" fill="#E40000"/>
                <circle cx="92" cy="21.6" r="3" fill="#E40000"/>
              </svg>
            </a>

            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative group cursor-pointer">
                  <div className="flex items-center text-[12px] font-normal text-[#333333] hover:text-[#e40000] transition-colors">
                    {item.label}
                    <ChevronDown size={12} className="ml-1" />
                  </div>
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center">
            <div className="flex items-center cursor-pointer group px-3 py-2">
              <div className="w-8 h-8 rounded-full border border-[#d2d2d2] flex items-center justify-center mr-2 group-hover:bg-[#f5f5f5]">
                <User size={16} className="text-[#333333]" />
              </div>
              <span className="text-[12px] font-normal text-[#333333]">Account</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex flex-col md:flex-row min-h-[calc(100vh-112px)] overflow-hidden">
        
        {/* Left Section - Dark Promotional */}
        <section className="hidden md:flex md:w-[33%] bg-[#3c3c3c] relative flex-col justify-start pt-[80px] px-10 text-white overflow-hidden">
          {/* Decorative SVG Pattern Background */}
          <div className="absolute bottom-0 left-0 w-full h-full opacity-20 pointer-events-none transform translate-y-24">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-airtel-in/assets/images/left-section-new-1.svg" 
              alt="Decorative Pattern"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="relative z-10">
            <h1 className="text-[40px] font-bold leading-[1.2] mb-4">Recharge Online</h1>
            <p className="text-[20px] font-light leading-[1.4] opacity-90">Faster recharges - anywhere, any time</p>
          </div>
        </section>

        {/* Right Section - Content & Functional Section */}
        <section className="w-full md:w-[67%] bg-white min-h-full flex flex-col">
          <div className="px-6 md:px-[60px] pt-8 pb-12 flex-grow">
            
            {/* Breadcrumb */}
            <nav className="flex items-center text-[12px] text-[#767676] mb-6">
              <ChevronRight size={14} className="mr-1 rotate-180" />
              <a href="#" className="hover:text-[#1e4d92]">Recharge</a>
              <span className="mx-2 text-[#d2d2d2]">|</span>
              <span className="text-[#1e4d92] font-medium">Prepaid</span>
            </nav>

            {/* Title */}
            <div className="mb-8">
              <h2 className="text-[28px] font-bold text-[#000000] mb-1">Prepaid mobile recharge</h2>
              <p className="text-[12px] text-[#767676]">Recharge your number for validity, talktime or data</p>
            </div>

            {/* Input Section */}
            <div className="max-w-[400px]">
              <div className="relative mb-6">
                <label className="block text-[12px] text-[#767676] mb-2 font-normal">Mobile number</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Enter your 10-digit mobile number"
                    className="w-full h-12 px-4 border border-[#d2d2d2] rounded-[4px] text-[14px] text-[#000000] focus:outline-none focus:border-[#e40000] transition-colors placeholder:text-[#d2d2d2]"
                  />
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-20">
              <h3 className="text-[12px] font-bold text-[#767676] tracking-wider uppercase mb-6">FREQUENTLY ASKED QUESTIONS</h3>
              
              <div className="border-t border-[#d2d2d2]">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-[#d2d2d2]">
                    <button 
                      onClick={() => toggleFaq(index)}
                      className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
                    >
                      <span className={`text-[16px] font-semibold transition-colors ${openFaq === index ? 'text-[#e40000]' : 'text-[#000000] group-hover:text-[#e40000]'}`}>
                        {faq.question}
                      </span>
                      <ChevronDown 
                        size={20} 
                        className={`text-[#767676] transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    {openFaq === index && (
                      <div className="pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                        <p className="text-[14px] text-[#333333] leading-[1.6]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Basic Footer Mock (Standard Requirement) */}
      <footer className="w-full bg-[#3c3c3c] text-white py-12 px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div>
            <h4 className="font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-[#d2d2d2]">
              <li><a href="#" className="hover:text-white transition-colors">Prepaid</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Postpaid</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DTH</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Broadband</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4">Help & Support</h4>
            <ul className="space-y-2 text-xs text-[#d2d2d2]">
              <li><a href="#" className="hover:text-white transition-colors">Recharge</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pay Bill</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Check Balance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-xs text-[#d2d2d2]">
              <li><a href="#" className="hover:text-white transition-colors">About Airtel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto mt-12 pt-8 border-t border-[#4a4a4a] flex flex-col md:flex-row justify-between items-center text-[10px] text-[#767676]">
          <p>© 2024 Bharti Airtel Limited. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AirtelPricingPage;
