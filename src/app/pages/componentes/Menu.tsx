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
import Button_SignOut from './componente-menu/button-signOut'

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
                        <div className='mt-5 pb-5 border-b-[1px] border-b-[#b4b6bc]' >
                            {
                                user.accessToken ?
                                    <div className='flex items-center justify-start gap-2 md:gap-3 w-full' >
                                        <div>
                                            <Image
                                                src={user.photoURL}
                                                alt={`Avatar de ${user.displayName}`}
                                                width={400}
                                                height={400}
                                                className='md:w-[40px] md:h-[40px] w-[35px] h-[35px] rounded-full border-2 border-[var(--red)]'
                                            />
                                        </div>
                                        <div className='flex flex-col items-start justify-start' >
                                            <h1 className='font-extrabold capitalize md:text-base text-sm' >{user.displayName}</h1>
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
                        <div className='space-y-1 border-b-[1px] border-b-[#b4b6bc] pb-4' >
                            <Link href='/' className='flex items-center gap-2 rounded-xl p-2' >
                                <span><IoHomeOutline /></span>
                                <span className='md:text-sm text-xs ' >Ínicio</span>
                            </Link>
                            <Link href='/pages/meus_pedidos' className='flex items-center gap-2 rounded-xl p-2' >
                                <span><GoChecklist /></span>
                                <span className='md:text-sm text-xs ' >Meus Pedidos</span>
                            </Link>
                            <Link href='/pages/restaurants_favorite' className='flex items-center gap-2 rounded-xl p-2' >
                                <span><FaRegHeart /></span>
                                <span className='md:text-sm text-xs ' >Restaurantes Favoritos</span>
                            </Link>
                        </div>
                        <Button_SignOut />
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default Menu