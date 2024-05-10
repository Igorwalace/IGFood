import React from 'react'

//pages
import AllRestaurants from '../componentes/allRestaurants'

//context
import useAppRestaurantsFavorite from '@/app/contexts/restaurants_favorite'

const Info_Restaurants = () => {

    const { restaurantsFavorite } = useAppRestaurantsFavorite()
    return (
        <>
        <div className='flex items-center md:justify-start justify-center flex-wrap gap-3 w-full' >

            {
                restaurantsFavorite.length < 1 &&
                <div className='my-5 text-center w-full' >
                    <h1>Nenhum restaurante como favorito.</h1>
                </div>
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
        </>
    )
}

export default Info_Restaurants