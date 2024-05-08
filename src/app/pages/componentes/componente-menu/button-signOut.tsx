'use client'

//provider context
import { AppContextFirebaseAuth } from '@/app/contexts/providers/auth'

//react
import React, { useContext, useState } from 'react'

//icons
import { IoExitOutline } from 'react-icons/io5'
import ModalConfirmExitAcconut from './componentes_auth/modalConfirmExitAcconut'

//shadc 
import { useToast } from "@/components/ui/use-toast"

const Button_SignOut = () => {
    const { toast } = useToast()
    const { user, setUser } = useContext(AppContextFirebaseAuth)
    const [isModalConfirmExit, setIsModalConfirmExit] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const SignOut = () => {
        setIsLoading(true)
        setTimeout(async () => {
            await setUser([])
            setIsLoading(false)
            toast({
                description: (
                    <h1 className="text-[var(--red)]" >Você saiu.</h1>
                )
            })
        }, 1500);
    }

    const SignOutConfirm = () => {
        setIsModalConfirmExit(true)
    }

    return (
        <>
            {
                user.accessToken &&
                < button className='absolute bottom-5 left-5 right-0 flex items-center gap-2 rounded-xl p-2' onClick={SignOutConfirm} >
                    <span><IoExitOutline /></span>
                    <span className='md:text-sm text-xs ' >Sair da conta</span>
                </button >
            }
            <ModalConfirmExitAcconut
                isModalConfirmExit={isModalConfirmExit}
                setIsModalConfirmExit={setIsModalConfirmExit}
                SignOut={SignOut}
            />
            {isLoading &&
                <div className='fixed -top-2 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.5)] flex flex-col gap-2 justify-center items-center' >
                    <div id='isLoading' className='p-2' ></div>
                </div>
            }
        </>
    )
}

export default Button_SignOut