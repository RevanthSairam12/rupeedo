import React from 'react';
import Image from 'next/image';

const FinancialServicesGrid = () => {
  return (
    <section className="bg-[#f5f7fa] py-[40px] md:py-[60px]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[30px]">
          
          {/* Why Choose Rupeedo Card */}
          <div className="bg-white rounded-[20px] overflow-hidden flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.05)] h-full">
            <div className="pt-8 md:pt-[40px] px-6 md:px-[40px]">
              <div className="mb-[20px]">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/images/27220898816562102-14.png" 
                    alt="Smart Features" 
                  className="h-[40px] md:h-[60px] w-auto"
                />
              </div>
              <h3 className="text-[24px] md:text-[32px] font-bold leading-[1.2] mb-[15px] text-black">
                Why 120K+ users trust <br />
                <span className="text-[#00baf2]">Rupeedo</span>
              </h3>
              <p className="text-[15px] md:text-[18px] text-[#506d85] leading-[1.5] mb-[15px]">
                Rupeedo works directly in your browser – no app installation, no bank account linking. Pay using any UPI app and earn 1% assured cashback on every mobile recharge, DTH recharge, bill payment and more.
              </p>
              <p className="text-[14px] md:text-[16px] text-[#506d85] leading-[1.5] mb-[25px]">
                Lightning-fast transactions, bank-grade security, instant cashback, and complete privacy – your financial data stays with you.
              </p>
              <div className="flex items-center gap-[15px] mb-[30px]">
                <a 
                  href="/rechargepages" 
                  className="inline-flex items-center justify-center bg-[#00baf2] hover:bg-[#008cc9] text-white font-bold text-[15px] px-6 py-3 rounded-full transition-colors"
                >
                  Start Recharging Now →
                </a>
              </div>
            </div>
            <div className="mt-auto px-6 md:px-[40px] pb-0 flex justify-center">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/images/27220898816562102-14.png" 
                alt="Rupeedo Secure Payments" 
                className="w-full max-w-[420px] h-auto object-contain align-bottom"
              />
            </div>
          </div>

          {/* Smart Payment Features Card */}
          <div className="bg-white rounded-[20px] overflow-hidden flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.05)] h-full">
            <div className="pt-8 md:pt-[40px] px-6 md:px-[40px]">
              <div className="mb-[20px]">
                <img 
                  src="/Rupeedoimgs/banners/main-logo.png" 
                  alt="Smart Features" 
                  className="h-[40px] md:h-[60px] w-auto"
                />
              </div>
              <h3 className="text-[24px] md:text-[32px] font-bold leading-[1.2] mb-[15px] text-black">
                Built for speed, <br />
                <span className="text-[#00baf2]">security & savings</span>
              </h3>
              <p className="text-[15px] md:text-[18px] text-[#506d85] leading-[1.5] mb-[15px]">
                Access Rupeedo from any browser on mobile, tablet or desktop. No storage space needed, always updated, works everywhere.
              </p>
              <p className="text-[14px] md:text-[16px] text-[#506d85] leading-[1.5] mb-[25px]">
                Pay directly via Google Pay, PhonePe, Paytm, BHIM or any UPI app. We never store your payment details or ask for bank access.
              </p>
              <div className="mb-[30px]">
                <a 
                  href="/rechargepages" 
                  className="inline-flex items-center justify-center bg-[#002970] hover:bg-[#00baf2] text-white font-bold text-[15px] px-6 py-3 rounded-full transition-colors"
                >
                  Recharge Now →
                </a>
              </div>
            </div>
            <div className="mt-auto flex justify-center items-end px-6 md:px-[20px]">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/images/27217428616091880-18.png" 
                alt="Smart Payment Features" 
                className="w-full max-w-[420px] h-auto object-contain align-bottom"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinancialServicesGrid;