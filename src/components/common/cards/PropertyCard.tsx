import Image from "next/image";
import React from "react";


interface PropertyCardProps {
  id: number;
  image: string;
  name: string;
  location: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  image,
  name,
  location,
  bedrooms,
  beds,
  bathrooms
}) => {
  return (
    <div className="p-4 flex flex-col gap-1">
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
    </div>
  );
};

export default PropertyCard;
