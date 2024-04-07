"use client";

import React, { useEffect, useState } from "react";
import { Properties } from "@/data/properties";
import PageHeader from "@/components/common/layout/PageHeader";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { MdPerson } from "react-icons/md";
import { BiSolidMessage } from "react-icons/bi";
import PropertyCard from "@/components/common/cards/PropertyCard";
import { Property } from "@/types/property";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getLandlordLatest } from "@/helpers/api/landlord/dashbord";
import Loader from "@/components/common/layout/loader";

interface PropertiesResponse {
  allProperties: Property[];
  approvedProperties: Property[];
}

export default function ApprovedPropertiesPage() {
  const [properties, setProperties] = useState<PropertiesResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const { data: session, status: sessionStatus }: any = useSession();

  useEffect(() => {
    if (sessionStatus === "loading") return;

    if (!session || session.user.role !== "landlord") {
      router.push("/landlord/sign-in");
    } else {
      const fetchData = async () => {
        const response = await getLandlordLatest(session.user.id, "approve");
        setProperties(response.data as PropertiesResponse);
        setLoading(false);
      };

      fetchData();
    }
  }, [session, sessionStatus, router]);

  if (loading) {
    return <Loader />;
  }

  const handleCardPress = (id: string) => {
    router.push(`/landlord/approved-properties/${id}`);
  };

  return (
    <>
      <PageHeader title="Approved Properties" />
      <div className="pb-16 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-8">
        {properties!.approvedProperties.length > 0 ? (
          properties!.approvedProperties.map((property: any) => (
            <div
              key={property.id}
              className="border border-hgray-400 rounded-lg"
            >
              <button onClick={() => { handleCardPress(property._id) }}>
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
                  <Button variant="outlineGray" size="sm">
                    Delete
                  </Button>
                </div>
                <div>
                  <Button variant="outlineGray" size="freeSize">
                    <div className="flex items-center gap-2">
                      <div>
                        <MdPerson size={24} />
                      </div>
                      <div>{property.activeTenants}</div>
                    </div>
                  </Button>
                </div>
                <div>
                  <Button variant="outlineGray" size="freeSize">
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
          ))
        ) : (
          <p>No approved property available</p>
        )}
      </div>
    </>
  );
}
