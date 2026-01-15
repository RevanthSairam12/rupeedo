import React, { useState } from 'react';
import Image from 'next/image';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
  isOpenDefault?: boolean;
}

const footerData: FooterSection[] = [
  {
    title: 'Investor Relations',
    isOpenDefault: true,
    links: [
      { label: 'Home', href: 'https://ir.paytm.com/' },
      { label: 'Financials', href: 'https://ir.paytm.com/financials' },
      { label: 'Filings & Press Releases', href: 'https://ir.paytm.com/filings' },
      { label: 'News & Events', href: 'https://ir.paytm.com/news' },
      { label: 'Corporate Governance', href: 'https://ir.paytm.com/governance' },
      { label: 'Resources', href: 'https://ir.paytm.com/resources' },
    ],
  },
  {
    title: 'More about Paytm',
    links: [
      { label: 'About Us', href: 'https://paytm.com/about-us' },
      { label: 'Sustainability', href: 'https://paytm.com/company/sustainability/esg' },
      { label: 'CSR', href: 'https://ir.paytm.com/csr' },
      { label: 'Blog', href: 'https://paytm.com/blog/' },
      { label: 'Latest News', href: 'https://paytm.com/latest-news-updates' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Terms & Conditions', href: 'https://paytm.com/company/terms-and-conditions' },
      { label: 'Privacy Policy', href: 'https://paytm.com/privacy-policy' },
      { label: 'Customer Care', href: 'https://paytm.com/care/customer-care' },
      { label: 'Grievance Policy', href: 'https://paytm.com/grievance-policy' },
    ],
  },
  {
    title: 'Recharge & pay bills',
    links: [
      { label: 'Mobile Recharge', href: '/rechargepages' },
      { label: 'Electricity Bill', href: 'https://paytm.com/electricity-bill-payment' },
      { label: 'DTH Recharge', href: 'https://paytm.com/dth-recharge' },
      { label: 'Gas Bill', href: 'https://paytm.com/gas-bill-payment' },
      { label: 'Water Bill', href: 'https://paytm.com/water-bill-payment' },
    ],
  },
  {
    title: 'Pay Loan EMI, Insurance Premiums & Education Fee',
    links: [
      { label: 'Loan EMI', href: 'https://paytm.com/loan-emi-payment' },
      { label: 'Insurance Premium', href: 'https://paytm.com/insurance-premium-payment' },
      { label: 'Education Fee', href: 'https://paytm.com/education-fees-payment' },
    ],
  },
  {
    title: 'Book Travel & Entertainment',
    links: [
      { label: 'Movie Tickets', href: 'https://tickets.paytm.com/movies' },
      { label: 'Flight Tickets', href: 'https://tickets.paytm.com/flights' },
      { label: 'Bus Tickets', href: 'https://tickets.paytm.com/bus' },
      { label: 'Train Tickets', href: 'https://tickets.paytm.com/trains' },
      { label: 'Event Tickets', href: 'https://insider.in/' },
    ],
  },
  {
    title: 'Investments & Miscellaneous',
    links: [
      { label: 'Paytm Gold', href: 'https://paytm.com/digitalgold' },
      { label: 'Mutual Funds', href: 'https://www.paytmmoney.com/mutual-funds' },
      { label: 'Stocks', href: 'https://www.paytmmoney.com/stocks' },
      { label: 'IPO', href: 'https://www.paytmmoney.com/ipo' },
    ],
  },
  {
    title: 'Loans and Credit Cards',
    links: [
      { label: 'Personal Loan', href: 'https://paytm.com/loans-credit-cards/personal-loan/' },
      { label: 'Merchant Loan', href: 'https://paytm.com/loans-credit-cards/business-loan/' },
      { label: 'Credit Cards', href: 'https://paytm.com/loans-credit-cards/credit-cards/' },
      { label: 'Credit Score', href: 'https://credit-score.lending.paytm.com/' },
    ],
  },
];

const AccordionItem = ({ section }: { section: FooterSection }) => {
  const [isOpen, setIsOpen] = useState(section.isOpenDefault || false);

  return (
    <div className="border-b border-[#EBEBEB]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center py-[18px] text-left focus:outline-none group"
      >
        <div className="mr-4 flex items-center justify-center">
          <img
            src={isOpen 
              ? "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/plus-15.svg" 
              : "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/plus-15.svg"
            }
            alt="Toggle"
            className={`w-[14px] h-[14px] transition-transform duration-200 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
          />
        </div>
        <span className="text-[14px] font-bold text-[#000000] tracking-tight">{section.title}</span>
        <div className="flex-grow ml-4 border-t border-[#EBEBEB] opacity-50 group-hover:opacity-100 transition-opacity"></div>
      </button>
      {isOpen && (
        <div className="pb-6 pl-[30px] pr-4">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-4 gap-x-8">
            {section.links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="text-[12px] text-[#506D85] hover:text-[#00BAF2] transition-colors font-medium whitespace-nowrap"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-10 pb-8 mt-12">
      <div className="max-width-[1170px] mx-auto px-4 lg:px-0" style={{ maxWidth: '1170px' }}>
        {/* Accordion Links */}
        <div className="mb-12">
          {footerData.map((section, index) => (
            <AccordionItem key={index} section={section} />
          ))}
          <div className="border-b border-[#EBEBEB] py-[18px] flex items-center">
            <span className="text-[14px] font-bold text-[#000000] tracking-tight ml-[30px]">Career</span>
            <div className="flex-grow ml-4 border-t border-[#EBEBEB] opacity-50"></div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-[#EBEBEB] my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[14px] text-[#8B99B3]">
            © 2025 Paytm
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <span className="text-[14px] font-semibold text-[#8B99B3]">Follow Us</span>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/facebook-24.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/twitter-25.svg" alt="X" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/youtube-26.svg" alt="YouTube" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/linkedin-27.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/instagram-28.svg" alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Payment Partners strip - Subtle at the bottom */}
        <div className="mt-8 flex justify-center items-center gap-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
          <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/visa-21.svg" alt="Visa" className="h-5" />
          <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/mastercard-23.svg" alt="Mastercard" className="h-8" />
        </div>
      </div>
      
      {/* Blue global footer strip */}
      <div className="h-[50px] bg-[#002970] mt-10"></div>
    </footer>
  );
};

export default Footer;