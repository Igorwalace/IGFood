import React from 'react'
import Products from './componentes/products'
import { IoIosArrowForward } from 'react-icons/io'

const PedidosRecomendados = () => {

    return (
        <>
            <main>
                <div className='flex items-center justify-between mb-5' >
                    <h1 className='text-[#323232] md:text-lg text-base' >Pedidos Recomendados</h1>
                    <span className='text-[var(--red)] md:text-sm text-xs font-medium cursor-pointer flex items-center justify-center gap-2' >Ver Todos
                        <span><IoIosArrowForward /></span>
                    </span>
                </div>
                <div>
                    <Products />
                </div>
            </main>
        </>
    )
}

export default PedidosRecomendados