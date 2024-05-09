'use client'
//react
import React from 'react'

//pages
import AllRestaurants from '../componentes/allRestaurants'

//contexts
import useAppContextFirestore from '@/app/contexts/banco'
import useAppRestaurantsFavorite from '@/app/contexts/restaurants_favorite'
import Header from '../header'
import { oneToSix } from '../componentes/oneToSix'

const Page = () => {

  const { restaurantsFavorite } = useAppRestaurantsFavorite()

  return (
    <>
      <main className='md:px-[128px] p-5 md:py-5 py-3' >
        <div className='mb-5' >
          <Header />
        </div>
        <div className='flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide'>
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
        </div>
      </main>
    </>
  )
}

export default Page