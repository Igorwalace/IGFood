import Image from 'next/image'
import React from 'react'
import { Products } from './componentes/ACategoria'

const Categorias = () => {
    return (
        <>
            <main className='flex justify-between items-center overflow-x-auto scrollbar-hide gap-2' >
                {
                    Products.map((info:any, index:number) => (
                        <div className='px-5 py-4 flex justify-around items-center bg-white md:h-[52px] h-[54px] rounded-3xl' key={index}>
                            <div className='w-9 h-9' >
                                <Image
                                    className='w-9 h-9'
                                    src={info.img}
                                    alt={info.title}
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div>
                                <h1 className='text-[#323232] font-semibold md:text-sm text-xs'>{info.title}</h1>
                            </div>
                        </div>
                    ))
                }
            </main>
        </>
    )
}

export default Categorias