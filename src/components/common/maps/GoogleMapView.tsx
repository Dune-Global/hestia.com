"use client"

import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api'
import { getPropertyById } from '@/helpers/api/landlord/getPropertyById'

const mapContainerStyle = {
    width: '100%',
    height: '70vh',
    borderRadius: '15px'
}

interface UserLocation {
    lat: number,
    lng: number
}

export default function GoogleMapView() {
    const [userLocation, setUserLocation] = useState<UserLocation>()

    useEffect(() => {
        const getUserLocation = async () => {
            try {
                const res = await getPropertyById("661280dc3608e8e6e974ee8f", "approved")
                console.log("lati from details", res.property[0].address.googleMapLocation.latitude)
                console.log("longi from details", res.property[0].address.googleMapLocation.longitude)
                setUserLocation({
                    lat: res.property[0].address.googleMapLocation.latitude,
                    lng: res.property[0].address.googleMapLocation.longitude
                })
            } catch (error) {
                console.log("error from details", error)
            }
        }
        getUserLocation()

    }, [])



    return (
        <div className='border-2 border-black rounded-lg'>
            <LoadScript
                googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY!}
                mapIds={[process.env.NEXT_PUBLIC_MAP_ID!]}
            >
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={userLocation}
                    zoom={16}
                    options={{ mapId: process.env.NEXT_PUBLIC_MAP_ID! }}
                >
                    {
                        userLocation && (
                            <div>
                                <MarkerF
                                    position={userLocation}
                                    onClick={() => {
                                        console.log("This is lt lg from user location", userLocation)
                                    }}
                                />
                            </div>
                        )
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    )
}