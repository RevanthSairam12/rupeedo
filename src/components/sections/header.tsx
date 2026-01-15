import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] h-[56px] sm:h-[64px] flex items-center">
      <div className="container mx-auto px-3 lg:px-4 flex items-center justify-between gap-2 min-w-0">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/" className="block">
              <Image 
                src="/Rupeedoimgs/banners/main-logo.png" 
                alt="Rupeedo Logo" 
                width={180} 
                height={60} 
                className="h-[40px] sm:h-[60px] w-auto"
                priority
              />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          <ul className="flex items-center list-none m-0 p-0 font-sans">
            <li className="relative group px-2 xl:px-3 py-5 cursor-pointer">
              <span className="text-[13px] font-semibold text-[#000000] flex items-center hover:text-[#00baf2] transition-colors whitespace-nowrap">
                Recharge & Bills <ChevronDown className="ml-0.5 w-3 h-3 text-[#506d85] group-hover:text-[#00baf2]" />
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-[200px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.1)] rounded-b-md border-t-2 border-[#00baf2] pt-1 overflow-hidden">
                {["Mobile Recharge", "Electricity bill", "DTH recharge", "Municipal bill", "Water bill", "Gas & Cylinder", "Loan EMI", "Insurance Premium", "Challan"].map((item) => (
                  <a key={item} href="#" className="block px-4 py-2 text-[13px] text-[#000000] hover:bg-[#f5f7fa] hover:text-[#00baf2] transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </li>

            <li className="relative group px-2 xl:px-3 py-5 cursor-pointer">
              <span className="text-[13px] font-semibold text-[#000000] flex items-center hover:text-[#00baf2] transition-colors whitespace-nowrap">
                Ticket Booking <ChevronDown className="ml-0.5 w-3 h-3 text-[#506d85] group-hover:text-[#00baf2]" />
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-[180px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.1)] rounded-b-md border-t-2 border-[#00baf2] pt-1">
                {["Flight Tickets", "Train Tickets", "Bus Tickets"].map((item) => (
                  <a key={item} href="#" className="block px-4 py-2 text-[13px] text-[#000000] hover:bg-[#f5f7fa] hover:text-[#00baf2] transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </li>

            <li className="relative group px-2 xl:px-3 py-5 cursor-pointer">
              <span className="text-[13px] font-semibold text-[#000000] flex items-center hover:text-[#00baf2] transition-colors whitespace-nowrap">
                Payments & Services <ChevronDown className="ml-0.5 w-3 h-3 text-[#506d85] group-hover:text-[#00baf2]" />
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-[220px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.1)] rounded-b-md border-t-2 border-[#00baf2] pt-1">
                <div className="px-4 py-1.5 text-[10px] font-semibold text-[#506d85] uppercase tracking-wider">Payments</div>
                {["Bill Payments & Recharges", "Send Money to Anyone", "Online Payments"].map((item) => (
                  <a key={item} href="#" className="block px-4 py-2 text-[13px] text-[#000000] hover:bg-[#f5f7fa] hover:text-[#00baf2] transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </li>

            <li className="relative group px-2 xl:px-3 py-5 cursor-pointer">
              <span className="text-[13px] font-semibold text-[#000000] flex items-center hover:text-[#00baf2] transition-colors whitespace-nowrap">
                Company <ChevronDown className="ml-0.5 w-3 h-3 text-[#506d85] group-hover:text-[#00baf2]" />
              </span>
              <div className="absolute top-full right-0 hidden group-hover:block w-[160px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.1)] rounded-b-md border-t-2 border-[#00baf2] pt-1">
                {["About", "Investor Relations", "Blog", "Latest News", "Career"].map((item) => (
                  <a key={item} href="#" className="block px-4 py-2 text-[13px] text-[#000000] hover:bg-[#f5f7fa] hover:text-[#00baf2] transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <button className="flex items-center space-x-1.5 pl-2.5 sm:pl-3 pr-1 sm:pr-1.5 py-0.5 bg-[#002970] hover:bg-[#00baf2] rounded-full transition-all group overflow-hidden flex-shrink-0">
            <span className="text-white text-[12px] sm:text-[13px] font-semibold">Sign In</span>
            <div className="bg-[#00baf2] p-1 sm:p-1.5 rounded-full group-hover:bg-[#008cc9] transition-colors">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/svgs/logoutImg-3.svg" 
                alt="user" 
                width={14} 
                height={14} 
              />
            </div>
          </button>

          {/* Mobile Menu Button (Hamburger) */}
          <button className="lg:hidden p-1 sm:p-1.5 text-[#506d85] flex-shrink-0" aria-label="Open menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;