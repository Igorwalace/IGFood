'use client'
//react
import React from 'react'

import Header from '../header'
import Info_Restaurants from './info-restaurants'

const Page = () => {

  return (
    <>
      <main className='md:px-[128px] p-5 md:py-5 py-3' >
        <div className='mb-5' >
          <Header />
        </div>
        <div className='flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide'>
          <Info_Restaurants />
        </div>
      </main>
    </>
  )
}

export default Page