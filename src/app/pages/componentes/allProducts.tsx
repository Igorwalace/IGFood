//react
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

//icons
import { FaArrowDown } from 'react-icons/fa'

//pages
import Discount from './discount'

interface Props {
    product: any
    index: any
    firestoreRestaurant: any[]
}

const AllProducts = ({ product, index, firestoreRestaurant }: Props) => {
    return (
        <>
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
                    <h1 className='font-light md:text-base text-sm whitespace-nowrap' >{product.name}</h1>
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
                            .map((restaurant: any, index: any) => (
                                <Link href={`/pages/restaurantsSingle/${restaurant.id}`} key={index} className='flex items-center gap-1 hover:scale-110 duration-200' >
                                    <Image
                                        src={restaurant.imageUrl}
                                        alt={restaurant.name}
                                        width={400}
                                        height={400}
                                        className="w-5 h-5 rounded-full"
                                    />
                                    <h1 className='text-[#7E8392] md:text-sm text-xs'>{restaurant.name}</h1>
                                </Link>
                            ))}
                    </div>
                </div>
            </Link>
        </>
    )
}

export default AllProducts