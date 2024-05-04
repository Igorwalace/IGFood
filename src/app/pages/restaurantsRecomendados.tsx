import React from 'react'

//pages
import Restaurants from './componentes/restaurants'
import PedidosRecomendadosTitle from './componentes/pedidosRecomendadosTitle'

const RestaurantsRecomendados = () => {
    return (
        <>
            <main>
                <div className='' >
                    <PedidosRecomendadosTitle title={'Restaurantes Recomendados'} isVerTudo={true} />
                </div>
                <div>
                    <Restaurants />
                </div>
            </main>
        </>
    )
}

export default RestaurantsRecomendados