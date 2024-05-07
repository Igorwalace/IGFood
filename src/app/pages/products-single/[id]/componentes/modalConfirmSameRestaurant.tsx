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
    confirmSameRestaurant: boolean
    setConfirmSameRestarant: any
    handleAddProdutSameRestaurant:any
}

const ModalConfirmSameRestaurant = ({confirmSameRestaurant, setConfirmSameRestarant, handleAddProdutSameRestaurant}: Restaurant) => {
    return (
        <AlertDialog open={confirmSameRestaurant} onOpenChange={setConfirmSameRestarant} >
            <AlertDialogContent className='md:w-auto w-[95%] rounded-lg text-left' >
                <AlertDialogHeader >
                    <div className='flex md:flex-row flex-col items-start justify-start text-left md:gap-1' >
                        <AlertDialogTitle className='text-[var(--red)]'>Atenção!</AlertDialogTitle>
                        <AlertDialogTitle>Produtos de diferentes resturantes.</AlertDialogTitle>
                    </div>
                    <AlertDialogDescription className='text-left' >
                        Você não pode adicionar produtos de diferentes restaurantes na mesma sacola. Se você continuar, sua sacola será limpa e o novo produto será adicionado.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction className='bg-[var(--red)] text-white hover:bg-[var(--red)] hover:scale-105 duration-200' onClick={handleAddProdutSameRestaurant} >Continuar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ModalConfirmSameRestaurant