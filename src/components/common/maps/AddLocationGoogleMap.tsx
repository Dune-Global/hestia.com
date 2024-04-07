"use client"

import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api'

const mapContainerStyle = {
    width: '100%',
    height: '700px',
    borderRadius: '15px'
}

interface UserLocation {
    lat: number,
    lng: number
}

export default function AddLocationGoogleMap() {
    const [userLocation, setUserLocation] = useState<UserLocation>()

    useEffect(() => {
        const getUserLocation = async () => {
            try {
                setUserLocation({
                    lat: 6.9999,
                    lng: 80.55001
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