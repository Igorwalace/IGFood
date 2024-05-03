import Image from 'next/image'
import React from 'react'

const BannerLanchesMain = () => {
    return (
        <>
            <div className="flex flex-row-reverse items-center rounded-2xl justify-center bg-[#FFB100] md:w-[552px] md:h-[215px] w-full h-[150px] text-white">
                <div className='px-3' >
                    <p className='text-sm font-extralight md:text-xl' >a partir de</p>
                    <div className='flex items-center' >
                        <h1 className='text-4xl font-bold md:text-5xl whitespace-nowrap leading-8' >R$ 17,90</h1>
                    </div>
                    <p className='text-sm font-light md:text-xl' >em Lanches</p>
                </div>
                <div className='md:w-[338px] md:h-[182px] w-[236px] h-[127px]' >
                    <Image
                        src='/lanchesBanner.png'
                        width={400}
                        height={400}
                        alt='Pizza Banner'
                        className='md:w-[338px] md:h-[182px] w-[236px] h-[127px]'
                    />
                </div>
            </div>
        </>
    )
}

export default BannerLanchesMain