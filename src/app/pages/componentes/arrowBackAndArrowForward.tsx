'use client'
import useAppContextFirestore from '@/app/contexts/banco'
//react
import React from 'react'

//icons
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface idDiv{
    dinamicId: any
}

const ArrowBackAndArrowForward = ({dinamicId}: idDiv) => {

    const { firestoreRestaurant } = useAppContextFirestore()

    const handleScroll = () => {
        const element: any = document.getElementById(`${dinamicId}`);
        const targetScrollPosition = element.scrollLeft + 800;

        const scrollAmount = 40;
        let currentScrollPosition = element.scrollLeft;
        const animateScroll = () => {
            if (currentScrollPosition < targetScrollPosition) {
                currentScrollPosition += scrollAmount;
                element.scrollLeft = currentScrollPosition;


                requestAnimationFrame(animateScroll);
            } else {

            }
        };
        animateScroll();
    };

    const handleScrollRight = () => {
        const element: any = document.getElementById(`${dinamicId}`);
        const targetScrollPosition = element.scrollLeft - 800;

        const scrollAmount = 40;
        let currentScrollPosition = element.scrollLeft;
        const animateScroll = () => {
            if (currentScrollPosition > targetScrollPosition) {
                currentScrollPosition -= scrollAmount;
                element.scrollLeft = currentScrollPosition;

                requestAnimationFrame(animateScroll);
            } else {
                element.scrollLeft = targetScrollPosition;
            }
        };
        animateScroll();
    };

    return (
        <>
            {
                firestoreRestaurant.length != 0 &&
                <div className='hidden md:block' >
                    <button className='absolute top-0 bottom-7 left-0 flex justify-center items-center p-2' onClick={handleScrollRight} >
                        <h1 className='relative text-white bg-[rgb(0,0,0,0.4)] p-1 rounded-xl' ><IoIosArrowBack size={30} /></h1>
                    </button>
                    <button className='absolute top-0 bottom-7 right-0 flex justify-center items-center p-2' onClick={handleScroll} >
                        <h1 className='relative text-white bg-[rgb(0,0,0,0.4)] p-1 rounded-xl' ><IoIosArrowForward size={30} /></h1>
                    </button>
                </div>
            }
        </>
    )
}

export default ArrowBackAndArrowForward