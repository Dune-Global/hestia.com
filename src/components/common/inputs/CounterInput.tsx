"use client";

import React, { useState } from "react";

interface CounterInputProps {
  label: string;
}

const CounterInput: React.FC<CounterInputProps> = ({ label }) => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex justify-between items-center pb-8 border-b border-hgray-300">
      <span className="font-medium text-[18px] leading-[24px]">{label}</span>
      <div className="flex items-center">
        <button
          onClick={handleDecrement}
          className="rounded-full border border-hgray-400 w-7 h-7 flex justify-center items-center mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-hgray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
        </button>
        <span className="font-medium text-[18px] leading-[24px]  w-8 h-8 flex justify-center items-center rounded-full text-hgray-600 ">
          {count}
        </span>
        <button
          onClick={handleIncrement}
          className="rounded-full border border-hgray-400 w-7 h-7 flex justify-center items-center ml-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-hgray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CounterInput;
