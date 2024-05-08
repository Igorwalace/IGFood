'use client'

//pages
import Header from '../../header'
import DeliveryTime_And_DeliveyFree from '../../componentes/deliveryFreeAndDelivery-timer'
import Button_Back from '../../componentes/button-back'

//react
import React from 'react'
import Image from 'next/image'

//context
import useAppContextFirestore from '@/app/contexts/banco'
import PedidosRecomendadosTitle from '../../componentes/pedidosRecomendadosTitle'
import AllProducts from '../../componentes/allProducts'

interface RestaurantPage {
  params: {
    id: string
  }
}

const Page = ({ params: { id } }: RestaurantPage) => {

  const { firestoreRestaurant, firestoreProducts } = useAppContextFirestore()

  return (
    <>
      <main className='md:px-[128px] md:py-5' >
        <div className='hidden md:block' ><Header /></div>
        <div className='md:my-5' >
          {firestoreRestaurant
            .filter((restaurantSinlge: any) => restaurantSinlge.id === id)
            .map((restaurant: any, index: any) => (
              <div key={index} >
                <div className='md:flex items-center justify-between gap-10' >
                  <div className='md:w-[750px] md:h-[380px] w-full relative'>
                    <Image
                      src={restaurant.imageUrl}
                      alt={restaurant.name}
                      height={500}
                      width={500}
                      style={{ objectFit: 'cover' }}
                      className='md:w-[750px] md:h-[380px] w-full h-[50vh] md:rounded-xl'
                    />
                  </div>

                  {/* informações restaurant */}
                  <div className='bg-white z-10 md:static relative rounded-2xl -top-[35px] md:w-[402px] w-full md:p-0 px-5 py-5' >

                    <div className="flex items-center gap-1" >
                      <Image
                        src={restaurant.imageUrl}
                        alt={restaurant.name}
                        width={400}
                        height={400}
                        className="w-[30px] h-[30px] rounded-full"
                      />
                      <h1 className="md:text-2xl text-xl font-extrabold" >{restaurant.name}</h1>
                    </div>

                    <>
                      <DeliveryTime_And_DeliveyFree restaurant={restaurant} />
                    </>

                    <div className='bg-[#F4F4F5] rounded-md px-2 py-1 text-center mb-5' >
                      <span className='text-[#7E8392] md:text-sm text-xs' >{restaurant.category}</span>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-3" >
                      <h1 className="md:text-base text-sm" >Sobre</h1>
                      <p className="md:text-sm text-xs text-[#7E8392] text-justify" >{restaurant.about}</p>
                    </div>

                  </div>
                </div>

                {/* products recomendados */}
                <div className='md:my-5 md:p-0 px-5' >
                  <>
                    <PedidosRecomendadosTitle title={restaurant.category} isVerTudo={false} />
                  </>
                  <div className='flex items-center gap-2 overflow-x-auto scrollbar-hide' >
                    {
                      firestoreProducts
                        .filter((product: any) => product.restaurantId == id)
                        .filter((bebida: any) => bebida.category != 'bebida')
                        .map((product: any, index: any) => (
                          <div key={index} >
                            <AllProducts product={product} index={index} firestoreRestaurant={firestoreRestaurant} />
                          </div>
                        ))
                    }
                  </div>
                  <div className='my-5' >
                    <>
                      <PedidosRecomendadosTitle title={'Bebidas'} isVerTudo={false} />
                    </>
                    <div className='flex items-center gap-2 overflow-x-auto scrollbar-hide' >
                      {
                        firestoreProducts
                          .filter((product: any) => product.restaurantId == id)
                          .filter((bebida: any) => bebida.category == 'bebida')
                          .map((product: any, index: any) => (
                            <div key={index} >
                              <AllProducts product={product} index={index} firestoreRestaurant={firestoreRestaurant} />
                            </div>
                          ))
                      }
                    </div>
                  </div>
                  <div>

                  </div>
                </div>

              </div>
            ))
          }
        </div>
      </main>

      <>
        <Button_Back />
      </>

    </>
  )
}

export default Page