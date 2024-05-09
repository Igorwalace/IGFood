'use client'

//react
import { createContext, useEffect, useState } from "react"

//firebase
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/app/firebase/firebaseConfig";

//pages
import safeLocalStorage from "@/app/helps/local_storage";

export const AppContextFirebaseAuth = createContext<any>(undefined);

export function AppFirebaseAuth({ children }: {
    children: React.ReactNode;
}) {

    useEffect(() => {
        const userStorage = JSON.parse(safeLocalStorage()?.getItem("user-igfood") || "[]")
        if (userStorage) {
            setUser(userStorage)
        }
    }, []);

    const [user, setUser] = useState<any[]>([])
    const provider = new GoogleAuthProvider();

    useEffect(() => {
        safeLocalStorage()?.setItem("user-igfood", JSON.stringify(user));
    }, [user]);

    const signInGoogle = async () => {
        await signInWithPopup(auth, provider)
            .then((result) => {
                const credential: any = GoogleAuthProvider.credentialFromResult(result);
                const token: any = credential.accessToken;
                const user: any = result.user;
                setUser(user)

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(error)
            });
    }

    return (
        <AppContextFirebaseAuth.Provider value={{ user, setUser, signInGoogle }} >
            {children}
        </AppContextFirebaseAuth.Provider>
    )
}
