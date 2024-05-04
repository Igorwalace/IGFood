'use client'
import { createContext, useContext, useEffect, useState } from "react"

export const AppContext = createContext<any>(undefined);

export function AppCarrinho({ children }: {
    children: React.ReactNode;
}) {
    const [productCarrinho, setProductCarrinho] = useState<any[]>([])

    return (
        <AppContext.Provider value={{ setProductCarrinho, productCarrinho }} >
            {children}
        </AppContext.Provider>
    )
}

export default function useAppCarrinho() {
    return useContext(AppContext)
}