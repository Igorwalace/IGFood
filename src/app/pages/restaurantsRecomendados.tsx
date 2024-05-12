'use client'
import React from 'react'

//pages
import Restaurants from './componentes/restaurants'
import PedidosRecomendadosTitle from './componentes/pedidosRecomendadosTitle'
import ArrowBackAndArrowForward from './componentes/arrowBackAndArrowForward'

//context
import useAppContextFirestore from '../contexts/banco'

//icons

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
                <div>
                    <PedidosRecomendadosTitle title={'Restaurantes Recomendados'} isVerTudo={false}/>
                </div>
                <div className='relative' >
                    <Restaurants />
                    <ArrowBackAndArrowForward dinamicId={"my-scrollable-element-restaurant"} />
                </div>
            </main>
        </>
    )
}

export default RestaurantsRecomendados