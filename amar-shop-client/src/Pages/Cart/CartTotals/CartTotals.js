import React from 'react';
import { Link } from 'react-router-dom';

const CartTotals = ({ cart }) => {
    let TotalPrice = 0;

    for (const product of cart) {
        TotalPrice = TotalPrice + product.quantity * product.price
    }
    return (
        <div className='col-span-1'>
            <div className="card lg:w-96 h-80 bg-primary bg-opacity-50 rounded-none p-4 mx-auto">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">Cart Totals</h2>
                    <div className='w-full text-start space-y-8 mt-5'>
                        <p className='text-base font-bold'>Subtotal: <span className='text-gray-500 ml-5'>Rs. {TotalPrice}</span></p>
                        <p className='text-base font-bold'>Total: <span className='text-gray-500 ml-5'>Rs. {TotalPrice}</span></p>
                    </div>
                    <div className="card-actions mt-5">
                        <Link to='/checkout' state={cart} className="btn btn-outline w-48 hover:bg-primary text-black hover:text-gray-800 animate-none">Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartTotals;