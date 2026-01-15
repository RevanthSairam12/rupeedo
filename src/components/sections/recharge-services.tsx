import React from 'react';
import Image from 'next/image';

const RechargeServices = () => {
  const serviceLinks = [
    {
      label: 'Mobile Recharge',
      icon: '/Rupeedoimgs/prod-imgs/mob-black.png',
      href: '/rechargepages',
    },
    {
      label: 'DTH Recharge',
      icon: '/Rupeedoimgs/prod-imgs/dth-sml.png',
      href: 'https://paytm.com/dth-recharge',
    },
    {
      label: 'FasTag Recharge',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/icons/17630306417008374-3.png',
      href: 'https://paytm.com/fastag-recharge',
    },
    {
      label: 'Electricity Bill',
      icon: '/Rupeedoimgs/prod-imgs/elec-sml2.png',
      href: 'https://paytm.com/electricity-bill-payment',
    },
    {
      label: 'Loan EMI Payment',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/icons/25654802470500577-5.png',
      href: 'https://paytm.com/loan-emi-payment',
    },
    {
      label: 'Metro Recharge',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/images/25654906198636032-2.png',
      href: 'https://paytm.com/metro-card-recharge',
    },
    {
      label: 'View All Products',
      icon: '/Rupeedoimgs/prod-imgs/menu-sml.png',
    },
  ];

  return (
    <section className="bg-[#f5f7fa] py-[60px] md:py-[80px]">
      <div className="container mx-auto px-4 max-w-[1248px]">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main White Card */}
          <div className="flex-1 bg-white rounded-[20px] p-6 md:p-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#ebebed]">
            <h2 className="text-[20px] md:text-[24px] font-bold text-black mb-6 leading-tight">
              Recharges & bill payments
            </h2>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-y-10 gap-x-4">
              {serviceLinks.map((service, index) => (
                <a
                  key={index}
                  href={service.href || '#'}
                  className="group flex flex-col items-center text-center transition-transform hover:-translate-y-1"
                >
                  <div className="w-[64px] h-[64px] mb-3 flex items-center justify-center relative">
                    <img
                      src={service.icon}
                      alt={service.label}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[14px] font-semibold text-black leading-tight max-w-[80px]">
                    {service.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Spend Summary Sidebar Card */}
          <div className="lg:w-[384px] bg-[#91d8f7] rounded-[20px] overflow-hidden relative min-h-[280px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1">
            {/* Mobile App Preview Image */}
            <div className="absolute inset-0">
              <img
                src="/Rupeedoimgs/banners/noplatformfee.jpg"
                alt="Detailed Spend Summary App View"
                className="w-full h-full object-fill"
              />
            </div>
          </div>
        </div>

        {/* Bottom Offer Strip Section (Mimicking the visual flow context) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/rechargepages" className="group flex items-center justify-between bg-[#00baf2] rounded-[14px] p-5 transition-all hover:bg-[#00a6d8]">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-white text-[18px] font-bold leading-tight">Do Recharge and unlock rewards up to ₹100</span>
                <span className="text-white/90 text-[14px] font-medium">Use code RUPEEDO on eligible recharges</span>
              </div>
            </div>
            <div className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-bold text-[14px] group-hover:bg-white group-hover:text-[#00baf2] transition-colors flex items-center gap-2">
              Recharge <span className="text-[18px] leading-none">→</span>
            </div>
          </a>

          <a href="#" className="group flex items-center justify-between bg-[#002970] rounded-[14px] p-5 transition-all hover:bg-[#002058]">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-white text-[18px] font-bold leading-tight">1% Assured Cashback on Every Payment</span>
                <span className="text-white/90 text-[14px] font-medium">Complete transactions in under 10 seconds, 24x7</span>
              </div>
            </div>
            <div className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-bold text-[14px] group-hover:bg-white group-hover:text-[#002970] transition-colors flex items-center gap-2">
              Pay Now <span className="text-[18px] leading-none">→</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RechargeServices;