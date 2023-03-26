import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import HomeTable from './HomeTable/HomeTable';
import ProductForYou from './ProductForYou/ProductForYou';
const Home = () => {
    return (
        <div className='container mx-auto'>
            <HeroSection />
            <HomeTable />
            <ProductForYou />
        </div>
    );
};

export default Home;