'use client'

import useAppCarrinho from "@/app/contexts/carrinho"

interface Product {
    product:any
}

const Add_Sacola = ({product}:Product) => {
    const { setProductCarrinho, productCarrinho } = useAppCarrinho()

    const handleAddProductCart = (product:any) => {
        setProductCarrinho((prev:any)=> [
            ...prev,
            product
        ])
        console.log(productCarrinho)
    }

    return (
        <div className="flex justify-center items-center mt-5" >
            <button className="bg-[var(--red)] py-3 text-white rounded-xl w-full hover:scale-105 duration-200" onClick={()=>handleAddProductCart(product)} >Adicionar na sacola</button>
        </div>
    )
}
export default Add_Sacola