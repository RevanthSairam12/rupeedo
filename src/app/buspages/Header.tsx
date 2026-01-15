import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-[#EBEBEB] sticky top-0 z-50">
      <div className="max-w-[1240px] mx-auto px-4 h-[78px] flex items-center justify-between">
        {/* Left Section: Logo and Navigation */}
        <div className="flex items-center gap-10 h-full">
          <a href="/" className="flex items-center">
            <img
              src="/Rupeedoimgs/banners/main-logo.png"
              alt="Rupeedo Travel Logo"
              width={160}
              height={36}
              className="h-9 w-auto"
            />
          </a>

          <nav className="hidden lg:block h-full">
            <ul className="flex items-center h-full space-x-0">
              {/* Navigation Item with Dropdown */}
              <li className="group relative h-[78px] flex items-center px-4 cursor-pointer">
                <span className="text-[14px] font-bold text-[#000000] flex items-center gap-1 group-hover:text-[#00BAF2] transition-colors">
                  Recharge & Bills
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="absolute top-[78px] left-0 w-[220px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-[#EBEBEB] py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <a href="/rechargepages" className="block px-5 py-2 text-[14px] text-[#000000] hover:bg-[#F5F7F9] hover:text-[#00BAF2]">Mobile Recharge</a>
                  <a href="https://paytm.com/electricity-bill-payment" className="block px-5 py-2 text-[14px] text-[#000000] hover:bg-[#F5F7F9] hover:text-[#00BAF2]">Electricity bill</a>
                  <a href="https://paytm.com/dth-recharge" className="block px-5 py-2 text-[14px] text-[#000000] hover:bg-[#F5F7F9] hover:text-[#00BAF2]">DTH recharge</a>
                  <a href="https://paytm.com/municipal-payments" className="block px-5 py-2 text-[14px] text-[#000000] hover:bg-[#F5F7F9] hover:text-[#00BAF2]">Municipal bill</a>
                </div>
              </li>

              <li className="group relative h-[78px] flex items-center px-4 cursor-pointer">
                <span className="text-[14px] font-bold text-[#000000] flex items-center gap-1 group-hover:text-[#00BAF2] transition-colors">
                  Ticket Booking
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="absolute top-[78px] left-0 w-[220px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-[#EBEBEB] py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <a href="https://tickets.paytm.com/flights" className="block px-5 py-2 text-[14px] text-[#000000] hover:bg-[#F5F7F9] hover:text-[#00BAF2]">Flight Tickets</a>
                  <a href="https://tickets.paytm.com/trains" className="block px-5 py-2 text-[14px] text-[#000000] hover:bg-[#F5F7F9] hover:text-[#00BAF2]">Train Tickets</a>
                  <a href="https://tickets.paytm.com/bus" className="block px-5 py-2 text-[14px] text-[#00BAF2] hover:bg-[#F5F7F9]">Bus Tickets</a>
                </div>
              </li>

              <li className="group relative h-[78px] flex items-center px-4 cursor-pointer">
                <span className="text-[14px] font-bold text-[#000000] flex items-center gap-1 group-hover:text-[#00BAF2] transition-colors">
                  Payments & Services
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="absolute top-[78px] left-0 w-[220px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-[#EBEBEB] py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <a href="https://paytm.com/money-transfer" className="block px-5 py-2 text-[14px] text-[#000000] hover:bg-[#F5F7F9] hover:text-[#00BAF2]">Send Money</a>
                  <a href="https://paytm.com/online-payments" className="block px-5 py-2 text-[14px] text-[#000000] hover:bg-[#F5F7F9] hover:text-[#00BAF2]">Online Payments</a>
                </div>
              </li>

              <li className="group relative h-[78px] flex items-center px-4 cursor-pointer">
                <span className="text-[14px] font-bold text-[#000000] flex items-center gap-1 group-hover:text-[#00BAF2] transition-colors">
                  Paytm for Business
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="absolute top-[78px] left-0 w-[220px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-[#EBEBEB] py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <a href="https://business.paytm.com/payment-gateway" className="block px-5 py-2 text-[14px] text-[#000000] hover:bg-[#F5F7F9] hover:text-[#00BAF2]">Payment Gateway</a>
                  <a href="https://business.paytm.com/soundbox" className="block px-5 py-2 text-[14px] text-[#000000] hover:bg-[#F5F7F9] hover:text-[#00BAF2]">Soundbox</a>
                </div>
              </li>

              <li className="group relative h-[78px] flex items-center px-4 cursor-pointer">
                <span className="text-[14px] font-bold text-[#000000] flex items-center gap-1 group-hover:text-[#00BAF2] transition-colors">
                  Company
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="absolute top-[78px] left-0 w-[220px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-[#EBEBEB] py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <a href="https://paytm.com/about-us" className="block px-5 py-2 text-[14px] text-[#000000] hover:bg-[#F5F7F9] hover:text-[#00BAF2]">About Us</a>
                  <a href="https://paytm.com/blog/" className="block px-5 py-2 text-[14px] text-[#000000] hover:bg-[#F5F7F9] hover:text-[#00BAF2]">Blog</a>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Section: Sign In Button */}
        <div className="flex items-center">
          <button className="flex items-center gap-2 bg-[#002970] text-white px-[18px] py-[8px] rounded-[30px] hover:bg-[#002058] transition-colors">
            <div className="w-[30px] h-[30px] rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/logoutImg-2.svg"
                alt="user icon"
                width={30}
                height={30}
              />
            </div>
            <span className="text-[14px] font-bold leading-none">Sign In</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;