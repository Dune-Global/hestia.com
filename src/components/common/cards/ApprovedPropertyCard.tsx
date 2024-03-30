import Image from "next/image";
import React from "react";
import { MdPerson } from "react-icons/md";
import { BiSolidMessage } from "react-icons/bi";
import { Button } from "@/components/ui/button";

interface ApprovedPropertyCardProps {
  id: number;
  image: string;
  name: string;
  location: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  activeTenants: number;
  bookingRequests: number;
  handleDelete?: () => void;
  handleActiveTenants?: () => void;
  handleBookingRequests?: () => void;
}

const ApprovedPropertyCard: React.FC<ApprovedPropertyCardProps> = ({
  id,
  image,
  name,
  location,
  bedrooms,
  beds,
  bathrooms,
  activeTenants,
  bookingRequests,
  handleDelete,
  handleActiveTenants,
  handleBookingRequests,
}) => {
  return (
    <div className="p-4 flex flex-col gap-1 border border-hgray-400 rounded-lg max-w-360 min-w-[246px]">
      <div>
        <Image
          src={image}
          alt={name}
          width={1000}
          height={100}
          className="cover"
        />
      </div>
      <div className="text-lg pt-2 font-medium">{name}</div>
      <div className="text-hgray-500">{location}</div>
      <div className="flex text-sm md:text-xs lg:text-sm gap-1 pb-2 text-hgray-500 flex-1">
        <div>{bedrooms} bedroom</div>
        <div>-</div>
        <div>{beds} beds</div>
        <div>-</div>
        <div>{bathrooms} bathroom</div>
      </div>
      <div>
        <div className="flex gap-3">
          <div>
            <Button variant="outline" size="sm" onClick={handleDelete}>
              Delete
            </Button>
          </div>
          <div>
            <Button variant="outline" size="freeSize" onClick={handleActiveTenants}>
              <div className="flex items-center gap-2">
                <div>
                  <MdPerson size={24} />
                </div>
                <div>{activeTenants}</div>
              </div>
            </Button>
          </div>
          <div>
            <Button variant="outline" size="freeSize">
              <div className="flex items-center gap-2">
                <div>
                  <BiSolidMessage size={20} onClick={handleBookingRequests}/>
                </div>
                <div>{bookingRequests}</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovedPropertyCard;