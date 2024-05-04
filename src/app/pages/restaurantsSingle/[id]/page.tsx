'use client'

//pages
import Header from '../../header'

//react
import React from 'react'
import Image from 'next/image'
import useAppContextFirestore from '@/app/contexts/banco'

interface RestaurantPage {
  params: {
    id: string
  }
}

const Page = ({ params: { id } }: RestaurantPage) => {

  const { firestoreRestaurant } = useAppContextFirestore()

  return (
    <>
      <main className='md:px-[128px] md:py-5' >
        <div className='hidden md:block' ><Header /></div>
        <div className='md:my-5' >
          {firestoreRestaurant
            .filter((restaurantSinlge: any) => restaurantSinlge.id === id)
            .map((restaurants: any, index: any) => (
              <div key={index} >
                <div className='md:flex items-center justify-between' >
                  <div className='md:w-[750px] md:h-[380px] w-full relative'>
                    <Image
                      src={restaurants.imageUrl}
                      alt={restaurants.name}
                      height={500}
                      width={500}
                      style={{ objectFit: 'cover' }}
                      className='md:w-[750px] md:h-[380px] w-full h-[50vh] md:rounded-xl'
                    />
                  </div>

                  {/* informações restaurant */}
                  <div>
                    <div className="flex items-center gap-1" >
                      <Image
                        src={restaurants.imageUrl}
                        alt={restaurants.name}
                        width={400}
                        height={400}
                        className="w-5 h-5 rounded-full"
                      />
                      <h1 className="md:text-sm text-xs text-[#7E8392]" >{restaurants.name}</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </main>
    </>
  )
}

export default Page