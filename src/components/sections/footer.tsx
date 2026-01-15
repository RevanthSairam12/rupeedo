"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FooterLink {
  title: string;
  href?: string;
  subLinks?: { name: string; href: string }[];
}

interface FooterSection {
  id: string;
  title: string;
  links?: FooterLink[];
  columns?: {
    header: string;
    subLinks: { name: string; href: string }[];
  }[];
}

const footerData: FooterSection[] = [
  {
    id: "about-rupeedo",
    title: "About Rupeedo",
    columns: [
      {
        header: "About",
        subLinks: [
          { name: "About Us", href: "#" },
          { name: "How It Works", href: "#" },
          { name: "Why Rupeedo", href: "#" },
        ],
      },
      {
        header: "Popular Services",
        subLinks: [
          { name: "Mobile Recharge", href: "/rechargepages" },
          { name: "DTH Recharge", href: "#" },
          { name: "Electricity Bill", href: "#" },
          { name: "FASTag Recharge", href: "#" },
          { name: "Metro Recharge", href: "#" },
          { name: "Loan EMI Payment", href: "#" },
          { name: "Bus Booking (Coming Soon)", href: "#" },
        ],
      },
      {
        header: "Popular Searches",
        subLinks: [
          { name: "Mobile recharge without app", href: "#" },
          { name: "UPI recharge online", href: "#" },
          { name: "No bank linking recharge", href: "#" },
          { name: "DTH recharge with cashback", href: "#" },
          { name: "Best web recharge platform", href: "#" },
        ],
      },
      {
        header: "Supported Operators",
        subLinks: [
          { name: "Airtel", href: "/airtel-pricing" },
          { name: "Jio", href: "#" },
          { name: "Vi (Vodafone Idea)", href: "/vi-pricing" },
          { name: "BSNL", href: "#" },
          { name: "Tata Sky", href: "#" },
          { name: "Dish TV", href: "#" },
        ],
      },
      {
        header: "Support",
        subLinks: [
          { name: "24x7 Customer Support", href: "#" },
          { name: "Contact Us", href: "mailto:support@rupeedo.com" },
          { name: "FAQs", href: "#" },
          { name: "Refund Policy", href: "#" },
        ],
      },
      {
        header: "Legal",
        subLinks: [
          { name: "Terms & Conditions", href: "#" },
          { name: "Privacy Policy", href: "#" },
          { name: "Security", href: "#" },
        ],
      },
    ],
  },
  {
    id: "faq",
    title: "Frequently Asked Questions",
    links: [],
  },
  {
    id: "popular-services",
    title: "Popular Services",
    links: [],
  },
  {
    id: "upi-apps",
    title: "Supported UPI Apps",
    links: [],
  },
];

const socialIcons = [
  {
    name: "Facebook",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/svgs/facebook-14.svg",
    href: "https://www.facebook.com/Paytm/",
  },
  {
    name: "Twitter",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/svgs/twitter-15.svg",
    href: "https://twitter.com/Paytm",
  },
  {
    name: "Youtube",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/svgs/youtube-16.svg",
    href: "https://www.youtube.com/user/paytm",
  },
  {
    name: "Linkedin",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/svgs/linkedin-17.svg",
    href: "https://www.linkedin.com/company/paytm/",
  },
  {
    name: "Instagram",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/svgs/instagram-18.svg",
    href: "https://www.instagram.com/paytm/",
  },
];

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>("about-rupeedo");

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <footer className="w-full bg-[#f5f7fa] border-t border-[#ebebed]">
      <div className="max-w-[1240px] mx-auto px-4 pt-10 pb-4">
        {/* Accordion Sections */}
        <div className="space-y-1">
          {footerData.map((section) => (
            <div key={section.id} className="border-b border-[#ebebed] last:border-0">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full py-5 flex items-center justify-between text-left group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-[20px] font-medium text-[#000000]">{openSection === section.id ? "×" : "+"}</span>
                  <span className="text-[14px] font-semibold text-[#506d85] uppercase tracking-wider">
                    {section.title}
                  </span>
                </div>
                {/* Visual horizontal guide line (if needed to match screenshot exactly) */}
                <div className="flex-grow mx-4 h-[1px] bg-transparent"></div>
              </button>

              {openSection === section.id && section.columns && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pb-8 animate-accordion-down">
                  {section.columns.map((col, idx) => (
                    <div key={idx} className="space-y-4">
                      <h4 className="text-[14px] font-semibold text-[#000000] mb-2">{col.header}</h4>
                      <div className="flex flex-col space-y-2">
                        {col.subLinks.map((link, lidx) => (
                          <a
                            key={lidx}
                            href={link.href}
                            className="text-[13px] text-[#506d85] hover:text-[#00baf2] transition-colors"
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* About Rupeedo Description */}
        <div className="mt-8 mb-8 p-6 bg-white rounded-[14px] border border-[#ebebed]">
          <h4 className="text-[16px] font-bold text-[#000000] mb-3">About Rupeedo</h4>
          <p className="text-[13px] leading-[1.6] text-[#506d85]">
            Rupeedo is India's fastest-growing web-based recharge and bill payment platform offering 1% assured cashback. No app download required, no bank account linking needed – just pay directly using any UPI app. Join 120,000+ users managing mobile recharges, DTH recharges, electricity bills, FASTag, metro recharge and loan EMI payments with guaranteed rewards.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-[#ebebed] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[15px] text-[#506d85] font-normal">
            © 2026 Rupeedo. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-[15px] font-semibold text-[#506d85]">Follow Us</span>
            <div className="flex items-center space-x-4">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <img src={social.icon} alt={social.name} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Bottom Accents */}
      <div className="w-full h-[6px] bg-[#00baf2]"></div>
      <div className="w-full h-[60px] bg-[#002970]"></div>
    </footer>
  );
}
/* 
  Styling breakdown based on computed styles:
  - Font: Inter (from globals.css)
  - Color Muted Text: #506d85
  - Color Primary Text: #000000
  - Accordion Toggle Color: #00baf2 on hover
  - Background: #ffffff
  - Border: #ebebed
*/