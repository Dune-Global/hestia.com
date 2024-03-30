import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";


interface PendingPropertyCardProps {
  id: number;
  image: string;
  name: string;
  location: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  handleDelete?: () => void;
  handleEdit?: () => void;
}

const PendingPropertyCard: React.FC<PendingPropertyCardProps> = ({
  id,
  image,
  name,
  location,
  bedrooms,
  beds,
  bathrooms,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div className="p-4 flex flex-col gap-1 border border-hgray-400 rounded-lg max-w-80">
      <div>
        <Image
          src={image}
          alt={name}
          width={600}
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
      <div className="flex gap-3">
        <div>
          <Button variant="fillBlack" size="sm" onClick={handleEdit}>
            Edit
          </Button>
        </div>
        <div>
          <Button variant="outline" size="sm" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PendingPropertyCard;
