'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import Discount from './discount'

import { FaArrowDown } from 'react-icons/fa'
import Link from 'next/link'

import useAppContextFirestore from '@/app/contexts/banco'

const Products = () => {

    const { firestoreProducts, firestoreRestaurant } = useAppContextFirestore()

    return (
        <>
            <main>
                <div className='flex items-center gap-2 overflow-x-auto scrollbar-hide'>
                    {firestoreProducts
                        .filter((product: any) => product.category != 'bebida')
                        .slice(0, 6)
                        .map((product: any, index:any) => (
                            <Link href={`/pages/products-single/${product.id}`} className="flex flex-col items-start justify-center gap-2 hover:scale-95 duration-200 cursor-pointer" key={index}>
                                <div className='md:w-[180px] md:h-[180px] w-[150px] h-[150px] relative'>
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.name}
                                        height={500}
                                        width={500}
                                        style={{ objectFit: 'cover' }}
                                        className='md:w-[180px] md:h-[180px] w-[150px] h-[150px] rounded-xl'
                                    />
                                    {product.discount != 0 &&
                                        <>
                                            <div className='absolute top-2 left-2 text-white bg-[var(--red)] md:text-sm text-xs flex items-center justify-center gap-1 p-1 px-2 rounded-xl' >
                                                <span><FaArrowDown size={10} /></span>
                                                <span>{product.discount}%</span>
                                            </div>
                                        </>
                                    }
                                </div>
                                <div className='text-[#323232] px-1' >
                                    <h1 className='font-light md:text-base text-sm' >{product.name}</h1>
                                    <div className='flex items-center justify-start gap-2'>
                                        <h1 className='flex items-center font-extrabold md:text-base text-sm whitespace-nowrap'>
                                            R$ {Discount(product.price, product.discount).toFixed(2).replace('.', ',')}
                                        </h1>
                                        {product.discount != 0 &&
                                            <h1 className='whitespace-nowrap md:text-sm text-sm line-through text-[#7E8392]' >R$ {product.price.toFixed(2).replace('.', ',')}</h1>
                                        }
                                    </div>
                                    <div>
                                        {firestoreRestaurant
                                            .filter((restaurants: any) => restaurants.id === product.restaurantId)
                                            .map((restaurant: any, index:any) => (
                                                <h1 className='text-[#7E8392] md:text-sm text-xs' key={index}>{restaurant.name}</h1>
                                            ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            </main>
        </>
    )
}

export default Products

