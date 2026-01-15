"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSubCategory {
  title: string;
  links: FooterLink[];
}

interface FooterCategory {
  id: string;
  title: string;
  subCategories?: FooterSubCategory[];
  content?: React.ReactNode;
}

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>("investor-relations");

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  const categories: FooterCategory[] = [
    {
      id: "investor-relations",
      title: "Investor Relations",
      subCategories: [
        {
          title: "Home",
          links: [
            { label: "Overview", href: "https://ir.paytm.com" },
            { label: "Our Business", href: "https://ir.paytm.com/our-business" },
          ],
        },
        {
          title: "Financials",
          links: [
            { label: "Financial Results", href: "https://ir.paytm.com/financial-results" },
            { label: "Annual Report & Other documents", href: "https://ir.paytm.com/annual-reports" },
          ],
        },
        {
          title: "Filings & Press Releases",
          links: [
            { label: "All Stock Exchange Filings", href: "https://ir.paytm.com/stock-exchange-filings" },
            { label: "Press Releases", href: "https://ir.paytm.com/press-releases" },
          ],
        },
        {
          title: "News & Events",
          links: [
            { label: "Media Articles", href: "https://ir.paytm.com/media-articles" },
            { label: "Awards", href: "https://ir.paytm.com/awards" },
            { label: "Videos", href: "https://ir.paytm.com/videos" },
            { label: "Blog", href: "https://ir.paytm.com/blog" },
            { label: "Press Kit", href: "https://ir.paytm.com/press-kit" },
          ],
        },
        {
          title: "Corporate Governance",
          links: [
            { label: "Board of Directors & Committees", href: "https://ir.paytm.com/directors-and-committees" },
            { label: "General Meetings", href: "https://ir.paytm.com/agm" },
            { label: "CSR", href: "https://ir.paytm.com/csr" },
            { label: "ESG Profile", href: "https://paytm.com/company/sustainability/esg" },
            { label: "Policies & Other Documents", href: "https://ir.paytm.com/policies-and-guidelines" },
          ],
        },
        {
          title: "Resources",
          links: [
            { label: "Investor Relations Contacts", href: "https://ir.paytm.com/investor-relations-contacts" },
            { label: "Frequently Asked Questions", href: "https://ir.paytm.com/faqs" },
          ],
        },
      ],
    },
    { id: "more-about-rupeedo", title: "More about Rupeedo" },
    { id: "company", title: "Company" },
    { id: "career", title: "Career" },
    { id: "recharge-pay-bills", title: "Recharge & pay bills" },
    { id: "pay-loan-emi", title: "Pay Loan EMI, Insurance Premiums & Education Fee" },
    { id: "book-travel", title: "Book Travel & Entertainment" },
    { id: "investments", title: "Investments & Miscellaneous" },
    { id: "loans-credit-cards", title: "Loans and Credit Cards" },
    { id: "financial-tools", title: "Financial Tools & Calculators" },
  ];

  const socialIcons = [
    { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/svgs/facebook-13.svg", alt: "Facebook" },
    { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/svgs/twitter-14.svg", alt: "Twitter" },
    { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/svgs/youtube-15.svg", alt: "Youtube" },
    { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/svgs/linkedin-16.svg", alt: "LinkedIn" },
    { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/svgs/instagram-17.svg", alt: "Instagram" },
  ];

  const paymentLogos = [
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/svgs/visa-10.svg", alt: "Visa", width: 45, height: 14 },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/svgs/mastercard-12.svg", alt: "Mastercard", width: 34, height: 21 },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/svgs/ruPay-11.svg", alt: "RuPay", width: 62, height: 18 },
  ];

  const plusIcon = "https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/plus.svg";

  return (
    <footer className="w-full bg-[#f5f7fa] pt-10">
      <div className="max-w-[1140px] mx-auto px-4 lg:px-0">
        <div className="flex flex-col">
          {categories.map((cat) => (
            <div key={cat.id} className="border-b border-[#ebebeb]">
              <button
                onClick={() => toggleSection(cat.id)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#4a4a4a] text-sm group-hover:text-black">
                    {openSection === cat.id ? (
                      <span className="text-lg font-light leading-none">×</span>
                    ) : (
                      <span className="text-lg font-light leading-none">+</span>
                    )}
                  </span>
                  <span className="text-[14px] font-bold text-black uppercase tracking-tight">
                    {cat.title}
                  </span>
                </div>
                <div className="flex-1 h-[1px] bg-transparent mx-4" />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openSection === cat.id ? "max-h-[2000px] mb-8" : "max-h-0"
                }`}
              >
                {cat.subCategories && (
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-2 pb-6">
                    {cat.subCategories.map((sub, idx) => (
                      <div key={idx} className="flex flex-col gap-2">
                        <h4 className="text-[14px] font-bold text-black mb-2">{sub.title}</h4>
                        <div className="flex flex-col gap-1">
                          {sub.links.map((link, lIdx) => (
                            <a
                              key={lIdx}
                              href={link.href}
                              className="text-[12px] text-[#4a4a4a] hover:text-[#00baf2] leading-[1.6]"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {cat.id === "career" && <div className="py-4 border-t border-[#ebebeb] h-1" />}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-12 border-t border-[#ebebeb] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[12px] text-[#4a4a4a]">
            © 2025 Paytm
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[14px] font-medium text-black">Follow Us</span>
            <div className="flex items-center gap-3">
              {socialIcons.map((social, idx) => (
                <a key={idx} href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  <Image src={social.icon} alt={social.alt} width={24} height={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Partner Logos */}
        <div className="pb-12 flex justify-center md:justify-end">
          <div className="flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            {paymentLogos.map((logo, idx) => (
              <Image
                key={idx}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain h-auto"
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Accent Blue Bar at very bottom */}
      <div className="h-[43px] w-full bg-[#00baf2]" />
    </footer>
  );
};

export default Footer;