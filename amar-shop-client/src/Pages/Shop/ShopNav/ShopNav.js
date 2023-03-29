import React from 'react';
import { BsSliders } from "react-icons/bs";

const ShopNav = () => {
    return (
        <div className="navbar bg-secondary px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label className=" hover:text-primary">
                        <BsSliders className='inline-flex mr-1' />
                        Filter
                    </label>
                </div>
                <div className='ml-10 hidden md:flex'>
                    <span className='w-[4px] h-6 bg-gray-500 mr-2 '></span>
                    <p className='font-sans text-base inline-block'>Showing 1–16 of 32 results</p>
                </div>
            </div>
            <div className="navbar-end">
                <div className='flex items-center mx-10'>
                    <p className='font-sans mr-2 text-xl hidden lg:block'>Show</p>
                    <select className="max-w-[55px] hidden md:block bg-white focus:border-none selection:border-none h-[40px] text-black px-2 focus:outline-none font-sans">
                        <option>8</option>
                        <option>10</option>
                        <option selected>16</option>
                        <option>20</option>
                        <option>25</option>
                    </select>
                </div>
                <div className='flex items-center'>
                    <p className='font-sans mr-2 text-xl hidden lg:block'>Short By</p>
                    <select className="bg-white w-40 md:max-w-xs focus:border-none selection:border-none h-[40px] text-black px-2 focus:outline-none font-sans">
                        <option>Default sorting</option>
                        <option>Sort by popularity</option>
                        <option selected>Sort by latest</option>
                        <option>Sort by price: low to high</option>
                        <option>Sort by price: high to low</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ShopNav;