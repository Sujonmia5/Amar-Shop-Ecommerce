import React from 'react';
import Asgaard from '../../../asset/Asgaard sofa 1.png'

const Advertise = () => {
    return (
        <div className="hero bg-[#FFF9E5] h-[600px] overflow-hidden">
            <div className="hero-content flex-col lg:flex-row gap-0">
                <img src={Asgaard} className="max-w-xs md:max-w-md lg:max-w-xl xl:max-w-2xl rounded-lg -mt-5" alt='Asgaard Sofa' />
                <div className='text-center space-y-4 sm:ml-10'>
                    <p className="lg:pt-6 text-2xl">New Arrivals</p>
                    <h1 className="text-3xl md:text-5xl font-bold">Asgaard sofa</h1>
                    <button className="btn btn-outline rounded-none text-black text-xl">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Advertise;