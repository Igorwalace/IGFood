'use client'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';
import Image from 'next/image';
import Header from './header';
import BannerOfertas from './bannerOfertas'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Categorias from './categorias';

const Home = () => {
    const [banco, setBanco] = useState([{}])
    const router = useRouter()

    const call = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "products"));
            const restaurantData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setBanco(restaurantData)
            console.log(banco)
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    }

    return (
        <>
            <div className='md:px-[128px] p-5 md:py-5 py-3' >
                <Header />
            </div>
            <div className='hidden md:block' >
                <BannerOfertas />
            </div>
            <div className='md:px-[128px] p-2 md:py-2 bg-[#fdfdfd]' >
                <Categorias />
            </div>
        </>
    )
}

export default Home