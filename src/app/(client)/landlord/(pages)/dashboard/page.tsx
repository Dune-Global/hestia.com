"use client";

import DashboardPropertyCard from "@/components/common/cards/DashboardPropertyCard";
import FeatureCard from "@/components/common/cards/FeatureCard";
import PageHeader from "@/components/common/layout/PageHeader";
import LandLordBookigsCard from "@/components/landLord/LandLordBookigsCard";
import { bookings } from "@/data/landlord/landlordBookings";
import { totals } from "@/data/landlord/totals";
import {
  getLandlordLatest,
  getPropertyStatus,
} from "@/helpers/api/landlord/dashbord";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Property } from "@/types/property";
import Loader from "@/components/common/layout/loader";
import { useRouter } from "next/navigation";
import { ITotals } from "@/types/landlord-dashboard";

interface PropertiesResponse {
  allProperties: Property[];
  approvedProperties: Property[];
}

export default function Dashboard() {
  const [properties, setProperties] = useState<PropertiesResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [totals, setTotals] = useState<ITotals[]>([]);
  const router = useRouter();

  const { data: session, status: sessionStatus }: any = useSession();

  useEffect(() => {
    if (sessionStatus === "loading") return;

    if (!session || session.user.role !== "landlord") {
      router.push("/landlord/sign-in");
    } else {
      const fetchData = async () => {
        const response = await getLandlordLatest(session.user.id, "both");
        setProperties(response.data as PropertiesResponse);
        console.log(response.data);

        const statusResponse = await getPropertyStatus(session.user.id);
        if (statusResponse && statusResponse.data) {
          setTotals([
            {
              id: "1",
              text: String(statusResponse.data.pending),
              bottomText: "Pending",
            },
            {
              id: "2",
              text: String(statusResponse.data.approved),
              bottomText: "Approved",
            },
            {
              id: "3",
              text: String(statusResponse.data.rejected),
              bottomText: "Rejected",
            },
          ]);
        } else {
          console.error("Failed to fetch property status");
        }

        setLoading(false);
      };

      fetchData();
    }
  }, [session, sessionStatus, router]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <PageHeader
        title="Dashboard"
        isSearch
        description="Welcome landlord! Check below to see an overview"
      />
      <div className="flex flex-col gap-5 mb-5 md:mb-24">
        <div className="border-2 border-gray-300 py-10 px-5 flex flex-wrap justify-evenly gap-5 rounded-lg">
          {totals.map((item) => (
            <FeatureCard
              key={item.id}
              variant="text"
              bottomText={item.bottomText}
              text={item.text}
            />
          ))}
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
          <div className="flex flex-col gap-5 md:flex-row md:justify-evenly lg:justify-between lg:flex-1">
            <div className="flex flex-col justify-center items-center p-10 border-2 border-gray-300 rounded-lg lg:flex-1">
              <h2 className="pb-5 text-xl font-bold text-center">
                Last approved property
              </h2>
              {properties!.approvedProperties.length > 0 ? (
                <DashboardPropertyCard
                  imageSrc={properties!.approvedProperties[0].images[0]}
                  title={properties!.approvedProperties[0].name}
                  location={`${properties!.approvedProperties[0].address.line1
                    } ${properties!.approvedProperties[0].address.city}`}
                  bedrooms={properties!.approvedProperties[0].basics.bedrooms}
                  beds={
                    properties!.approvedProperties[0].basics.bedsPerRoom *
                    properties!.approvedProperties[0].basics.bedrooms
                  }
                  bathrooms={properties!.approvedProperties[0].basics.bathrooms}
                />
              ) : (
                <p>No approved property available</p>
              )}
            </div>

            <div className="flex flex-col justify-center items-center p-10 border-2 border-gray-300 rounded-lg lg:flex-1">
              <h2 className="pb-5 text-xl font-bold text-center">
                Last property
              </h2>
              {properties!.allProperties.length > 0 ? (
                <DashboardPropertyCard
                  imageSrc={properties!.allProperties[0].images[0]}
                  title={properties!.allProperties[0].name}
                  location={`${properties!.allProperties[0].address.line1} ${properties!.allProperties[0].address.city
                    }`}
                  bedrooms={properties!.allProperties[0].basics.bedrooms}
                  beds={
                    properties!.allProperties[0].basics.bedsPerRoom *
                    properties!.allProperties[0].basics.bedrooms
                  }
                  bathrooms={properties!.allProperties[0].basics.bathrooms}
                />
              ) : (
                <p>No property available</p>
              )}
            </div>
          </div>
          <div className="p-5 border-2 border-gray-300 rounded-lg lg:max-w-xs lg:flex-1">
            <h2 className="pb-5 text-xl font-bold text-center">Bookings</h2>
            <div>
              {bookings.slice(0, 8).map((booking) => (
                <LandLordBookigsCard
                  key={booking.id}
                  name={booking.name}
                  status={booking.status}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
