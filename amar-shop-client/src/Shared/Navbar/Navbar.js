import React, { useContext } from 'react';
import { BsShop, BsJustify } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import ShoppingCart from '../../asset/Icon/shopping-cart.png'
import Heart from '../../asset/Icon/heart.png'
import { Link, useLocation } from 'react-router-dom'
import { State_Context } from '../../Context/StateContext';
import { StoreData } from '../../utilities/AddedProduct';



const Navbar = () => {
    const { CartFetch } = useContext(State_Context)
    const NavItems = ['home', 'shop', 'about', 'contact', 'blog']
    const data = StoreData();

    const url = useLocation()
    const path = url?.pathname?.includes('cart');
    return (
        <div className="navbar shadow-xl max-w-7xl mx-auto bg-transparent">
            <div className="flex-1">
                <a href='/' className='px-4 flex justify-center items-center gap-2 text-black'>
                    <BsShop className='text-4xl hidden sm:block text-primary' />
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
                                <Link className='text-base btn btn-link no-underline hover:no-underline text-black font-bold' to={item}>{item}
                                </Link>
                                <span className='Navbar_Underline'></span>
                            </li>)
                        }
                    </ul>
                </div>
                <div className=" dropdown-end gap-2">
                    <label className="btn btn-ghost hover:bg-transparent btn-circle">
                        <Link to='/my-account' className="indicator">
                            <FaRegUser className='w-8 h-7 hover:text-primary' />
                        </Link>
                    </label>
                    <label className="btn btn-ghost hover:bg-transparent btn-circle hidden md:inline-block">
                        <div className="indicator">
                            <img className='w-8 h-7 ' src={Heart} alt=''></img>
                        </div>
                    </label>
                    <label
                        onClick={() => {
                            if (path) {
                                window.location.reload(true);
                            }
                            CartFetch()
                        }}
                        htmlFor="cart_modal" className="btn btn-ghost hover:bg-transparent btn-circle">
                        <div className="indicator">
                            <div className="badge badge-primary absolute -right-5 -top-2">{Object.keys(data).length}</div>
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
                                <Link className='text-base uppercase btn-link no-underline hover:no-underline text-black font-bold' to=''>{item}
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