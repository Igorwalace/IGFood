'use client'
//context
import useAppContextFirestore from '@/app/contexts/banco'

//react'

//icons

//pages
import { oneToSix } from './oneToSix'
import AllRestaurants from './allRestaurants'

const Restaurants = () => {

    const { firestoreRestaurant } = useAppContextFirestore()

    return (
        <>
            <main>
                <div className='flex items-center gap-2 overflow-x-auto scrollbar-hide relative' id='my-scrollable-element-restaurant' >
                    {
                        firestoreRestaurant.length < 1 &&
                        oneToSix.slice(0, 6).map((product: any, index: any) => (
                            <div
                                className='flex flex-col items-center justify-center gap-2'
                                key={index}
                            >
                                {/* Replace with your product content and placeholder logic */}
                                <div className='md:w-[366px] md:h-[180px] w-[136px] h-[150px] rounded-xl bg-slate-100' id='imageLoading'></div>
                                <div className='md:w-[366px] md:h-[35px] w-[136px] h-[25px] rounded-xl bg-slate-100' id='imageLoading'></div>
                                <div className='md:w-[366px] md:h-[35px] w-[136px] h-[25px] rounded-xl bg-slate-100' id='imageLoading'></div>
                            </div>
                        ))
                    }
                    {firestoreRestaurant
                        .slice(0, 6)
                        .map((restaurants: any, index: any) => (
                            <div key={index} >
                                <AllRestaurants restaurants={restaurants} />
                            </div>
                        ))
                    }
                </div>

            </main>
        </>
    )
}

export default Restaurants