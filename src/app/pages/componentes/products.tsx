'use client'

import useAppContextFirestore from '@/app/contexts/banco'
import AllProducts from './allProducts'

const Products = () => {

    const { firestoreProducts, firestoreRestaurant } = useAppContextFirestore()

    return (
        <>
            <main>
                <div className='flex items-center gap-2 overflow-x-auto scrollbar-hide'>
                    {firestoreProducts
                        .filter((product: any) => product.category != 'bebida')
                        .slice(0, 6)
                        .map((product: any, index:any) => (
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

