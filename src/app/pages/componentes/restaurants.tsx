'use client'
//context
import useAppContextFirestore from '@/app/contexts/banco'

//react
import Image from 'next/image'
import Link from 'next/link'

//icons
import { FaMotorcycle } from 'react-icons/fa'
import { PiTimer } from 'react-icons/pi'

//pages
import { oneToSix } from './oneToSix'

const Restaurants = () => {

    const { firestoreRestaurant } = useAppContextFirestore()

    return (
        <>
            <main>
                <div className='flex items-center gap-2 overflow-x-auto scrollbar-hide'>
                    {
                        firestoreRestaurant.length < 1 &&
                        oneToSix.slice(0, 6).map((product: any, index: any) => (
                            <div
                                className='flex flex-col items-center justify-center gap-2'
                                key={index}
                            >
                                {/* Replace with your product content and placeholder logic */}
                                <div className='md:w-[366px] md:h-[180px] w-[136px] h-[150px] rounded-xl bg-slate-100' id='imageLoading'></div>
                                <div className='md:w-[366px] md:h-[35px] w-[136px] h-[25px] rounded-xl bg-slate-100' id='imageLoading'></div>
                                <div className='md:w-[366px] md:h-[35px] w-[136px] h-[25px] rounded-xl bg-slate-100' id='imageLoading'></div>
                            </div>
                        ))
                    }
                    {firestoreRestaurant
                        .slice(0, 6)
                        .map((restaurants: any, index: any) => (
                            <Link href={`pages/restaurantsSingle/${restaurants.id}`} key={index} className='hover:scale-95 duration-200' >
                                <div className="flex flex-col items-start justify-center gap-2">
                                    <div className='md:w-[381px] md:h-[165px] w-[266px] h-[136px] relative'>
                                        <Image
                                            src={restaurants.imageUrl}
                                            alt={restaurants.name}
                                            height={500}
                                            width={500}
                                            style={{ objectFit: 'cover' }}
                                            className='md:w-[381px] md:h-[165px] w-[266px] h-[136px] rounded-xl'
                                        />
                                    </div>
                                    <div className='text-[#323232] px-1' >
                                        <h1 className='font-extrabold md:text-base text-sm' >{restaurants.name}</h1>
                                        <div className='flex items-center justify-start gap-5'>
                                            <div className='flex items-center font-medium md:text-sm text-xs whitespace-nowrap gap-1 text-[var(--red)]'>
                                                <span><FaMotorcycle /></span>
                                                <span className='text-[#7E8392]' >
                                                    Entrega {restaurants.deliveryTotal == 'Grátis' ? '' : 'R$'} {restaurants.deliveryTotal}
                                                </span>
                                            </div>
                                            <div className='flex items-center justify-center gap-1 font-medium md:text-sm text-xs whitespace-nowrap text-[var(--red)]'>
                                                <span className='font-extrabold'> <PiTimer /></span>
                                                <h1 className='text-[#7E8392]' >{restaurants.deliveryTime}</h1>
                                                <span className='text-[#7E8392]' >min</span>
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            </main>
        </>
    )
}

export default Restaurants