'use client'
import React, { useEffect, useState } from "react";
import PropertyCard from "@/components/common/cards/PropertyCard";
import PageHeader from "@/components/common/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { getProperties } from "@/helpers/api/warden/listProperties";
import { PropertyStatus } from "@/enum/Property";
import { Property } from "@/types/property";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Loader from "@/components/common/layout/loader";
import { updateProperty } from "@/helpers/api/warden/updateProperty";

export default function RemovedPropertiesPage() {
  const [properties, setProperties] = useState<Property[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const { data: session, status: sessionStatus }: any = useSession();

  const fetchProperties = async () => {
    const response = await getProperties(PropertyStatus.rejected);
    setProperties(response?.data.properties as Property[]);
    setLoading(false);
  };

  useEffect(() => {
    if (sessionStatus === "loading") return;

    if (!session || session.user.role !== "warden") {
      router.push("/warden/sign-in");
    } else {
      fetchProperties();
    }
  }, [session, sessionStatus, router]);

  if (loading) {
    return <Loader />;
  }

  const handleCardPress = (id: string) => {
    router.push(`/warden/removed-properties/${id}`);
  };

  const handleReapprove = async (id: string) => {
    const res: any = await updateProperty(id, PropertyStatus.Approved);
    if (res.status === 200) {
      fetchProperties();
    }
  };

  return (
    <>
      <PageHeader
        title="Removed Properties"
        description="Check below to see which of the properties you have removed"
      />
      <div className="pb-16 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-8">
        {properties && properties.length > 0 ? (
          properties.map((property: any) => (
            <div
              key={property._id}
              className="border border-hgray-400 rounded-lg"
            >
              <button
                onClick={() => {
                  handleCardPress(property._id);
                }}
              >
                <PropertyCard
                  id={property._id}
                  image={property.images[0]}
                  name={property.name}
                  location={`${property.address.line1}, ${property.address.city}`}
                  bedrooms={property.basics.bedrooms}
                  beds={property.basics.bedsPerRoom * property.basics.bedrooms}
                  bathrooms={property.basics.bathrooms}
                />
              </button>
              <div className="flex gap-3 mx-4 mb-4">
                <div>
                  <Button variant="outlineGray" size="sm" onClick={() => handleReapprove(property._id)}>
                    Reapprove
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No removed property available</p>
        )}
      </div>
    </>
  );
}