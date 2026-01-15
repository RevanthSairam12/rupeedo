import React from 'react';

const ContentSEO: React.FC = () => {
  return (
    <section className="bg-[#F5F7F9] py-10 px-4">
      <div className="container max-w-[1200px] mx-auto">
        <div className="bg-white border border-[#EBEBEB] rounded-[12px] p-6 md:p-10 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
          {/* Section 1: Book Bus Tickets with Rupeedo */}
          <div className="mb-10">
            <h2 className="text-[20px] font-bold text-[#000000] mb-4">
              Book Bus Tickets with Rupeedo
            </h2>
            <p className="text-[14px] leading-[1.6] text-[#506D85] mb-4">
              Now, <span className="font-semibold text-[#000000]">book your bus tickets</span> on Rupeedo and make your bus booking experience smoother and more affordable. Rupeedo allows you to <span className="font-semibold text-[#000000]">book tickets</span> from anywhere in India at the lowest price.
            </p>
            <p className="text-[14px] leading-[1.6] text-[#506D85] mb-4">
              To book your bus tickets on Rupeedo, just fill in the requisite information in the required fields and customise your trip. Rupeedo gives you the privilege to plan your trip on your own. We provide you an array of options for your travel. You can choose sleeper, semi-sleeper, AC/non-AC, or any other type of bus you prefer, for your trip. You can search for availability of the bus by entering the time and date of the ticket reservation. We also facilitate you to choose the seat you want from all available seats in the bus.
            </p>
            <p className="text-[14px] leading-[1.6] text-[#506D85]">
              Thanks to our autofill function, you don&apos;t have to enter your details while doing your bookings again. Advanced traveller details prediction will prompt profile information based on your past ticket reservation history.
            </p>
          </div>

          {/* Section 2: Easy Booking and Payment Options */}
          <div className="mb-10">
            <h2 className="text-[20px] font-bold text-[#000000] mb-4">
              Easy Booking and Payment Options
            </h2>
            <p className="text-[14px] leading-[1.6] text-[#506D85] mb-4">
              Rupeedo ensures smooth payment experience for the users by making wallet payment secure and quicker. On Rupeedo, you can book your bus tickets in less than a minute without any hassle. Make sure that you have enough balance in your Rupeedo wallet, as it helps you in faster checkout. Having a registered Rupeedo wallet can also offer you loads of benefits.
            </p>
            <p className="text-[14px] leading-[1.6] text-[#506D85]">
              You also get the ease of selecting from other payment options like Debit/Credit Card or Net Banking. In case of failed booking, your money is refunded back to your wallet in less than 15 minutes. For any assistance, you can visit our dedicated 24/7 helpline service on{' '}
              <a 
                href="https://m.p-y.tm/hlpsprt" 
                className="text-[#00BAF2] hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                https://m.p-y.tm/hlpsprt
              </a>{' '}
              for helpline numbers and any kind of customer support. So, skip the long queues at the bus booking counters now and book tickets on Rupeedo, from the comfort of your home.
            </p>
          </div>

          {/* Section 3: Why Make Bus Reservations With Rupeedo */}
          <div>
            <h2 className="text-[20px] font-bold text-[#000000] mb-4">
              Why Make Bus Reservations With Rupeedo
            </h2>
            <p className="text-[14px] leading-[1.6] text-[#506D85] mb-6">
              Rupeedo has an edge over the other online bus ticket booking platforms in India as we keep implementing new features keeping in mind the behaviour of our users and the common bus passenger. From Non-AC buses to Volvo AC buses and other luxury buses, you can book all types of bus tickets on Rupeedo.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Free Cancellation",
                "Instant Refunds",
                "Easy & Quick Bus Booking",
                "Exciting Cashback & Bus Offers",
                "Best Price Assured",
                "24/7 Customer Assistance"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#8B99B3] mr-3 font-bold text-[18px] leading-none">•</span>
                  <span className="text-[14px] text-[#506D85] font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-[#EBEBEB]">
              <p className="text-[12px] leading-[1.6] text-[#8B99B3] mb-4 italic">
                Please do not share your Rupeedo password, Credit/Debit card pin, other confidential information with anyone even if he/she claims to be from Rupeedo. We advise our customers to completely ignore such communications & report to us at{' '}
                <a href="mailto:support@rupeedo.com" className="text-[#00BAF2] hover:underline">support@rupeedo.com</a>
              </p>
              <p className="text-[12px] leading-[1.6] text-[#8B99B3]">
                Cashback is &apos;Rupeedo loyalty cashback&apos; given by &apos;Pay with Rupeedo&apos; payment platform. It can be used to pay for goods & services sold by merchants that accept &apos;Pay with Rupeedo&apos;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSEO;