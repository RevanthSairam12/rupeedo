"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "Q. How can I check operator information for a particular route?",
    answer: (
      <p>
        To get information on a specific route buses, check for the buses on{" "}
        <a
          href="https://tickets.paytm.com/bus/"
          className="text-[#00BAF2] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://tickets.paytm.com/bus/
        </a>{" "}
        by entering the origin and the source destinations along with the
        preferred date of travel. On clicking search, you will be taken to the
        list of buses on the specified route for the searched date.
      </p>
    ),
  },
  {
    question: "Q. What are the payment options to book bus tickets on Rupeedo?",
    answer: (
      <p>
        Rupeedo accept all major payment options like Debit/Credit card or Net
        banking. You can also pay using Rupeedo wallet, making the travel booking
        easier and quicker. Make sure that you have enough balance in your Rupeedo
        wallet, as it helps you in faster checkout. Having a registered Rupeedo
        wallet can also offer you loads of benefits.
      </p>
    ),
  },
  {
    question: "Q. I am unable to select a specific seat/operator/date/route. What do I do?",
    answer: (
      <p>
        Kindly share a screenshot of the issue with the Customer Care and we
        will fix it at the earliest.
      </p>
    ),
  },
  {
    question: "Q. Can I cancel the tickets once booked?",
    answer: (
      <p>
        Yes, you can cancel your tickets after having booked the tickets. The
        refundable amount would be credited to your account, after the
        deductions based on the operators’ cancellation policies.
      </p>
    ),
  },
  {
    question: "Q. What should I do if I’ve lost my ticket?",
    answer: (
      <p>
        For online bus booking, a copy of the same would be sent to your email
        ID. You can login to your account and access the e-copy of your ticket.
        This ticket can be printed.
      </p>
    ),
  },
  {
    question: "Q. Will I have to pay extra when I book tickets online?",
    answer: (
      <p>No, no extra charges are levied when you book the tickets online.</p>
    ),
  },
  {
    question: "Q. I have applied the promo code, but did not receive any cashback. What do I do?",
    answer: (
      <p>
        Firstly, please check your order history and ensure that the promo code
        is applied. If it is applied successfully, the cashback amount would be
        credited in your account within 24 hours of the successful transaction.
      </p>
    ),
  },
  {
    question: "Q. My money has been deducted, but the ticket was not booked. Kindly help.",
    answer: (
      <p>
        We’re sorry for the inconvenience. Please share a screenshot of the
        concerned issue with the Customer Care and we will fix the issue at the
        earliest.
      </p>
    ),
  },
  {
    question: "Q. Why am I not able to pay through a specific bank/Net banking/card?",
    answer: (
      <p>
        You must have probably exceeded the allowed transaction limit of your
        account. For details, please contact our Customer Care.
      </p>
    ),
  },
  {
    question: "Q. Will I get a refund in case of a failed transaction?",
    answer: (
      <p>
        Yes, if the booking is not successful and the money is debited from your
        account, the amount will be refunded in 15 minutes.
      </p>
    ),
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F5F7FA] py-10 px-5 md:px-0">
      <div className="max-width-[1170px] mx-auto container">
        <h2 className="text-[18px] md:text-[20px] font-bold text-[#000000] mb-6 leading-[1.2]">
          Frequently asked questions
        </h2>

        <div className="space-y-[10px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-[#E8EDF3] rounded-[8px] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between px-5 py-[18px] text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-[14px] md:text-[15px] font-semibold text-[#000000] leading-[1.4] pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 text-[#666666]">
                    {isOpen ? (
                      <ChevronUp strokeWidth={1.5} size={20} />
                    ) : (
                      <ChevronDown strokeWidth={1.5} size={20} />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <div className="px-5 pb-[20px] text-[13px] md:text-[14px] leading-[1.6] text-[#666666] border-t border-[#F5F7FA] pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SEO Text Block below FAQ - Based on screenshots showing combined container layout */}
        <div className="mt-10 bg-white border border-[#E8EDF3] rounded-[12px] p-6 text-[#666666]">
          <h2 className="text-[18px] font-bold text-[#000000] mb-4">Book Bus Tickets with Rupeedo</h2>
          <p className="text-[14px] mb-4">
            Now, <strong className="text-[#333]">book your bus tickets</strong> on Rupeedo and make your bus booking experience smoother and more affordable. Rupeedo allows you to <strong className="text-[#333]">book tickets</strong> from anywhere in India at the lowest price.
          </p>
          <p className="text-[14px] mb-4">
            To book your bus tickets on Rupeedo, just fill in the requisite information in the required fields and customise your trip. Rupeedo gives you the privilege to plan your trip on your own. We provide you an array of options for your travel. You can choose sleeper, semi-sleeper, AC/non-AC, or any other type of bus you prefer, for your trip. You can search for availability of the bus by entering the time and date of the ticket reservation. We also facilitate you to choose the seat you want from all available seats in the bus.
          </p>
          <p className="text-[14px] mb-6">
            Thanks to our autofill function, you don’t have to enter your details while doing your bookings again. Advanced traveller details prediction will prompt profile information based on your past ticket reservation history.
          </p>

          <h2 className="text-[18px] font-bold text-[#000000] mb-4">Easy Booking and Payment Options</h2>
          <p className="text-[14px] mb-4">
            Rupeedo ensures smooth payment experience for the users by making wallet payment secure and quicker. On Rupeedo, you can book your bus tickets in less than a minute without any hassle. Make sure that you have enough balance in your Rupeedo wallet, as it helps you in faster checkout. Having a registered Rupeedo wallet can also offer you loads of benefits.
          </p>
          <p className="text-[14px] mb-6">
            You also get the ease of selecting from other payment options like Debit/Credit Card or Net Banking. In case of failed booking, your money is refunded back to your wallet in less than 15 minutes. For any assistance, you can visit our dedicated 24/7 helpline service on <a href="https://m.p-y.tm/hlpsprt" className="text-[#00BAF2]">https://m.p-y.tm/hlpsprt</a> for helpline numbers and any kind of customer support. So, skip the long queues at the bus booking counters now and book tickets on Rupeedo, from the comfort of your home.
          </p>

          <h2 className="text-[18px] font-bold text-[#000000] mb-4">Why Make Bus Reservations With Rupeedo</h2>
          <p className="text-[14px] mb-4">
            Rupeedo has an edge over the other online bus ticket booking platforms in India as we keep implementing new features keeping in mind the behaviour of our users and the common bus passenger. From Non-AC buses to Volvo AC buses and other luxury buses, you can book all types of bus tickets on Rupeedo.
          </p>
          <ul className="text-[14px] space-y-1 list-disc pl-5 mb-4">
            <li>Free Cancellation</li>
            <li>Instant Refunds</li>
            <li>Easy & Quick Bus Booking</li>
            <li>Exciting Cashback & Bus Offers</li>
            <li>Best Price Assured</li>
            <li>24/7 Customer Assistance</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;