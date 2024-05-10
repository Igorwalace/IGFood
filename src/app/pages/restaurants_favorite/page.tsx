'use client'
//react
import React from 'react'

//pages
import Header from '../header'
import Info_Restaurants from './info-restaurants'
import PedidosRecomendadosTitle from '../componentes/pedidosRecomendadosTitle'

//context
import useAppRestaurantsFavorite from '@/app/contexts/restaurants_favorite'

const Page = () => {
  const { restaurantsFavorite } = useAppRestaurantsFavorite()

  return (
    <>
      <main className='md:px-[128px] p-5 md:py-5 py-3' >
        <div className='mb-5' >
          <Header />
        </div>
        {

          restaurantsFavorite.length > 0 &&
          <div>
            <PedidosRecomendadosTitle title={'Restaurantes Favoritos'} isVerTudo={false} />
          </div>
        }
        <div className='flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide'>
          <Info_Restaurants />
        </div>
      </main>
    </>
  )
}

export default Page