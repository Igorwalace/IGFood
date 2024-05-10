'use client'

//react
import Image from "next/image";

//contexts
import useAppContextFirestore from "@/app/contexts/banco";

//pages
import Discount from "../../componentes/discount";
import Products_Type from "./componentes/products-types";
import Header from "../../header";
import Button_Back from "../../componentes/button-back";

//icons
import { FaArrowDown, FaMotorcycle } from "react-icons/fa";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { PiTimer } from "react-icons/pi";
import DeliveryTime_And_DeliveyFree from "../../componentes/deliveryFreeAndDelivery-timer";
import Add_Sacola from "./componentes/add_sacola";
import { useState } from "react";

interface ProductSingle {
    params: {
        id: string
    }
}

const Page = ({ params: { id } }: ProductSingle) => {
    const [quanty, setQuanty] = useState(1)
    const { firestoreProducts, firestoreRestaurant } = useAppContextFirestore()

    const handleMoreQuanty = () => {
        setQuanty(quanty + 1)
    }
    const handleAnyLessQuanty = () => {
        if(quanty == 1) return
        setQuanty(quanty - 1)
    }

    return (
        <>
            <div className="md:px-[128px] p-5 md:py-5 py-3 hidden md:block" ><Header /></div>
            <main className="md:px-[128px] md:py-5" >
                {firestoreProducts
                    .filter((product: any) => product.id === id)
                    .map((product: any, index: any) => (
                        <div key={index} >
                            <div className="md:flex items-center justify-between gap-10 md:mb-5" >
                                {/* image */}
                                <div className="flex items-center justify-center" >
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.name}
                                        width={400}
                                        height={400}
                                        className={`md:w-[700px] md:h-[500px] w-full md:rounded-xl`}
                                    />
                                </div>

                                {/* informações do produto */}
                                <div className="bg-white z-10 md:static relative -top-[35px] md:p-10 md:py-5 pt-5 px-5 pb-10 md:w-[452px] md:h-[507px] w-full rounded-t-[40px] md:rounded-xl md:border-[1px] md:border-[#EEEEEE]">
                                    {firestoreRestaurant
                                        .filter((restaurant: any) => restaurant.id === product.restaurantId)
                                        .map((restaurant: any, index: any) => (
                                            <div key={index} >

                                                <div className="flex items-start gap-1 flex-col" >
                                                    <div className="flex items-center gap-1" >
                                                        <Image
                                                            src={restaurant.imageUrl}
                                                            alt={restaurant.name}
                                                            width={400}
                                                            height={400}
                                                            className="w-5 h-5 rounded-full"
                                                        />
                                                        <h1 className="md:text-sm text-xs text-[#7E8392]" >{restaurant.name}</h1>
                                                    </div>
                                                    <h1 className="text-[#323232] md:text-2xl text-xl" >{product.name}</h1>
                                                </div>

                                                <div className="flex items-center justify-between" >
                                                    <div className="" >
                                                        <div className="flex items-center gap-2" >
                                                            <span className="md:text-2xl text-xl font-extrabold" >R$ {Discount(product.price, product.discount).toFixed(2).replace('.', ',')}</span>
                                                            {
                                                                product.discount != '0' &&
                                                                <div className=' text-white bg-[var(--red)] md:text-sm text-xs flex items-center justify-center gap-1 p-1 px-2 rounded-xl' >
                                                                    <span><FaArrowDown size={10} /></span>
                                                                    <span>{product.discount}%</span>
                                                                </div>
                                                            }
                                                        </div>
                                                        {
                                                            product.discount != '0' &&
                                                            <span className="md:text-base text-sm text-[#7E8392] line-through" >de R$ {product.price.toFixed(2).replace('.', ',')}</span>
                                                        }
                                                    </div>
                                                    <div className="flex items-center justify-between gap-1" >
                                                        <button className="p-2 border-[0.5px] border-[#b8babf] rounded-lg" onClick={handleAnyLessQuanty} ><IoRemoveOutline /></button>
                                                        <span className='w-8 text-center' >{quanty}</span>
                                                        <button className="p-2 border-[1px] border-[#b8babfs] rounded-lg bg-[var(--red)] text-white" onClick={handleMoreQuanty} ><IoAddOutline /></button>
                                                    </div>
                                                </div>

                                                <>
                                                    <DeliveryTime_And_DeliveyFree restaurant={restaurant} />
                                                </>

                                                <div className="flex flex-col justify-center items-start gap-3" >
                                                    <h1 className="md:text-base text-sm" >Sobre</h1>
                                                    <p className="md:text-sm text-xs text-[#7E8392] text-justify" >{product.about}</p>
                                                </div>

                                                <Add_Sacola product={product} quanty={quanty} setQuanty={setQuanty} />

                                            </div>
                                        ))}
                                </div>
                            </div>
                            <div className="md:p-0 md:py-5 px-5 pb-10" >
                                <Products_Type restaurantId={product.restaurantId} />
                            </div>
                        </div>
                    ))}
            </main>
            <>
                <Button_Back />
            </>
        </>
    )
}

export default Page