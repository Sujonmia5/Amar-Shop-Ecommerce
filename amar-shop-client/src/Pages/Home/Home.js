import React from 'react';
import Advertise from './Advertise/Advertise';
import HeroSection from './HeroSection/HeroSection';
import HomeBlog from './HomeBlog/HomeBlog';
import HomeTable from './HomeTable/HomeTable';
import ProductForYou from './ProductForYou/ProductForYou';
import Social from './Social/Social';
const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <HeroSection />
            <HomeTable />
            <ProductForYou />
            <Advertise />
            <HomeBlog />
            <Social />
        </div>
    );
};

export default Home;