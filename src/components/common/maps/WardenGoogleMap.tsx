"use client"

import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api'
import { getAllProperties } from '@/helpers/api/warden/getAllProperties'
import MapPlaceDetailsCard from '../cards/MapPlaceDetailsCard'

const mapContainerStyle = {
    width: '100%',
    height: '100vh',
}

interface UserLocation {
    lat: number,
    lng: number
}

interface Property {
    _id: string;
    address: {
        googleMapLocation: {
            latitude: number;
            longitude: number;
        };
    };
}

export default function WardenGoogleMap() {
    const [userLocations, setUserLocations] = useState<UserLocation[]>([])

    useEffect(() => {
        const fetchUserLocations = async () => {
            const res = await getAllProperties()

            console.log("\n\n\dfdfdfdfdres from details", res.properties)
            const locations: UserLocation[] = res.properties.map((property: Property) => (
                {
                    lat: property.address.googleMapLocation.latitude,
                    lng: property.address.googleMapLocation.longitude
                }
            ));

            setUserLocations(locations)
        }
        fetchUserLocations()
    }, [])

    return (
        <div className='flex'>
            <div className='h-[100vh] max-w-sm'>
                <MapPlaceDetailsCard
                    address='445/D, Pitipana, Homagama'
                    bathrooms={3}
                    bedrooms={4}
                    hostelName='The Bunker'
                    imageUrl='https://t4.ftcdn.net/jpg/03/70/64/43/360_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg'
                    mobileNumber='0117898765'
                />
                <MapPlaceDetailsCard
                    address='31/A, Godagama, Homagama'
                    bathrooms={2}
                    bedrooms={1}
                    hostelName='Luxury Living Hostel'
                    imageUrl='https://thumbs.dreamstime.com/b/beds-hostel-affordable-housing-36997317.jpg'
                    mobileNumber='0768987654'
                />
                <MapPlaceDetailsCard
                    address='11/A, Panagoda, Pitipana South, Homagama'
                    bathrooms={1}
                    bedrooms={2}
                    hostelName='Green House Hostel'
                    imageUrl='https://assets.architecturaldigest.in/photos/62f4d46616c88215b7e80d3b/4:3/w_1440,h_1080,c_limit/Step%20into%205%20of%20the%20most%20beautiful%20villas%20in%20Bengaluru.jpg'
                    mobileNumber='0112346756'
                />
                <MapPlaceDetailsCard
                    address='44/A, Kasbewa Road, Homagama'
                    bathrooms={3}
                    bedrooms={4}
                    hostelName='Green Hostel'
                    imageUrl='https://teja12.kuikr.com/is/a/c/880x425/gallery_images/original/cf5d9d880a57220.gif'
                    mobileNumber='0117898765'
                />
            </div>
            <div className='flex-1'>
                <LoadScript
                    googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY!}
                    mapIds={[process.env.NEXT_PUBLIC_MAP_ID!]}
                >
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={userLocations[0]}
                        zoom={14}
                        options={{ mapId: process.env.NEXT_PUBLIC_MAP_ID! }}
                    >
                        {
                            userLocations ? (
                                userLocations.map((userLocation, index) => (
                                    <div key={index}>
                                        <MarkerF
                                            position={userLocation}
                                            onClick={() => {
                                                console.log("This is lt lg from user location", userLocation)
                                            }}
                                        />
                                    </div>

                                ))
                            ) : (
                                <div>
                                    <MarkerF
                                        position={{ lat: 0, lng: 0 }}
                                        onClick={() => {
                                            console.log("This is lt lg from user location", userLocations)
                                        }}
                                    />
                                </div>
                            )
                        }
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    )
}