import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import Restaurants from './componentes/restaurants'

const RestaurantsRecomendados = () => {
    return (
        <>
            <main>
                <div className='flex items-center justify-between mb-5' >
                    <h1 className='text-[#323232] md:text-lg text-base' >Restaurantes Recomendados</h1>
                    <span className='text-[var(--red)] md:text-sm text-xs font-medium cursor-pointer flex items-center justify-center gap-2' >Ver Todos
                        <span><IoIosArrowForward /></span>
                    </span>
                </div>
                <div>
                    <Restaurants />
                </div>
            </main>
        </>
    )
}

export default RestaurantsRecomendados