import WardenGoogleMap from '@/components/common/maps/WardenGoogleMap'
import React from 'react'

type Props = {}

export default function Map({ }: Props) {
    return (
        <div className='pb-24'>
            <WardenGoogleMap />
        </div>
    )
}