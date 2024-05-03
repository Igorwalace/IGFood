import React, {  } from 'react'
import Header from './header';
import BannerOfertas from './bannerOfertas'
import Categorias from './categorias';
import SearchHome from './searchHome';
import BannerMain from './bannerMain';
import BannerLanchesMain from './componentes/bannerLachensMain';
import PedidosRecomendados from './pedidosRemendados';

const Home = () => {

    return (
        <>
            <div className='md:px-[128px] p-5 md:py-5 py-3' >
                <Header />
            </div>
            <div className='py-5 px-5 md:hidden' >
                <SearchHome />
            </div>
            <div className='hidden md:block'>
                <BannerOfertas />
            </div>
            <div className='md:px-[128px] p-2 md:py-2 bg-[#fdfdfd]' >
                <Categorias />
            </div>
            <div className="md:px-[128px] p-5 md:py-5 py-3">
                <BannerMain />
            </div>
            <div className='md:px-[128px] p-5 md:py-5 py-3' >
                <PedidosRecomendados />
            </div>
            <div className='md:hidden md:px-[128px] p-5 md:py-5 py-3' >
                <BannerLanchesMain />
            </div>
        </>
    )
}

export default Home