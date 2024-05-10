'use client'

//pages
import useAppContextFirestore from '@/app/contexts/banco'
import AllProducts from '@/app/pages/componentes/allProducts'
import PedidosRecomendadosTitle from '@/app/pages/componentes/pedidosRecomendadosTitle'

//react
import React from 'react'

interface restaurantId {
    restaurantId:any
}

const Products_Type = ({restaurantId}: restaurantId) => {

    const { firestoreProducts, firestoreRestaurant, quantyCurrent } = useAppContextFirestore()

    return (
        <>
            <main className={`${quantyCurrent == 0 ? 'pb-0' : 'pb-12'}`} >
                <div>
                    <PedidosRecomendadosTitle title={`pratos do mesmo restaurante`} isVerTudo={false} />
                </div>
                <div className='flex items-center gap-2 overflow-x-auto scrollbar-hide'>
                    {firestoreProducts
                    .filter((product:any) => product.restaurantId == restaurantId )
                    .map((product: any, index: any) => (
                        <div key={index} >
                            <AllProducts product={product} index={index} firestoreRestaurant={firestoreRestaurant} />
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default Products_Type