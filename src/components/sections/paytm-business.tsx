import React from 'react';
import Image from 'next/image';

const PaytmBusiness = () => {
  // Asset constants based on provided mapping
  const brandLogo = "/Rupeedoimgs/banners/main-logo.png";
  const mainImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/images/1752735625336-22.png";

  const browserBenefits = [
    "Works on any device – phone, tablet, laptop",
    "No phone storage needed",
    "Always updated automatically",
    "Cross-device access",
    "No app permissions required"
  ];

  return (
    <section className="w-full bg-[#f5f7fa] py-[40px] md:py-[60px] overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content Column */}
          <div className="flex-1 max-w-[500px] text-center md:text-left flex flex-col items-center md:items-start">
            <div className="mb-[20px] md:mb-[25px]">
              <img 
                src={brandLogo} 
                alt="Rupeedo" 
                className="h-[40px] md:h-[60px] w-auto object-contain"
              />
            </div>
            
            <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.2] mb-4 md:mb-5 text-[#000000]">
              All features, <br className="md:hidden" />
              <span className="text-[#00baf2]">zero downloads</span>
            </h2>
            
            <ul className="text-[15px] md:text-[18px] leading-[1.8] text-[#506d85] mb-8 list-none space-y-2">
              {browserBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-[#00baf2] font-bold">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
            
            <div className="flex w-full md:w-auto">
              <a 
                href="/rechargepages" 
                className="inline-flex items-center justify-center bg-[#002970] text-white font-semibold text-[16px] px-8 py-4 rounded-full hover:bg-[#00baf2] transition-colors group w-full md:w-auto"
              >
                Start Recharging
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Right Image/Mockup Column */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-[550px]">
              <img 
                src={mainImage} 
                alt="Rupeedo Browser Access" 
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            
            {/* Soft decorative blur/background element if needed */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#f5f7fa] rounded-full blur-[100px] opacity-40 md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaytmBusiness;