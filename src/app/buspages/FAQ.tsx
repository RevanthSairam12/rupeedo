import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "How can I check operator information for a particular route?",
    answer: (
      <>
        To get information on a specific route buses, check for the buses on{" "}
        <a href="https://tickets.paytm.com/bus/" className="text-[#00BAF2] hover:underline">
          https://tickets.paytm.com/bus/
        </a>{" "}
        by entering the origin and the source destinations along with the preferred date of travel. On clicking search, you will be taken to the list of buses on the specified route for the searched date.
      </>
    ),
  },
  {
    question: "What are the payment options to book bus tickets on Paytm?",
    answer: "Paytm accept all major payment options like Debit/Credit card or Net banking. You can also pay using Paytm wallet, making the travel booking easier and quicker. Make sure that you have enough balance in your Paytm wallet, as it helps you in faster checkout. Having a registered Paytm wallet can also offer you loads of benefits.",
  },
  {
    question: "I am unable to select a specific seat/operator/date/route. What do I do?",
    answer: "Kindly share a screenshot of the issue with the Customer Care and we will fix it at the earliest.",
  },
  {
    question: "Can I cancel the tickets once booked?",
    answer: "Yes, you can cancel your tickets after having booked the tickets. The refundable amount would be credited to your account, after the deductions based on the operators’ cancellation policies.",
  },
  {
    question: "What should I do if I’ve lost my ticket?",
    answer: "For online bus booking, a copy of the same would be sent to your email ID. You can login to your account and access the e-copy of your ticket. This ticket can be printed.",
  },
  {
    question: "Will I have to pay extra when I book tickets online?",
    answer: "No, no extra charges are levied when you book the tickets online.",
  },
  {
    question: "I have applied the promo code, but did not receive any cashback. What do I do?",
    answer: "Firstly, please check your order history and ensure that the promo code is applied. If it is applied successfully, the cashback amount would be credited in your account within 24 hours of the successful transaction.",
  },
  {
    question: "My money has been deducted, but the ticket was not booked. Kindly help.",
    answer: "We’re sorry for the inconvenience. Please share a screenshot of the concerned issue with the Customer Care and we will fix the issue at the earliest.",
  },
  {
    question: "Why am I not able to pay through a specific bank/Net banking/card?",
    answer: "You must have probably exceeded the allowed transaction limit of your account. For details, please contact our Customer Care.",
  },
  {
    question: "Will I get a refund in case of a failed transaction?",
    answer: "Yes, if the booking is not successful and the money is debited from your account, the amount will be refunded in 15 minutes.",
  },
];

const FAQAccordionItem = ({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border border-[#EBEBEB] rounded-lg mb-3 overflow-hidden bg-white">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-[18px] text-left hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="text-[14px] font-bold text-[#000000] leading-[1.4]">
          Q. {item.question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#8B99B3] flex-shrink-0 ml-4" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#8B99B3] flex-shrink-0 ml-4" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-height-[500px] opacity-100 border-t border-[#EBEBEB]' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-[18px] text-[13px] leading-[1.8] text-[#506D85]">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F5F7F9] py-10 px-4">
      <div className="max-w-[1170px] mx-auto">
        <h2 className="text-[20px] font-bold text-[#000000] mb-6">
          Frequently asked questions
        </h2>
        
        <div className="space-y-0">
          {faqData.map((item, index) => (
            <FAQAccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* SEO Text Section below FAQs as per original structure */}
        <div className="mt-12 bg-white rounded-[12px] p-8 border border-[#EBEBEB] shadow-sm">
          <h2 className="text-[18px] font-bold text-[#000000] mb-4">Book Bus Tickets with Paytm</h2>
          <p className="text-[14px] text-[#506D85] mb-6 leading-[1.6]">
            Now, <strong className="text-[#000000]">book your bus tickets</strong> on Paytm and make your bus booking experience smoother and more affordable. Paytm allows you to <strong className="text-[#000000]">book tickets</strong> from anywhere in India at the lowest price.
          </p>
          <p className="text-[14px] text-[#506D85] mb-6 leading-[1.6]">
            To book your bus tickets on Paytm, just fill in the requisite information in the required fields and customise your trip. Paytm gives you the privilege to plan your trip on your own. We provide you an array of options for your travel. You can choose sleeper, semi-sleeper, AC/non-AC, or any other type of bus you prefer, for your trip. You can search for availability of the bus by entering the time and date of the ticket reservation. We also facilitate you to choose the seat you want from all available seats in the bus.
          </p>
          <p className="text-[14px] text-[#506D85] mb-8 leading-[1.6]">
            Thanks to our autofill function, you don’t have to enter your details while doing your bookings again. Advanced traveller details prediction will prompt profile information based on your past ticket reservation history.
          </p>

          <h3 className="text-[16px] font-bold text-[#000000] mb-4">Easy Booking and Payment Options</h3>
          <p className="text-[14px] text-[#506D85] mb-6 leading-[1.6]">
            Paytm ensures smooth payment experience for the users by making wallet payment secure and quicker. On Paytm, you can book your bus tickets in less than a minute without any hassle. Make sure that you have enough balance in your Paytm wallet, as it helps you in faster checkout. Having a registered Paytm wallet can also offer you loads of benefits.
          </p>
          <p className="text-[14px] text-[#506D85] mb-8 leading-[1.6]">
            You also get the ease of selecting from other payment options like Debit/Credit Card or Net Banking. In case of failed booking, your money is refunded back to your wallet in less than 15 minutes. For any assistance, you can visit our dedicated 24/7 helpline service on <a href="https://m.p-y.tm/hlpsprt" className="text-[#00BAF2] font-semibold">https://m.p-y.tm/hlpsprt</a> for helpline numbers and any kind of customer support. So, skip the long queues at the bus booking counters now and book tickets on Paytm, from the comfort of your home.
          </p>

          <h3 className="text-[16px] font-bold text-[#000000] mb-4">Why Make Bus Reservations With Paytm</h3>
          <p className="text-[14px] text-[#506D85] mb-6 leading-[1.6]">
            Paytm has an edge over the other online bus ticket booking platforms in India as we keep implementing new features keeping in mind the behaviour of our users and the common bus passenger. From Non-AC buses to Volvo AC buses and other luxury buses, you can book all types of bus tickets on Paytm.
          </p>

          <ul className="list-disc pl-5 text-[14px] text-[#506D85] mb-8 space-y-2 leading-[1.6]">
            <li>Free Cancellation</li>
            <li>Instant Refunds</li>
            <li>Easy &amp; Quick Bus Booking</li>
            <li>Exciting Cashback &amp; Bus Offers</li>
            <li>Best Price Assured</li>
            <li>24/7 Customer Assistance</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;