import Image from 'next/image'
import React from 'react'
import { CiSearch } from 'react-icons/ci'

const BannerOfertas = () => {
  return (
    <>
      <main className='w-full h-[500px] bg-[var(--red)] flex items-center justify-center text-white' >
        <div className='flex items-center justify-center gap-10' >
          <div className='flex items-center justify-center flex-col gap-4' >
            <div className='flex items-start w-[658px] text-left flex-col' >
              <h1 className='text-[48px] font-bold ' >Está com fome?</h1>
              <span>Com apenas alguns cliques, encontre refeições acessíveis perto de você.</span>
            </div>
            <div className='bg-white p-5 w-[658px] h-[88px] flex justify-between items-center gap-2 rounded-xl' >
              <input type="search" className='py-3 px-4 outline-none bg-[#F4F4F5] w-full rounded-xl' placeholder='Buscar restaurantes' />
              <span className='p-[10px] bg-[#FFB100] rounded-md' ><CiSearch /></span> 
            </div>
          </div>
          <div className='relative top-0 font-black' >
            <Image
              src='/comidaBanner.png'
              alt='Comida'
              width={400}
              height={400}
            />

          </div>
        </div>
      </main>
    </>
  )
}

export default BannerOfertas