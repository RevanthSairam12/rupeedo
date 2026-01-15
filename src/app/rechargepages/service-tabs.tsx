"use client";

import React from "react";
import Image from "next/image";

interface ServiceItem {
  id: string;
  label: string;
  icon: string;
  href: string;
}

const services: ServiceItem[] = [
  {
    id: "prepaid-postpaid",
    label: "Prepaid/Postpaid",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/icons/1686289280267-1.png",
    href: "/rechargepages",
  },
  {
    id: "electricity",
    label: "Electricity",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/icons/1554946473611-2.png",
    href: "/electricity-bill-payment",
  },
  {
    id: "dth",
    label: "DTH",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/icons/1554946480031-3.png",
    href: "/dth-recharge",
  },
  {
    id: "metro",
    label: "Metro",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/icons/1554946474398-4.png",
    href: "/metro-card-recharge",
  },
  {
    id: "broadband",
    label: "Broadband/Landline",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/icons/1602741621166-5.png",
    href: "https://paytm.com/landline-bill-payment",
  },
  {
    id: "education",
    label: "Education",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/icons/1602741754777-6.png",
    href: "/education",
  },
  {
    id: "loan",
    label: "Pay Loan",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/icons/1602741233182-7.png",
    href: "https://paytm.com/loan-emi-payment",
  },
  {
    id: "stocks",
    label: "Invest in Stocks",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/icons/1626446516255-8.png",
    href: "https://paytmmoney.com",
  },
  {
    id: "cylinder",
    label: "Book a Cylinder",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/icons/1626446407655-9.png",
    href: "https://paytm.com/cylinder-gas-recharge",
  },
  {
    id: "first",
    label: "Rupeedo First",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/icons/1602741593530-10.png",
    href: "/rupeedo-first",
  },
  {
    id: "insurance",
    label: "Insurance/LIC Premium",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/icons/1602742048652-11.png",
    href: "https://paytm.com/insurance-premium-payment",
  },
];

const MoreIcon = () => (
  <div className="flex flex-wrap w-[18px] h-[18px] gap-[2px] justify-center items-center">
    {[...Array(9)].map((_, i) => (
      <div key={i} className="w-[4px] h-[4px] bg-[#00baf2] rounded-full" />
    ))}
  </div>
);

export default function ServiceTabs() {
  return (
    <div className="w-full bg-[#002970] border-b border-[#ffffff1a] relative z-10">
      <div className="container mx-auto max-w-[1240px] px-4">
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar py-3">
          <ul className="flex items-center gap-4 lg:gap-8 min-w-max">
            {services.map((item) => (
              <li key={item.id} className="flex-shrink-0">
                <a
                  href={item.href}
                  className="flex flex-col items-center gap-2 group transition-opacity hover:opacity-80"
                >
                  <div className="w-8 h-8 relative flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-white text-[11px] lg:text-[12px] font-medium whitespace-nowrap">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
            <li className="flex-shrink-0">
              <button className="flex flex-col items-center gap-2 group transition-opacity hover:opacity-80 cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center">
                  <MoreIcon />
                </div>
                <span className="text-white text-[11px] lg:text-[12px] font-medium">
                  More
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}