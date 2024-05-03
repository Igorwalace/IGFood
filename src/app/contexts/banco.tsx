'use client'
import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react"
import { db } from "../firebase/firebaseConfig";

export const AppContext = createContext<any>(undefined);

export function AppFirestore({ children }: {
    children: React.ReactNode;
}) {
    const [firestoreProducts, setFirestoreProducts] = useState<any[]>([])
    const [firestoreRestaurant, setFirestoreRestaurant] = useState<any[]>([])

    useEffect(() => {
        const firestoreProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, `allproducts`));
                const restaurantData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setFirestoreProducts(restaurantData)
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        }
        const firestoreRestaurant = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'restaurants'));
                const restaurantData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setFirestoreRestaurant(restaurantData)
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        }
        firestoreProducts()
        firestoreRestaurant()
    }, [])

    return (
        <AppContext.Provider value={{ firestoreProducts, firestoreRestaurant }} >
            {children}
        </AppContext.Provider>
    )
}

export default function useAppContextFirestore() {
    return useContext(AppContext)
}