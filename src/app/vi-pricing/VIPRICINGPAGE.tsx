"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, MapPin, ChevronDown, ChevronUp, Facebook, Instagram, Twitter, Youtube, Linkedin, Menu, X } from 'lucide-react';

const VIPricngPage = () => {
  const [activeTab, setActiveTab] = useState('popular recharge packs');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tabs = [
    'popular recharge packs', 'unlimited 5G', 'nonstop hero', 'super hero', 
    'hero unlimited', 'unlimited', 'ott', 'data', 'others', 'top up'
  ];

  const planCards = [
    {
      id: 1,
      badge: '19 OTTs on TV & Mobile',
      price: '175',
      data: '10 GB',
      validity: '28 days',
      benefits: [
        '19 OTTs on Vi Movies & TV App',
        'Watch on TV & Mobile',
        'No Service Validity+... see more'
      ],
      logos: ['zee5-38.svg', 'Sonyliv-39.svg']
    },
    {
      id: 2,
      badge: 'Great Deal',
      price: '101',
      data: '5 GB',
      validity: '30 days',
      benefits: [
        '1 month of JioHotstar mobile',
        'no service validity+... see more'
      ],
      logos: ['Jiohotstar-40.svg']
    },
    {
      id: 3,
      price: '151',
      data: '4 GB',
      validity: '90 days',
      benefits: [
        '3 months of JioHotstar mobile',
        'no service validity+... see more'
      ],
      logos: ['Jiohotstar-40.svg']
    },
    {
      id: 4,
      badge: 'Vi Hero',
      price: '349',
      data: '1.5 GB/day',
      validity: '28 days',
      benefits: [
        'Unlimited 5G Data',
        'unlimited calls',
        'weekend data rollover+... see more'
      ],
      logos: ['5g-icon-14.svg', 'free-night-data-43.svg']
    },
    {
      id: 5,
      badge: 'Most Popular',
      price: '365',
      data: '2 GB/day',
      validity: '28 days',
      benefits: [
        '12am-12pm Unlimited Data',
        'Weekend Data Rollover+... see more'
      ],
      logos: ['5g-icon-14.svg', 'free-night-data-43.svg']
    },
    {
      id: 6,
      badge: 'Includes ZEE5, SonyLIV & more',
      price: '154',
      data: '2 GB',
      validity: '1 month',
      benefits: [
        '19 OTTs on Vi Movies & TV App',
        'Watch on Mobile only',
        'No Service Validity+... see more'
      ],
      logos: ['zee5-38.svg', 'Sonyliv-39.svg']
    }
  ];

  const faqs = [
    {
      question: "What is Vi online mobile recharge?",
      answer: "Vi Online mobile recharge is a quick and convenient way to recharge your mobile phone online via the Vi App or website instead of visiting a store."
    },
    {
      question: "How to recharge Vi prepaid number online?",
      answer: "To get a prepaid recharge online, follow these easy steps: Visit our prepaid plans page to learn more about the various plans and avail exciting offers."
    },
    {
      question: "How to use a debit/credit card or Internet banking for online recharge?",
      answer: "Once you select a suitable prepaid recharge, click on 'Buy' and on the payment gateway, select a payment method of your choice."
    },
    {
      question: "Are there any additional charges for digital payments with online mobile phone recharge?",
      answer: "There are no additional or hidden charges on digital payments with Vi online mobile phone recharge."
    },
    {
      question: "Can I pay for mobile online recharge with Phonepe?",
      answer: "Yes, you can conveniently select the 'UPI' option on the payments gateway while paying for your online mobile recharge."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1D1D]">
      {/* Navigation */}
      <nav className="border-b border-[#D1D1D1] sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 h-[80px] flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="/" className="flex-shrink-0">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-myvi-in/assets/svgs/Vi-logo-3.svg" 
                alt="Vi Logo" 
                width={60} 
                height={60} 
                className="object-contain"
              />
            </a>
            <div className="hidden lg:flex items-center gap-6">
              <button className="flex items-center gap-1 text-[14px] font-medium hover:text-[#E61E2E]">Prepaid <ChevronDown size={14} /></button>
              <button className="flex items-center gap-1 text-[14px] font-medium hover:text-[#E61E2E]">Postpaid <ChevronDown size={14} /></button>
              <button className="flex items-center gap-1 text-[14px] font-medium hover:text-[#E61E2E]">New Connection <ChevronDown size={14} /></button>
              <button className="text-[14px] font-medium hover:text-[#E61E2E]">International Roaming</button>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-[14px] font-bold text-[#E61E2E]">
              <span className="bg-[#FFD200] px-2 py-0.5 rounded text-[10px] text-black">5G</span>
              <span>Explore</span>
              <ChevronDown size={14} />
            </div>
            <Search size={20} className="text-[#707070] cursor-pointer" />
            <button className="text-[14px] font-bold text-[#E61E2E] hidden md:block">Sign In</button>
            <Menu size={24} className="lg:hidden" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 max-w-[1200px]">
        <div className="text-[12px] text-[#707070] mb-8">
          Home &gt; Prepaid &gt; <span className="text-[#1D1D1D]">Online mobile recharge</span>
        </div>

        <h1 className="text-[32px] font-bold mb-8">online mobile recharge</h1>

        {/* Input Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-start md:items-center">
          <div className="relative flex-1 w-full flex items-center border border-[#D1D1D1] rounded-[8px] px-4 py-3 bg-white">
            <input 
              type="text" 
              placeholder="enter mobile number" 
              className="w-full text-[16px] outline-none"
            />
          </div>
          <div className="flex items-center gap-2 text-[#707070] text-[14px] cursor-pointer hover:text-[#1D1D1D]">
            <MapPin size={18} className="text-[#E61E2E]" />
            <span className="underline decoration-dotted underline-offset-4 font-medium">Maharashtra & Goa</span>
          </div>
        </div>

        {/* Categories Tabs */}
        <div className="border-b border-[#D1D1D1] mb-6 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-[14px] font-medium whitespace-nowrap transition-all border-b-2 ${
                  activeTab === tab 
                    ? 'text-[#1D1D1D] border-[#E61E2E] bg-[#F1F5F9]' 
                    : 'text-[#707070] border-transparent hover:text-[#1D1D1D]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex gap-4 mb-8">
          <div className="relative flex-1 flex items-center border border-[#D1D1D1] rounded-[8px] px-4 py-2">
            <Search size={18} className="text-[#707070] mr-2" />
            <input 
              type="text" 
              placeholder="search by price" 
              className="w-full text-[14px] outline-none"
            />
          </div>
          <button className="flex items-center gap-2 border border-[#D1D1D1] rounded-[8px] px-6 py-2 text-[14px] font-medium hover:bg-gray-50">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-myvi-in/assets/svgs/search-5.svg" 
              width={16} 
              height={16} 
              alt="filter"
            />
            filter
          </button>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {planCards.map((plan) => (
            <div key={plan.id} className="vi-card group hover:border-[#E61E2E] flex flex-col pt-10">
              {plan.badge && (
                <div className="absolute top-0 left-0 vi-badge">
                  {plan.badge}
                </div>
              )}
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-baseline mb-4">
                    <span className="text-[20px] font-bold mr-1">₹</span>
                    <span className="text-[28px] font-bold">{plan.price}</span>
                  </div>
                  <div className="flex gap-10">
                    <div>
                      <div className="text-[16px] font-bold">{plan.data}</div>
                      <div className="text-[12px] text-[#707070]">data</div>
                    </div>
                    <div>
                      <div className="text-[16px] font-bold">{plan.validity}</div>
                      <div className="text-[12px] text-[#707070]">validity</div>
                    </div>
                  </div>
                </div>
                <button className="vi-button-buy hover:bg-opacity-90 min-w-[100px]">buy</button>
              </div>

              <div className="mt-6 pt-6 border-t border-[#F0F0F0] flex gap-4">
                <div className="flex flex-wrap gap-2 max-w-[80px]">
                  {plan.logos.map((logo, idx) => (
                    <Image 
                      key={idx} 
                      src={`https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-myvi-in/assets/svgs/${logo}`} 
                      width={32} 
                      height={32} 
                      alt="benefit" 
                      className="rounded-md"
                    />
                  ))}
                </div>
                <ul className="text-[12px] text-[#1D1D1D] space-y-1 flex-1">
                  {plan.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D1D1D1] mt-1.5 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="bg-[#F9F8F2] rounded-[16px] p-8 md:p-12 mb-20">
          <h2 className="text-[24px] font-bold mb-8">FAQs for Vi online mobile recharge</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#D1D1D1] last:border-0">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-4 text-left font-medium text-[16px]"
                >
                  {faq.question}
                  {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === idx && (
                  <div className="pb-6 text-[#707070] text-[14px] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="px-8 py-2 border border-[#707070] rounded-full text-[14px] font-medium hover:bg-white transition-colors">
              see more
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between py-6 border-b border-[#D1D1D1] cursor-pointer">
            <h2 className="text-[20px] font-bold">Vi Prepaid Online Recharge</h2>
            <ChevronDown size={24} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#F9F8F2] pt-16 pb-8">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            <div className="lg:col-span-1">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-myvi-in/assets/svgs/Vi-logo-3.svg" 
                alt="Vi Logo" 
                width={50} 
                height={50} 
                className="mb-4"
              />
              <h3 className="text-[16px] font-bold mb-2">Vodafone Idea Limited</h3>
              <p className="text-[12px] text-[#707070] leading-relaxed mb-6">
                Vodafone Idea Limited, a partnership between the Aditya Birla Group & Vodafone Group, provides pan-India voice and data services using the latest communication technologies
              </p>
              <div className="flex gap-4">
                <Facebook className="text-[#1D1D1D] cursor-pointer" size={20} />
                <Instagram className="text-[#1D1D1D] cursor-pointer" size={20} />
                <Twitter className="text-[#1D1D1D] cursor-pointer" size={20} />
                <Youtube className="text-[#1D1D1D] cursor-pointer" size={20} />
                <Linkedin className="text-[#1D1D1D] cursor-pointer" size={20} />
              </div>
            </div>

            <div>
              <h4 className="text-[14px] font-bold mb-6">about Vi</h4>
              <ul className="space-y-3">
                {['About Us', 'Vodafone Idea Corp', 'Vi Foundation', 'Vodafone Group', 'Aditya Birla Group', 'Investor Relations', 'News & Media', 'Career'].map(link => (
                  <li key={link}><a href="#" className="vi-footer-link">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[14px] font-bold mb-6">more from Vi</h4>
              <ul className="space-y-3">
                {['Postpaid Connection', 'Prepaid Connection', 'Port Number to Vi / MNP', 'Free SIM Delivery', 'Track your SIM Delivery', 'Fancy Number', 'Individual Plans', 'Family Plans'].map(link => (
                  <li key={link}><a href="#" className="vi-footer-link">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[14px] font-bold mb-6">explore on Vi app</h4>
              <ul className="space-y-3">
                {['Vi Games', 'Vi Movies & TV', 'Vi Services', 'Vi Hero Unlimited', 'Vi WiFi Calling', 'International Roaming', 'Callertunes', 'Order Prepaid SIM'].map(link => (
                  <li key={link}><a href="#" className="vi-footer-link">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[14px] font-bold mb-6">regulatory & quick access</h4>
              <ul className="space-y-3">
                {['Telemarketing', 'Registration', 'Privacy Policy', 'Terms of Service', 'Notices', 'Prepaid TRAI mandate', 'Postpaid TRAI mandate', 'Warning & Fraudulent'].map(link => (
                  <li key={link}><a href="#" className="vi-footer-link">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#D1D1D1] pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-[#707070] gap-4">
            <div className="text-center md:text-left">
              This website uses own third-party cookies. Find out more about usage in our Privacy Policy page.
              <br />
              Copyright Reserved with Vodafone Idea Limited (formerly Idea Cellular Limited).
            </div>
            <div className="text-center md:text-right max-w-[500px]">
              Vodafone Idea Limited (Formerly Idea Cellular Limited), An Aditya Birla Group & Vodafone partnership, Suman Towers, Plot No.18, Sector 11, Gandhinagar – 382011, Gujarat. CIN L32100GJ1996PLC030976, T: +91-79 6671 4000, F: +91-79 2323 2251
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VIPricngPage;