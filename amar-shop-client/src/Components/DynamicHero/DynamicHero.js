import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/Icon/Meubel House_Logos-05.png'
import { TfiAngleRight, TfiHome } from "react-icons/tfi";

const DynamicHero = ({ Pathname }) => {

    return (
        <div className='h-80 bg-hero-pattern object-contain'>
            <div className='flex justify-center items-center h-full flex-col'>
                <figure>
                    <img className='h-20 w-20' src={logo} alt=''></img>
                </figure>
                <h2 className='text-4xl font-medium -mt-4'>{Pathname?.path1}</h2>
                <div className="tabs items-center">
                    <TfiHome className='mr-1 w-3 h-3'></TfiHome>
                    <Link to='/' className="tab text-black hover:text-primary p-0 normal-case font-sans font-semibold">
                        Home</Link>
                    <TfiAngleRight className=' w-4 h-4' />
                    <Link className="tab text-black p-0 normal-case font-sans font-semibold cursor-default">{Pathname?.path2}</Link>
                </div>
            </div>
        </div>
    );
};

export default DynamicHero;