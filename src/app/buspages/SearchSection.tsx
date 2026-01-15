"use client";

import React, { useState } from "react";
import Image from "next/image";

const SearchSection = () => {
  const [tripType, setTripType] = useState<"oneWay" | "roundTrip">("oneWay");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [seatTypes, setSeatTypes] = useState<string[]>([]);
  const [showACOnly, setShowACOnly] = useState(false);
  const [selectedDate, setSelectedDate] = useState(4); // Default to "Today" based on screenshot

  const toggleSeatType = (type: string) => {
    setSeatTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const dates = [
    { day: 4, label: "Today" },
    { day: 5, label: "Mon" },
    { day: 6, label: "Tue" },
    { day: 7, label: "Wed" },
    { day: 8, label: "Thu" },
  ];

  return (
    <section className="bg-paytm-blue pt-14 pb-8 px-4 md:px-0">
      <div className="container max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-white text-[32px] font-bold m-0 leading-tight">
            Book bus tickets
          </h1>
          <div className="flex items-center bg-white/10 px-4 py-2 rounded-md cursor-pointer hover:bg-white/20 transition-standard">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/1cc6964b-5.svg"
              className="w-5 h-5 mr-2"
              alt="ProfileIcon"
            />
            <span className="text-white text-sm font-semibold">My Bookings</span>
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/750b1381-6.svg"
              className="w-4 h-4 ml-2"
              alt="ArrowRight"
            />
          </div>
        </div>

        <div className="bg-white rounded-[12px] p-6 shadow-card">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 space-y-6">
              {/* Trip Type Radio Buttons */}
              <div className="flex items-center gap-8">
                <label className="flex items-center cursor-pointer group">
                  <div 
                    className="relative"
                    onClick={() => setTripType("oneWay")}
                  >
                    <img
                      src={
                        tripType === "oneWay"
                          ? "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/8be1e51d-7.svg"
                          : "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/9df41009-8.svg"
                      }
                      alt={tripType === "oneWay" ? "Selected" : "Unselected"}
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="ml-2 text-sm font-semibold text-text-primary">One Way</span>
                </label>
                <label className="flex items-center cursor-pointer group">
                  <div 
                    className="relative"
                    onClick={() => setTripType("roundTrip")}
                  >
                    <img
                      src={
                        tripType === "roundTrip"
                          ? "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/8be1e51d-7.svg"
                          : "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/9df41009-8.svg"
                      }
                      alt={tripType === "roundTrip" ? "Selected" : "Unselected"}
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="ml-2 text-sm font-semibold text-text-primary">Round trip</span>
                </label>
              </div>

              {/* From/To Inputs */}
              <div className="flex items-center gap-0 relative">
                <div className="flex-1 relative group border-b border-border">
                  <input
                    type="text"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full pt-6 pb-2 text-[16px] font-semibold text-text-primary focus:outline-none bg-transparent"
                    placeholder=" "
                    id="from-input"
                  />
                  <label
                    htmlFor="from-input"
                    className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                        from ? "top-1 text-xs text-text-secondary" : "top-5 text-[16px] text-text-caption"
                    }`}
                  >
                    From
                  </label>
                </div>

                <div 
                  className="mx-4 cursor-pointer hover:rotate-180 transition-transform duration-300 z-10"
                  onClick={handleSwap}
                >
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/363f4432-9.svg"
                    alt="swap"
                    className="w-8 h-8"
                  />
                </div>

                <div className="flex-1 relative group border-b border-border">
                  <input
                    type="text"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="w-full pt-6 pb-2 text-[16px] font-semibold text-text-primary focus:outline-none bg-transparent"
                    placeholder=" "
                    id="to-input"
                  />
                  <label
                    htmlFor="to-input"
                    className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                        to ? "top-1 text-xs text-text-secondary" : "top-5 text-[16px] text-text-caption"
                    }`}
                  >
                    To
                  </label>
                </div>
              </div>

              {/* Seat Type Filters */}
              <div className="space-y-3">
                <h3 className="text-[14px] font-semibold text-text-secondary">
                  Seat type (optional)
                </h3>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex gap-2">
                    {["Seater", "Sleeper", "Semi-Sleeper"].map((type) => (
                      <button
                        key={type}
                        onClick={() => toggleSeatType(type)}
                        className={`px-4 py-2 border rounded-md text-sm font-semibold transition-standard ${
                          seatTypes.includes(type)
                            ? "border-paytm-blue text-paytm-blue bg-paytm-blue/5"
                            : "border-border text-text-secondary hover:border-text-caption"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center cursor-pointer select-none" onClick={() => setShowACOnly(!showACOnly)}>
                    <div className="mr-2">
                        <img 
                            src={showACOnly ? "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/icons/5b89ac5d-1.png" : "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/icons/5b89ac5d-1.png"} 
                            className={`w-4 h-4 rounded-sm border ${showACOnly ? 'opacity-100 bg-paytm-blue border-paytm-blue' : 'opacity-40 grayscale border-text-caption'}`}
                            alt="checkbox"
                        />
                    </div>
                    <span className="text-sm font-semibold text-text-secondary">Show AC Buses only</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Date Selection and Search Button */}
            <div className="lg:w-[420px] flex flex-col justify-between">
              <div>
                <div className="text-[12px] font-semibold text-text-secondary mb-3 uppercase tracking-wider">
                  Departure Date
                </div>
                <div className="flex items-stretch border border-border rounded-md overflow-hidden bg-[#FBFBFB]">
                  {dates.map((date) => (
                    <div
                      key={date.day}
                      onClick={() => setSelectedDate(date.day)}
                      className={`flex-1 flex flex-col items-center justify-center py-2 cursor-pointer transition-standard border-r border-border last:border-r-0 ${
                        selectedDate === date.day
                          ? "bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1)] z-10"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <span className={`text-[16px] font-bold ${selectedDate === date.day ? "text-paytm-blue" : "text-text-primary"}`}>
                        {date.day}
                      </span>
                      <span className={`text-[11px] font-semibold ${selectedDate === date.day ? "text-paytm-blue" : "text-text-secondary"}`}>
                        {date.label}
                      </span>
                    </div>
                  ))}
                  <div className="flex-1 flex flex-col items-center justify-center py-2 cursor-pointer hover:bg-gray-50 bg-[#FBFBFB]">
                    <img
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/8bc99af5-10.svg"
                      alt="calendar"
                      className="w-5 h-5 mb-0.5"
                    />
                    <span className="text-[11px] font-semibold text-text-secondary">Calendar</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="w-full bg-paytm-blue hover:bg-[#00A5D9] text-white text-[16px] font-bold py-4 rounded-md shadow-lg transition-all active:scale-[0.98]">
                  Search Buses
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;