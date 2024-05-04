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
                <div className='cursor-pointer' >
                    <CiMenuBurger size={20} />
                </div>
            </main>
        </>
    )
}

export default Header_fixo