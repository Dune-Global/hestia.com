"use client"

import FeatureCard from '@/components/common/cards/FeatureCard'
import PageHeader from '@/components/common/layout/PageHeader'
import HostelGallery from '@/components/landLord/HostelGallery'
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
                            <h3>Booking requests</h3>
                            <div>
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
            </div>
        </>
    )
}