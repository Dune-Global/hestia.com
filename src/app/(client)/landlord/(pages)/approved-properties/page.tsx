import React from "react";
import { Properties } from "@/data/properties";
import PageHeader from "@/components/common/layout/PageHeader";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { MdPerson } from "react-icons/md";
import { BiSolidMessage } from "react-icons/bi";
import PropertyCard from "@/components/common/cards/PropertyCard";

export default function ApprovedPropertiesPage() {
  return (
    <>
      <PageHeader title="Approved Properties" />
      <div className="pb-16 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-8">
        {Properties.map((property) => (
          <div key={property.id} className="border border-hgray-400 rounded-lg">
            <PropertyCard
              id={property.id}
              image={property.image}
              name={property.name}
              location={property.location}
              bedrooms={property.bedrooms}
              beds={property.beds}
              bathrooms={property.bathrooms}
            />
            <div className="flex gap-3 mx-4 mb-4">
              <div>
                <Button variant="outline" size="sm">
                  Delete
                </Button>
              </div>
              <div>
                <Button variant="outline" size="freeSize">
                  <div className="flex items-center gap-2">
                    <div>
                      <MdPerson size={24} />
                    </div>
                    <div>{property.activeTenants}</div>
                  </div>
                </Button>
              </div>
              <div>
                <Button variant="outline" size="freeSize">
                  <div className="flex items-center gap-2">
                    <div>
                      <BiSolidMessage size={20} />
                    </div>
                    <div>{property.bookingRequests}</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
