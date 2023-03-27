import React from 'react';
import Shufa from '../../../asset/Shufa.png'

const HeroSection = () => {
    return (
        <div className="hero bg-[#FBEBB5] font-serif">
            <div className="hero-content flex-col lg:flex-row-reverse mt-20">
                <img src={Shufa} className="md:max-w-md rounded-lg" alt='' />
                <div>
                    <h1 className="text-5xl font-bold leading-relaxed">Rocket single <br />seater</h1>
                    <button className="btn btn-ghost text-xl hover:underline">Shop now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;