"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const FlightSearch = () => {
  const [activeTab, setActiveTab] = useState("Flights");
  const [tripType, setTripType] = useState("ow");

  const tabs = [
    {
      id: "Flights",
      label: "Flights",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/icons/22720698601946286-7.png",
      link: "https://tickets.paytm.com/flights/",
    },
    {
      id: "Bus",
      label: "Bus",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/icons/22720714168453281-8.png",
      link: "https://tickets.paytm.com/bus/",
    },
    {
      id: "Trains",
      label: "Trains",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/icons/22720736039116955-9.png",
      link: "https://tickets.paytm.com/trains/",
    },
    {
      id: "Intl. Flights",
      label: "Intl. Flights",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/icons/15632405671511461-10.png",
      link: "https://tickets.paytm.com/international-flights/",
    },
  ];

  return (
    <section className="w-full bg-[#f5f7fa] py-[60px]">
      <div className="container mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-[28px] md:text-[36px] font-bold text-black mb-3">Book flights, buses, trains & more</h2>
          <p className="text-[16px] md:text-[18px] text-[#506d85]">Compare routes, timings and fares for flights, buses, trains and international trips in one place.</p>
        </div>
        <div className="bg-white rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden">
            {/* Header Tabs Section */}
            <div className="flex flex-col md:flex-row items-center justify-between border-b border-[#ebebed] px-4 md:px-10 pt-6 gap-4 md:gap-0">
              <nav className="flex space-x-6 md:space-x-12 overflow-x-auto w-full md:w-auto no-scrollbar pb-2 md:pb-0">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col items-center pb-4 relative transition-colors duration-200 min-w-max ${
                      activeTab === tab.id ? "text-[#000000]" : "text-[#506d85]"
                    }`}
                  >
                    <div className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] mb-2 flex items-center justify-center transition-transform duration-200 hover:-translate-y-1">
                      <img
                        src={tab.icon}
                        alt={tab.label}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[12px] md:text-[14px] font-semibold tracking-tight">
                      {tab.label}
                    </span>
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#00baf2]" />
                    )}
                  </button>
                ))}
              </nav>
              <div className="pb-4 hidden md:block">
                <img
                  src="/Rupeedoimgs/banners/main-logo.png"
                  alt="travelLogo"
                  className="h-[32px]"
                />
              </div>
            </div>

            {/* Search Content */}
            <div className="px-4 md:px-10 py-8">
              {/* Trip Type Selector */}
              <div className="flex items-center space-x-6 md:space-x-8 mb-8">
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="tripType"
                    checked={tripType === "ow"}
                    onChange={() => setTripType("ow")}
                    className="hidden"
                  />
                  <span className={`w-5 h-5 rounded-full border-[2px] mr-2 flex items-center justify-center transition-colors ${tripType === "ow" ? "border-[#00baf2]" : "border-[#ebebed]"}`}>
                     {tripType === "ow" && <span className="w-2.5 h-2.5 rounded-full bg-[#00baf2]" />}
                  </span>
                  <span className={`text-[14px] md:text-[15px] font-semibold ${tripType === "ow" ? "text-black" : "text-[#506d85]"}`}>One Way</span>
                </label>
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="tripType"
                    checked={tripType === "rt"}
                    onChange={() => setTripType("rt")}
                    className="hidden"
                  />
                  <span className={`w-5 h-5 rounded-full border-[2px] mr-2 flex items-center justify-center transition-colors ${tripType === "rt" ? "border-[#00baf2]" : "border-[#ebebed]"}`}>
                     {tripType === "rt" && <span className="w-2.5 h-2.5 rounded-full bg-[#00baf2]" />}
                  </span>
                  <span className={`text-[14px] md:text-[15px] font-semibold ${tripType === "rt" ? "text-black" : "text-[#506d85]"}`}>Round Trip</span>
                </label>
              </div>

              {/* Input Grid */}
              <div className="grid grid-cols-12 gap-0 border border-[#ebebed] rounded-[10px] items-stretch overflow-hidden">
                {/* From/To Section */}
                <div className="col-span-12 lg:col-span-4 flex items-center divide-x divide-[#ebebed] border-b lg:border-b-0">
                  <div className="flex-1 p-4 cursor-pointer hover:bg-[#f5f7fa] transition-colors">
                    <span className="block text-[12px] text-[#506d85] mb-1">From</span>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-[16px] md:text-[18px] font-bold text-black">Delhi</span>
                      <span className="text-[12px] md:text-[14px] text-[#506d85] font-medium">(DEL)</span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32px] h-[32px] bg-white border border-[#ebebed] rounded-full flex items-center justify-center z-10 cursor-pointer shadow-sm hover:border-[#00baf2]">
                      <img 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/icons/e5e744ba_-11.png" 
                        alt="swap" 
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 p-4 cursor-pointer hover:bg-[#f5f7fa] transition-colors pl-6">
                    <span className="block text-[12px] text-[#506d85] mb-1">To</span>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-[16px] md:text-[18px] font-bold text-black">Mumbai</span>
                      <span className="text-[12px] md:text-[14px] text-[#506d85] font-medium">(BOM)</span>
                    </div>
                  </div>
                </div>

                {/* Dates Section */}
                <div className="col-span-12 lg:col-span-4 flex items-center divide-x divide-[#ebebed] border-b lg:border-b-0 lg:border-l border-[#ebebed]">
                  <div className="flex-1 p-4 cursor-pointer hover:bg-[#f5f7fa] transition-colors">
                    <span className="block text-[12px] text-[#506d85] mb-1">Depart</span>
                    <span className="text-[16px] md:text-[18px] font-bold text-black">Fri, 02 Jan 26</span>
                  </div>
                  <div className="flex-1 p-4 cursor-pointer hover:bg-[#f5f7fa] transition-colors">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[12px] text-[#506d85]">Return</span>
                    </div>
                    <span className="text-[16px] font-semibold text-[#00baf2]">Add Return</span>
                  </div>
                </div>

                {/* Passengers Section */}
                <div className="col-span-12 lg:col-span-4 flex flex-col md:flex-row items-stretch md:items-center lg:border-l border-[#ebebed]">
                  <div className="flex-1 p-4 cursor-pointer hover:bg-[#f5f7fa] transition-colors flex justify-between items-center group border-b md:border-b-0 md:border-r border-[#ebebed]">
                    <div>
                      <span className="block text-[12px] text-[#506d85] mb-1">Passenger & Class</span>
                      <div className="flex items-center">
                        <span className="text-[14px] md:text-[16px] font-bold text-black">1 Traveller, Economy</span>
                      </div>
                    </div>
                    <ChevronDown className="text-[#506d85] w-5 h-5 group-hover:text-[#00baf2]" />
                  </div>
                  <div className="p-0 m-0 w-full md:w-auto h-full flex">
                    <button className="w-full h-full bg-[#00baf2] text-white py-4 px-8 font-bold text-[16px] md:text-[18px] hover:bg-[#008cc9] transition-colors min-w-0 md:min-w-[180px] min-h-[60px] md:min-h-full flex items-center justify-center">
                      Request
                    </button>
                  </div>
                </div>
              </div>

              {/* Special Fares Section */}
              <div className="mt-8 flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-black mb-1">Special Fares (optional)</span>
                  <div className="flex items-center text-[#21c17a] text-[12px] font-bold">
                    <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-paytm-com/assets/icons/a6fdca89_-12.png" alt="savings" className="w-[14px] h-[14px] mr-1" />
                    Extra Savings
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-4">
                  <button className="flex flex-col items-start px-4 py-2 border border-[#ebebed] rounded-[8px] hover:border-[#00baf2] hover:bg-[#f5f7fa] transition-all min-w-[120px] md:min-w-[140px]">
                    <span className="text-[13px] md:text-[14px] font-semibold text-black">Armed Forces</span>
                    <span className="text-[11px] md:text-[12px] text-[#506d85]">Savings up to ₹600</span>
                  </button>
                  <button className="flex flex-col items-start px-4 py-2 border border-[#ebebed] rounded-[8px] hover:border-[#00baf2] hover:bg-[#f5f7fa] transition-all min-w-[120px] md:min-w-[140px]">
                    <span className="text-[13px] md:text-[14px] font-semibold text-black">Student</span>
                    <span className="text-[11px] md:text-[12px] text-[#506d85]">Extra baggage & special fares</span>
                  </button>
                  <button className="flex flex-col items-start px-4 py-2 border border-[#ebebed] rounded-[8px] hover:border-[#00baf2] hover:bg-[#f5f7fa] transition-all min-w-[120px] md:min-w-[140px]">
                    <span className="text-[13px] md:text-[14px] font-semibold text-black">Senior Citizen</span>
                    <span className="text-[11px] md:text-[12px] text-[#506d85]">Savings up to ₹600</span>
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
      
      <style jsx global>{`
        .rippleButton {
          position: relative;
          overflow: hidden;
          outline: none;
        }
      `}</style>
    </section>
  );
};

export default FlightSearch;