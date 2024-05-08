import React from 'react'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import Link from 'next/link'

interface Restaurant {
    confirmLogin: boolean
    setConfirmLogin: any
}

const ModalConfirmLogin = ({ confirmLogin, setConfirmLogin }: Restaurant) => {
    return (
        <AlertDialog open={confirmLogin} onOpenChange={setConfirmLogin} >
            <AlertDialogContent className='md:w-auto w-[95%] rounded-lg text-left' >
                <AlertDialogHeader >
                    <div className='flex md:flex-row flex-col items-start justify-start text-left md:gap-1' >
                        <AlertDialogTitle className='text-[var(--red)]'>Atenção!</AlertDialogTitle>
                        <AlertDialogTitle>Você não está logado.</AlertDialogTitle>
                    </div>
                    <AlertDialogDescription className='text-left' >
                        Para adicionar pedidos na sacola você precisa fazer login.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <Link href='/pages/auth'>
                        <AlertDialogAction className='bg-[var(--red)] text-white hover:bg-[var(--red)] hover:scale-105 duration-500' >
                            Fazer Login
                        </AlertDialogAction>
                    </Link>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ModalConfirmLogin