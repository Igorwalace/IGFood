'use client'

//context
import useAppContextFirestore from '@/app/contexts/banco'

//pages
import AllProducts from './allProducts'
import { oneToSix } from './oneToSix'

const Products = () => {

    const { firestoreProducts, firestoreRestaurant } = useAppContextFirestore()

    return (
        <>
            <main>
                <div className='flex items-center gap-2 overflow-x-auto scrollbar-hide' id='my-scrollable-element-product' >
                    {
                        firestoreProducts.length < 1 &&
                        oneToSix
                        .slice(0, 6)
                        .map((product: any, index: any) => (
                            <div
                                className='flex flex-col items-center justify-center gap-2'
                                key={index}
                            >
                                <div className='md:w-[180px] md:h-[180px] w-[150px] h-[150px] rounded-xl bg-slate-100' id='imageLoading'></div>
                                <div className='md:w-[180px] md:h-[35px] w-[150px] h-[25px] rounded-xl bg-slate-100' id='imageLoading'></div>
                                <div className='md:w-[180px] md:h-[35px] w-[150px] h-[25px] rounded-xl bg-slate-100' id='imageLoading'></div>
                            </div>
                        ))
                    }
                    {firestoreProducts
                        .filter((product: any) => product.discount != 0)
                        .sort((a:any, b:any) => Math.random() - 0.5)
                        .slice(0,7)
                        .map((product: any, index: any) => (
                            <div key={index} >
                                <AllProducts product={product} index={index} firestoreRestaurant={firestoreRestaurant} />
                            </div>
                        ))}
                </div>
            </main>
        </>
    )
}

export default Products

