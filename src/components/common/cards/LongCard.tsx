import React from "react";

interface LongCardProps {
  svg: React.ReactElement;
  text: string;
  bottomText: string;
  selected: boolean;
  onClick: () => void;
}

const LongCard: React.FC<LongCardProps> = ({
  svg,
  text,
  bottomText,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`max-w-[740px] min-h-[115px] bg-white border-2 border-hgray-300 rounded-xl py-4 px-6 flex justify-between items-center cursor-pointer ${
        selected ? "bg-gray-200" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col h-full gap-2">
        <span className="font-medium text-[18px] leading-[24px]">{text}</span>
        <span className="text-hgray-500 text-[16px] leading-[24px]">
          {bottomText}
        </span>
      </div>
      <div>{svg}</div>
    </div>
  );
};

export default LongCard;
