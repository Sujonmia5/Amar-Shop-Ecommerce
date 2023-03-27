import React from 'react';
import { useLocation } from 'react-router-dom';
import DynamicHero from '../../Components/DynamicHero/DynamicHero';

const Shop = () => {
    const id = useLocation()
    console.log(id.pathname.split('/')[2]);
    return (

        <div className='max-w-7xl mx-auto'>
            <DynamicHero />
            <h1>Shop components load {id.pathname.split('/')[2]}</h1>
        </div>
    );
};

export default Shop;