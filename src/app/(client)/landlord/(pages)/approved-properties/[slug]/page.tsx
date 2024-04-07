"use client"

import FeatureCard from '@/components/common/cards/FeatureCard'
import PageHeader from '@/components/common/layout/PageHeader'
import HostelGallery from '@/components/landLord/HostelGallery'
import HostelPerks from '@/components/landLord/HostelPerks'
import LandlordBookingRequestCard from '@/components/landLord/LandlordBookingRequestCard'
import React from 'react'

export default function page({ params }: { params: { slug: string } }) {
    return (
        <>
            <PageHeader title={params.slug} isSearch={false} />
            <div>
                <HostelGallery />

                <div className='flex flex-col lg:flex-row lg:justify-between lg:gap-10'>

                    <div className='lg:flex lg:flex-col lg:flex-1'>
                        <div className='flex gap-2 items-center border-t border-b border-gray-300 py-2 my-2'>
                            <img
                                src={`https://ui-avatars.com/api/?name=${params.slug}&background=random`}
                                className='w-7 h-7 rounded-full'
                                alt="profile"
                            />
                            <div className='text-xs'>
                                Hosted by Dilantham
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 my-5'>
                            <h3 className='text-lg'>Booking requests</h3>
                            <div>
                                <LandlordBookingRequestCard name='Dilanther Weeracommand' />
                                <LandlordBookingRequestCard name='Dilanther Weeracommand' />
                                <LandlordBookingRequestCard name='Dilanther Weeracommand' />
                                <LandlordBookingRequestCard name='Dilanther Weeracommand' />
                                <LandlordBookingRequestCard name='Dilanther Weeracommand' />
                                <LandlordBookingRequestCard name='Dilanther Weeracommand' />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5 items-center justify-center w-full lg:w-1/3 py-8 border-2 rounded-lg border-gray-300'>
                        <FeatureCard bottomText='Approved' variant="text" />
                        <FeatureCard bottomText='Active tenants' variant="text" text='2' />
                        <FeatureCard bottomText='Booking requests' variant="text" text='2' />
                        <FeatureCard bottomText='Accepted requests' variant="text" text='2' />
                    </div>

                </div>

                <div className='py-10'>
                    <h2 className='font-bold text-xl md:text-2xl md:py-2'>What this place offers</h2>
                    <div className='flex flex-col gap-2 md:gap-5 py-3'>
                        <HostelPerks title='Free Wifi' description='An area with free wifi' />
                        <HostelPerks title='TV' description='A dedicated TV for your entertainment' />
                        <HostelPerks title='Air Conditioning' description='Enjoy the breeze' />
                        <HostelPerks title='Exercise' description='An exercise area with gym equipments' />
                    </div>
                </div>

                <div>
                    <h2 className='font-bold text-xl md:text-2xl md:py-2'>Description</h2>
                    <div className='flex flex-col gap-2 py-5'>
                        <p className='text-sm md:text-base'>
                            Our luxurious villa "Green Parrot Beachvilla" is situated directly on a deserted long sandy beach. The "Green Parrot Beachvilla" for 4 persons 2 bedrooms, 2 bathrooms, luxurious living room and dining room with sea view, covered, wind-protected terrace, swimming pool 11 x 4 m and large garden was built in 2014 in European-Singhalese co-production according to international standards and is now under Sinhalese-German management.
                        </p>
                        <p className='text-sm md:text-base'>
                            For more than 4 guests bookable in separate advertisement "Green Parrot Beach Villa & Cube", the Green Parrot Beach Villa has been extended in August 2019 by another, independent building for 2 persons, the "Cube". In this building there is 1 large bedroom with a covered balcony and a fantastic view of the garden and the sea, 1 bathroom, 1 living room with kitchenette and dining area, 1 covered, wind-protected terrace with garden and sea view. Both the "Green Parrot Beachvilla" and the "Cube" offer a fantastic view of the large pool, the garden with shady palm trees and the sea
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}