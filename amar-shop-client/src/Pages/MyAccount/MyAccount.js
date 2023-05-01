import React from 'react';
import DynamicHero from '../../Components/DynamicHero/DynamicHero';
import { useLocation } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import HeroBottom from '../../Components/HeroBottom/HeroBottom';

const MyAccount = () => {

    const URL = useLocation()
    const path = URL.pathname.includes('my-account')
    let Pathname = {}
    if (path) {
        Pathname = {
            path1: 'My Account',
            path2: 'My account'
        }
    }

    return (
        <div>
            <DynamicHero Pathname={Pathname} />
            <div className='max-h-screen grid grid-cols-2 px-24 gap-5'>
                <Login />
                <Register />
            </div>
            <HeroBottom />
        </div>
    );
};

export default MyAccount;