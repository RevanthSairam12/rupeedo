import React from 'react';
import Image from 'next/image';

/**
 * TravelBlogs Component
 * 
 * Clones the 'Travel Blogs' section showing a grid of blog cards with thumbnail images
 * and category labels.
 */

const blogs = [
  {
    id: 1,
    title: 'Explore our new feature',
    category: 'New Feature',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/images/1710398552195-5.png',
    link: 'https://tickets.paytm.com/blog/introducing-booking-for-female/',
    bgColor: '#FFF0F3' // Light pink based on screenshot
  },
  {
    id: 2,
    title: 'Top women-friendly destinations',
    category: 'Female Travelers',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/images/1710398839707-6.png',
    link: 'https://tickets.paytm.com/blog/indias-premier-d%d0%b5stinations-for-f%d0%b5mal%d0%b5-travelers/',
    bgColor: '#FFF0F5'
  },
  {
    id: 3,
    title: 'Budget destinations for student travellers in India',
    category: 'Student',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/images/1710398959954-7.png',
    link: 'https://tickets.paytm.com/blog/destinations-for-students-for-a-pocket-friendly-trip/',
    bgColor: '#F0FFF4' // Light green
  },
  {
    id: 4,
    title: 'Top locations for a weekend road trip',
    category: 'Long Weekend',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/images/1710399080670-8.jpg',
    link: 'https://tickets.paytm.com/blog/ultimate-weekend-road-trips/',
    bgColor: '#E6FBFF' // Light blue
  },
  {
    id: 5,
    title: 'Places to visit in Mysore',
    category: 'Mysore',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/images/1710399231167-9.png',
    link: 'https://tickets.paytm.com/blog/tourist-places-to-visit-in-mysore/',
    bgColor: '#FFFBEB' // Light yellow
  },
  {
    id: 6,
    title: 'Places to visit in Jaipur',
    category: 'Jaipur',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/images/1710399334090-10.png',
    link: 'https://tickets.paytm.com/blog/7-places-to-visit-in-jaipur/',
    bgColor: '#FFF1F2'
  }
];

const TravelBlogs: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Section Header */}
        <h2 className="text-[20px] font-bold text-[#000000] mb-6">
          Travel Blogs
        </h2>

        {/* Blogs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col items-center">
              <a 
                href={blog.link}
                className="group w-full block rounded-[12px] overflow-hidden transition-transform duration-200 hover:-translate-y-1"
                style={{ backgroundColor: blog.bgColor }}
              >
                {/* Image Container */}
                <div className="relative aspect-[160/120] w-full overflow-hidden rounded-[12px]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Text Content inside the colored card area */}
                <div className="p-3 min-h-[70px] flex flex-col items-center justify-center text-center">
                  <h3 className="text-[12px] font-bold text-[#000000] leading-[1.3] line-clamp-3">
                    {blog.title}
                  </h3>
                </div>
              </a>
              
              {/* Category Label Below Card */}
              <span className="mt-3 text-[12px] font-medium text-[#506D85]">
                {blog.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        /* Replicating specific styles found in computed_styles */
        .CarouselBs1-module_bannerContainer__e50LI {
          max-width: 1170px !important;
          margin: 0 auto;
        }
        
        /* Ensuring layout responsiveness matches screenshot behavior */
        @media (max-width: 768px) {
          .blogs-grid {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding-bottom: 10px;
          }
          .blog-item {
            flex: 0 0 160px;
            scroll-snap-align: start;
          }
        }
      `}</style>
    </section>
  );
};

export default TravelBlogs;