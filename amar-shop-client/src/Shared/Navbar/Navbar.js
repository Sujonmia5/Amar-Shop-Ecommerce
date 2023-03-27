import React from 'react';
import { BsShop, BsJustify } from "react-icons/bs";
import ShoppingCart from '../../asset/Icon/shopping-cart.png'
import Heart from '../../asset/Icon/heart.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const NavItems = ['home', 'shop', 'about', 'contact', 'blog']
    return (
        <div className="navbar shadow-xl max-w-7xl mx-auto bg-transparent">
            <div className="flex-1">
                <a href='/' className='px-4 flex justify-center items-center gap-2 text-black'>
                    <BsShop className='text-4xl hidden sm:block text-[#f8be00]' />
                    <h2 className='text-xl sm:text-2xl font-bold'>Amar Shop</h2>
                </a>
            </div>
            <div className="flex-none  md:px-5">
                <div className='md:mr-5 hidden lg:block'>
                    <ul className='flex items-center'>
                        {
                            NavItems.map(item => <li
                                key={item}
                                className='relative nav-li'
                            >
                                <Link className='text-xl btn btn-link no-underline hover:no-underline text-black font-normal' to={item}>{item}
                                </Link>
                                <span className='Navbar_Underline'></span>
                            </li>)
                        }
                    </ul>
                </div>
                <div className=" dropdown-end gap-2">
                    <label className="btn btn-ghost hover:bg-transparent btn-circle">
                        <div className="indicator">
                            <img className='w-8 h-7' src={Heart} alt=''></img>
                        </div>
                    </label>
                    <label className="btn btn-ghost hover:bg-transparent btn-circle">
                        <div className="indicator">
                            <img className='w-8 h-7' src={ShoppingCart} alt=''></img>
                        </div>
                    </label>
                </div>
                <div className="dropdown block lg:hidden dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost px-0 ml-5">
                        <div className="w-10">
                            <BsJustify className='w-8 h-8 m-0' />
                        </div>
                    </label>
                    <ul tabIndex={0} className=" menu-compact dropdown-content mt-3 p-4 shadow-2xl rounded-box w-52 z-50">
                        {
                            NavItems.map(item => <li
                                key={item}
                                className='relative mt-4'
                            >
                                <Link className='text-xl hover:no-underline text-black font-normal' to=''>{item}
                                </Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;