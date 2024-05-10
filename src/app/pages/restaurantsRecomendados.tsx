'use client'
import React from 'react'

//pages
import Restaurants from './componentes/restaurants'
import PedidosRecomendadosTitle from './componentes/pedidosRecomendadosTitle'

//icons
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import useAppContextFirestore from '../contexts/banco'

const RestaurantsRecomendados = () => {
    const { firestoreRestaurant } = useAppContextFirestore()


    const handleScroll = () => {
        const element: any = document.getElementById('my-scrollable-element');
        const targetScrollPosition = element.scrollLeft + 300; // Posição final da rolagem

        const scrollAmount = 40; // Quantidade de pixels por atualização
        let currentScrollPosition = element.scrollLeft; // Posição inicial da rolagem

        const animateScroll = () => {
            if (currentScrollPosition < targetScrollPosition) {
                currentScrollPosition += scrollAmount;
                element.scrollLeft = currentScrollPosition;

                // Solicita a próxima atualização do loop
                requestAnimationFrame(animateScroll);
            } else {
                // Parar a animação quando a posição final for atingida
            }
        };

        // Iniciar a animação
        animateScroll();
    };
    const handleScrollRight = () => {
        const element: any = document.getElementById('my-scrollable-element');
        const targetScrollPosition = element.scrollLeft - 300; // Target position (scroll left by 300px)

        const scrollAmount = 40; // Number of pixels to scroll per update
        let currentScrollPosition = element.scrollLeft; // Current scroll position

        const animateScroll = () => {
            if (currentScrollPosition > targetScrollPosition) {
                currentScrollPosition -= scrollAmount;
                element.scrollLeft = currentScrollPosition;

                // Request next animation frame for smooth update
                requestAnimationFrame(animateScroll);
            } else {
                // Stop animation when target position is reached
                element.scrollLeft = targetScrollPosition; // Ensure final position
            }
        };

        // Initiate the animation
        animateScroll();
    };
    return (
        <>
            <main>
                <div className='' >
                    <PedidosRecomendadosTitle title={'Restaurantes Recomendados'} isVerTudo={true} />
                </div>
                <div className='relative' >
                    <Restaurants />
                    {
                        firestoreRestaurant.length != 0 &&
                        <>
                            <button className='absolute top-0 bottom-7 left-0 flex justify-center items-center p-2' onClick={handleScrollRight} >
                                <h1 className='relative text-white bg-[rgb(0,0,0,0.4)] p-1 rounded-xl' ><IoIosArrowBack size={30} /></h1>
                            </button>
                            <button className='absolute top-0 bottom-7 right-0 flex justify-center items-center p-2' onClick={handleScroll} >
                                <h1 className='relative text-white bg-[rgb(0,0,0,0.4)] p-1 rounded-xl' ><IoIosArrowForward size={30} /></h1>
                            </button>
                        </>
                    }
                </div>
            </main>
        </>
    )
}

export default RestaurantsRecomendados