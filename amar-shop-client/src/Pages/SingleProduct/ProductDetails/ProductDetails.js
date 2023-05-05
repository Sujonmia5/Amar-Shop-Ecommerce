import React, { useState } from 'react';
import { GoStar } from 'react-icons/go';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import { IoIosStarHalf } from 'react-icons/io';
import { ProductAddToCart } from '../../../utilities/AddedProduct';

const ProductDetails = ({ data }) => {
    const [quantity, setQuantity] = useState(1)
    const { product_img, product_name, description, colors_available, _id, category, Type, Size, price } = data;
    return (
        <div className="hero mt-0 px-2 sm:px-10 md:px-24">
            <div className="hero-content flex-col lg:flex-row p-0 gap-x-10 items-start">
                <div className='my-5 lg:my-0 lg:w-1/2 h-[450px] grid grid-flow-col grid-cols-5 gap-8'>
                    <div className='col-span-1 hidden sm:flex flex-col  w-full h-full py-auto space-y-10 mt-10'>
                        <img className='w-20 h-20' src={product_img} alt='' />
                        <img className='w-20 h-20' src={product_img} alt='' />
                        <img className='w-20 h-20' src={product_img} alt='' />
                    </div>
                    <figure className='col-span-5 sm:col-span-4 bg-primary'>
                        <img src={product_img} className=" w-[550px] h-[450px] rounded-lg shadow-2xl" alt='' />
                    </figure>
                </div>
                <div className='lg:w-1/2 space-y-2'>
                    <h1 className="text-3xl font-bold">{product_name}</h1>
                    <p className='text-2xl text-[#9F9F9F] font-medium'>RS. {price}</p>
                    <div className='flex items-center gap-x-3'>
                        <div className='flex gap-x-1'>
                            <GoStar className='w-5 h-5 text-yellow-500' />
                            <GoStar className='w-5 h-5 text-yellow-500' />
                            <GoStar className='w-5 h-5 text-yellow-500' />
                            <GoStar className='w-5 h-5 text-yellow-500' />
                            <IoIosStarHalf className='w-5 h-5 text-yellow-500' />
                        </div>
                        <div className='w-[2px] h-8 bg-slate-600'></div>
                        <p>5 Customer Review</p>
                    </div>
                    <p className=''>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                    <p className='text-[#9F9F9F] items-center'>Size</p>
                    <div className='flex gap-x-3'>
                        <p className='w-8 h-8 align-middle bg-secondary flex items-center justify-center text-sm rounded'>{Size[2]}</p>
                        <p className='w-8 h-8 align-middle bg-primary flex items-center justify-center text-sm rounded'>{Size[0]}</p>
                        <p className='w-8 h-8 align-middle bg-secondary flex items-center justify-center text-sm rounded'>{Size[1]}</p>
                    </div>
                    <div className='flex gap-x-4 pt-5'>
                        <div className='border-2 w-28 flex items-center justify-around rounded-md'>
                            {
                                quantity === 1 ? <HiMinusSm className='w-5 h-5  text-gray-600  cursor-not-allowed' /> : <HiMinusSm onClick={() => setQuantity(quantity - 1)} className='w-5 h-5 hover:text-primary cursor-pointer' />
                            }
                            <p className='text-black font-semibold'>{quantity}</p>
                            <HiPlusSm onClick={() => setQuantity((pre) => pre + 1)} className='w-5 h-5 hover:text-primary cursor-pointer' />
                        </div>
                        <button onClick={() => ProductAddToCart(_id, quantity)} className="btn btn-outline text-black hover:bg-primary h-8 w-36">Add To Cart</button>
                    </div>
                    <div className='w-full'>
                        <div className='h-[2px] w-full bg-gray-300 mt-10 mb-8'></div>
                        <div className='grid grid-cols-3 gap-y-2 text-[#9F9F9F]'>
                            <p>Category</p>
                            <span className='col-span-2'>: {category}</span>
                            <p>Tags </p>
                            <span className='col-span-2'>: Sofa, Chair, Home, Shop</span>
                            <p>Share </p>
                            <div className='col-span-2' >: </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;