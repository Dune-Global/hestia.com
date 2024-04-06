import React from 'react'

export default function HostelGallery() {
    return (
        <div>
            <div className='flex flex-col md:flex-row gap-1 w-full rounded-lg'>

                <div>
                    <img
                        src={"https://t4.ftcdn.net/jpg/03/70/64/43/360_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg"}
                        className='w-full h-56 md:h-full object-cover rounded-t-lg md:rounded-tr-none md:rounded-bl-lg'
                        alt="Beachfront"
                    />
                </div>

                <div className='flex flex-col gap-1 md:max-w-md lg:max-w-2xl'>

                    <div className='flex flex-row w-full gap-1'>
                        <img
                            src={"https://t4.ftcdn.net/jpg/03/70/64/43/360_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg"}
                            className='w-1/2 h-36 md:h-full object-cover'
                            alt='Beachfront Villa'
                        />
                        <img
                            src={"https://t4.ftcdn.net/jpg/03/70/64/43/360_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg"}
                            className='w-1/2 h-36 md:h-full object-cover md:rounded-tr-lg'
                            alt='Beachfront Villa'
                        />
                    </div>

                    <div className='flex flex-row w-full gap-1'>
                        <img
                            src={"https://t4.ftcdn.net/jpg/03/70/64/43/360_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg"}
                            className='w-1/2 h-36 md:h-full object-cover rounded-bl-lg md:rounded-bl-none'
                            alt='Beachfront Villa'
                        />
                        <img
                            src={"https://t4.ftcdn.net/jpg/03/70/64/43/360_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg"}
                            className='w-1/2 h-36 md:h-full object-cover rounded-br-lg'
                            alt='Beachfront Villa'
                        />
                    </div>

                </div>

            </div>
            <div className='py-3'>
                <div className='flex flex-col gap-1 md:gap-0'>
                    <h4 className='text-sm md:text-lg'>Room in hostel in Pitipana, Sri Lanka</h4>
                    <div className='flex text-xs md:text-base text-gray-500 gap-1'>
                        <span>2 Guests</span>
                        <span>-</span>
                        <span>1 Bedroom</span>
                        <span>-</span>
                        <span>1 Bed</span>
                        <span>-</span>
                        <span>2 Baths</span>
                    </div>
                </div>
            </div>
        </div>
    )
}