import Image from 'next/image'
import React from 'react'
import BannerLanchesMain from './componentes/bannerLachensMain'

const BannerMain = () => {
    return (
        <>
            <main className='flex items-center justify-center gap-5' >
                <div className="flex items-center rounded-2xl justify-center gap-6 md:w-[552px] md:h-[215px] w-full h-[150px]">
                    <div className='w-full h-full' >
                        <Image
                            src='/banner_buguer.png'
                            width={400}
                            height={400}
                            alt='Pizza Banner'
                            className='w-full h-full'
                        />
                    </div>
                </div>
                <div className='hidden md:block' >
                    <BannerLanchesMain />
                </div>
            </main>
        </>
    )
}

export default BannerMain