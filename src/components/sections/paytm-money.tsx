import React from 'react';
import Image from 'next/image';

const PaytmMoneySection: React.FC = () => {
  return (
    <section className="py-[40px] md:py-[60px] bg-[#f5f7fa] overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1240px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
          {/* Left Content Side */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-6">
              <img
                src="/Rupeedoimgs/banners/main-logo.png"
                alt="Rupeedo Logo"
                className="h-[40px] md:h-[52px] w-auto max-w-[140px] object-contain"
              />
            </div>
            
            <h2 className="text-[28px] md:text-[36px] font-bold text-black leading-[1.2] mb-4">
              Simple, secure payments
              <br className="hidden md:block" />
              {" "}in 3 steps
            </h2>
            
            <div className="mb-5">
              <span className="text-[16px] md:text-[20px] font-bold text-[#00baf2]">
                No app needed, no bank linking required
              </span>
            </div>
            
            <p className="text-[14px] md:text-[15px] leading-[1.6] text-[#506d85] mb-6 max-w-[480px]">
              Visit Rupeedo website in any browser, choose your service (mobile, DTH, bills), and pay using your favorite UPI app. Get 1% cashback instantly credited to your account on every transaction.
            </p>
            
            <p className="text-[13px] md:text-[14px] leading-[1.6] text-[#000000] font-medium mb-8 max-w-[480px] bg-[#e8f7fd] p-4 rounded-[10px]">
              We never ask for bank account details. Every payment happens directly through your trusted UPI app with complete security and privacy.
            </p>
            
            <div className="mb-10 w-full md:w-auto">
              <a
                href="/rechargepages"
                className="inline-flex items-center justify-center bg-[#002970] text-white text-[15px] font-bold py-[14px] px-[28px] rounded-full hover:bg-[#00baf2] transition-colors duration-300 group w-full md:w-auto"
              >
                Try It Now
                <span className="ml-[6px] group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
            
            <div className="text-[10px] md:text-[11px] leading-[1.5] text-[#506d85] max-w-[500px]">
              When you pay, you'll be redirected to your chosen UPI app to approve the transaction. We never see or store your payment credentials.
            </div>
          </div>

          {/* Right Imagery Side */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-[540px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/images/1763534762757-20.jpg"
                alt="Rupeedo Easy Payment Steps"
                width={540}
                height={460}
                className="w-full h-auto object-contain rounded-[20px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaytmMoneySection;