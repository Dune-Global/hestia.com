import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

type Props = {
    imageSrc: string;
    title: string;
    location: string;
    bedrooms: number;
    beds: number;
    bathrooms: number;
    onViewClick?: () => void;
    onEditClick?: () => void;
}

export default function DashboardPropertyCard({
    imageSrc,
    title,
    location,
    bedrooms,
    beds,
    bathrooms,
    onViewClick,
    onEditClick
}: Props) {
    return (
        <div className='border-2 rounded-md border-gray-300 p-5 max-w-md'>
            <Image src={imageSrc} width={300} height={500} alt='Property' />
            <div className='flex flex-col gap-1 pt-4'>
                <h2 className='text-xl'>{title}</h2>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-gray-400 text-sm'>{location}</h3>
                        <div className='flex justify-between text-gray-400 text-xs md:text-sm max-w-48 md:max-w-60'>
                            <p>{bedrooms} bedroom{bedrooms !== 1 ? 's' : ''}</p>
                            <span>-</span>
                            <p>{beds} bed{beds !== 1 ? 's' : ''}</p>
                            <span>-</span>
                            <p>{bathrooms} bathroom{bathrooms !== 1 ? 's' : ''}</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <Button variant='fillBlack' size={"sm"} onClick={onViewClick}>View</Button>
                        <Button variant='outline' size={"sm"} onClick={onEditClick}>Edit</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
