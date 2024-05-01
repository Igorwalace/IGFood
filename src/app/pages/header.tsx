import React from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { sedgwick_Ave_Display } from '../fonts/fonts'

const Header = () => {
    return (
        <>
            <main className='flex items-center justify-between' >
                <div>
                    <h1 className={`${sedgwick_Ave_Display.className} text-4xl text-black `}>IG<span className='text-[var(--red)]' >Food</span></h1>
                </div>
                <div className='cursor-pointer' >
                    <CiMenuBurger size={20} />
                </div>
            </main>
        </>
    )
}

export default Header