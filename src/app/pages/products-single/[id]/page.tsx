'use client'

//Pages
import Header_fixo from "../../componentes/header-fixo";

//react
import Image from "next/image";

//contexts
import useAppContextFirestore from "@/app/contexts/banco";

//pages
import Discount from "../../componentes/discount";
import Products_Type from "./componentes/products-types";

//icons
import { FaArrowDown, FaMotorcycle } from "react-icons/fa";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { PiTimer } from "react-icons/pi";
import Header from "../../header";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

interface ProductSingle {
    params: {
        id: string
    }
}

const Page = ({ params: { id } }: ProductSingle) => {

    const router = useRouter()

    const { firestoreProducts, firestoreRestaurant } = useAppContextFirestore()

    return (
        <>
            <div className="md:px-[128px] p-5 md:py-5 py-3 hidden md:block" ><Header /></div>
            <main className="md:px-[128px] md:py-5" >
                {firestoreProducts
                    .filter((product: any) => product.id === id)
                    .map((product: any, index: any) => (
                        <div key={index} >
                            <div className="md:flex items-center justify-between gap-10 mb-5" >
                                {/* image */}
                                <div className="flex items-center justify-center" >
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.name}
                                        width={400}
                                        height={400}
                                        className={`md:w-[700px] md:h-[500px] w-full md:rounded-xl ${product.category == 'bebida' && 'border-[2px] border-[#121b37]'}`}
                                    />
                                </div>

                                {/* informações do produto */}
                                <div className="bg-white z-10 md:static relative -top-[35px] md:p-10 py-5 px-10 md:w-[552px] md:h-[507px] w-full rounded-t-[40px] md:rounded-xl md:border-[1px] md:border-[#EEEEEE]">
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
                                                    <div className="flex items-center gap-3" >
                                                        <div className="p-2 border-[0.5px] border-[#b8babf] rounded-lg" ><IoRemoveOutline /></div>
                                                        <span>1</span>
                                                        <div className="p-2 border-[1px] border-[#b8babfs] rounded-lg bg-[var(--red)]" ><IoAddOutline /></div>
                                                    </div>
                                                </div>

                                                <div className="my-5 flex items-center justify-between px-12 py-2 rounded-full border-[1px] border-[#EEEEEE]" >
                                                    <div>
                                                        <div className="flex items-center gap-1 text-[#7E8392] md:text-sm text-xs" >
                                                            <span>Entrega </span>
                                                            <span><FaMotorcycle /></span>
                                                        </div>
                                                        {restaurant.deliveryTotal == 'Grátis' ? <span className="md:text-sm text-xs" >{restaurant.deliveryTotal}</span> : <span className="md:text-sm text-xs" >R$ {restaurant.deliveryTotal}</span>}
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center text-[#7E8392] md:text-sm text-xs" >
                                                            <span>Entrega </span><span><PiTimer /></span>
                                                        </div>
                                                        <span className="md:text-sm text-xs" >{restaurant.deliveryTime}min</span>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col justify-center items-start gap-3" >
                                                    <h1 className="md:text-base text-sm" >Sobre</h1>
                                                    <p className="md:text-sm text-xs text-[#7E8392] text-justify" >{product.about}</p>
                                                </div>

                                                <div className="flex justify-center items-center my-5" >
                                                    <button className="bg-[var(--red)] py-3 text-white rounded-xl w-full" >Adicionar na sacola</button>
                                                </div>

                                            </div>
                                        ))}
                                </div>
                            </div>
                            <div className="md:p-0 py-5 px-10" >
                                <Products_Type />
                            </div>
                        </div>
                    ))}
            </main>
            <div className="md:hidden absolute top-4 left-4" >
                <button className="bg-white p-3 rounded-xl hover:scale-105 duration-200" onClick={()=>{router.back()}} ><IoIosArrowBack /></button>
            </div>
        </>
    )
}

export default Page