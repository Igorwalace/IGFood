import React from 'react'
import { CiSearch } from 'react-icons/ci'

const SearchHome = () => {
    return (
        <>
            <main className='flex items-center gap-1' >
                <input type="text" name="" id="" className='bg-[#F4F4F5] rounded-xl py-3 px-4 w-full placeholder:text-[#7E8392] placeholder:text-sm' placeholder='Buscar Restaurantes' />
                <span className='p-3 bg-[var(--red)] text-white rounded-xl font-extrabold hover:scale-105 duration-200' ><CiSearch size={20} /></span>
            </main>
        </>
    )
}

export default SearchHome