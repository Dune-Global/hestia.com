import React from "react";
import { Button } from "../ui/button";

type Props = {
  name: string;
};

export default function LandlordBookingRequestCard({ name }: Readonly<Props>) {
  return (
    <div className="flex flex-row gap-1 border-t border-gray-300 justify-between items-center py-5">
      <img
        src={`https://ui-avatars.com/api/?name=${name}&background=random`}
        className="w-8 h-8 rounded-full hidden md:block"
        alt="profile"
      />
      <span className="text-sm">{name}</span>
      <div className="flex gap-2 md:gap-10">
        <Button variant={"fillBlack"} size={"sm"}>
          Accept
        </Button>
        <Button variant={"outlineGray"} size={"sm"}>
          Decline
        </Button>
      </div>
    </div>
  );
}
