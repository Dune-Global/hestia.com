import React from 'react'
type Props = {
    images: string[];
    propertyLocation: string;
    guests?: number;
    bedrooms?: number;
    bedsPerRoom?: number;
    bathRooms?: number;
}

export default function HostelGallery({ images, propertyLocation, guests, bedrooms, bedsPerRoom, bathRooms }: Readonly<Props>) {
    return (
        <div>
            <div className='flex flex-col md:flex-row gap-1 w-full rounded-lg'>

                <div className='flex-1'>
                    <img
                        src={images[0]}
                        className='w-full h-56 md:h-full object-cover rounded-t-lg md:rounded-tr-none md:rounded-bl-lg'
                        alt="Beachfront Villa"
                    />
                </div>

                <div className='flex flex-col gap-1 md:max-w-md lg:max-w-2xl'>

                    <div className='flex flex-row w-full gap-1'>
                        <img
                            src={images[1]}
                            className='w-1/2 h-36 md:h-full object-cover'
                            alt='Beachfront Villa'
                        />
                        <img
                            src={images[2]}
                            className='w-1/2 h-36 md:h-full object-cover md:rounded-tr-lg'
                            alt='Beachfront Villa'
                        />
                    </div>

                    <div className='flex flex-row w-full gap-1'>
                        <img
                            src={images[3]}
                            className='w-1/2 h-36 md:h-full object-cover rounded-bl-lg md:rounded-bl-none'
                            alt='Beachfront Villa'
                        />
                        <img
                            src={images[4]}
                            className='w-1/2 h-36 md:h-full object-cover rounded-br-lg'
                            alt='Beachfront Villa'
                        />
                    </div>

                </div>

            </div>
            <div className='py-3'>
                <div className='flex flex-col gap-1 md:gap-0'>
                    <h4 className='text-sm md:text-lg'>Room in hostel in <span>{propertyLocation}</span>, Sri Lanka</h4>
                    <div className='flex text-xs md:text-base text-gray-500 gap-1'>
                        <span>{guests?.toString()} Guests</span>
                        <span>-</span>
                        <span>{bedrooms?.toString()} Bedroom</span>
                        <span>-</span>
                        <span>{bedsPerRoom?.toString()} Bed</span>
                        <span>-</span>
                        <span>{bathRooms?.toString()} Baths</span>
                    </div>
                </div>
            </div>
        </div>
    )
}