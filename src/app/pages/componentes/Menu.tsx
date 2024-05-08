'use client'

//react
import React, { useContext } from 'react'
import Link from 'next/link'

//shadcn
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

// icons
import { CiMenuBurger } from 'react-icons/ci'
import { IoExitOutline, IoHomeOutline } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa'
import { GoChecklist } from 'react-icons/go'

//context Auth
import { AppContextFirebaseAuth } from '@/app/contexts/providers/auth'
import Image from 'next/image'

//pages

const Menu = () => {

    const { user } = useContext(AppContextFirebaseAuth)

    return (
        <>
            <Sheet>
                <SheetTrigger className='cursor-pointer' >
                    <CiMenuBurger size={20} />
                </SheetTrigger>
                <SheetContent>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetHeader>
                        <div className='my-5' >
                            {
                                user.accessToken ?
                                    <div className='flex items-center justify-start w-full' >
                                        <div>
                                            <Image
                                                src={user.photoURL}
                                                alt={`Avatar de ${user.displayName}`}
                                                width={400}
                                                height={400}
                                                className='md:w-[30px] md:h-[30px] rounded-full border-2 border-[var(--red)]'
                                            />
                                        </div>
                                        <div className='flex flex-col items-start justify-start' >
                                            <h1 className='font-extrabold capitalize' >{user.displayName}</h1>
                                            <span className='md:text-xs text-[10px] text-[#7E8392]' >{user.email}</span>
                                        </div>
                                    </div>
                                    :
                                    <Link href='/pages/auth' className='flex items-center justify-between w-full' >
                                        <span className='md:text-base text-sm font-extrabold' >Olá. Faça seu Login!</span>
                                        <span className='bg-[var(--red)] text-white p-1 rounded-md'><IoExitOutline size={20} /></span>
                                    </Link>
                            }
                        </div>
                        <div className='space-y-1' >
                            <div className='flex items-center gap-2 rounded-xl p-2' >
                                <span><IoHomeOutline /></span>
                                <span className='md:text-sm text-xs ' >Ínicio</span>
                            </div>
                            <div className='flex items-center gap-2 rounded-xl p-2' >
                                <span><GoChecklist /></span>
                                <span className='md:text-sm text-xs ' >Meus Pedidos</span>
                            </div>
                            <div className='flex items-center gap-2 rounded-xl p-2' >
                                <span><FaRegHeart /></span>
                                <span className='md:text-sm text-xs ' >Restaurantes Favoritos</span>
                            </div>
                        </div>
                        {
                            user.accessToken &&
                            <button className='absolute bottom-5 left-5 right-0 flex items-center gap-2 rounded-xl p-2' >
                                <span><IoExitOutline /></span>
                                <span className='md:text-sm text-xs ' >Sair da conta</span>
                            </button>
                        }
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default Menu