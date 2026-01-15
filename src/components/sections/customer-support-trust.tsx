import React from 'react';

/**
 * CustomerSupportTrust Component
 * 
 * Clones the thin blue ribbon banner with the Paytm logo and 
 * "24x7 Trusted customer support" text with a "Learn More" button.
 * 
 * Theme: Light
 * Design: Pixel-perfect based on Paytm brand guidelines
 */

const CustomerSupportTrust: React.FC = () => {
  return (
    <section className="w-full bg-[#f5f7fa] py-[60px]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <a 
          href="https://paytm.com/care/customer-care" 
          className="relative flex items-center justify-between bg-[#00baf2] rounded-[10px] px-6 py-4 md:px-10 md:py-5 overflow-hidden group transition-all duration-300 hover:shadow-lg"
          style={{
            background: 'linear-gradient(270deg, #00baf2 0%, #008cc9 100%)'
          }}
        >
          {/* Content Wrapper */}
          <div className="flex items-center gap-4 md:gap-8 z-10 w-full md:w-auto">
            {/* Logo Section */}
            <div className="flex-shrink-0 bg-white rounded-full p-1.5 md:p-2 shadow-sm">
              <img 
                src="https://assetscdn1.paytm.com/images/catalog/view_item/2832559/1725599834382.png" 
                alt="rupeedoLogo" 
                className="h-6 w-auto md:h-8"
              />
            </div>

            {/* Support Text */}
            <div className="flex flex-col">
              <h2 className="text-white text-[15px] md:text-[20px] font-bold leading-tight tracking-tight">
                24x7 customer support for every step
              </h2>
              <p className="text-white/90 text-[12px] md:text-[14px] font-medium mt-1 hidden md:block">
                Over 120+ thousand transactions processed safely every month
              </p>
            </div>
          </div>

          {/* Action Button - Desktop/Large UI */}
          <div className="hidden md:flex items-center gap-2 bg-[#ffffff20] border border-[#ffffff40] rounded-full px-6 py-2.5 text-white font-bold text-[15px] hover:bg-[#ffffff30] transition-colors z-10 whitespace-nowrap">
            Learn More
            <span className="text-lg">→</span>
          </div>

          {/* Action Button - Mobile */}
          <div className="md:hidden flex-shrink-0 text-white text-[18px] z-10 ml-2">
            →
          </div>

          {/* Subtle Background Pattern (Optional Overlay for Depth) */}
          <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none">
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full border-[20px] border-white"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default CustomerSupportTrust;