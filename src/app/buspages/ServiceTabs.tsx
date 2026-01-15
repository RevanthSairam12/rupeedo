import React from 'react';
import Image from 'next/image';

/**
 * ServiceTabs Component
 * 
 * Clones the secondary navigation tabs for travel services: 
 * Flights, Bus, Trains, and Intl. Flights.
 * 
 * Design Details:
 * - Active state for 'Bus' tab (indicated by 'rRk1f' class in HTML).
 * - Horizontal flex layout.
 * - Icon and text for each tab.
 * - White background container with thin bottom border.
 */

const ServiceTabs = () => {
  const tabs = [
    {
      label: 'Flights',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/d33e55b2-3.svg',
      isActive: false,
      href: '/flights/',
      ariaLabel: 'Flights icon',
    },
    {
      label: 'Bus',
      icon: 'bus', // Custom Bus icon behavior as seen in HTML (using i tag/CSS)
      isActive: true,
      href: '/bus/',
      ariaLabel: 'Bus icon',
    },
    {
      label: 'Trains',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/train_main_icon-4.svg',
      isActive: false,
      href: '/trains/',
      ariaLabel: 'Trains icon',
    },
    {
      label: 'Intl. Flights',
      icon: 'intl-flights', // Custom Intl Flight icon 
      isActive: false,
      href: '/international-flights/',
      ariaLabel: 'Intl. Flights icon',
    },
  ];

  return (
    <div className="bg-white border-b border-[#ebebeb]">
      <div className="max-w-[1200px] mx-auto px-4">
        <nav className="flex items-center" role="navigation">
          {tabs.map((tab) => (
            <a
              key={tab.label}
              href={tab.href}
              aria-label={tab.ariaLabel}
              className={`flex items-center px-4 py-4 min-w-[100px] relative transition-colors duration-200 group no-underline
                ${tab.isActive ? 'text-primary' : 'text-[#506D85] hover:text-black'}`}
            >
              <div className="flex flex-col items-center justify-center w-full gap-2">
                <div className="flex items-center justify-center h-8 w-8">
                  {tab.label === 'Bus' ? (
                    <i className="text-2xl leading-none">
                      {/* Bus Icon logic from HTML structure */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6V17C19 18.1 18.1 19 17 19H7C5.9 19 5 18.1 5 17V6C5 4.9 5.9 4 7 4H17C18.1 4 19 4.9 19 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 10H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 15H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 15H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </i>
                  ) : tab.label === 'Intl. Flights' ? (
                    <i className="text-2xl leading-none">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </i>
                  ) : (
                    <img 
                      src={tab.icon} 
                      alt={tab.label.toLowerCase()} 
                      className="w-8 h-8 object-contain"
                    />
                  )}
                </div>
                <div className={`text-[13px] font-semibold ${tab.isActive ? 'text-black' : ''}`}>
                  {tab.label}
                </div>
              </div>
              {/* Active Underline */}
              {tab.isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#00baf2] rounded-t-[3px]"></div>
              )}
            </a>
          ))}
        </nav>
      </div>
      
      <style jsx global>{`
        /* Replicate exact font and spacing from SwitchInfoGrid-module_listWrapper__kjPka */
        .ecBPi {
          font-size: 13px;
          font-weight: 600;
          color: #000;
        }
        .rRk1f {
          position: relative;
        }
        .rRk1f::after {
          content: "";
          position: absolute;
          bottom: 0px;
          left: 0;
          right: 0;
          height: 3px;
          background: #00baf2;
          border-radius: 3px 3px 0 0;
        }
      `}</style>
    </div>
  );
};

export default ServiceTabs;