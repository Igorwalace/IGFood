import React from 'react'

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

const Menu = () => {
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
                            <button className='flex items-center justify-between w-full' >
                                <span className='md:text-base text-sm font-extrabold' >Olá. Faça seu Login!</span>
                                <span className='bg-[var(--red)] text-white p-1 rounded-md' ><IoExitOutline size={30} /></span>
                            </button>
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
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default Menu