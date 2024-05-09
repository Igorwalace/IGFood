import useAppContextFirestore from '@/app/contexts/banco'
import useAppRestaurantsFavorite from '@/app/contexts/restaurants_favorite'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaHeart, FaMotorcycle, FaRegHeart } from 'react-icons/fa'
import { PiTimer } from 'react-icons/pi'

interface Restaurants {
    restaurants:any
}

const AllRestaurants = ({restaurants}: Restaurants) => {

    const { firestoreRestaurant } = useAppContextFirestore()
    const { setRestaurantsFavorite, restaurantsFavorite } = useAppRestaurantsFavorite()

    const handleRestaurantFavorite = (e: any, restaurants: any) => {
        e.preventDefault();
        const sameRestaurant = restaurantsFavorite.find((restaurant: any) => restaurant.id == restaurants.id)
        if (sameRestaurant) {
            const remove = restaurantsFavorite.filter((restaurant: any) => restaurant.id != restaurants.id)
            setRestaurantsFavorite(remove)
            return
        }
        setRestaurantsFavorite((prev: any) => ([...prev, restaurants]))

    }

    return (
        <>
            <Link href={`pages/restaurantsSingle/${restaurants.id}`} className='hover:scale-95 duration-200' >
                <div className="flex flex-col items-start justify-center gap-2 relative">
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
                    </div>
                    <div className="absolute top-3 right-3 bg-[#323232] rounded-[50%] p-2 hover:scale-125 duration-200 z-50" onClick={(e) => handleRestaurantFavorite(e, restaurants)}>
                        {
                            restaurantsFavorite.find((restaurant: any) => restaurant.id == restaurants.id) ?
                                <span className={'text-[var(--red)]'} ><FaHeart size={20} /></span>
                                :
                                <span className={'text-white'} ><FaRegHeart size={20} /></span>

                        }
                    </div>
                </div>
            </Link>

        </>
    )
}

export default AllRestaurants