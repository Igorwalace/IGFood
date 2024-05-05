import Image from 'next/image'
import React from 'react'

const BannerLanchesMain = () => {
    return (
        <>
            <div className="flex flex-row-reverse items-center rounded-2xl justify-center md:w-[552px] md:h-[215px] w-full h-[150px]">
                <div className='w-full h-full' >
                    <Image
                        src='/banner_pizza.png'
                        width={400}
                        height={400}
                        alt='Pizza Banner'
                        className='w-full h-full'
                    />
                </div>
            </div>
        </>
    )
}

export default BannerLanchesMain