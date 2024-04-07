"use client"

import React, { useEffect, useState } from 'react'
import FeatureCard from '@/components/common/cards/FeatureCard'
import PageHeader from '@/components/common/layout/PageHeader'
import HostelGallery from '@/components/landLord/HostelGallery'
import HostelPerks from '@/components/landLord/HostelPerks'
import LandlordBookingRequestCard from '@/components/landLord/LandlordBookingRequestCard'
import { getPropertyById } from '@/helpers/api/landlord/getPropertyById'
import GoogleMapView from '@/components/common/maps/GoogleMapView'

export default function PendingPropertyDetailsPage({ params }: Readonly<{ params: { slug: string } }>) {
    const [propertyName, setPropertyName] = useState<string>()
    const [propertyDescription, setPropertyDescription] = useState<string>();
    const [imageUrls, setImageUrls] = useState<string[]>([])
    const [propertyLocation, setPropertyLocation] = useState<string>()
    const [guests, setGuests] = useState<number>()
    const [bedrooms, setBedrooms] = useState<number>()
    const [bedsPerRoom, setBedsPerRoom] = useState<number>()
    const [bathrooms, setBathrooms] = useState<number>()
    const [landlordName, setLandlordName] = useState<string>()

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const res = await getPropertyById(params.slug)
                console.log("lati from details", res.property[0].address.googleMapLocation.latitude)
                console.log("longi from details", res.property[0].address.googleMapLocation.longitude)
                setPropertyName(res.property[0].name)
                setPropertyDescription(res.property[0].description)
                setImageUrls(res.property[0].images)
                setPropertyLocation(res.property[0].address.city)
                setGuests(res.property[0].basics.guests)
                setBedrooms(res.property[0].basics.bedrooms)
                setBedsPerRoom(res.property[0].basics.bedsPerRoom)
                setBathrooms(res.property[0].basics.bathrooms)
                const landlordFIrstName = res.property[0].landlord.fullName.split(' ')[0]
                setLandlordName(landlordFIrstName)


            } catch (error) {
                console.log("error from details", error)
            }
        }

        fetchDetails();
    }, [])

    return (
        <>
            <PageHeader title={propertyName!} isSearch={false} />
            <div>
                <HostelGallery
                    images={imageUrls}
                    propertyLocation={propertyLocation!}
                    guests={guests}
                    bedrooms={bedrooms}
                    bedsPerRoom={bedsPerRoom}
                    bathRooms={bathrooms}
                />

                <div className='flex flex-col lg:flex-row lg:justify-between lg:gap-10'>

                    <div className='lg:flex lg:flex-col lg:flex-1'>
                        <div className='flex gap-2 items-center border-t border-b border-gray-300 py-2 my-2'>
                            <img
                                src={`https://ui-avatars.com/api/?name=${params.slug}&background=random`}
                                className='w-7 h-7 rounded-full'
                                alt="profile"
                            />
                            <div className='text-xs'>
                                Hosted by {landlordName}
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
                    <div className='flex flex-col gap-2 py-3'>
                        <p className='text-sm md:text-base'>
                            {propertyDescription}
                        </p>
                    </div>
                </div>

                <div className='py-2'>
                    <h2 className='font-bold text-xl md:text-2xl md:py-3'>Where You Will Be</h2>
                    <div className='pt-2 pb-10 md:pb-16'>
                        <GoogleMapView id={params.slug} />
                    </div>
                </div>
            </div>
        </>
    )
}