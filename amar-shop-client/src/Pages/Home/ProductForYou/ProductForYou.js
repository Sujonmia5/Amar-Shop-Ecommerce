import React from 'react';
import Card from '../../../Components/Card/Card';
import ProductImg from '../../../asset/Mask group 3.png'
import { Link } from 'react-router-dom';
import Title from '../../../Components/Title/Title';

const title = 'Top Picks For You'
const title2 = 'Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.'

const ProductForYou = () => {
    const style = 'text-4xl font-medium leading-[54px]'
    return (
        <div className='pt-14'>
            <Title
                title={title}
                title2={title2}
                style={style}
            />
            <div className='mt-16 mb-36'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    <Card
                        ProductImg={ProductImg}
                        title={'Outdoor bar table and stool'}
                        price={99}
                    />
                    <Card
                        ProductImg={ProductImg}
                        title={'Outdoor bar table and stool'}
                        price={99}
                    />
                    <Card
                        ProductImg={ProductImg}
                        title={'Outdoor bar table and stool'}
                        price={99}
                    />
                    <Card
                        ProductImg={ProductImg}
                        title={'Outdoor bar table and stool'}
                        price={99}
                    />
                </div>
                <div className='w-full text-center'>
                    <Link to='/shop' className='hover:underline hover:underline-offset-4 hover:text-red-600 text-2xl'>
                        View more
                    </Link >
                </div>
            </div>
        </div>
    );
};

export default ProductForYou;