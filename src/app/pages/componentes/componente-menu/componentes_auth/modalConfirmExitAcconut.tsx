import React from 'react'

//shadc
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

interface Restaurant {
    isModalConfirmExit: boolean
    setIsModalConfirmExit: any
    SignOut:any
}

const ModalConfirmExitAcconut = ({isModalConfirmExit, setIsModalConfirmExit, SignOut}: Restaurant) => {
    return (
        <AlertDialog open={isModalConfirmExit} onOpenChange={setIsModalConfirmExit}  >
            <AlertDialogContent className='md:w-auto w-[95%] rounded-lg text-left' >
                <AlertDialogHeader >
                    <div className='flex md:flex-row flex-col items-start justify-start text-left md:gap-1' >
                        <AlertDialogTitle className='text-[var(--red)]'>Atenção!</AlertDialogTitle>
                        <AlertDialogTitle>Deseja sair da conta?</AlertDialogTitle>
                    </div>
                    <AlertDialogDescription className='text-left' >
                        Você poderá fazer login depois novamente.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction className='bg-[var(--red)] text-white hover:bg-[var(--red)] hover:scale-105 duration-500' onClick={SignOut} >Continuar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ModalConfirmExitAcconut