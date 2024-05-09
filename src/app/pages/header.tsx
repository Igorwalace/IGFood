//react
import React from 'react'
import Link from 'next/link'

//fonts
import { sedgwick_Ave_Display } from '../fonts/fonts'

//pages
import Menu from './componentes/Menu'


const Header = () => {
    return (
        <>
            <main className='flex items-center justify-between' >
                <Link href='/' >
                    <h1 className={`${sedgwick_Ave_Display.className} text-4xl text-black `}>IG<span className='text-[var(--red)]' >Food</span></h1>
                </Link>
                <Menu />
            </main>
        </>
    )
}

export default Header