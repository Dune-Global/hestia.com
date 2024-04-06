"use client";

import React from "react";

interface FeatureCardProps {
    variant: "svg" | "text";
    svg?: React.ReactElement;
    text?: string;
    bottomText: string;
    clickable?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    variant,
    svg,
    text,
    bottomText,
    clickable = false,
}) => {
    return (
        <div
            className={`w-[190px] min-w-[190px]  min-h-[115px] bg-white border-2 border-gray-400 rounded-xl p-3.5 flex flex-col  items-center ${variant === "svg" ? "justify-between gap-2" : "justify-evenly"
                } ${clickable ? "cursor-pointer" : "cursor-default"}`}
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
            <div className="text-gray-900 font-medium text-lg text-center">{bottomText}</div>
        </div>
    );
};

export default FeatureCard;