'use client'
//react
import { createContext, useContext, useEffect, useState } from "react"

//pages
import safeLocalStorage from "../helps/local_storage";

export const AppContextRestaurantsFavorite = createContext<any>(undefined);

export function AppRestaurantsFavorite({ children }: {
    children: React.ReactNode;
}) {

    const [restaurantsFavorite, setRestaurantsFavorite] = useState<any[]>(JSON.parse(safeLocalStorage()?.getItem("restaurantsFavorite") || "[]"),)

    useEffect(() => {
        safeLocalStorage()?.setItem("restaurantsFavorite", JSON.stringify(restaurantsFavorite));
    }, [restaurantsFavorite]);

    return (
        <AppContextRestaurantsFavorite.Provider value={{ restaurantsFavorite, setRestaurantsFavorite }} >
            {children}
        </AppContextRestaurantsFavorite.Provider>
    )
}

export default function useAppRestaurantsFavorite() {
    return useContext(AppContextRestaurantsFavorite)
}