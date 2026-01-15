import React from 'react';
import Image from 'next/image';

const operators = [
  {
    name: 'Airtel Recharge',
    label: 'Airtel Recharge',
    href: '/recharge/airtel-prepaid-mobile-online-recharge',
    imgUrl: 'https://assetscdn1.paytm.com/images/catalog/operators/84x84/1765783177819.jpg',
  },
  {
    name: 'BSNL Recharge',
    label: 'BSNL Recharge',
    href: '/recharge/bsnl-prepaid-mobile-online-recharge',
    imgUrl: 'https://assetscdn1.paytm.com/images/catalog/operators/84x84/1742229999997.png',
  },
  {
    name: 'Jio Recharge',
    label: 'Jio Recharge',
    href: '/recharge/jio-prepaid-mobile-online-recharge',
    imgUrl: 'https://assetscdn1.paytm.com/images/catalog/operators/84x84/1753959970001.png',
  },
  {
    name: 'MTNL Recharge',
    label: 'MTNL Recharge',
    href: '/recharge/mtnl-prepaid-mobile-online-recharge',
    imgUrl: 'https://assetscdn1.paytm.com/images/catalog/operators/84x84/1742232103712.png',
  },
  {
    name: 'Vi Recharge',
    label: 'Vi Recharge',
    href: '/recharge/vi-prepaid-mobile-online-recharge',
    imgUrl: 'https://assetscdn1.paytm.com/images/catalog/operators/84x84/1742232787186.png',
  },
];

const OperatorSelector = () => {
  return (
    <section className="bg-[#f5f7fa] py-10">
      <div className="container mx-auto max-w-[1200px]">
        <div className="bg-white rounded-[10px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
          <h2 className="text-[20px] font-semibold text-black mb-10 decoration-0">
            Select an Operator
          </h2>
          <ul className="flex flex-wrap items-start justify-start gap-x-12 lg:gap-x-24 gap-y-8 list-none p-0 m-0">
            {operators.map((operator) => (
              <li key={operator.name} className="flex flex-col items-center min-w-[100px]">
                <a
                  href={operator.href}
                  className="flex flex-col items-center text-center no-underline transition-opacity hover:opacity-80"
                >
                  <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden border border-[#ebebeb] flex items-center justify-center p-2 bg-white mb-4">
                    <Image
                      src={operator.imgUrl}
                      alt={operator.name}
                      width={84}
                      height={84}
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span className="text-[14px] font-medium text-[#4a4a4a]">
                    {operator.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OperatorSelector;