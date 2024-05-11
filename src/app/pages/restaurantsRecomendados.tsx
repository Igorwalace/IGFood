'use client'
import React from 'react'

//pages
import Restaurants from './componentes/restaurants'
import PedidosRecomendadosTitle from './componentes/pedidosRecomendadosTitle'
import ArrowBackAndArrowForward from './componentes/arrowBackAndArrowForward'

//context

//icons

const RestaurantsRecomendados = () => {
    return (
        <>
            <main>
                <div>
                    <PedidosRecomendadosTitle title={'Restaurantes Recomendados'} isVerTudo={true} />
                </div>
                <div className='relative' >
                    <Restaurants />
                    <ArrowBackAndArrowForward  dinamicId={"my-scrollable-element-restaurant"}  />
                </div>
            </main>
        </>
    )
}

export default RestaurantsRecomendados