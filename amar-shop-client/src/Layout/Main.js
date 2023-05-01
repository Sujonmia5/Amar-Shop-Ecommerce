import React from 'react';
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import CartModal from '../Components/CartModal/CartModal';

const Main = () => {
    const url = useLocation()
    const path = url?.pathname?.includes('cart');
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <Outlet />
            {
                path ? '' : <CartModal />
            }
            <Footer />
        </div >
    );
};

export default Main;