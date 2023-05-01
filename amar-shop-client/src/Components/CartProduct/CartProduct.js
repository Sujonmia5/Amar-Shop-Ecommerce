import React, { useContext } from 'react';
import { HiXMark } from 'react-icons/hi2'
import { State_Context } from '../../Context/StateContext';

const CartProduct = ({ product }) => {

    const { RemoveProductToCart } = useContext(State_Context);
    const { product_img, price, product_name, quantity, _id } = product;

    return (
        <div className="card w-auto bg-base-100 shadow-xl my-2">
            <div className="card-body justify-between flex-row items-center p-4">
                <div className='bg-[#edc056] rounded-md w-20 h-20'>
                    <figure>
                        <img className='w-full h-20' src={product_img} alt='' />
                    </figure>
                </div>
                <div>
                    <h2 className='card-title text-lg '>{product_name.slice(0, 10)}</h2>
                    <p><span className='mr-2'>{quantity}</span> x <span className='text-primary mx-2'>RS. {quantity * price}</span></p>
                </div>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => RemoveProductToCart(_id)}
                        className="btn btn-xs btn-circle font-bold text-black hover:bg-primary border-none hover:text-white">
                        <HiXMark className='w-full h-full ' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;