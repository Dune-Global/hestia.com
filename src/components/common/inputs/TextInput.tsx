"use client";

import React, { useState } from "react";

interface InputProps {
  placeholder: string;
}

const TextInput: React.FC<InputProps> = ({ placeholder }) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [hasContent, setHasContent] = useState<boolean>(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasContent(event.target.value !== "");
  };

  return (
    <div className="relative">
      <input
        type="text"
        className={`w-full px-4 pt-6 pb-2 border border-hgray-600 rounded-lg focus:outline-none ${
          focused ? "border-hgray-800" : ""
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <label
        className={`absolute top-2 left-0 px-3 py-1 transition-all text-hgray-400 ${
          focused || hasContent
            ? "-translate-y-2 -translate-x-0 text-sm"
            : "translate-y-1 translate-x-1 text-base"
        } pointer-events-none`}
        style={{ transformOrigin: "top left" }}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default TextInput;
