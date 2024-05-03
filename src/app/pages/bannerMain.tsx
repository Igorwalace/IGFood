import Image from 'next/image'
import React from 'react'
import BannerLanchesMain from './componentes/bannerLachensMain'

const BannerMain = () => {
    return (
        <>
            <main className='flex items-center justify-center gap-5' >
                <div className="flex items-center rounded-2xl justify-center gap-6 bg-[var(--red)] md:w-[552px] md:h-[215px] w-full h-[150px] px-3 text-white">
                    <div className='' >
                        <p className='text-sm font-extralight md:text-xl' >até</p>
                        <div className='flex items-center' >
                            <h1 className='text-4xl font-bold md:text-5xl leading-7' >30%</h1>
                            <span className='font-light font-sm md:text-xl' >de</span>
                        </div>
                        <h1 className='font-bold text-[22px] md:text-[31px] leading-5' >Desconto</h1>
                        <p className='text-sm font-thin md:text-xl leading-3' >em pizzas</p>
                    </div>
                    <div className='md:w-[338px] md:h-[182px] w-[236px] h-[127px]' >
                        <Image
                            src='/pizzaBanner.png'
                            width={400}
                            height={400}
                            alt='Pizza Banner'
                            className='md:w-[338px] md:h-[182px] w-[236px] h-[127px]'
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