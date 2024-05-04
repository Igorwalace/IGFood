import React from 'react'

//pages
import Products from './componentes/products'
import PedidosRecomendadosTitle from './componentes/pedidosRecomendadosTitle'

const PedidosRecomendados = () => {

    return (
        <>
            <main>
                <PedidosRecomendadosTitle />
                <div>
                    <Products />
                </div>
            </main>
        </>
    )
}

export default PedidosRecomendados