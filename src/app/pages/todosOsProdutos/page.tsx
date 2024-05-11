'use client'

//react
import React from 'react'

//pages
import Header from '../header'
import PedidosRecomendadosTitle from '../componentes/pedidosRecomendadosTitle'
import AllProducts from '../componentes/allProducts'

//context
import useAppContextFirestore from '@/app/contexts/banco'

const Page = () => {
  const { firestoreProducts, firestoreRestaurant } = useAppContextFirestore()
  return (
    <>
      <main className='md:px-[128px] p-5 md:py-5 py-3' >
        <div className='mb-5' >

          <Header />
        </div>

        <PedidosRecomendadosTitle isVerTudo={false} title={`Todos os Pratos`} />

        <div className='flex items-center md:justify-between justify-center flex-wrap gap-3'>
          {firestoreProducts
            .map((product: any, index: any) => (
              <div key={index} className='mb-5' >
                <AllProducts product={product} index={index} firestoreRestaurant={firestoreRestaurant} />
              </div>
            ))}
        </div>
      </main>
    </>
  )
}

export default Page