'use client'
import { createContext, useContext, useEffect, useState } from "react"

export const AppContext = createContext<any>(undefined);

export function AppCarrinho({ children }: {
    children: React.ReactNode;
}) {
    const [productCarrinho, setProductCarrinho] = useState<any[]>([])
    const [subTotal, setSubTotal] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [total, setTotal] = useState(0)
    const [quantyCurrent, setQuantyCurrent] = useState(0)

    return (
        <AppContext.Provider value={{ setProductCarrinho, productCarrinho, setTotal, total, setDiscount, discount, subTotal, setSubTotal, setQuantyCurrent, quantyCurrent }} >
            {children}
        </AppContext.Provider>
    )
}

export default function useAppCarrinho() {
    return useContext(AppContext)
}