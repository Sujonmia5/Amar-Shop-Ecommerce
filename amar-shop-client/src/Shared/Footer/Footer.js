import React from 'react';
import { BsShop } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer py-10 px-10 sm:px-24 text-black font-sans">
            <div>
                <div className='flex items-center gap-2'>
                    <BsShop className='h-20 w-20 text-[#f8be00]' />
                    <h2 className='text-xl sm:text-2xl font-bold'>Amar Shop</h2>
                </div>
                <p>400 University Drive Suite 200<br /> Coral Gables, FL 33134 USA</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link to='/' className="link link-hover font-medium">Home</Link>
                <Link to='/' className="link link-hover font-medium">Shop</Link>
                <Link to='/' className="link link-hover font-medium">Blog</Link>
                <Link to='/' className="link link-hover font-medium">About</Link>
                <Link to='/' className="link link-hover font-medium">Contact Us</Link>

            </div>
            <div className='space-y-5'>
                <span className="footer-title">Help</span>
                <Link to='' className="link link-hover">Payment Options</Link>
                <Link to='' className="link link-hover">Returns</Link>
                <Link to='' className="link link-hover">Privacy Policies</Link>
            </div>
            <div>
                <span className="footer-title">News Letter</span>
                <div className='flex items-center gap-3'>
                    <input type="text" placeholder="Enter Your Email Address" className="input input-bordered bg-transparent w-full max-w-xs border-t-inherit border-l-inherit border-r-inherit border-b-2 border-gray-400 h-8 rounded-none" />
                    <button className='btn btn-ghost border shadow-xl'>Subscribe</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;