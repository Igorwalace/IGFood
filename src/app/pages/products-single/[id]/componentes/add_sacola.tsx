'use client'

//contexts
import useAppContextFirestore from "@/app/contexts/banco"
import useAppCarrinho from "@/app/contexts/carrinho"

//react
import { useState } from "react"
import Image from "next/image"

//shadcn
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useToast } from "@/components/ui/use-toast"

//icons
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5"
import { AiOutlineDelete } from "react-icons/ai"
import ModalConfirmSameRestaurant from "./modalConfirmSameRestaurant"

interface Product {
    product: any
    quanty: number
}

const Add_Sacola = ({ product, quanty }: Product) => {
    const { toast } = useToast()
    const [confirmSameRestaurant, setConfirmSameRestarant] = useState(false)

    const { setProductCarrinho, productCarrinho, quantyCurrent, setQuantyCurrent } = useAppCarrinho()
    const { firestoreRestaurant } = useAppContextFirestore()

    const subTotalProductSingle = Number(product.price) * quanty
    const totalProductSingle = Number(product.price - product.price * product.discount / 100) * quanty

    const totalDiscountBag = productCarrinho.reduce((acc: any, product: any) => acc + parseFloat(product.product.price) * product.product.discount / 100 * product.quanty, 0)
    const subTotalPriceBag = productCarrinho.reduce((acc: any, product: any) => acc + parseFloat(product.product.price) * product.quanty, 0)
    const totalQuantyBag = productCarrinho.reduce((acc: any, product: any) => acc + parseFloat(product.quanty), 0);
    const totalPriceBag = productCarrinho.reduce((acc: any, product: any) => acc + product.totalProductSingle, 0);
    setQuantyCurrent(totalQuantyBag)

    const handleAddProductCart = () => {
        const sameProduct = productCarrinho.find((sameProduct: any) => sameProduct.product.id === product.id)
        if (sameProduct) {
            const updatedCarrinhoProduct = productCarrinho.map((item: any) =>
                item.product.id === product.id ? { ...item, quanty: item.quanty + quanty } : item
            );
            setProductCarrinho(updatedCarrinhoProduct)
            toast({
                description: (
                    <h1 className="text-[var(--red)]" >Quantidade de {product.name} atualizada na sacola.</h1>
                )
            })
            return
        }

        const sameRestaurant = productCarrinho.find((sameRestaurant: any) => sameRestaurant.product.restaurantId != product.restaurantId)
        if (sameRestaurant) {
            setConfirmSameRestarant(true)
            return
        }
        
        setProductCarrinho((prevState: any) => ([...prevState, { product, quanty, subTotalProductSingle, totalProductSingle, totalDiscountBag }]));
        toast({
            description: (
                <h1 className="text-[var(--red)]" >Sacola atualizada.</h1>
            )
        })
    }

    const handleRemoverProductBag = (id: any) => {
        const remove = productCarrinho.filter((product: any) => product.product.id != id)
        setProductCarrinho(remove)
        toast({
            description: (
                <h1 className="text-[var(--red)]" >Produto removido.</h1>
            )
        })
    }

    const handleAddProdutSameRestaurant = () => {
        setProductCarrinho([])
        setProductCarrinho((prevState: any) => ([...prevState, { product, quanty, subTotalProductSingle, totalProductSingle, totalDiscountBag }]));
        toast({
            description: (
                <h1 className="text-[var(--red)]" >Sacola atualizada com um novo restaurante.</h1>
            )
        })
    }

    return (
        <>
            <div className="flex justify-center items-center mt-5" >
                <button className="bg-[var(--red)] py-3 text-white rounded-xl w-full hover:scale-105 duration-200" onClick={() => handleAddProductCart()} >Adicionar na sacola</button>
            </div>

            <div className={`fixed bottom-0 left-0 right-0 bg-white md:px-[128px] px-5 py-2 ${quantyCurrent == 0 ? 'invisible' : 'visible'}`} >
                <div className="relative" >
                    <div className="flex items-center md:justify-start justify-between gap-4" >
                        <div className="flex items-center flex-col" >
                            <span className="text-[#7E8392] md:text-sm text-xs">
                                Total sem entrega</span>
                            <div className="" >
                                <span className="md:text-lg text-base font-extrabold" onClick={() => { setProductCarrinho([]) }} >R$ {totalPriceBag.toFixed(2).replace('.', ',')}</span>
                                <span className="md:text-xs text-[10px] text-[#7E8392] " > / </span>
                                <span className="md:text-sm text-xs text-[#7E8392] ">{quantyCurrent} {quantyCurrent == 0 ? 'item' : 'itens'}</span>
                            </div>
                        </div>
                        <Sheet>
                            <SheetTrigger className="bg-[var(--red)] rounded-lg py-2 px-3 text-white hover:scale-105 duration-200" >
                                Ver Sacola
                            </SheetTrigger>
                            <SheetContent side='left' className="md:w-[50%] w-[80%] rounded-xl" >
                                <SheetHeader className="h-full" >
                                    <SheetTitle>Sacola</SheetTitle>
                                    <div className="flex items-start flex-col justify-between gap-3 flex-wrap h-full" >
                                        <div className="space-y-3 h-[370px] overflow-x-auto scrollbar-hide w-full" >
                                            {
                                                quantyCurrent == 0 && <h1 className="text-center mt-5" >Nenhum produto encontrado.</h1>
                                            }
                                            {
                                                productCarrinho.map((product: any, index: any) => (
                                                    <div key={index}>
                                                        <div className="flex items-center justify-between gap-3">
                                                            <div className='flex items-center gap-3' >
                                                                <div className="w-[110px] h-[90px]" >
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
                                                                        <span className="md:text-base text-sm font-extrabold" >R$ {product.totalProductSingle.toFixed(2).replace('.', ',')}</span>
                                                                        {
                                                                            product.product.discount != '0' && <span className="md:text-xs text-[10px] text-[#7E8392] line-through" >R$ {product.subTotalProductSingle.toFixed(2).replace('.', ',')}</span>
                                                                        }
                                                                    </div>
                                                                    <div className="flex items-center gap-3" >
                                                                        <button className="p-2 border-[0.5px] border-[#b8babf] rounded-lg" ><IoRemoveOutline /></button>
                                                                        <span>{product.quanty}</span>
                                                                        <button className="p-2 border-[1px] border-[#b8babfs] rounded-lg bg-[var(--red)]" ><IoAddOutline /></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button className='hover:scale-105 duration-200' onClick={() => handleRemoverProductBag(product.product.id)} >
                                                                <AiOutlineDelete size={25} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className={`w-full ${quantyCurrent == 0 && 'invisible'}`} >
                                            {
                                                firestoreRestaurant
                                                    .filter((restaurant: any) => restaurant.id == product.restaurantId)
                                                    .map((restaurant: any, index: any) => (
                                                        <div className="border-t-[1px] border-t-[#7E8392] w-full py-2 space-y-3" key={index} >
                                                            <div className="flex items-center justify-between" >
                                                                <span className='md:text-sm text-xs' >SubTotal:</span>
                                                                <span className='md:text-sm text-xs' >R$ {subTotalPriceBag.toFixed(2).replace('.', ',')}</span>
                                                            </div>
                                                            {
                                                                product.discount != '0' &&
                                                                <div className="flex items-center justify-between" >
                                                                    <span className='md:text-sm text-xs' >Descontos:</span>
                                                                    <span className='md:text-sm text-xs line-through text-[#7E8392]' >R$ {totalDiscountBag.toFixed(2).replace('.', ',')}</span>
                                                                </div>
                                                            }
                                                            <div className="flex items-center justify-between" >
                                                                <span className='md:text-sm text-xs' >Entrega:</span>
                                                                <>
                                                                    {
                                                                        restaurant.deliveryTotal != 'Grátis' ?
                                                                            <span className='md:text-sm text-xs text-[var(--red)]' >
                                                                                R$ {restaurant.deliveryTotal}
                                                                            </span>
                                                                            :
                                                                            <span key={index} className='md:text-sm text-xs text-[var(--red)]' >
                                                                                {restaurant.deliveryTotal}
                                                                            </span>
                                                                    }
                                                                </>
                                                            </div>
                                                            <div className="flex items-center justify-between font-bold" >
                                                                <span className="md:text-base text-sm" >Total:</span>
                                                                {
                                                                    restaurant.deliveryTotal != 'Grátis' ?
                                                                        <span>R$ {(totalPriceBag + parseFloat(restaurant.deliveryTotal)).toFixed(2).replace('.', ',')}</span>
                                                                        :
                                                                        <span>R$ {totalPriceBag.toFixed(2).replace('.', ',')}</span>
                                                                }
                                                            </div>
                                                            <button className="bg-[var(--red)] w-full py-2 text-white rounded-xl hover:scale-105 duration-200" >Finalizar Pedido</button>
                                                        </div>
                                                    ))
                                            }
                                        </div>
                                    </div>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
            <ModalConfirmSameRestaurant
                confirmSameRestaurant={confirmSameRestaurant}
                setConfirmSameRestarant={setConfirmSameRestarant}
                handleAddProdutSameRestaurant={handleAddProdutSameRestaurant}
            />
        </>
    )
}
export default Add_Sacola