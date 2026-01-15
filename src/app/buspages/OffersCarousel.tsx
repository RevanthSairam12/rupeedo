"use client";

import React, { useRef } from "react";
import Image from "next/image";

interface Offer {
  id: number;
  imageUrl: string;
  link: string;
}

const offers: Offer[] = [
  {
    id: 1,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/images/39411826825488271-1.jpg",
    link: "https://paytm.com/flights/common/tnc?name=NEW2BUS&imageId=3184366/37422268718626843&title=NEW2BUS&url_type=busticket",
  },
  {
    id: 2,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/images/32323349484871211-2.jpg",
    link: "https://paytm.com/flights/common/tnc?name=GROUPBUS&imageId=3194728/32241640056053658&title=GROUPBUS&url_type=busticket",
  },
  {
    id: 3,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/images/25391339432721329-3.jpg",
    link: "https://tickets.paytm.com/bus/",
  },
  {
    id: 4,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/images/1710315925900-4.jpg",
    link: "https://cif.paytm.com/kyc/tnc/get/150002302",
  },
];

export default function OffersCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#F5F7F9] py-[40px] px-[16px]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[20px] font-bold text-black mb-[20px] px-[15px]">
          Best offers for you
        </h2>
        
        <div className="relative group">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-[24px] pb-[10px] scrollbar-hide no-scrollbar"
            style={{ 
              msOverflowStyle: 'none', 
              scrollbarWidth: 'none',
              scrollSnapType: 'x mandatory'
            }}
          >
            {offers.map((offer) => (
              <div 
                key={offer.id} 
                className="flex-shrink-0 w-[400px] h-[216px] rounded-[12px] overflow-hidden bg-white shadow-card scroll-snap-align-start transition-transform duration-300 hover:scale-[1.01]"
              >
                <a 
                  href={offer.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img
                    src={offer.imageUrl}
                    alt={`Offer ${offer.id}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </a>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollNext}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.1)] hover:bg-gray-50 z-10 border border-gray-100 transition-opacity"
            aria-label="Next offers"
          >
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/rightArrow-11.svg" 
              alt="Next arrow" 
              className="w-[18px] h-[18px]"
            />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}