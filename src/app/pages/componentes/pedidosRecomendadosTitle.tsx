import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const PedidosRecomendadosTitle = () => {
    return (
        <>
            <div className='flex items-center justify-between mb-2' >
                <h1 className='text-[#323232] md:text-lg text-base' >Pedidos Recomendados</h1>
                <span className='text-[var(--red)] md:text-sm text-xs font-medium cursor-pointer flex items-center justify-center gap-2' >Ver Todos
                    <span><IoIosArrowForward /></span>
                </span>
            </div>
        </>
    )
}

export default PedidosRecomendadosTitle