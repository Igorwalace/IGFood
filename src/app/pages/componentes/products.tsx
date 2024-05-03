'use client'
import { db } from '@/app/firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Discount from './discount'
import { FaArrowDown } from 'react-icons/fa'

const Products = () => {

    const [bancoDeDados, setBancoDeDados] = useState<any[]>([])
    const [searchRestaurant, setSearchRestaurant] = useState<any[]>([])
    const router = useRouter()

    useEffect(() => {
        const call = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'allproducts'));
                const restaurantData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setBancoDeDados(restaurantData)
                console.log(bancoDeDados)
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        }
        call()
        const call2 = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'restaurants'));
                const restaurantData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setSearchRestaurant(restaurantData)
                console.log(searchRestaurant)
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        }
        call2()
    }, [])

    return (
        <>
            <main>
                <div className='flex items-center gap-2 overflow-x-auto scrollbar-hide'>
                    {bancoDeDados
                        .filter((product: any) => product.category != 'bebida')
                        .slice(0, 6)
                        .map((product: any, index) => (
                            <div key={index}>
                                <div className="flex flex-col items-start justify-center gap-2">
                                    <div className='md:w-[180px] md:h-[180px] w-[150px] h-[150px] relative'>
                                        <Image
                                            src={product.imageUrl}
                                            alt={product.name}
                                            height={500}
                                            width={500}
                                            style={{objectFit: 'cover'}}
                                            className='md:w-[180px] md:h-[180px] w-[150px] h-[150px] rounded-xl'
                                        />
                                        {product.discount != 0 &&
                                            <>
                                                <div className='absolute top-2 left-2 text-white bg-[var(--red)] md:text-sm text-xs flex items-center justify-center gap-1 p-1 rounded-md' >
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
                                            {searchRestaurant
                                                .filter((restaurants: any) => restaurants.id === product.restaurantId)
                                                .map((restaurant: any, index) => (
                                                    <h1 className='text-[#7E8392] md:text-sm text-xs' key={index}>{restaurant.name}</h1>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </main>
        </>
    )
}

export default Products

