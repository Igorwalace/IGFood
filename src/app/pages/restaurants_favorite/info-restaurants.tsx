import React from 'react'
import AllRestaurants from '../componentes/allRestaurants'
import { oneToSix } from '../componentes/oneToSix'
import useAppRestaurantsFavorite from '@/app/contexts/restaurants_favorite'

const Info_Restaurants = () => {

    const { restaurantsFavorite } = useAppRestaurantsFavorite()
    return (
        <div className='flex items-center justify-center flex-wrap gap-3' >
            {
                restaurantsFavorite.length < 1 &&
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
            {restaurantsFavorite
                .slice(0, 6)
                .map((restaurants: any, index: any) => (
                    <div key={index} >
                        <AllRestaurants restaurants={restaurants} />
                    </div>
                ))
            }
        </div>
    )
}

export default Info_Restaurants