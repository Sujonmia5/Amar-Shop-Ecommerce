import React from 'react';
import styles from './Card.module.css'
import { FaCartPlus } from 'react-icons/fa'
import { FiHeart, FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { AddedProduct } from '../../utilities/AddedProduct';

const Card = ({ product }) => {
    const { product_img, product_name, price, category, description, size, type, colors_available, _id } = product;

    const button = `${styles.button}`

    var newStr = product_name.replace(/\s/g, "-");

    return (
        <div className={`card w-72 h-96 mx-auto ${styles.cart_show}`}>
            <figure className='relative overflow-hidden'>
                <img src={product_img} alt='' />
                <div className={`absolute z-10 flex justify-around items-center -bottom-14 transition-all w-11/12 ${styles.cart}`}>
                    <button
                        onClick={() => AddedProduct(product._id)}
                        className={button}>
                        <FaCartPlus className='w-4 h-4 text-white' />
                    </button>
                    <button className={button}>
                        <FiHeart className='w-4 h-4 text-white' />
                    </button>
                    <button className={button}>
                        <FiSearch className='w-4 h-4 text-white' />
                    </button>
                </div>
            </figure>
            <div className="card-body pt-0 pb-4">
                <Link to={`/product/${_id}`} className='font-sans text-lg hover:text-primary'>{product_name}</Link>
                <h2 className="card-title text-2xl font-semibold ">Rs. {price}</h2>
            </div>
        </div>
    );
};

export default Card;