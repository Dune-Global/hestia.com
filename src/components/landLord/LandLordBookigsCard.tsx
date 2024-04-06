import { truncateText } from '@/helpers/truncateString';
import React from 'react';

type Props = {
    name: string;
    status: 'approved' | 'rejected';
};

export default function LandLordBookingsCard({ name, status }: Readonly<Props>) {
    const truncatedName = truncateText(name, 17);
    const statusColor = status === 'approved' ? 'green-600' : 'red-600';

    return (
        <div className='flex flex-row justify-between items-center border-b-2 border-gray-300 py-3'>
            <div className='flex flex-row gap-2 md:gap-16 lg:gap-4 items-center'>
                <img src={`https://ui-avatars.com/api/?name=${name}&background=random`} className='w-8 h-8 rounded-full' alt='profile' />
                <div className='text-sm text-gray-500 max-w-36'>{truncatedName}</div>
            </div>
            <div className={`text-sm text-${statusColor}`}>
                {status === 'approved' ? 'Approved' : 'Rejected'}
            </div>
        </div>
    );
}
