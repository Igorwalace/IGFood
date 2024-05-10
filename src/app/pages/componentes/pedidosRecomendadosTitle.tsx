import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

interface title {
    title?: any
    isVerTudo?: boolean
}

const PedidosRecomendadosTitle = ({ title, isVerTudo }: title) => {
    return (
        <>
            <div className='flex items-center justify-between mb-2' >
                <h1 className='text-[#323232] md:text-lg text-base first-letter:capitalize' >{title}</h1>
                {
                    isVerTudo &&
                    <span className='text-[var(--red)] md:text-sm text-xs font-medium cursor-pointer flex items-center justify-center gap-2' >Ver Todos
                        <span><IoIosArrowForward /></span>
                    </span>
                }
            </div>
        </>
    )
}

export default PedidosRecomendadosTitle