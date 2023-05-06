import React, { useContext } from 'react';
import CartProduct from '../CartProduct/CartProduct';
import { BsBagX } from 'react-icons/bs'
import { State_Context } from '../../Context/StateContext';
import { Link } from 'react-router-dom';

const CartModal = () => {
    const { cart, isLoading } = useContext(State_Context)

    let content;
    if (isLoading) {
        content = <div className='text-lg '>Loading.....</div>
    }
    else if (cart.length === 0) {
        content = <div>No Product Added</div>
    }
    else {
        content = cart.map(product => <CartProduct
            product={product}
        />)
    }
    return (
        <div className=''>
            <input type="checkbox" id="cart_modal" className="modal-toggle" />
            <div className={`modal max-w-7xl mx-auto overflow-x-hidden`}>
                <div className="absolute h-[550px] w-96 shadow-md right-0 top-0 bg-white p-8">
                    <div className='flex justify-between items-center'>
                        <h3 className="text-2xl font-semibold">Shopping Cart</h3>
                        <label htmlFor="cart_modal" className="text-black border-gray-300 hover:text-primary"><BsBagX className='w-5 h-5' /></label>
                    </div>
                    <div className='h-[1px] w-3/4 bg-slate-400 mt-6 mb-2'></div>
                    <div style={{
                        scrollbarColor: '-moz-initial'
                    }} className={`overflow-hidden h-80 scroll-smooth ${cart.length > 2 && 'overflow-y-scroll'}`}>
                        {
                            content
                        }
                    </div>
                    <div className='absolute bottom-0 mb-4 w-full'>
                        <div className='font-bold flex justify-between items-center'>
                            <p>Subtotal</p>
                            <p className='text-primary mr-28'>RS. 55000</p>
                        </div>
                        <div className='h-[2px] w-full bg-slate-400 mt-2 mb-2 -m-8'></div>
                        <div className='flex justify-between items-center mt-4'>
                            <a href='/cart' className='btn btn-sm btn-outline text-black hover:bg-primary rounded-full' >View Cart</a>

                            <a href='/checkout' state={cart} className='btn btn-sm btn-outline text-black hover:bg-primary rounded-full mr-28'>Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CartModal;