'use client'

//react
import { useRouter } from 'next/navigation'
import React from 'react'

//icons
import { IoIosArrowBack } from 'react-icons/io'

const Button_Back = () => {

    const router = useRouter()
    
    return (
        <>
            <div className="md:hidden absolute top-4 left-4" >
                <button className="bg-white p-3 rounded-xl hover:scale-105 duration-200" onClick={() => { router.back() }} ><IoIosArrowBack /></button>
            </div>
        </>
    )
}

export default Button_Back