'use client'
import React from 'react'

//pages
import Products from './componentes/products'
import PedidosRecomendadosTitle from './componentes/pedidosRecomendadosTitle'

const PedidosRecomendados = () => {
    
    return (
        <>
            <main>
                <PedidosRecomendadosTitle title={'Pedidos Recomendados'} isVerTudo={true} />
                <div>
                    <Products />
                </div>
            </main>
        </>
    )
}

export default PedidosRecomendados