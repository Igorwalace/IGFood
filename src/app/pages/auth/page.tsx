'use client'
//react
import React, { useContext, useEffect } from 'react'

//icons
import { IoPerson } from 'react-icons/io5'
import { FcGoogle } from 'react-icons/fc'
import { FaApple, FaFacebook } from 'react-icons/fa'

//fonts
import { sedgwick_Ave_Display } from '@/app/fonts/fonts'

//authContext
import { useRouter } from 'next/navigation'
import { AppContextFirebaseAuth } from '@/app/contexts/providers/auth'

const Page = () => {
    const router = useRouter();
    const { user, signInGoogle } = useContext(AppContextFirebaseAuth)

    useEffect(() => {
        if (user.uid) {
            router.push('/')
        }
    }, [user, router]);

    return (
        <>
            <main className='md:px-[128px] p-5 md:py-5 py-3'  >
                <main className='' >
                    <div className='flex justify-between items-center pb-6' >
                        <main className='flex items-center justify-between w-full' >
                            <h1 className={`${sedgwick_Ave_Display.className} text-4xl text-black `}>IG<span className='text-[var(--red)]' >Food</span></h1>
                            <div className='flex flex-row-reverse items-center gap-4' >
                                <div
                                    className='border-[1px] border-[#7E8392] p-2 rounded cursor-pointer hover:scale-110 hover:text-[#c1c1c1] duration-200'
                                >
                                    <IoPerson size={20} />

                                </div>
                            </div>
                        </main>
                    </div>
                    <div className='my-5 flex flex-col justify-center items-center gap-3 h-[60vh]' >
                        <button className="flex justify-center items-center gap-3 border-[1px] border-[#989ca5] bg-white text-black rounded-xl outline-none py-2 px-5 hover:scale-105 duration-200 w-[360px]" onClick={signInGoogle}>
                            <FcGoogle size={20} />
                            Continuar com Google
                        </button>
                        <button className="flex justify-center items-center gap-3 bg-[#3669b7] text-white rounded-xl outline-none py-2 px-5 hover:scale-105 duration-200 w-[360px]" onClick={() => { }}>
                            <FaFacebook size={20} />
                            Continuar com Facebook
                        </button>
                        <button className="border-[1px] border-[#2A2A2A] flex justify-center items-center gap-3 bg-black text-white rounded-xl outline-none py-2 px-5 hover:scale-105 duration-200 w-[360px]" onClick={() => { }}>
                            <FaApple size={20} />
                            Continuar com Apple
                        </button>
                    </div>
                </main>
            </main>
        </>
    )
}

export default Page