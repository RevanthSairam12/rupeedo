"use client";

import React, { useState } from "react";
import Image from "next/image";

const HeroSearch: React.FC = () => {
  const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [seatType, setSeatType] = useState<string | null>(null);
  const [showAC, setShowAC] = useState(false);
  const [selectedDate, setSelectedDate] = useState(4);

  const dates = [
    { day: 4, label: "Today", sub: "" },
    { day: 5, label: "Mon", sub: "" },
    { day: 6, label: "Tue", sub: "" },
    { day: 7, label: "Wed", sub: "" },
    { day: 8, label: "Thu", sub: "" },
  ];

  return (
    <div className="w-full bg-[#00BAF2] pt-[56px] pb-[30px] px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Banner Header Text & My Bookings */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[28px] font-bold text-white tracking-tight">
            Book bus tickets
          </h1>
          <div className="flex items-center gap-2 bg-black/10 hover:bg-black/20 transition-colors py-2 px-4 rounded-full cursor-pointer group">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/1cc6964b-5.svg"
              className="w-5 h-5 invert brightness-0"
              alt="Profile"
            />
            <span className="text-white font-semibold text-sm">My Bookings</span>
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/750b1381-6.svg"
              className="w-3 h-3 invert brightness-0"
              alt="Arrow"
            />
          </div>
        </div>

        {/* Main Search Widget Card */}
        <div className="bg-white rounded-[12px] p-[24px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:items-end">
            {/* Left Section: Filters & Inputs */}
            <div className="flex-1 space-y-6">
              {/* Trip Type Radio Buttons */}
              <div className="flex gap-8">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div
                    onClick={() => setTripType("one-way")}
                    className="relative flex items-center justify-center"
                  >
                    <img
                      src={
                        tripType === "one-way"
                          ? "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/8be1e51d-7.svg"
                          : "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/9df41009-8.svg"
                      }
                      className="w-5 h-5"
                      alt="radio"
                    />
                  </div>
                  <span className="text-sm font-semibold text-black">One Way</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div
                    onClick={() => setTripType("round-trip")}
                    className="relative flex items-center justify-center"
                  >
                    <img
                      src={
                        tripType === "round-trip"
                          ? "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/8be1e51d-7.svg"
                          : "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/9df41009-8.svg"
                      }
                      className="w-5 h-5"
                      alt="radio"
                    />
                  </div>
                  <span className="text-sm font-semibold text-black">Round trip</span>
                </label>
              </div>

              {/* Source & Destination Inputs */}
              <div className="flex items-center gap-0 w-full relative">
                <div className="flex-1 relative border-b border-[#EBEBEB] pb-1">
                  <label className="text-[12px] text-[#506D85] block mb-1">From</label>
                  <input
                    type="text"
                    placeholder="Enter Source City"
                    className="w-full text-[16px] font-bold text-black outline-none placeholder:text-[#8B99B3] placeholder:font-normal"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                  />
                </div>

                <div className="mx-4 cursor-pointer hover:scale-110 transition-transform">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/363f4432-9.svg"
                    alt="swap"
                    className="w-6 h-6"
                    onClick={() => {
                        const temp = source;
                        setSource(destination);
                        setDestination(temp);
                    }}
                  />
                </div>

                <div className="flex-1 relative border-b border-[#EBEBEB] pb-1">
                  <label className="text-[12px] text-[#506D85] block mb-1">To</label>
                  <input
                    type="text"
                    placeholder="Enter Destination City"
                    className="w-full text-[16px] font-bold text-black outline-none placeholder:text-[#8B99B3] placeholder:font-normal"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>

              {/* Seat Type & AC Filter */}
              <div className="space-y-3">
                <h2 className="text-[14px] font-bold text-black opacity-80">Seat type (optional)</h2>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex gap-2">
                    {["Seater", "Sleeper", "Semi-Sleeper"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setSeatType(seatType === type ? null : type)}
                        className={`text-[12px] font-semibold px-4 py-1.5 rounded-full border transition-all ${
                          seatType === type
                            ? "bg-[#00BAF2] text-white border-[#00BAF2]"
                            : "bg-white text-[#506D85] border-[#EBEBEB] hover:border-[#00BAF2]"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowAC(!showAC)}>
                    <div className="w-4 h-4 rounded-sm border border-[#EBEBEB] flex items-center justify-center p-0.5">
                      {showAC && (
                        <img 
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/icons/5b89ac5d-1.png"
                          className="w-full h-full object-contain"
                          alt="checked"
                        />
                      )}
                    </div>
                    <span className="text-[14px] text-black">Show AC Buses only</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section: Date Selection & Search Button */}
            <div className="w-full lg:w-[400px] flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-[12px] text-[#506D85]">Departure Date</span>
                <div className="flex items-center gap-1">
                  {dates.map((d) => (
                    <button
                      key={d.day}
                      onClick={() => setSelectedDate(d.day)}
                      className={`flex flex-col items-center justify-center min-w-[54px] h-[54px] rounded-lg border transition-all ${
                        selectedDate === d.day
                          ? "bg-white border-[#00BAF2] shadow-[0_2px_8px_rgba(0,186,242,0.15)] scale-105 z-10"
                          : "bg-[#F5F7F9] border-transparent hover:border-[#EBEBEB]"
                      }`}
                    >
                      <span className={`text-[16px] font-bold ${selectedDate === d.day ? "text-[#00BAF2]" : "text-black"}`}>
                        {d.day}
                      </span>
                      <span className="text-[10px] uppercase text-[#8B99B3] font-semibold">
                        {d.label}
                      </span>
                    </button>
                  ))}
                  
                  <button className="flex flex-col items-center justify-center min-w-[54px] h-[54px] rounded-lg border border-transparent bg-[#F5F7F9] hover:border-[#EBEBEB]">
                    <img
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c0881c49-af44-4505-aec7-1c3bed3abb9f-tickets-paytm-com/assets/svgs/8bc99af5-10.svg"
                      className="w-5 h-5 mb-1"
                      alt="calendar"
                    />
                    <span className="text-[10px] uppercase text-[#8B99B3] font-semibold leading-none">
                      Calendar
                    </span>
                  </button>
                </div>
              </div>

              <button className="w-full h-[48px] bg-[#00BAF2] hover:bg-[#00a6d9] text-white font-bold text-[18px] rounded-lg shadow-[0_4px_12px_rgba(0,186,242,0.3)] transition-all">
                Search Buses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;