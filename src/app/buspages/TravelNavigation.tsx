import React from 'react';
import Image from 'next/image';

/**
 * TravelNavigation Component
 * 
 * A secondary sub-navigation bar for travel services including Flights, Bus, Trains, 
 * and International Flights icons and links.
 * 
 * Styled according to Paytm's pixel-perfect design standards using Tailwind CSS.
 */

const travelNavItems = [
  {
    name: "Flights",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/d33e55b2-3.svg",
    href: "/flights/",
    active: false,
    label: "Flights"
  },
  {
    name: "Bus",
    icon: null, // Bus uses a custom icon class/image structure in the HTML
    href: "/bus/",
    active: true,
    label: "Bus"
  },
  {
    name: "Trains",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/train_main_icon-4.svg",
    href: "/trains/",
    active: false,
    label: "Trains"
  },
  {
    name: "Intl. Flights",
    icon: null, // International flights uses a specific class in original
    href: "/international-flights/",
    active: false,
    label: "Intl. Flights"
  }
];

const TravelNavigation = () => {
  return (
    <div className="w-full bg-[#FFFFFF]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
        <nav 
          className="flex items-center justify-start py-4 gap-x-8 md:gap-x-12" 
          role="navigation"
          aria-label="Travel categories"
        >
          {travelNavItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`group flex items-center transition-all duration-300 relative ${
                item.active ? 'opacity-100' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 flex items-center justify-center relative">
                  {item.name === 'Bus' ? (
                     <div className="relative w-8 h-8">
                       {/* Custom Bus SVG drawing or fallback based on class "bus11" */}
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M19 15V7C19 4.23858 16.7614 2 14 2H10C7.23858 2 5 4.23858 5 7V15M19 15H5M19 15V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V15M17 19V21M7 19V21M16 11H8V6H16V11Z" 
                           stroke={item.active ? "#00BAF2" : "#002970"} 
                           strokeWidth="1.5" 
                           strokeLinecap="round" 
                           strokeLinejoin="round"
                         />
                       </svg>
                     </div>
                  ) : item.name === 'Intl. Flights' ? (
                    <div className="relative w-8 h-8">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z" 
                           fill={item.active ? "#00BAF2" : "#002970"}
                         />
                       </svg>
                    </div>
                  ) : (
                    <Image 
                      src={item.icon || ''} 
                      alt={item.name.toLowerCase()} 
                      width={24} 
                      height={24} 
                      className="object-contain"
                    />
                  )}
                </div>
                
                <span className={`text-[13px] font-semibold tracking-wide ${
                  item.active ? 'text-[#00BAF2]' : 'text-[#002970]'
                }`}>
                  {item.label}
                </span>

                {item.active && (
                  <div className="absolute -bottom-[18px] left-0 right-0 h-[3px] bg-[#00BAF2] rounded-t-full" />
                )}
              </div>
            </a>
          ))}
        </nav>
      </div>
      <div className="w-full h-[1px] bg-[#E8EDF3]" />
    </div>
  );
};

export default TravelNavigation;