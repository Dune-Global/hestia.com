import React from 'react'
type Props = {
    hostelName: string;
    mobileNumber: string;
    bedrooms: number;
    bathrooms: number;
    address: string;
    imageUrl: string;
}

export default function MapPlaceDetailsCard({ hostelName, mobileNumber, bedrooms, bathrooms, address, imageUrl }: Readonly<Props>) {
    return (
        <div className='w-full border-b border-gray-400 flex flex-row py-5 px-3 gap-4 justify-between'>
            <div className='flex flex-col gap-1'>
                <h2 className='text-base'>
                    {hostelName}
                </h2>
                <div className='flex flex-col text-xs text-gray-500 max-w-56'>
                    <h3>Hostel | {mobileNumber}</h3>
                    <span>{bedrooms} Bedrooms | {bathrooms} Bathroom</span>
                    <span>
                        {address}
                    </span>
                </div>
            </div>
            <div>
                <img className='w-20 h-20 rounded-md object-cover' src={imageUrl} alt="location" />
            </div>
        </div>
    )
}