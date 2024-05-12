import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <main className='flex items-center justify-between pb-2' >
                <h1 className='md:text-base text-sm' >Desenvolvido por <Link className='text-[var(--red)] underline hover:scale-105 duration-200' href='https://my-website-igor-eight.vercel.app/' target='_blank' >Igor Walace</Link>.</h1>
            </main>
        </>
    )
}

export default Footer