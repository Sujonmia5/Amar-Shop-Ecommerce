import React, { useContext } from 'react';
import { BsSliders } from "react-icons/bs";
import { State_Context } from '../../../Context/StateContext';

const ShopNav = () => {
    const { count, setSize } = useContext(State_Context)

    return (
        <div className="navbar bg-secondary px-4 mb-10 shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <label className=" hover:text-primary">
                        <BsSliders className='inline-flex mr-1' />
                        Filter
                    </label>
                </div>
                <div className='ml-10 hidden md:flex'>
                    <span className='w-[2px] h-6 bg-gray-500 mr-2 '></span>
                    <p className=' text-base inline-block'>Showing 1–8 of {count} Results</p>
                </div>
            </div>
            <div className="navbar-end">
                <div className='flex items-center mx-10'>
                    <p className=' mr-2 text-lg hidden lg:block'>Show</p>
                    <select onChange={(e) => setSize(e.target.value)} className="max-w-[55px] hidden md:block bg-white focus:border-none selection:border-none h-[40px] text-black px-2 focus:outline-none cursor-pointer">
                        <option defaultValue={''}>8</option>
                        <option defaultValue={''}>10</option>
                        <option defaultValue={''} selected>16</option>
                        <option defaultValue={''}>20</option>
                        <option defaultValue={''}>25</option>
                    </select>
                </div>
                <div className='flex items-center'>
                    <p className='mr-2 text-lg hidden lg:block'>Short By</p>
                    <select defaultValue={''} className="bg-white w-40 md:max-w-xs focus:border-none selection:border-none h-[40px] text-black px-2 focus:outline-none cursor-pointer">
                        <option defaultValue={''}>Default sorting</option>
                        <option defaultValue={''}>Sort by popularity</option>
                        <option defaultValue={''} selected>Sort by latest</option>
                        <option defaultValue={''}>Sort by price: low to high</option>
                        <option defaultValue={''}>Sort by price: high to low</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ShopNav;