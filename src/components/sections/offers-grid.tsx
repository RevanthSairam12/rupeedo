import React from 'react';
import Image from 'next/image';

const OffersGrid = () => {
  // Feature cards data
  const featureCards = [
    {
      id: 3,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/images/20668546951073032-7.png",
      alt: "Swipe left to keep it hush"
    },
    {
      id: 4,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/images/20668615076908518-8.png",
      alt: "Expense tracking made smarter"
    },
    {
      id: 5,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/images/20668676105948378-9.png",
      alt: "We do the math, you do the spending"
    }
  ];

  return (
    <div className="w-full bg-[#f5f7fa] py-[20px]">
      <div className="container mx-auto max-w-[1200px] px-4">

        {/* Triple Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
          {featureCards.map((card) => (
            <div 
              key={card.id} 
              className="bg-white rounded-[14px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative aspect-[380/230] w-full">
                <Image 
                  src={card.image} 
                  alt={card.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OffersGrid;