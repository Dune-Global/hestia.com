import React from "react";
import { Properties } from "@/data/properties";
import PropertyCard from "@/components/common/cards/PropertyCard";
import PageHeader from "@/components/common/layout/PageHeader";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";

export default function RemovedPropertiesPage() {
  return (
    <Container>
      <PageHeader title="Removed Properties" />
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
                  Reapprove
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
