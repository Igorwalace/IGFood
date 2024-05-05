'use client'

//contexts
import useAppCarrinho from "@/app/contexts/carrinho"
import { useEffect } from "react"

interface Product {
    product: any
    quanty: number
}

const Add_Sacola = ({ product, quanty }: Product) => {
    const { setProductCarrinho, productCarrinho, setTotal, setSubTotal, setDiscount, discount, total, subTotal, quantyCurrent, setQuantyCurrent } = useAppCarrinho()

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

    const handleAddProductCart = () => {
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
                            <button className="bg-[var(--red)] rounded-lg py-2 px-3 text-white hover:scale-105 duration-200" >Ver Sacola</button>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}
export default Add_Sacola