import React from 'react';
import Image from 'next/image';

interface RouteItem {
  id: number;
  from: string;
  to: string;
  busCount: string;
  imageUrl: string;
  link: string;
}

const routes: RouteItem[] = [
  {
    id: 1,
    from: 'Bengaluru',
    to: 'Hyderabad',
    busCount: '170 Buses',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/icons/bnghyd-2.png',
    link: '/bus/bengaluru-to-hyderabad-booking'
  },
  {
    id: 2,
    from: 'Indore',
    to: 'Bhopal',
    busCount: '215 Buses',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/icons/indoreBhopal-3.png',
    link: '/bus/indore-to-bhopal-booking'
  },
  {
    id: 3,
    from: 'Hyderabad',
    to: 'Bengaluru',
    busCount: '170 Buses',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/icons/hydbng-4.png',
    link: '/bus/hyderabad-to-bengaluru-booking'
  },
  {
    id: 4,
    from: 'Bhopal',
    to: 'Indore',
    busCount: '180 Buses',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/icons/bhopalindore-5.png',
    link: '/bus/bhopal-to-indore-booking'
  },
  {
    id: 5,
    from: 'Bengaluru',
    to: 'Chennai',
    busCount: '120 Buses',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/icons/bngche-6.png',
    link: '/bus/bengaluru-to-chennai-booking'
  },
  {
    id: 6,
    from: 'Vijayawada',
    to: 'Hyderabad',
    busCount: '480 Buses',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/icons/bnghyd-2.png',
    link: '/bus/vijayawada-to-hyderabad-booking'
  },
  {
    id: 7,
    from: 'Chennai',
    to: 'Bengaluru',
    busCount: '115 Buses',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/icons/hydbng-4.png',
    link: '/bus/chennai-to-bengaluru-booking'
  },
  {
    id: 8,
    from: 'Hyderabad',
    to: 'Guntur',
    busCount: '90 Buses',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/icons/hydguntur-7.png',
    link: '/bus/hyderabad-to-guntur-booking'
  },
  {
    id: 9,
    from: 'Hyderabad',
    to: 'Vijayawada',
    busCount: '600 Buses',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/icons/hydvijayawada-8.png',
    link: '/bus/hyderabad-to-vijayawada-booking'
  },
  {
    id: 10,
    from: 'Chennai',
    to: 'Coimbatore',
    busCount: '110 Buses',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/icons/chennaicmbtr-9.png',
    link: '/bus/chennai-to-coimbatore-booking'
  }
];

const TopRoutes: React.FC = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <h2 className="text-[20px] font-bold text-[#000000] mb-6">Top Routes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {routes.map((route) => (
            <div 
              key={route.id} 
              className="flex items-center justify-between p-4 bg-white border border-[#EBEBEB] rounded-[12px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-[48px] h-[48px] flex-shrink-0">
                  <Image
                    src={route.imageUrl}
                    alt={route.from}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <a 
                    href={route.link} 
                    className="flex items-center gap-1.5 text-[16px] font-semibold text-[#000000] hover:text-[#00BAF2] transition-colors"
                  >
                    {route.from}
                    <img 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/a16a0f9b-12.svg" 
                      alt="arrow" 
                      className="w-3.5 h-3.5 opacity-60"
                      style={{ filter: "brightness(0)" }}
                    />
                    {route.to}
                  </a>
                  <div className="text-[14px] text-[#506D85]">
                    {route.busCount}
                  </div>
                </div>
              </div>
              
              <a 
                href={route.link}
                className="text-[12px] font-semibold text-[#8B99B3] hover:text-[#00BAF2] transition-colors cursor-pointer border border-[#EBEBEB] rounded-full px-4 py-1.5 whitespace-nowrap"
              >
                View all buses
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRoutes;