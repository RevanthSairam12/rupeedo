import React from 'react';

const SEOContent: React.FC = () => {
  return (
    <div className="bg-transparent py-10">
      <div className="container mx-auto px-5 max-w-[1200px]">
        {/* Main Content Wrapper with Card Style */}
        <div className="bg-white rounded-[12px] p-8 border border-[#E8EDF3] shadow-sm">
          
          {/* Section 1: Book Bus Tickets with Paytm */}
          <section className="mb-10">
            <h2 className="text-[18px] font-bold text-[#000000] mb-4">
              Book Bus Tickets with Paytm
            </h2>
            <div className="text-[14px] leading-[1.6] text-[#666666] space-y-4">
              <p>
                Now, <span className="font-semibold text-[#000000]">book your bus tickets</span> on Paytm and make your bus booking experience smoother and more affordable. Paytm allows you to <span className="font-semibold text-[#000000]">book tickets</span> from anywhere in India at the lowest price.
              </p>
              <p>
                To book your bus tickets on Paytm, just fill in the requisite information in the required fields and customise your trip. Paytm gives you the privilege to plan your trip on your own. We provide you an array of options for your travel. You can choose sleeper, semi-sleeper, AC/non-AC, or any other type of bus you prefer, for your trip. You can search for availability of the bus by entering the time and date of the ticket reservation. We also facilitate you to choose the seat you want from all available seats in the bus.
              </p>
              <p>
                Thanks to our autofill function, you don&apos;t have to enter your details while doing your bookings again. Advanced traveller details prediction will prompt profile information based on your past ticket reservation history.
              </p>
            </div>
          </section>

          {/* Section 2: Easy Booking and Payment Options */}
          <section className="mb-10">
            <h2 className="text-[18px] font-bold text-[#000000] mb-4">
              Easy Booking and Payment Options
            </h2>
            <div className="text-[14px] leading-[1.6] text-[#666666] space-y-4">
              <p>
                Paytm ensures smooth payment experience for the users by making wallet payment secure and quicker. On Paytm, you can book your bus tickets in less than a minute without any hassle. Make sure that you have enough balance in your Paytm wallet, as it helps you in faster checkout. Having a registered Paytm wallet can also offer you loads of benefits.
              </p>
              <p>
                You also get the ease of selecting from other payment options like Debit/Credit Card or Net Banking. In case of failed booking, your money is refunded back to your wallet in less than 15 minutes. For any assistance, you can visit our dedicated 24/7 helpline service on{' '}
                <a 
                  href="https://m.p-y.tm/hlpsprt" 
                  className="text-[#00BAF2] hover:underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  https://m.p-y.tm/hlpsprt
                </a>{' '}
                for helpline numbers and any kind of customer support. So, skip the long queues at the bus booking counters now and book tickets on Paytm, from the comfort of your home.
              </p>
            </div>
          </section>

          {/* Section 3: Why Make Bus Reservations With Paytm */}
          <section>
            <h2 className="text-[18px] font-bold text-[#000000] mb-4">
              Why Make Bus Reservations With Paytm
            </h2>
            <div className="text-[14px] leading-[1.6] text-[#666666] space-y-4">
              <p>
                Paytm has an edge over the other online bus ticket booking platforms in India as we keep implementing new features keeping in mind the behaviour of our users and the common bus passenger. From Non-AC buses to Volvo AC buses and other luxury buses, you can book all types of bus tickets on Paytm.
              </p>
              
              <ul className="list-disc pl-5 space-y-2 mt-4 text-[#666666]">
                <li>Free Cancellation</li>
                <li>Instant Refunds</li>
                <li>Easy & Quick Bus Booking</li>
                <li>Exciting Cashback & Bus Offers</li>
                <li>Best Price Assured</li>
                <li>24/7 Customer Assistance</li>
              </ul>

              <div className="mt-8 p-4 bg-[#F5F7FA] rounded-md border-l-4 border-[#00BAF2]">
                <p className="text-[13px] italic">
                  Please do not share your Paytm password, Credit/Debit card pin, other confidential information with anyone even if he/she claims to be from Paytm. We advise our customers to completely ignore such communications & report to us at{' '}
                  <a href="mailto:cybercell@paytmbank.com" className="text-[#00BAF2] hover:underline">
                    cybercell@paytmbank.com
                  </a>
                </p>
              </div>

              <p className="text-[12px] text-[#999999] mt-6 leading-relaxed">
                Cashback is &apos;Paytm loyalty cashback&apos; given by &apos;Pay with Paytm&apos; payment platform. It can be used to pay for goods & services sold by merchants that accept &apos;Pay with Paytm&apos;
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SEOContent;