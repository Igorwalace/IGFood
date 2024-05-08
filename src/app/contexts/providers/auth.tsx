'use client'
import { createContext, useState } from "react"

//firebase
import { signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { auth } from "@/app/firebase/firebaseConfig";

export const AppContextFirebaseAuth = createContext<any>(undefined);

export function AppFirebaseAuth({ children }: {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<any>([])

    const provider = new GoogleAuthProvider();

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
