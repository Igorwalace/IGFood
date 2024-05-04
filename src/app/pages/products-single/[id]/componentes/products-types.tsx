'use client'

//pages
import useAppContextFirestore from '@/app/contexts/banco'
import AllProducts from '@/app/pages/componentes/allProducts'
import PedidosRecomendadosTitle from '@/app/pages/componentes/pedidosRecomendadosTitle'

//react
import React from 'react'

const Products_Type = () => {

    const { firestoreProducts, firestoreRestaurant } = useAppContextFirestore()

    return (
        <>
            <PedidosRecomendadosTitle />
            <main>
                <div>
                </div>

            </main>
        </>
    )
}

export default Products_Type