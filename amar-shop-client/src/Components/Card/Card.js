import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ ProductImg, title, price }) => {
    return (
        <Link to='/shop' className="card w-72 h-96 hover:shadow-xl mx-auto transition-all hover:border">
            <figure><img src={ProductImg} alt="Shoes" /></figure>
            <div className="card-body">
                <h1 className='font-sans text-lg'>{title}</h1>
                <h2 className="card-title text-2xl font-bold font-sans">Rs. {price}</h2>
            </div>
        </Link>
    );
};

export default Card;