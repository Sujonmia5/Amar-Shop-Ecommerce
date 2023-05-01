import React, { useContext, useEffect, useState } from 'react';
import DynamicHero from '../../Components/DynamicHero/DynamicHero';
import { Link, useLocation } from 'react-router-dom';
import HeroBottom from '../../Components/HeroBottom/HeroBottom';
import { State_Context } from '../../Context/StateContext';
import { AiFillDelete } from "react-icons/ai"
import CartTotals from './CartTotals/CartTotals';

const Cart = () => {
    const { cart, isLoading, CartFetch, RemoveProductToCart } = useContext(State_Context);

    const URL = useLocation()
    const cartPath = URL.pathname.includes('cart');
    let pathname = {}
    if (cartPath) {
        pathname = {
            path1: 'Cart',
            path2: 'cart'
        }
    }

    let content;
    if (isLoading) {
        content = <div className='text-lg '>Loading.....</div>
    }

    else if (cart.length === 0) {
        content = <div className='max-w-4xl h-96 align-middle flex items-center justify-center'>
            <h3>No Product Added</h3>
            <Link to='/shop' className='btn btn-link'>Go To Shop</Link>
        </div>
    }

    else {
        content = cart.map(product => {
            return <React.Fragment>
                <tbody className='text-accent text-base'>
                    {/* Table row */}
                    <tr>
                        <td>
                            <div className="avatar">
                                <div className="mask mask-square w-24 h-24">
                                    <img src={product?.product_img} alt='' />
                                </div>
                            </div>
                        </td>
                        <td>
                            {product?.product_name.slice(0, 20)}
                        </td>
                        <td>Rs. {product?.price}</td>
                        <td >
                            <div className='flex justify-center items-center border w-8 h-8 border-accent rounded'>
                                <input className='w-8 h-8 text-black  border-none focus-visible:border-none focus:border-none focus-within:border-none active:border-none bg-transparent text-center' type='text' defaultValue={product.quantity} />
                            </div>
                        </td>
                        <td className='text-black'>Rs. {product?.price * product?.quantity}</td>
                        <td className='text-black'>

                            <AiFillDelete onClick={() => RemoveProductToCart(product._id)} className='text-base w-7 h-7 text-primary cursor-pointer' />
                        </td>
                    </tr>
                </tbody>
            </React.Fragment>
        })
    }


    useEffect(() => {
        CartFetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <DynamicHero Pathname={pathname} />
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-7 mt-[72px]'>
                <div className='col-span-2'>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            {/* head */}
                            <thead className='rounded-none' >
                                <tr className=''>
                                    <th className=' bg-primary rounded-none'>
                                    </th>
                                    <th className=' bg-primary text-base'>Product Name</th>
                                    <th className=' bg-primary text-base'>Price</th>
                                    <th className=' bg-primary text-base'>Quantity</th>
                                    <th className=' bg-primary text-base rounded-none'>Subtotal</th>
                                    <th className=' bg-primary rounded-none'></th>
                                </tr>
                            </thead>
                            {content}
                        </table>
                    </div>
                </div>
                <CartTotals
                    cart={cart}
                />
            </div>
            <HeroBottom />
        </div>
    );
};

export default Cart;