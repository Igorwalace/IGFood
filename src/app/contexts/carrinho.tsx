'use client'
import { createContext, useContext, useEffect, useState } from "react"
import safeLocalStorage from "../helps/local_storage";

export const AppContext = createContext<any>(undefined);

export function AppCarrinho({ children }: {
    children: React.ReactNode;
}) {

    const [productCarrinho, setProductCarrinho] = useState<any[]>(JSON.parse(safeLocalStorage()?.getItem("cart-products") || "[]"),)
    const [quantyCurrent, setQuantyCurrent] = useState(0)

    useEffect(() => {
        safeLocalStorage()?.setItem("cart-products", JSON.stringify(productCarrinho));
    }, [productCarrinho]);

    return (
        <AppContext.Provider value={{ setProductCarrinho, productCarrinho, setQuantyCurrent, quantyCurrent }} >
            {children}
        </AppContext.Provider>
    )
}

export default function useAppCarrinho() {
    return useContext(AppContext)
}