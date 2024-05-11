'use client'
import React from 'react'

//pages
import Products from './componentes/products'
import PedidosRecomendadosTitle from './componentes/pedidosRecomendadosTitle'
import ArrowBackAndArrowForward from './componentes/arrowBackAndArrowForward'

const PedidosRecomendados = () => {
    
    return (
        <>
            <main>
                <PedidosRecomendadosTitle title={'Pedidos em Descontos'} isVerTudo={true} />
                <div className='relative' >
                    <Products />
                    <ArrowBackAndArrowForward dinamicId={"my-scrollable-element-product"} />
                </div>
            </main>
        </>
    )
}

export default PedidosRecomendados