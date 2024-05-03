import { sedgwick_Ave_Display } from '@/app/fonts/fonts'
import React from 'react'
import { CiMenuBurger, CiSearch } from 'react-icons/ci'

const Header_fixo = () => {
    return (
        <>
            <main className='flex items-center justify-between' >
                <div>
                    <h1 className={`${sedgwick_Ave_Display.className} text-4xl text-black `}>IG<span className='text-[var(--red)]' >Logo</span></h1>
                </div>
                <div className='flex items-center gap-1' >
                    <input type="text" className='bg-[#F4F4F5] rounded-xl py-2 px-4 w-full placeholder:text-[#7E8392] placeholder:text-sm outline-none' placeholder='Buscar Restaurantes' />
                    <span className='p-2 bg-[var(--red)] text-white rounded-xl font-extrabold hover:scale-105 duration-200 cursor-pointer' ><CiSearch size={20} /></span>
                </div>
                <div className='cursor-pointer' >
                    <CiMenuBurger size={20} />
                </div>
            </main>
        </>
    )
}

export default Header_fixo