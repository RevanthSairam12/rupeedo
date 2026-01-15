"use client";

import React, { useState } from "react";

/**
 * RechargeForm Component
 * - Implements the main white recharge card for mobile prepaid/postpaid.
 * - Adheres strictly to the light theme, 10px radius, and standard box shadows.
 * - Uses Tailwind CSS for pixel-perfect styling based on computed styles.
 */

const operators = ["Airtel", "BSNL", "Jio", "VI"];

export default function RechargeForm() {
  const [rechargeType, setRechargeType] = useState<"prepaid" | "postpaid">("prepaid");
  const [mobileNumber, setMobileNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [amount, setAmount] = useState("");
  const [showOperatorDropdown, setShowOperatorDropdown] = useState(false);

  const handleMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow digits
    if (value.length <= 10) {
      setMobileNumber(value);
    }
  };

  const handleOperatorSelect = (op: string) => {
    setOperator(op);
    setShowOperatorDropdown(false);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  return (
    <div className="w-full max-w-[440px] bg-white rounded-[10px] p-[30px] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      {/* Title */}
      <h2 className="text-[20px] font-semibold text-black leading-[1.4] mb-[25px]">
        Recharge or Pay Mobile Bill
      </h2>

      {/* Radio Selection */}
      <div className="flex items-center gap-[30px] mb-[30px]">
        <label className="flex items-center cursor-pointer group">
          <div className="relative flex items-center justify-center p-1">
            <input
              type="radio"
              name="rechargeType"
              checked={rechargeType === "prepaid"}
              onChange={() => setRechargeType("prepaid")}
              className="appearance-none w-[18px] h-[18px] border-2 border-[#ebebeb] rounded-full checked:border-[#00baf2] transition-all cursor-pointer"
            />
            <div className={`absolute w-[10px] h-[10px] bg-[#00baf2] rounded-full transition-opacity ${rechargeType === "prepaid" ? "opacity-100" : "opacity-0"}`} />
          </div>
          <span className="ml-[10px] text-[16px] font-normal text-black">Prepaid</span>
        </label>

        <label className="flex items-center cursor-pointer group">
          <div className="relative flex items-center justify-center p-1">
            <input
              type="radio"
              name="rechargeType"
              checked={rechargeType === "postpaid"}
              onChange={() => setRechargeType("postpaid")}
              className="appearance-none w-[18px] h-[18px] border-2 border-[#ebebeb] rounded-full checked:border-[#00baf2] transition-all cursor-pointer"
            />
            <div className={`absolute w-[10px] h-[10px] bg-[#00baf2] rounded-full transition-opacity ${rechargeType === "postpaid" ? "opacity-100" : "opacity-0"}`} />
          </div>
          <span className="ml-[10px] text-[16px] font-normal text-black">Postpaid</span>
        </label>
      </div>

      {/* Input Fields Stack */}
      <div className="space-y-[28px] mb-[32px]">
        {/* Mobile Number */}
        <div className="relative group">
          <input
            type="text"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            maxLength={10}
            className="w-full text-[16px] text-black pt-[8px] pb-[8px] border-b border-[#ebebeb] focus:border-[#00baf2] outline-none bg-transparent transition-colors peer"
            placeholder=" "
          />
          <label className="absolute left-0 top-[8px] text-[16px] text-[#4a4a4a] transition-all pointer-events-none peer-focus:top-[-12px] peer-focus:text-[12px] peer-focus:text-[#00baf2] peer-[:not(:placeholder-shown)]:top-[-12px] peer-[:not(:placeholder-shown)]:text-[12px]">
            Mobile Number
          </label>
          {mobileNumber.length > 0 && mobileNumber.length < 10 && (
            <span className="absolute right-0 top-[8px] text-[12px] text-[#ff6b6b]">
              {10 - mobileNumber.length} digits remaining
            </span>
          )}
        </div>

        {/* Operator */}
        <div className="relative group">
          <div 
            onClick={() => setShowOperatorDropdown(!showOperatorDropdown)}
            className="w-full text-[16px] text-black pt-[8px] pb-[8px] border-b border-[#ebebeb] cursor-pointer flex items-center justify-between"
          >
            <span className={operator ? "text-black" : "text-[#4a4a4a]"}>
              {operator || "Select Operator"}
            </span>
            <svg className={`w-4 h-4 text-[#4a4a4a] transition-transform ${showOperatorDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {showOperatorDropdown && (
            <div className="absolute top-full left-0 right-0 bg-white border border-[#ebebeb] rounded-[8px] mt-1 shadow-lg z-10">
              {operators.map((op) => (
                <div
                  key={op}
                  onClick={() => handleOperatorSelect(op)}
                  className="px-4 py-3 text-[14px] text-black hover:bg-[#f5f7fa] cursor-pointer transition-colors first:rounded-t-[8px] last:rounded-b-[8px]"
                >
                  {op}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Amount & Browse Plans */}
        <div className="relative space-y-1">
          <div className="relative group flex items-end">
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              className="w-full text-[16px] text-black pt-[8px] pb-[8px] border-b border-[#ebebeb] focus:border-[#00baf2] outline-none bg-transparent transition-colors peer pr-[100px]"
              placeholder=" "
            />
            <label className="absolute left-0 top-[8px] text-[16px] text-[#4a4a4a] transition-all pointer-events-none peer-focus:top-[-12px] peer-focus:text-[12px] peer-focus:text-[#00baf2] peer-[:not(:placeholder-shown)]:top-[-12px] peer-[:not(:placeholder-shown)]:text-[12px]">
              Amount
            </label>
            
            <div className="absolute right-0 bottom-3 text-right">
              <button className="text-[12px] font-semibold text-[#00baf2] hover:underline block leading-tight">
                Browse Plans
              </button>
              <span className="text-[10px] text-[#4a4a4a] block leading-tight">of all operators</span>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button 
        className="w-full bg-[#00baf2] text-white text-[16px] font-semibold py-[12px] px-[24px] rounded-[10px] shadow-sm hover:bg-[#008cc9] active:scale-[0.99] transition-all"
        onClick={() => console.log('Proceeding with recharge')}
      >
        Proceed to Recharge
      </button>

      {/* Horizontal divider spacing element from structure */}
      <div className="mt-[20px] w-full h-[1px]" />
    </div>
  );
}