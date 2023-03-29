import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    const { product_img, product_name, price, category, description, size, type, colors_available } = product;
    return (
        <Link to='/shop' className="card w-72 h-96 hover:shadow-xl mx-auto transition-all hover:border">
            <figure>
                <img src={product_img} alt="Shoes" />
            </figure>
            <div className="card-body pt-0 pb-4">
                <h1 className='font-sans text-lg'>{product_name}</h1>
                <h2 className="card-title text-2xl font-semibold font-sans">Rs. {price}</h2>
            </div>
        </Link>
    );
};

export default Card;