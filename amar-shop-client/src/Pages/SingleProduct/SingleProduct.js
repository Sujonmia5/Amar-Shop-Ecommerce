import React from 'react';
import { GoTriangleRight, GoStar } from 'react-icons/go'
import { IoIosStarHalf } from 'react-icons/io'
import { HiMinusSm, HiPlusSm } from 'react-icons/hi'
import { Link, useLoaderData } from 'react-router-dom';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductDetails from './ProductDetails/ProductDetails';
import Title from '../../Components/Title/Title';
import Card from '../../Components/Card/Card';

const SingleProduct = () => {
    const data = useLoaderData()

    const style = 'text-3xl font-bold leading-[54px]'
    return (
        <div className=' mt-3 mb-10'>
            <div className="tabs items-center h-20 px-0 sm:px-10 lg:px-20">
                <Link to='/' className="tab text-[#9F9F9F] text-base hover:text-primary p-0 normal-case font-sans font-semibold">
                    Home</Link>
                <GoTriangleRight className=' w-4 h-5 font-bold' />
                <Link to='/shop' className="tab text-[#9F9F9F] text-base p-0 normal-case font-sans font-semibold cursor-default">Shop</Link>
                <GoTriangleRight className=' w-4 h-5 font-bold ' />
                <div className='sm:ml-3 flex items-center'>
                    <span className='w-[1.5px] h-8 bg-gray-500 mr-2 '></span>
                    <p className=' text-lg text-black font-medium inline-block font-sans'>{data.product_name.slice(0, 15)}</p>
                </div>
            </div>

            {/* Product Details Section */}
            <ProductDetails data={data} />

            {/* Product Description */}
            <ProductDescription data={data} />
            <div className='pt-14'>
                <Title title={'Related Products'} style={style} />

                <div className='my-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    <Card product={data} />
                    <Card product={data} />
                    <Card product={data} />
                    <Card product={data} />
                </div>

                <div className='w-full text-center'>
                    <Link to='/shop' className='hover:underline hover:underline-offset-4 hover:text-red-600 text-xl'>
                        View more
                    </Link >
                </div>
            </div>

        </div>
    );
};

export default SingleProduct;