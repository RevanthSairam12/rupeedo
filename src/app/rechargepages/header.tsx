"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      label: "Recharge & Bills",
      links: [
        { name: "Mobile Recharge", href: "/rechargepages" },
        { name: "Electricity bill", href: "https://paytm.com/electricity-bill-payment" },
        { name: "DTH recharge", href: "https://paytm.com/dth-recharge" },
        { name: "Municipal bill", href: "https://paytm.com/municipal-payments" },
        { name: "Water bill", href: "https://paytm.com/water-bill-payment" },
        { name: "Gas & Cylinder", href: "https://paytm.com/gas-bill-payment" },
        { name: "Loan EMI", href: "https://paytm.com/loan-emi-payment" },
        { name: "Insurance Premium", href: "https://paytm.com/insurance-premium-payment" },
        { name: "Challan", href: "https://paytm.com/challan-bill-payment" },
      ],
    },
    {
      label: "Ticket Booking",
      links: [
        { name: "Flight Tickets", href: "https://tickets.paytm.com/flights" },
        { name: "Train Tickets", href: "https://tickets.paytm.com/trains" },
        { name: "Bus Tickets", href: "https://tickets.paytm.com/bus" },
      ],
    },
    {
      label: "Payments & Services",
      links: [
        { name: "Bill Payments & Recharges", href: "/rechargepages" },
        { name: "Send Money to Anyone", href: "https://paytm.com/money-transfer" },
        { name: "Online Payments", href: "https://paytm.com/online-payments" },
        { name: "In-store Payments", href: "https://paytm.com/instore-payments" },
      ],
    },
    {
      label: "Rupeedo for Business",
      links: [
        { name: "Payment Gateway", href: "https://business.paytm.com/payment-gateway" },
        { name: "Payment Links", href: "https://business.paytm.com/payment-link" },
        { name: "UPI Payments", href: "https://business.paytm.com/upi" },
        { name: "Soundbox™", href: "https://business.paytm.com/soundbox" },
      ],
    },
    {
      label: "Company",
      links: [
        { name: "About", href: "https://paytm.com/about-us" },
        { name: "Investor Relations", href: "https://ir.paytm.com/" },
        { name: "Blog", href: "https://paytm.com/blog/" },
        { name: "Careers", href: "https://paytm.com/careers/" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#ebebeb]">
      <div className="container mx-auto px-4 h-[80px] flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/" className="block">
              <img
                src="/Rupeedoimgs/banners/main-logo.png"
                alt="Rupeedo Logo"
                className="h-[44px] w-auto"
              />
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 py-4 text-[15px] font-semibold text-[#000000] hover:text-[#00baf2] transition-colors focus:outline-none">
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5 mt-0.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[240px] bg-white border border-[#ebebeb] shadow-lg rounded-b-lg py-2 z-[60] animate-in fade-in slide-in-from-top-1">
                    <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-[#ebebeb] rotate-45"></div>
                    <ul className="relative bg-white pt-1">
                      {item.links.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            className="block px-6 py-2.5 text-[14px] font-medium text-[#4a4a4a] hover:bg-[#f5f7fa] hover:text-[#00baf2] transition-colors"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Utility Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 cursor-pointer group pr-4 border-r border-[#ebebeb]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/svgs/downloadApp-2.svg"
              alt="Download App"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-[14px] font-semibold text-[#000000] group-hover:text-[#00baf2] transition-colors">
              Download App
            </span>
          </div>

          <button className="flex items-center gap-2.5 px-3 py-1.5 bg-[#002970] rounded-full hover:bg-opacity-90 transition-all">
            <div className="w-8 h-8 rounded-full bg-[#00baf2] flex items-center justify-center overflow-hidden">
               <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/svgs/logoutImg-3.svg"
                alt="user"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[14px] font-bold text-white pr-2">Sign In</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;