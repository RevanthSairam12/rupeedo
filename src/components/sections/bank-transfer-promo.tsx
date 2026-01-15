import React from 'react';
import Image from 'next/image';

const BankTransferPromo = () => {
  return (
    <section className="bg-[#f5f7fa] py-[80px] md:py-[100px] overflow-hidden">
      <div className="container px-4">
        {/* Main Content Wrapper */}
        <div className="bg-white rounded-[20px] p-8 md:p-[60px] flex flex-col md:flex-row items-center gap-12 md:gap-8 min-h-[520px]">
          
          {/* Left Column: Text and CTAs */}
          <div className="flex-1 max-w-[500px]">
            {/* Brand Logo with UPI */}
            <div className="mb-6">
              <img 
                src="/Rupeedoimgs/banners/main-logo.png" 
                alt="Rupeedo UPI Logo" 
                className="h-[36px] w-auto"
              />
            </div>
            
            {/* Heading */}
            <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.2] text-[#000000] mb-6">
              Pay with any UPI app – <span className="text-[#00baf2]">No bank linking needed</span>
            </h2>
            
            {/* Description */}
            <p className="text-[16px] md:text-[18px] leading-[1.5] text-[#000000] mb-4">
              Recharge and pay bills instantly using Google Pay, PhonePe, Paytm or any UPI app you trust. No app download required, no bank account linking – just open your browser and pay securely in seconds.
            </p>
            
            <p className="text-[14px] md:text-[16px] leading-[1.5] text-[#506d85] mb-8">
              Complete transactions in under 10 seconds with 1% assured cashback on every payment, 24x7.
            </p>

            {/* Supported UPI Apps */}
            <div className="mb-6">
              <span className="text-[12px] font-semibold text-[#506d85] uppercase tracking-wider mb-2 block">Pay with your favorite UPI app</span>
              <p className="text-[14px] text-[#000000]">
                Google Pay (GPay) • PhonePe • Paytm • BHIM UPI • Amazon Pay • WhatsApp Pay • Bank UPI Apps
              </p>
            </div>
            
            {/* CTA Button */}
            <a 
              href="/rechargepages"
              className="inline-flex items-center justify-center bg-[#00baf2] hover:bg-[#008cc9] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-colors"
            >
              Start Recharging Now
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* Right Column: Illustration */}
          <div className="flex-1 flex justify-center items-center relative w-full">
            <div className="relative w-full max-w-[480px]">
              <img 
                src="https://assetscdn1.paytm.com/images/catalog/view/1752741641420.png" 
                alt="Consumer Payment Illustration" 
                className="w-full h-auto object-contain"
                priority="true"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BankTransferPromo;