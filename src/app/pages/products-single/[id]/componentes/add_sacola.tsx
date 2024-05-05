'use client'

//contexts
import useAppCarrinho from "@/app/contexts/carrinho"

//react
import { useEffect, useState } from "react"

//shadcn
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5"

interface Product {
    product: any
    quanty: number
}

const Add_Sacola = ({ product, quanty }: Product) => {
    const { setProductCarrinho, productCarrinho, setTotal, setSubTotal, setDiscount, discount, total, subTotal, quantyCurrent, setQuantyCurrent } = useAppCarrinho()
    const [att, setAtt] = useState([])

    useEffect(() => {
        const total = productCarrinho.reduce((accumulator: any, productCarrinho: any) => accumulator + parseFloat(productCarrinho.product.price) - (parseFloat(productCarrinho.product.price) * productCarrinho.product.discount / 100 * productCarrinho.quanty), 0);
        const discount = productCarrinho.reduce((accumalator: any, productCarrinho: any) => accumalator + (parseFloat(productCarrinho.product.price) * productCarrinho.product.discount / 100 * productCarrinho.quanty), 0)
        const subTotal = productCarrinho.reduce((accumalator: any, productCarrinho: any) => accumalator + (parseFloat(productCarrinho.product.price) * productCarrinho.quanty), 0)
        const quantyProduct = productCarrinho.reduce((accumalator: any, quantyCurrent: any) => accumalator + quantyCurrent.quanty, 0)
        setTotal(total)
        setSubTotal(subTotal)
        setDiscount(discount)
        setQuantyCurrent(quantyProduct)

    }, [total, discount, subTotal, productCarrinho, setTotal, setSubTotal, setDiscount, setQuantyCurrent]);

    const handleAddProductCart = async () => {
        const updatedArray = [...productCarrinho, { product, quanty }];
        setProductCarrinho(updatedArray)
    };

    return (
        <>
            <div className="flex justify-center items-center mt-5" >
                <button className="bg-[var(--red)] py-3 text-white rounded-xl w-full hover:scale-105 duration-200" onClick={() => handleAddProductCart()} >Adicionar na sacola</button>
            </div>

            {
                productCarrinho.length > 0 &&
                <div className="fixed bottom-0 left-0 right-0 bg-white md:px-[128px] px-5 py-2" >
                    <div className="relative" >
                        <div className="flex items-center md:justify-start justify-between gap-4" >
                            <div className="flex items-center flex-col" >
                                <span className="text-[#7E8392] md:text-sm text-xs" >Total sem entrega</span>
                                <div className="" >
                                    <span className="md:text-lg text-base font-extrabold">R$ {total.toFixed(2).replace('.', ',')}</span>
                                    <span className="md:text-xs text-[10px] text-[#7E8392] " > / </span>
                                    <span className="md:text-sm text-xs text-[#7E8392] ">{quantyCurrent} {quantyCurrent == 0 ? 'item' : 'itens'}</span>
                                </div>
                            </div>
                            <Sheet>
                                <SheetTrigger className="bg-[var(--red)] rounded-lg py-2 px-3 text-white hover:scale-105 duration-200" >
                                    Ver Sacola
                                </SheetTrigger>
                                <SheetContent side='bottom' className="h-[80vh] overflow-y-auto rounded-xl" >
                                    <SheetHeader>
                                        <SheetTitle>Sacola</SheetTitle>
                                        <div className="flex items-center gap-3 flex-wrap overflow-auto" >
                                            {
                                                productCarrinho.map((product: any, index:any) => (
                                                    <div key={index} >
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-[150px] h-[120px]" >
                                                                <Image
                                                                    src={product.product.imageUrl}
                                                                    alt={product.product.name}
                                                                    width={400}
                                                                    height={400}
                                                                    className='w-full h-full rounded-xl'
                                                                />
                                                            </div>
                                                            <div className="flex justify-center flex-col gap-2">
                                                                <h1 className='md:text-sm text-xs' >{product.product.name}</h1>
                                                                <div className='flex items-center gap-1' >
                                                                    <span className="md:text-base text-sm font-extrabold" >R$ {total}</span>
                                                                    <span className="md:text-xs text-[10px] text-[#7E8392] line-through" >R$ {subTotal}</span>
                                                                </div>
                                                                <div className="flex items-center gap-3" >
                                                                    <button className="p-2 border-[0.5px] border-[#b8babf] rounded-lg" ><IoRemoveOutline /></button>
                                                                    <span>{product.quanty}</span>
                                                                    <button className="p-2 border-[1px] border-[#b8babfs] rounded-lg bg-[var(--red)]" ><IoAddOutline /></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}
export default Add_Sacola