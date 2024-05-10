'use client'
import React from 'react'

//pages
import Restaurants from './componentes/restaurants'
import PedidosRecomendadosTitle from './componentes/pedidosRecomendadosTitle'

//icons
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const RestaurantsRecomendados = () => {

    const handleScroll = () => {
        const element: any = document.getElementById('my-scrollable-element');
        element.scrollLeft += 300;
    }
    const handleScrollRight = () => {
        const element: any = document.getElementById('my-scrollable-element');
        element.scrollLeft -= 300;
    }
    return (
        <>
            <main>
                <div className='' >
                    <PedidosRecomendadosTitle title={'Restaurantes Recomendados'} isVerTudo={true} />
                </div>
                <div className='relative' >
                    <Restaurants />
                    <button className='absolute top-0 bottom-7 left-0 flex justify-center items-center p-2' onClick={handleScrollRight} >
                        <h1 className='relative text-white bg-[rgb(0,0,0,0.4)] p-1 rounded-xl' ><IoIosArrowBack size={30} /></h1>
                    </button>
                    <button className='absolute top-0 bottom-7 right-0 flex justify-center items-center p-2' onClick={handleScroll} >
                        <h1 className='relative text-white bg-[rgb(0,0,0,0.4)] p-1 rounded-xl' ><IoIosArrowForward size={30} /></h1>
                    </button>
                </div>
            </main>
        </>
    )
}

export default RestaurantsRecomendados