"use client"

import DashboardPropertyCard from "@/components/common/cards/DashboardPropertyCard";
import FeatureCard from "@/components/common/cards/FeatureCard";
import PageHeader from "@/components/common/layout/PageHeader";
import { totals } from "@/data/landlord/totals";

export default function Dashboard() {
    return (
        <>
            <PageHeader
                title="Dashboard"
                isSearch
                description="Welcome landlord! Check below to see an overview"
            />
            <div className="flex flex-col gap-5">
                <div className='border-2 border-gray-300 py-10 px-5 flex flex-wrap justify-evenly gap-5 rounded-lg'>
                    {
                        totals.map((item) => (
                            <FeatureCard key={item.id} variant='text' bottomText={item.bottomText} text={item.text} />
                        ))
                    }
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
                    <div className="flex flex-col gap-5 md:flex-row md:justify-evenly lg:justify-between lg:flex-1">

                        <div className='flex flex-col justify-center items-center p-10 border-2 border-gray-300 rounded-lg lg:flex-1'>
                            <h2 className='pb-5 text-xl font-bold text-center'>Last added property</h2>
                            <DashboardPropertyCard
                                imageSrc={"/assets/images/properties/property01.png"}
                                title={"Beachfront Villa"}
                                location={"Miami, Florida"}
                                bedrooms={1}
                                beds={2}
                                bathrooms={1}
                            />
                        </div>

                        <div className='flex flex-col justify-center items-center p-10 border-2 border-gray-300 rounded-lg lg:flex-1'>
                            <h2 className='pb-5 text-xl font-bold text-center'>Last approved property</h2>
                            <DashboardPropertyCard
                                imageSrc={"/assets/images/properties/property01.png"}
                                title={"Akuressa Villa"}
                                location={"Seeduwa, Florida"}
                                bedrooms={4}
                                beds={2}
                                bathrooms={1}
                            />
                        </div>

                    </div>
                    <div className='p-5 border-2 border-gray-300 rounded-lg lg:max-w-xs lg:flex-1'>
                        <h2 className='pb-5 text-xl font-bold text-center'>Bookings</h2>
                        <div>
                            <div className='flex flex-row justify-between items-center border-b-2 border-hgray-300 py-2'>
                                <div className='flex flex-row gap-2 md:gap-16 lg:gap-4 items-center'>
                                    <div className='w-8 h-8 rounded-full border-2' />
                                    <div className='text-sm text-hgray-500'>Dilantha Wijesinghe</div>
                                </div>
                                <div className='text-sm text-hgreen-400'>
                                    Approved
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}