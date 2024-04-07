// FeatureCard.tsx

import React from "react";

interface FeatureCardProps {
  variant: "svg" | "text";
  svg?: React.ReactElement;
  text?: string;
  bottomText: string;
  onSelect?: () => void;
  selected?: boolean;
  approved?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  variant,
  svg,
  text,
  bottomText,
  onSelect,
  selected = false,
  approved = false,
}) => {
  const handleClick = () => {
    if (onSelect) {
      onSelect();
    }
  };

  return (
    <div
      className={`w-[190px] min-w-[190px] min-h-[115px] border-2 rounded-xl p-3.5 flex flex-col items-center justify-between cursor-pointer ${
        selected ? "bg-gray-200" : "bg-white"
      } ${approved ? "border-green-600" : "border-gray-400"}`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center h-full">
        {variant === "svg" ? (
          <div>{svg}</div>
        ) : (
          <div className="h-3/4">
            <span className="font-bold text-[20px]">{text}</span>
          </div>
        )}
      </div>
      <div
        className={`font-medium text-lg text-center ${
          approved ? "text-green-600" : "text-gray-900"
        }`}
      >
        {bottomText}
      </div>
    </div>
  );
};

export default FeatureCard;
