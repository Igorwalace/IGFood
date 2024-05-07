import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
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
    confirmDeletePedido: boolean
    setConfirmDeletePedido: any
    handleConfirmDelete: any
}

const ModalConfirmDeletePedido = ({ confirmDeletePedido, setConfirmDeletePedido, handleConfirmDelete }: Restaurant) => {
    return (
        <AlertDialog open={confirmDeletePedido} onOpenChange={setConfirmDeletePedido} >
            <AlertDialogContent className='md:w-auto w-[95%] rounded-lg text-left' >
                <AlertDialogHeader >
                    <div className='flex md:flex-row flex-col items-start justify-start text-left md:gap-1' >
                        <AlertDialogTitle className='text-[var(--red)]'>Atenção!</AlertDialogTitle>
                        <AlertDialogTitle>Deseja delete esse produto do carrinho?</AlertDialogTitle>
                    </div>
                    <AlertDialogDescription className='text-left' >
                        Se confirmar esse produto será excluido do carrinho.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction className='bg-[var(--red)] text-white hover:bg-[var(--red)] hover:scale-105 duration-200' onClick={handleConfirmDelete} >Continuar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ModalConfirmDeletePedido