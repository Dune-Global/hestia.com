import React from 'react'
import { Wifi } from 'lucide-react';

type Props = {
    title: string;
    description: string;
}

export default function HostelPerks({ title, description }: Readonly<Props>) {
    return (
        <div className='flex items-center gap-7 md:gap-10'>
            <Wifi size={32} />
            <div className='flex flex-col'>
                <span className='md:text-xl'>{title}</span>
                <span className='text-sm md:text-base text-gray-500'>{description}</span>
            </div>
        </div>
    )
}